import algoliasearch from 'algoliasearch';
import dotenv from 'dotenv';
dotenv.config();

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = client.initIndex(process.env.ALGOLIA_INDEX_ID_SANDBOX);

export { client, index };
