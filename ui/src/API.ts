/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRSVPInput = {
  id?: string | null,
  groupNum?: string | null,
  firstName: string,
  secondName: string,
  searchName?: string | null,
  attending: boolean,
  songList?: string | null,
  plusOne?: boolean | null,
  addedByUser?: boolean | null,
  _version?: number | null,
};

export type ModelRSVPConditionInput = {
  groupNum?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  secondName?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  attending?: ModelBooleanInput | null,
  songList?: ModelStringInput | null,
  plusOne?: ModelBooleanInput | null,
  addedByUser?: ModelBooleanInput | null,
  and?: Array< ModelRSVPConditionInput | null > | null,
  or?: Array< ModelRSVPConditionInput | null > | null,
  not?: ModelRSVPConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type RSVP = {
  __typename: "RSVP",
  id: string,
  groupNum?: string | null,
  firstName: string,
  secondName: string,
  searchName?: string | null,
  attending: boolean,
  songList?: string | null,
  plusOne?: boolean | null,
  addedByUser?: boolean | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRSVPInput = {
  id: string,
  groupNum?: string | null,
  firstName?: string | null,
  secondName?: string | null,
  searchName?: string | null,
  attending?: boolean | null,
  songList?: string | null,
  plusOne?: boolean | null,
  addedByUser?: boolean | null,
  _version?: number | null,
};

export type DeleteRSVPInput = {
  id: string,
  _version?: number | null,
};

export type CreateGuestInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  streetAddress1: string,
  streetAddress2?: string | null,
  city: string,
  state: string,
  zip?: string | null,
  email?: string | null,
  phone?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelGuestConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  streetAddress1?: ModelStringInput | null,
  streetAddress2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGuestConditionInput | null > | null,
  or?: Array< ModelGuestConditionInput | null > | null,
  not?: ModelGuestConditionInput | null,
};

export type Guest = {
  __typename: "Guest",
  id: string,
  firstName: string,
  lastName: string,
  streetAddress1: string,
  streetAddress2?: string | null,
  city: string,
  state: string,
  zip?: string | null,
  email?: string | null,
  phone?: string | null,
  createdAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  updatedAt: string,
};

export type UpdateGuestInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  streetAddress1?: string | null,
  streetAddress2?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  email?: string | null,
  phone?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteGuestInput = {
  id: string,
  _version?: number | null,
};

export type ModelRSVPFilterInput = {
  id?: ModelIDInput | null,
  groupNum?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  secondName?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  attending?: ModelBooleanInput | null,
  songList?: ModelStringInput | null,
  plusOne?: ModelBooleanInput | null,
  addedByUser?: ModelBooleanInput | null,
  and?: Array< ModelRSVPFilterInput | null > | null,
  or?: Array< ModelRSVPFilterInput | null > | null,
  not?: ModelRSVPFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRSVPConnection = {
  __typename: "ModelRSVPConnection",
  items:  Array<RSVP | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGuestFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  streetAddress1?: ModelStringInput | null,
  streetAddress2?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelGuestFilterInput | null > | null,
  or?: Array< ModelGuestFilterInput | null > | null,
  not?: ModelGuestFilterInput | null,
};

export type ModelGuestConnection = {
  __typename: "ModelGuestConnection",
  items:  Array<Guest | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateRSVPMutationVariables = {
  input: CreateRSVPInput,
  condition?: ModelRSVPConditionInput | null,
};

export type CreateRSVPMutation = {
  createRSVP?:  {
    __typename: "RSVP",
    id: string,
    groupNum?: string | null,
    firstName: string,
    secondName: string,
    searchName?: string | null,
    attending: boolean,
    songList?: string | null,
    plusOne?: boolean | null,
    addedByUser?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRSVPMutationVariables = {
  input: UpdateRSVPInput,
  condition?: ModelRSVPConditionInput | null,
};

export type UpdateRSVPMutation = {
  updateRSVP?:  {
    __typename: "RSVP",
    id: string,
    groupNum?: string | null,
    firstName: string,
    secondName: string,
    searchName?: string | null,
    attending: boolean,
    songList?: string | null,
    plusOne?: boolean | null,
    addedByUser?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRSVPMutationVariables = {
  input: DeleteRSVPInput,
  condition?: ModelRSVPConditionInput | null,
};

export type DeleteRSVPMutation = {
  deleteRSVP?:  {
    __typename: "RSVP",
    id: string,
    groupNum?: string | null,
    firstName: string,
    secondName: string,
    searchName?: string | null,
    attending: boolean,
    songList?: string | null,
    plusOne?: boolean | null,
    addedByUser?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGuestMutationVariables = {
  input: CreateGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type CreateGuestMutation = {
  createGuest?:  {
    __typename: "Guest",
    id: string,
    firstName: string,
    lastName: string,
    streetAddress1: string,
    streetAddress2?: string | null,
    city: string,
    state: string,
    zip?: string | null,
    email?: string | null,
    phone?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type UpdateGuestMutationVariables = {
  input: UpdateGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type UpdateGuestMutation = {
  updateGuest?:  {
    __typename: "Guest",
    id: string,
    firstName: string,
    lastName: string,
    streetAddress1: string,
    streetAddress2?: string | null,
    city: string,
    state: string,
    zip?: string | null,
    email?: string | null,
    phone?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type DeleteGuestMutationVariables = {
  input: DeleteGuestInput,
  condition?: ModelGuestConditionInput | null,
};

export type DeleteGuestMutation = {
  deleteGuest?:  {
    __typename: "Guest",
    id: string,
    firstName: string,
    lastName: string,
    streetAddress1: string,
    streetAddress2?: string | null,
    city: string,
    state: string,
    zip?: string | null,
    email?: string | null,
    phone?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type GetRSVPQueryVariables = {
  id: string,
};

export type GetRSVPQuery = {
  getRSVP?:  {
    __typename: "RSVP",
    id: string,
    groupNum?: string | null,
    firstName: string,
    secondName: string,
    searchName?: string | null,
    attending: boolean,
    songList?: string | null,
    plusOne?: boolean | null,
    addedByUser?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRSVPsQueryVariables = {
  filter?: ModelRSVPFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRSVPsQuery = {
  listRSVPs?:  {
    __typename: "ModelRSVPConnection",
    items:  Array< {
      __typename: "RSVP",
      id: string,
      groupNum?: string | null,
      firstName: string,
      secondName: string,
      searchName?: string | null,
      attending: boolean,
      songList?: string | null,
      plusOne?: boolean | null,
      addedByUser?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRSVPSQueryVariables = {
  filter?: ModelRSVPFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRSVPSQuery = {
  syncRSVPS?:  {
    __typename: "ModelRSVPConnection",
    items:  Array< {
      __typename: "RSVP",
      id: string,
      groupNum?: string | null,
      firstName: string,
      secondName: string,
      searchName?: string | null,
      attending: boolean,
      songList?: string | null,
      plusOne?: boolean | null,
      addedByUser?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGuestQueryVariables = {
  id: string,
};

export type GetGuestQuery = {
  getGuest?:  {
    __typename: "Guest",
    id: string,
    firstName: string,
    lastName: string,
    streetAddress1: string,
    streetAddress2?: string | null,
    city: string,
    state: string,
    zip?: string | null,
    email?: string | null,
    phone?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type ListGuestsQueryVariables = {
  filter?: ModelGuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGuestsQuery = {
  listGuests?:  {
    __typename: "ModelGuestConnection",
    items:  Array< {
      __typename: "Guest",
      id: string,
      firstName: string,
      lastName: string,
      streetAddress1: string,
      streetAddress2?: string | null,
      city: string,
      state: string,
      zip?: string | null,
      email?: string | null,
      phone?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGuestsQueryVariables = {
  filter?: ModelGuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGuestsQuery = {
  syncGuests?:  {
    __typename: "ModelGuestConnection",
    items:  Array< {
      __typename: "Guest",
      id: string,
      firstName: string,
      lastName: string,
      streetAddress1: string,
      streetAddress2?: string | null,
      city: string,
      state: string,
      zip?: string | null,
      email?: string | null,
      phone?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRSVPSubscription = {
  onCreateRSVP?:  {
    __typename: "RSVP",
    id: string,
    groupNum?: string | null,
    firstName: string,
    secondName: string,
    searchName?: string | null,
    attending: boolean,
    songList?: string | null,
    plusOne?: boolean | null,
    addedByUser?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRSVPSubscription = {
  onUpdateRSVP?:  {
    __typename: "RSVP",
    id: string,
    groupNum?: string | null,
    firstName: string,
    secondName: string,
    searchName?: string | null,
    attending: boolean,
    songList?: string | null,
    plusOne?: boolean | null,
    addedByUser?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRSVPSubscription = {
  onDeleteRSVP?:  {
    __typename: "RSVP",
    id: string,
    groupNum?: string | null,
    firstName: string,
    secondName: string,
    searchName?: string | null,
    attending: boolean,
    songList?: string | null,
    plusOne?: boolean | null,
    addedByUser?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGuestSubscription = {
  onCreateGuest?:  {
    __typename: "Guest",
    id: string,
    firstName: string,
    lastName: string,
    streetAddress1: string,
    streetAddress2?: string | null,
    city: string,
    state: string,
    zip?: string | null,
    email?: string | null,
    phone?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateGuestSubscription = {
  onUpdateGuest?:  {
    __typename: "Guest",
    id: string,
    firstName: string,
    lastName: string,
    streetAddress1: string,
    streetAddress2?: string | null,
    city: string,
    state: string,
    zip?: string | null,
    email?: string | null,
    phone?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteGuestSubscription = {
  onDeleteGuest?:  {
    __typename: "Guest",
    id: string,
    firstName: string,
    lastName: string,
    streetAddress1: string,
    streetAddress2?: string | null,
    city: string,
    state: string,
    zip?: string | null,
    email?: string | null,
    phone?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    updatedAt: string,
  } | null,
};
