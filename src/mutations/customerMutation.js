import { gql } from "@apollo/client";

const CREATE_CUSTOMER = gql`
  mutation {
    createCustomer(createBusiness: { firstName: $firstName, lastName: $lastName, businesses: $businesses, address: $address }) {
      firstName
      lastName
      address
    }
  }
`;

const UPDATE_CUSTOMER = gql`
  mutation {
    updateCustomer(id: $id, updateCustomer: { firstName: $firstName, lastName: $lastName, address:$address }) {
      firstName
      lastName
      address
    }
  }
`;

const DELETE_CUSTOMER = gql`
  mutation {
    deleteCustomer(id: $id) {
      name
    }
  }
`;

export { CREATE_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER };
