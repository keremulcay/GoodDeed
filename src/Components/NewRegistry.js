import React, { Component } from "react";
import { graphql } from "react-apollo";
import { v4 as uuid } from "uuid";

import MutationCommentOnEvent from "../GraphQL/MutationCommentOnEvent";
import QueryGetEvent from "../GraphQL/QueryGetEvent";
import moment from "moment";

class NewRegistry extends Component {

    static defaultProps = {
        createComment: () => null,
    }

    static defaultState = {
        comment: {
            content: '',
        },
        loading: false,
        registered: false,
    };

    static registeredState = {
        comment: {
            content: '',
        },
        loading: false,
        registered: true,
    };


    state = NewRegistry.defaultState;

    handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const { comment } = this.state;
        const { eventId, createComment } = this.props;

        this.setState({ loading: true });

        await createComment({
            ...comment,
            eventId,
            createdAt: moment.utc().format(),
        });

        this.setState(NewRegistry.registeredState);
    }

    handleChange = ({ target: { value: content } }) => {
        this.setState({ comment: { content } });
    }

    render() {
        const { comment, loading, registered } = this.state;
        return (
            <div>
            <p style={{display: registered ? ("block") : ("none") }}> Successfully registered to event </p>
            <form className="ui reply form" style={{display: registered ? ("none") : ("block") }}>
                <h4 className="ui dividing header">Register with email</h4>
                <div className="field">
                    <textarea value={comment.content} onChange={this.handleChange} disabled={loading}></textarea>
                </div>
                <button className={`ui blue labeled submit icon button ${loading ? 'loading' : ''}`}
                    disabled={loading} onClick={this.handleSubmit}>
                    <i className="icon edit"></i>
                    Register
                </button>
            </form>
            </div>
        );
    }
}

const NewCommentWithData = graphql(
    MutationCommentOnEvent,
    {
        options: props => ({
            update: (proxy, { data: { commentOnEvent } }) => {
                const query = QueryGetEvent;
                const variables = { id: commentOnEvent.eventId };
                const data = proxy.readQuery({ query, variables });

                data.getEvent = {
                    ...data.getEvent,
                    comments: {
                        ...data.getEvent.comments,
                        items: [
                            ...data.getEvent.comments.items.filter(c => c.commentId !== commentOnEvent.commentId),
                            commentOnEvent,
                        ]
                    }
                };

                proxy.writeQuery({ query, data });
            },
        }),
        props: props => ({
            createComment: (comment) => {
                return props.mutate({
                    variables: { ...comment },
                    optimisticResponse: { commentOnEvent: { ...comment, __typename: 'Comment', commentId: uuid() } },
                });
            }
        })
    }
)(NewRegistry);

export default NewCommentWithData;