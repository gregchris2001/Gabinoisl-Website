import { createClient } from "@sanity/client";
const sanityClient = createClient({
  projectId: "qb388cmd",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-24",
});

export default sanityClient;
