import gql from "graphql-tag";

export default gql(`
query($id: ID!) {
  getVenue(id: $id) {
    id
    title
    description
    location
    rating
  }
}
`);

