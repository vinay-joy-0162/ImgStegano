# Import flask and datetime module for showing date and time
from flask import Flask, request, json
import datetime
from PIL import Image
# from flask.ext.cors import CORS, cross_origin
from flask_cors import CORS
import logging
from werkzeug.utils import secure_filename

# Initializing flask app
app = Flask(__name__)
x = datetime.datetime.now()
CORS(app)

# @app.route('/foo', methods=['POST','OPTIONS'])

def generate_Data(data):
    new_data = []
    for i in data:
        new_data.append(format(ord(i), '08b'))
    return new_data

def modify_Pix(pix, data):
    dataList = generate_Data(data)
    dataLen = len(dataList)
    imgData = iter(pix)
    for i in range(dataLen):
        # Extracting 3 pixels at a time
        pix = [value for value in imgData.__next__()[:3] +
               imgData.__next__()[:3] +
               imgData.__next__()[:3]]

        for j in range(0, 8):
            if (dataList[i][j] == '0') and (pix[j] % 2 != 0):
                if (pix[j] % 2 != 0):
                    pix[j] -= 1

            elif (dataList[i][j] == '1') and (pix[j] % 2 == 0):
                pix[j] -= 1

        if (i == dataLen - 1):
            if (pix[-1] % 2 == 0):
                pix[-1] -= 1
        else:
            if (pix[-1] % 2 != 0):
                pix[-1] -= 1

        pix = tuple(pix)
        yield pix[0:3]
        yield pix[3:6]
        yield pix[6:9]


def encode_enc2(newimg, data):    
    w = newimg.size[0]
    (x, y) = (0, 0)

    for pixel in modify_Pix(newimg.getdata(), data):
        # Putting modified pixels in the new image
        newimg.putpixel((x, y), pixel)
        if (x == w - 1):
            x = 0
            y += 1
        else:
            x += 1
            
def encodeText(msg, file_name):
    if(len(file_name) <= 0):
        app.logger.error("incorrect file")
    # if(file_name.split(".")[1] != "jpg"):
    #     app.logger.error("incorrect file, upload file with jpg extension")

    image = Image.open(file_name, 'r')
    data = msg
    if (len(data) == 0):
#       If user does not enter anything
        raise ValueError('Data is empty')
    newimg = image.copy()
    encode_enc2(newimg, data)
    new_img_name = "new_" + file_name.split(".")[0] + ".png"
    newimg.save(new_img_name, str(new_img_name.split(".")[1].upper()))
    return 0

def decode2(file_name):
    img = file_name
    app.logger.info(img)
    image = Image.open(img, 'r')
    image_data = iter(image.getdata())
    data = ''
    while (True):
        pixels = [value for value in image_data.__next__()[:3] +
                  image_data.__next__()[:3] +
                  image_data.__next__()[:3]]
        binary_str = ''
        for i in pixels[:8]:
            if i % 2 == 0:
                binary_str += '0'
            else:
                binary_str += '1'
        data += chr(int(binary_str, 2))
        if pixels[-1] % 2 != 0:
            return data

# Route for seeing a data
@app.route('/encode', methods=['POST'])
def encode():
    text = request.form['text_ip']
    file_path = request.files["file_ip"]
    app.logger.info("text : " + text)
    file_path.save(secure_filename(file_path.filename))
    file_name = file_path.filename
    retCode = encodeText(text, file_name)
    return {		
		'status':"201",
        "message":"success", 
        "returnCode" : retCode
	}

# Route for seeing a data
@app.route('/decode', methods=['POST'])
def decodeAPI():
    file_path = request.files["file_ip"]
    file_path.save(secure_filename(file_path.filename))
    response = {'data': decode2(file_path.filename)}
    return response


# Route for seeing a data
@app.route('/data')
def get_time():

	# Returning an api for showing in reactjs
	return {
		
		'Name':"Vin",
        "Age":"22",
        "Date":x,
        "programming":"python"
		}

	
# Running app
if __name__ == '__main__':
	app.run(debug=True)
