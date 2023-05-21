import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "v1x6jpq8", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
});

export default client;