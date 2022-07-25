import gql from 'graphql-tag'

export const GET_POOLS = /* GraphQL */gql `
    query {
        pools {
            queuePos,
            ticker,
            description,
            imageUrl,
            status,
            wallet{
                amount,
                delegationTicker,
            }
        }
    }
`;

export const GET_SUPPORTERS = /* GraphQL */gql `
    query {
        supporters{
            alias,
            status,
            wallet{
                amount,
                delegationTicker,
            }
        }
    }
`;