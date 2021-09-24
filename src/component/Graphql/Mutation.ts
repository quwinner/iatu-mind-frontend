import { gql } from '@apollo/client'

<<<<<<< HEAD
export const CREATE_USER = gql`
  mutation createUser($name: String!, $username: String!, $password: String!) {
    createUser(name: $name, username: $username, password: $password) {
      id
      name
      username
=======
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
  mutation ($login: String!, $password: String!) {
    signIn(input: { login: $login, password: $password }) {
      token
      user {
        id
        login
        password
        dateReg
        lastLogin
        role
      }
    }
  }
`

export const AUTH = gql`
  mutation {
    auth {
      token
      user {
        id
        login
        dateReg
        lastLogin
        role
      }
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
    }
  }
`
