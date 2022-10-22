/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      plastics {
        items {
          id
          plastic_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        plastics {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPlastics = /* GraphQL */ `
  query ListPlastics(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlastics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        featured
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlastic = /* GraphQL */ `
  query GetPlastic($id: ID!) {
    getPlastic(id: $id) {
      id
      title
      description
      image
      featured
      price
      orders {
        items {
          id
          plastic_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
