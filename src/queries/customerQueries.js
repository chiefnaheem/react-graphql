import { gql } from "@apollo/client";

const GET_CUSTOMERS = gql`
  query {
    customers {
      firstName
      lastName
    }
  }
`;

const GET_CUSTOMER = gql`
    query {
    customer(id: $id) {
      firstName
      lastName
    }
  }
`

export { GET_CUSTOMERS, GET_CUSTOMER};
