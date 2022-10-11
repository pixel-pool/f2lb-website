import gql from "graphql-tag";

export const GET_POOLS = /* GraphQL */ gql`
  query {
    Pools {
      queuePos
      ticker
      description
      imageUrl
      supportingLeader
      wallets {
        lace
        delegatedBech32
      }
    }
  }
`;

export const GET_SUPPORTERS = /* GraphQL */ gql`
  query {
    Supporters {
      alias
      supportingLeader
      wallet {
        lace
        delegatedBech32
      }
    }
  }
`;
