import { gql } from "@apollo/client";

export const GET_DESIGN_IMAGES = gql`
  query designImages {
    designImages {
      id
      normalUrl
      compressedUrl
      description
    }
  }
`;

export const GET_PHOTOGRAPHY_IMAGES = gql`
  query photographyImages {
    photographyImages {
      id
      normalUrl
      compressedUrl
      description
    }
  }
`;
