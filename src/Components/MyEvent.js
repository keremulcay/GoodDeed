import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

import moment from 'moment';

import QueryGetEvent from "../GraphQL/QueryGetEvent";
import EventComments from "./EventComments";
import EventRegister from "./EventRegister";


/**
 * Component for rendering project card of owner.
 *
 * @component
 */
class MyEvent extends Component {

    render() {
        const { event, loading } = this.props;

        return (
            <div className={`ui container raised very padded segment ${loading ? 'loading' : ''}`} style={{width: "900px"}}>
                <Link to="/" className="ui button">Back to events</Link>
                <div className="ui items">
                    <div className="item">
                        {event && <div className="content" style={{display: "flex"}}>
                            <div style={{width: "70vw"}}>
                            <div className="header">{event.name}</div>
                            <div className="extra"><i className="icon calendar"></i>{moment(event.when).format('LL')}</div>
                            <div className="extra"><i className="icon clock"></i>{moment(event.when).format('LT')}</div>
                            <div className="extra"><i className="icon marker"></i>{event.where.split("$")[0]}</div>
                                <div className="extra"><i className="icon marker"></i>{event.where.split("$")[1]}</div>                            <div className="description">{event.description}</div>
                            </div>
                            <div className="extra">
                                <EventComments eventId={event.id} comments={event.comments} />
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        );
    }

}

const ViewEventWithData = graphql(
    QueryGetEvent,
    {
        options: ({ match: { params: { id } } }) => ({
            variables: { id },
            fetchPolicy: 'cache-and-network',
        }),
        props: ({ data: { getEvent: event, loading} }) => ({
            event,
            loading,
        }),
    },
)(MyEvent);

export default ViewEventWithData;