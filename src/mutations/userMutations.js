import { gql } from '@apollo/client';

const REGISTER = gql`
  mutation  {
    createUser(register: {
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        password: $password
    }) {
      firstName
      lastName
      email
    }
  }
`;

const LOGIN = gql`
  mutation {
    login (login: {
        email: $email,
        password: $password
    }) {
      access_token
    }
  }
`;

export { LOGIN, REGISTER };