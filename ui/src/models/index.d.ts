import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RSVPMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GuestMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class RSVP {
  readonly id: string;
  readonly groupNum?: string;
  readonly firstName: string;
  readonly secondName: string;
  readonly searchName?: string;
  readonly attending: boolean;
  readonly songList?: string;
  readonly plusOne?: boolean;
  readonly addedByUser?: boolean;
  readonly _version?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<RSVP, RSVPMetaData>);
  static copyOf(source: RSVP, mutator: (draft: MutableModel<RSVP, RSVPMetaData>) => MutableModel<RSVP, RSVPMetaData> | void): RSVP;
}

export declare class Guest {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly streetAddress1: string;
  readonly streetAddress2?: string;
  readonly city: string;
  readonly state: string;
  readonly zip?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly createdAt: string;
  readonly _version?: number;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Guest, GuestMetaData>);
  static copyOf(source: Guest, mutator: (draft: MutableModel<Guest, GuestMetaData>) => MutableModel<Guest, GuestMetaData> | void): Guest;
}