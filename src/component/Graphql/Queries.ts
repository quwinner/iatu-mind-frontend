import { gql } from '@apollo/client'

export const GET_ALL_GROUPS = gql`
  query {
    groups {
      id
      name
    }
  }
`

export const GET_ALL_PERIODS = gql`
  query {
    periods {
      id
      year
      half
    }
  }
`
