/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRSVP = /* GraphQL */ `
  query GetRSVP($id: ID!) {
    getRSVP(id: $id) {
      id
      groupNum
      firstName
      secondName
      searchName
      attending
      songList
      plusOne
      addedByUser
      createdAt
      updatedAt
    }
  }
`;
export const listRSVPs = /* GraphQL */ `
  query ListRSVPs(
    $filter: ModelRSVPFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRSVPs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupNum
        firstName
        secondName
        searchName
        attending
        songList
        plusOne
        addedByUser
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGuest = /* GraphQL */ `
  query GetGuest($id: ID!) {
    getGuest(id: $id) {
      id
      firstName
      lastName
      streetAddress1
      streetAddress2
      city
      state
      zip
      email
      phone
      createdAt
      updatedAt
    }
  }
`;
export const listGuests = /* GraphQL */ `
  query ListGuests(
    $filter: ModelGuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        streetAddress1
        streetAddress2
        city
        state
        zip
        email
        phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
