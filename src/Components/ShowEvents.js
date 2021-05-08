import React, { Component } from "react";
import { Link } from "react-router-dom";

import { graphql, compose, withApollo } from "react-apollo";
import QueryAllEvents from "../GraphQL/QueryAllEvents";
import MutationDeleteEvent from "../GraphQL/MutationDeleteEvent";

import moment from "moment";

class ShowEvents extends Component {

    state = {
        busy: false,
        filter: this.props.filter
    }
    

    static defaultProps = {
        events: [],
        deleteEvent: () => null,
    }

    async handleDeleteClick(event, e) {
        e.preventDefault();

        if (window.confirm(`Are you sure you want to delete event ${event.id}`)) {
            const { deleteEvent } = this.props;

            await deleteEvent(event);
        }
    }

    handleSync = async () => {
        const { client } = this.props;
        const query = QueryAllEvents;

        this.setState({ busy: true });

        await client.query({
            query,
            fetchPolicy: 'network-only',
        });

        this.setState({ busy: false });
    }

    renderEvent(event) {
        console.log(this.props.filter)
        if (event.where.split("$")[1] == this.props.filter || this.props.filter == "All") {return(
        <Link to={`/event/${event.id}`} className="card" key={event.id}>
            <div className="content">
                <div className="header">{event.name}</div>
                <p style={{marginTop: "1vh"}}>{event.where.split("$")[1]}</p>

            </div>
            <div className="content">
                <p><i className="icon calendar"></i>{moment(event.when).format('LL')}</p>
                <p><i className="icon clock"></i>{moment(event.when).format('LT')}</p>
                <p><i className="icon marker"></i>{event.where.split("$")[0]}</p>
            </div>
            <div className="content">
                <div className="description"><i className="icon info circle"></i>{event.description}</div>
            </div>
        </Link>)}
    }

    render() {
        const { filter } = this.props;
        const { busy } = this.state;
        const { events } = this.props;

        return (
            <div>
                <div className="ui link cards">
                    {[].concat(events).sort((a, b) => a.when.localeCompare(b.when)).map(this.renderEvent, this)}
                </div>
            </div>
        );
    }

}

export default withApollo(compose(
    graphql(
        QueryAllEvents,
        {
            options: {
                fetchPolicy: 'cache-first',
            },
            props: ({ data: { listEvents = { items: [] } } }) => ({
                events: listEvents.items
            })
        }
    ),
    graphql(
        MutationDeleteEvent,
        {
            options: {
                update: (proxy, { data: { deleteEvent } }) => {
                    const query = QueryAllEvents;
                    const data = proxy.readQuery({ query });

                    data.listEvents.items = data.listEvents.items.filter(event => event.id !== deleteEvent.id);

                    proxy.writeQuery({ query, data });
                }
            },
            props: (props) => ({
                deleteEvent: (event) => {
                    return props.mutate({
                        variables: { id: event.id },
                        optimisticResponse: () => ({
                            deleteEvent: {
                                ...event, __typename: 'Event', comments: { __typename: 'CommentConnection', items: [] }
                            }
                        }),
                    });
                }
            })
        }
    )
)(ShowEvents));
