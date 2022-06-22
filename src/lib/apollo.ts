import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pra7sa2inf01z4cpnjekcm/master',
  cache: new InMemoryCache()
});