import { gql } from "@apollo/client";

const GET_BUSINESSES = gql`
  query {
    businesses {
      name
        owner
        address
        type
    }
  }
`;

const GET_BUSINESS = gql`
    query {
    business(id: $id) {
      name
    owner
    address
    type
    }
  }
`

export { GET_BUSINESS, GET_BUSINESSES };
