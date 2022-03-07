/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRSVP = /* GraphQL */ `
  mutation CreateRSVP(
    $input: CreateRSVPInput!
    $condition: ModelRSVPConditionInput
  ) {
    createRSVP(input: $input, condition: $condition) {
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
export const updateRSVP = /* GraphQL */ `
  mutation UpdateRSVP(
    $input: UpdateRSVPInput!
    $condition: ModelRSVPConditionInput
  ) {
    updateRSVP(input: $input, condition: $condition) {
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
export const deleteRSVP = /* GraphQL */ `
  mutation DeleteRSVP(
    $input: DeleteRSVPInput!
    $condition: ModelRSVPConditionInput
  ) {
    deleteRSVP(input: $input, condition: $condition) {
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
export const createGuest = /* GraphQL */ `
  mutation CreateGuest(
    $input: CreateGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    createGuest(input: $input, condition: $condition) {
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
export const updateGuest = /* GraphQL */ `
  mutation UpdateGuest(
    $input: UpdateGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    updateGuest(input: $input, condition: $condition) {
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
export const deleteGuest = /* GraphQL */ `
  mutation DeleteGuest(
    $input: DeleteGuestInput!
    $condition: ModelGuestConditionInput
  ) {
    deleteGuest(input: $input, condition: $condition) {
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
