/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToEventComments = /* GraphQL */ `
  subscription SubscribeToEventComments($eventId: String!) {
    subscribeToEventComments(eventId: $eventId) {
      eventId
      commentId
      content
      createdAt
    }
  }
`;
export const onCreateVenue = /* GraphQL */ `
  subscription OnCreateVenue(
    $id: ID
    $title: String
    $description: String
    $location: String
    $rating: Int
  ) {
    onCreateVenue(
      id: $id
      title: $title
      description: $description
      location: $location
      rating: $rating
    ) {
      id
      title
      description
      location
      rating
      image_url
    }
  }
`;
export const onUpdateVenue = /* GraphQL */ `
  subscription OnUpdateVenue(
    $id: ID
    $title: String
    $description: String
    $location: String
    $rating: Int
  ) {
    onUpdateVenue(
      id: $id
      title: $title
      description: $description
      location: $location
      rating: $rating
    ) {
      id
      title
      description
      location
      rating
      image_url
    }
  }
`;
export const onDeleteVenue = /* GraphQL */ `
  subscription OnDeleteVenue(
    $id: ID
    $title: String
    $description: String
    $location: String
    $rating: Int
  ) {
    onDeleteVenue(
      id: $id
      title: $title
      description: $description
      location: $location
      rating: $rating
    ) {
      id
      title
      description
      location
      rating
      image_url
    }
  }
`;
