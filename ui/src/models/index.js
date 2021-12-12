// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Guest } = initSchema(schema);

export {
  Guest
};