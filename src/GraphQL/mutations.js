/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $name: String!
    $when: String!
    $where: String!
    $description: String!
  ) {
    createEvent(
      name: $name
      when: $when
      where: $where
      description: $description
    ) {
      id
      name
      where
      when
      description
      comments {
        nextToken
      }
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      id
      name
      where
      when
      description
      comments {
        nextToken
      }
    }
  }
`;
export const commentOnEvent = /* GraphQL */ `
  mutation CommentOnEvent(
    $eventId: ID!
    $content: String!
    $createdAt: String!
  ) {
    commentOnEvent(
      eventId: $eventId
      content: $content
      createdAt: $createdAt
    ) {
      eventId
      commentId
      content
      createdAt
    }
  }
`;
export const createVenue = /* GraphQL */ `
  mutation CreateVenue($input: CreateVenueInput!) {
    createVenue(input: $input) {
      id
      title
      description
      location
      rating
      image_url
    }
  }
`;
export const updateVenue = /* GraphQL */ `
  mutation UpdateVenue($input: UpdateVenueInput!) {
    updateVenue(input: $input) {
      id
      title
      description
      location
      rating
      image_url
    }
  }
`;
export const deleteVenue = /* GraphQL */ `
  mutation DeleteVenue($input: DeleteVenueInput!) {
    deleteVenue(input: $input) {
      id
      title
      description
      location
      rating
      image_url
    }
  }
`;
