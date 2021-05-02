import gql from "graphql-tag";

export default gql(`
query {
    listVenues(limit: 1000) {
        items {
          id
          title
          description
          location
          rating
          image_url
        }
        nextToken
      }
}`);
