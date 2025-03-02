import { createClient } from '@sanity/client';


export const client = createClient({
  projectId: 'qfq9s96v',
  dataset: 'production',
  apiVersion: "2023-03-01",
  useCdn: true,
});