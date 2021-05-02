import React, { Component } from "react";
import { Link } from "react-router-dom";

import { v4 as uuid } from "uuid";
import { graphql } from "react-apollo";

import moment from 'moment';

import QueryAllVenues from "../GraphQL/QueryAllVenues";
import QueryGetVenue from "../GraphQL/QueryGetVenue";
import MutationCreateVenue from "../GraphQL/MutationCreateVenue";

class NewVenue extends Component {

    static defaultProps = {
        createVenue: () => null,
    }

    state = {
        venue: {
            title: 'asd',
            description: 'asd',
            location: 'asd',
            rating: 0,
            image_url: 'asd'
        }
    };

    handleChange(field, { target: { value } }) {
        const { venue } = this.state;

        venue[field] = value;

        this.setState({ venue });
    }

    handleSave = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        const { createVenue, history } = this.props;
        const { venue } = this.state;

        await createVenue({ ...venue });

        history.push('/');
    }

    render() {
        const { venue } = this.state;

        return (
            <div className="ui container raised very padded segment">
                <h1 className="ui header">Register a venue</h1>
                <div className="ui form">
                    <div className="field required eight wide">
                        <label htmlFor="title">Name</label>
                        <input type="text" id="title" value={venue.title} onChange={this.handleChange.bind(this, 'title')} />
                    </div>
                    <div className="field required eight wide">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" value={venue.location} onChange={this.handleChange.bind(this, 'location')} />
                    </div>
                    {/* <div className="field required eight wide">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" rows="10" value={event.description}
                            onChange={this.handleChange.bind(this, 'description')}></textarea>
                    </div> */}
                    <div className="ui buttons">
                        <Link to="/" className="ui button">Cancel</Link>
                        <div className="or"></div>
                        <button className="ui positive button" onClick={this.handleSave}>Save</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default graphql(
    MutationCreateVenue,
    {
        props: (props) => ({
            createVenue: (venue) => {
                console.log(venue);
                return props.mutate({
                    update: (proxy, { data: { createVenue } }) => {
                        // Update QueryAllEvents
                        const query = QueryAllVenues;
                        const data = proxy.readQuery({ query });

                        data.listVenues.items = [...data.listVenues.items.filter(e => e.id !== createVenue.id), createVenue];

                        proxy.writeQuery({ query, data });

                        // Create cache entry for QueryGetEvent
                        const query2 = QueryGetVenue;
                        const variables = { id: createVenue.id };
                        const data2 = { getEvent: { ...createVenue } };

                        proxy.writeQuery({ query: query2, variables, data: data2 });
                    },
                    variables: venue,
                    optimisticResponse: () => ({
                        createVenue: {
                            ...venue, id: uuid(), __typename: 'Venue', comments: { __typename: 'CommentConnection', items: [] }
                        }
                    }),
                })
            }
        })
    }
)(NewVenue);
