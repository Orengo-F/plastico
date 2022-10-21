/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createPlastic = /* GraphQL */ `
  mutation CreatePlastic(
    $input: CreatePlasticInput!
    $condition: ModelPlasticConditionInput
  ) {
    createPlastic(input: $input, condition: $condition) {
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
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlastic = /* GraphQL */ `
  mutation UpdatePlastic(
    $input: UpdatePlasticInput!
    $condition: ModelPlasticConditionInput
  ) {
    updatePlastic(input: $input, condition: $condition) {
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
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlastic = /* GraphQL */ `
  mutation DeletePlastic(
    $input: DeletePlasticInput!
    $condition: ModelPlasticConditionInput
  ) {
    deletePlastic(input: $input, condition: $condition) {
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
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlasticOrder = /* GraphQL */ `
  mutation CreatePlasticOrder(
    $input: CreatePlasticOrderInput!
    $condition: ModelPlasticOrderConditionInput
  ) {
    createPlasticOrder(input: $input, condition: $condition) {
      id
      plastic_id
      order_id
      plastic {
        id
        title
        description
        image
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      order {
        id
        user
        date
        total
        plastics {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updatePlasticOrder = /* GraphQL */ `
  mutation UpdatePlasticOrder(
    $input: UpdatePlasticOrderInput!
    $condition: ModelPlasticOrderConditionInput
  ) {
    updatePlasticOrder(input: $input, condition: $condition) {
      id
      plastic_id
      order_id
      plastic {
        id
        title
        description
        image
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      order {
        id
        user
        date
        total
        plastics {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deletePlasticOrder = /* GraphQL */ `
  mutation DeletePlasticOrder(
    $input: DeletePlasticOrderInput!
    $condition: ModelPlasticOrderConditionInput
  ) {
    deletePlasticOrder(input: $input, condition: $condition) {
      id
      plastic_id
      order_id
      plastic {
        id
        title
        description
        image
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      order {
        id
        user
        date
        total
        plastics {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
