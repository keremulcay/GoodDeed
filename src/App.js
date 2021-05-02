import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import 'react-datepicker/dist/react-datepicker.css';

import appSyncConfig from "./aws-exports";
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient, { defaultDataIdFromObject } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";

import { Navbar, Nav, Icon } from 'rsuite';

import './App.css';
import AllEvents from './Components/AllEvents';
import NewEvent from './Components/NewEvent';
import ViewEvent from './Components/ViewEvent';
import Community from './Pages/Community/Community';
import Venues from './Pages/Venues/Venues';

const Home = () => (
  <div>
    <Nav>
            <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Nav.Item>Products</Nav.Item>
            {/* <Dropdown title="About">
              <Dropdown.Item>Company</Dropdown.Item>
              <Dropdown.Item>Team</Dropdown.Item>
              <Dropdown.Item>Contact</Dropdown.Item>
            </Dropdown> */}
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="cog" />} >Settings</Nav.Item>
      </Nav>
    <AllEvents />
  </div>
);

const App = () => (
  <Router>
    <div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/event/:id" component={ViewEvent} />
      <Route path="/newEvent" component={NewEvent} />
      <Route path="/community" component={Community} />
      <Route path="/venues" component={Venues} />
    </div>
  </Router>
);

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
