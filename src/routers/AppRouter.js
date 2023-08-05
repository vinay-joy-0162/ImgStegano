import React from 'react';
import { Encode } from "../components/Encode";
import { Decode } from "../components/Decode";


// admin
// import Login from '../components/Admin/auth/Login';
// import Archives from '../components/Admin/Archives';

const AppRouter = () => (
      <BrowserRouter>
        <Switch>
          {/* <PublicRoute  path='/' component = { Home } exact   /> */}
          <PublicRoute path='/Encode' component = {Encode} />
          <PublicRoute path='/Decode' component = {Decode} exact={true} />
          {/* <PublicRoute path='/journal/:file' component = {PDFViewer} exact={true} />
          <PublicRoute path='/editorialboard' component = {editorialboard} exact={true} />
          <PublicRoute path='/Guideline' component = {Guideline} />
          <PublicRoute path='/Index' component = { Index }  exact={true} />
          <PublicRoute path='/submission' component = {submission} exact={true} />
          <PublicRoute path='/Authorization' component = {Authorization} exact={true} />
          <PublicRoute path="/admin-login" component={Login} exact={true} /> */}

          {/* <PrivateRoute path="/admin/archives" component={Archives} exact={true} /> */}
          
        </Switch> 
      </BrowserRouter>
);
export default AppRouter