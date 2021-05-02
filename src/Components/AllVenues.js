import React, { Component } from "react";
import { Link } from "react-router-dom";

import { graphql, compose, withApollo } from "react-apollo";

// import moment from "moment";
import QueryAllVenues from "../GraphQL/QueryAllVenues";
import QueryAllEvents from "../GraphQL/QueryAllEvents";
import QueryGetVenue from "../GraphQL/QueryGetVenue";

class AllVenues extends Component {

    state = {
        busy: false,
    }

    static defaultProps = {
        venues: []
    }

    renderVenue = (venue) => (
        <div className="ui card test-format" key={venue.id}>
            <div className="content">
                <div className="header">{venue.title}</div>
            </div>
            <div className="content">
                <p><i className="icon marker"></i>{venue.location}</p>
            </div>
            <div className="content">
                <i className="icon star"></i>{venue.rating}/5
            </div>
            <div className="content">
                <img src={venue.image_url} 
                    alt="new" 
                    width="200" 
                    height="200"/> 
            </div>
            <div className="content">
                <i className="icon  info circle"></i> {venue.description}
            </div>
        </div>
    );

    render() {
        const { busy } = this.state;
        const { venues } = this.props;
        console.log(venues);

        return (
            <div className="ui main intro container">
                <div className="ui clearing basic segment">
                    <h1 className="ui header left floated dividing">Good Deed Venues</h1>
                </div>
                <div className="ui three stackable doubling cards">
                    <div className="ui card blue">
                        <Link to="/newEvent" className="new-event content center aligned">
                            <i className="icon add massive"></i>
                            <p>Register new event venue</p>
                        </Link>
                    </div>
                    {[].concat(venues).map(this.renderVenue)}
                </div>                
            </div>
        );
    }
}


export default withApollo(compose(
    graphql(
        QueryAllVenues,
        {
            options: {
                fetchPolicy: 'network-only',
            },
            props: ({ data: { error, loading, listVenues = { items: [] } } }) => {
                console.log(loading);
                console.log(error);
                console.log(listVenues);
                return {
                venues: listVenues.items
            }}
        }
    )
)(AllVenues));