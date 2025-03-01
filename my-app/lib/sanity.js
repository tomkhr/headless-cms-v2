import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'qfq9s96v',
  dataset: 'production',
  useCdn: true,
});
