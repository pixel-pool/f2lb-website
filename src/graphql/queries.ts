import gql from 'graphql-tag'

export const GET_POOLS = /* GraphQL */gql `
    query {
        pools {
            queuePos,
            ticker,
            description,
            imageUrl,
            wallet{
                amount,
                delegation,
            }
        }
    }
`;