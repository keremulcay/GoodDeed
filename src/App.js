import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import 'react-datepicker/dist/react-datepicker.css';

import appSyncConfig from "./aws-exports";
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";

import './App.css';
import ShowEvents from './Components/ShowEvents';
import NewEvent from './Components/NewEvent';
import ViewEvent from './Components/ViewEvent';
import MyEvent from './Components/MyEvent';
import Community from './Pages/Community/Community';
import Venues from './Pages/Venues/Venues';
import Profile from './Pages/Profile/Profile';
import Landing from './Pages/Landing/Landing';
import NavigationBar from './Components/NavigationBar';

import background from './images/pexels-aleksey-kuprikov-3493777.jpg'
import NavBar from './Components/NavBar/NavBar'
import Overlay from './Components/Overlay/Overlay'

const Home = () => (
  <div className="rs-grid-container-fluid app-container">
    <Landing/>
  </div>
);

function App() {
    const [overlay, setOverlay] = useState(false)
    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState(false)
    
function closeOverlay() {
    setOverlay(false);}

function openOverlay() {
    setOverlay(true);}

function loggedIn() {
    setLogged(true)
}

function loggedOut() {
    setLogged(false)
}


return (
  <Router>
    <div key={logged}style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", height: "auto", minHeight: "100vh"}}>
    <NavBar key={logged} logged={logged} openOverlay={openOverlay}/>
    { overlay ? (<Overlay closeOverlay={closeOverlay} loggedIn={loggedIn} setUser={setUser} />) : (<div></div>)}
      <Route exact={true} path="/" component={Home} />
      <Route path="/event/:id" component={ViewEvent} />
      <Route exact={true} path="/profile" component={() => <Profile user={user} loggedOut={loggedOut} />} />
      <Route path="/profile/event/:id" component={MyEvent} />
      <Route path="/newEvent" component={NewEvent} />
      <Route path="/community" component={Community} />
      <Route path="/venues" component={Venues} />
    </div>
  </Router>
);}

const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
  },
  cacheOptions: {
    dataIdFromObject: (obj) => {
      let id = defaultDataIdFromObject(obj);

      if (!id) {
        const { __typename: typename } = obj;
        switch (typename) {
          case 'Comment':
            return `${typename}:${obj.commentId}`;
          default:
            return id;
        }
      }

      return id;
    }
  }
});

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;
