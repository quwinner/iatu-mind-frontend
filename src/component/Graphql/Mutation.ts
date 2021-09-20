import { gql } from '@apollo/client'

export const SIGNUP = gql`
  mutation SignUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $login: String!
    $password: String!
    $rePassword: String!
  ) {
    signUp(
      input: {
        firstName: $firstName
        lastName: $lastName
        login: $login
        email: $email
        password: $password
        rePassword: $rePassword
      }
    ) {
      user {
        id
      }
    }
  }
`

export const SIGNIN = gql`
  mutation createUser($name: String!, $username: String!, $password: String!) {
    createUser(name: $name, username: $username, password: $password) {
      id
      name
      username
    }
  }
`

export const AUTH = gql`
  mutation createUser($name: String!, $username: String!, $password: String!) {
    createUser(name: $name, username: $username, password: $password) {
      id
      name
      username
    }
  }
`
