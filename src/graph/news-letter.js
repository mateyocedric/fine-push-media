/* eslint-disable import/no-extraneous-dependencies */
import { gql } from "@apollo/client";

export const CreateSubscribedNewsLetter = gql`
mutation CreateSubscribedNewsLetter ($data: SubscribedNewsletterInput!) {
    createSubscribedNewsletter(data: $data) {
      documentId
      email
      createdAt
    }
  }
`;