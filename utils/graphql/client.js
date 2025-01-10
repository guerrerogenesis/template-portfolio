import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import config from "@libs/config";

// client.js
const createApolloClient = apiUrl => {
  const { GITHUB_TOKEN } = config();

  return new ApolloClient({
    link: new HttpLink({
      uri: `${apiUrl}/graphql`,
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
