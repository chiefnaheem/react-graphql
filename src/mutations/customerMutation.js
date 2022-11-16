import { gql } from "@apollo/client";

const CREATE_BUSINESS = gql`
  mutation {
    createBusiness(createBusiness: { name: $name, type: $type, address: $address, owner: $owner }) {
      name
      type
      address
    }
  }
`;

const UPDATE_BUSINESS = gql`
  mutation {
    updateBusiness(id: $id, updateBusiness: { name: $name, type: $type, address: $address }) {
      name
      type
      address
    }
  }
`;

const DELETE_BUSINES = gql`
  mutation {
    deleteBusiness(id: $id) {
      name
    }
  }
`;

export { CREATE_BUSINESS, UPDATE_BUSINESS };
