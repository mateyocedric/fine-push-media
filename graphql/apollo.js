/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

"use client";

import { useContext } from "react";
import { setContext } from "@apollo/client/link/context";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { AuthContext } from "src/auth/context/jwt";

const StrapiApolloProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Use createUploadLink instead of createHttpLink for file uploads
  const uploadLink = createUploadLink({
    uri: `http://localhost:1337/graphql`,
  });

  const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        ...(user && { Authorization: `Bearer ${user.accessToken}` }),
      },
    }));

  const client = new ApolloClient({
    link: authLink.concat(uploadLink), // Combine authLink with uploadLink
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default StrapiApolloProvider;
