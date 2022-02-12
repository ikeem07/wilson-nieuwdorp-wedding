// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RSVP, Guest } = initSchema(schema);

export {
  RSVP,
  Guest
};