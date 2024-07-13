import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "4j8kyux4",
  dataset: "production",
  apiVersion: "2022-11-18",
  useCdn: true,
  //   token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// * RUN THIS TO ADD EXCEPTION FOR LOCALHOST 3000 CORS POLICY
// * sanity cors add https://localhost:3000

export default client;
