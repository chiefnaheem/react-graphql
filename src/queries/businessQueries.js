import { gql } from "@apollo/client";

const GET_BUSINESSES = gql`
  query {
    businesses {
      name
        owner
        address
    }
  }
`;

const GET_BUSINESS = gql`
    query {
    business(id: $id) {
      name
    owner
    address
    }
  }
`

export { GET_BUSINESS, GET_BUSINESSES };
