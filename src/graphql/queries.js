import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query Rickmorty($page: Int, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
      }
      results {
        id
        name
        air_date
        episode
        characters {
          name
        }
      }
    }
  }
`;

export const GET_EPISODES_CHARACTERS = gql`
  query ($id: ID!) {
    episode(id: $id) {
      id
      name
      characters {
        name
        id
        image
        gender
        status
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        name
        type
        dimension
      }

      episode {
        name
        id
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query Rickmorty($page: Int, $name: String) {
    locations(page: $page, filter: { name: $name }) {
      info {
        count
        next
        pages
      }
      results {
        name
        id
        dimension
        residents {
          image
          name
        }
      }
    }
  }
`;
export const GET_RESIDENTS = gql`
  query Rickmorty($id: ID!) {
    location(id: $id) {
      id
      name
      residents {
        image
        name
        id
      }
    }
  }
`;
