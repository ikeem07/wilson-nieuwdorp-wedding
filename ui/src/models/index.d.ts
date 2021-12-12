import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type GuestMetaData = {
  readOnlyFields: 'updatedAt';
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
  readonly updatedAt?: string;
  constructor(init: ModelInit<Guest, GuestMetaData>);
  static copyOf(source: Guest, mutator: (draft: MutableModel<Guest, GuestMetaData>) => MutableModel<Guest, GuestMetaData> | void): Guest;
}