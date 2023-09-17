# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
from PIL import Image


# Initializing flask app
app = Flask(__name__)
x = datetime.datetime.now()

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
            
def encodeText(msg):
    image = Image.open("img.jpg", 'r')
    data = msg
    if (len(data) == 0):
#       If user does not enter anything
        raise ValueError('Data is empty')
    newimg = image.copy()
    encode_enc2(newimg, data)
    new_img_name = "new_img.png"
    newimg.save(new_img_name, str(new_img_name.split(".")[1].upper()))
    # res = "Image stored: " + new_img_name
	# print(res)

def decode2():
    img = "new_img.png"
    print()
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
@app.route('/encode')
def encode():
	msg = "your message"
	encodeText(msg)

	# Returning an api for showing in reactjs

	return {
		
		'status':"201",
        "message":"success"
		}

# Route for seeing a data
@app.route('/decode')
def decodeAPI():

	res = decode2()

	# Returning an api for showing in reactjs

	return {
		
		'status':"201",
        "message":res
		}


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


# import base64

# sample_string = "Vinay Joy"
# sample_string_bytes = sample_string.encode("ascii")

# base64_bytes = base64.b64encode(sample_string_bytes)
# base64_string = base64_bytes.decode("ascii")

# print(f"Encoded string: {base64_string}")


# base64_string =" VmluYXkgSm95"
# base64_bytes = base64_string.encode("ascii")

# sample_string_bytes = base64.b64decode(base64_bytes)
# sample_string = sample_string_bytes.decode("ascii")

# print(f"Decoded string: {sample_string}")
