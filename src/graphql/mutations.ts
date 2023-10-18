/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      first
      last
      phone
      email
      Orders {
        items {
          id
          orderNumber
          intakeDate
          status
          completed
          customerID
          deviceID
          teamID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Devices {
        items {
          id
          orderNumber
          intakeDate
          status
          completed
          customerID
          deviceID
          teamID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      teamID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      first
      last
      phone
      email
      Orders {
        items {
          id
          orderNumber
          intakeDate
          status
          completed
          customerID
          deviceID
          teamID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Devices {
        items {
          id
          orderNumber
          intakeDate
          status
          completed
          customerID
          deviceID
          teamID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      teamID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      first
      last
      phone
      email
      Orders {
        items {
          id
          orderNumber
          intakeDate
          status
          completed
          customerID
          deviceID
          teamID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Devices {
        items {
          id
          orderNumber
          intakeDate
          status
          completed
          customerID
          deviceID
          teamID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      teamID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      type
      brand
      password
      serialNumber
      customerID
      Orders {
        items {
          id
          orderNumber
          intakeDate
          status
          completed
          customerID
          deviceID
          teamID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      type
      brand
      password
      serialNumber
      customerID
      Orders {
        items {
          id
          orderNumber
          intakeDate
          status
          completed
          customerID
          deviceID
          teamID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      type
      brand
      password
      serialNumber
      customerID
      Orders {
        items {
          id
          orderNumber
          intakeDate
          status
          completed
          customerID
          deviceID
          teamID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
      orderNumber
      intakeDate
      status
      completed
      customerID
      deviceID
      teamID
      createdAt
      updatedAt
      __typename
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
      orderNumber
      intakeDate
      status
      completed
      customerID
      deviceID
      teamID
      createdAt
      updatedAt
      __typename
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
      orderNumber
      intakeDate
      status
      completed
      customerID
      deviceID
      teamID
      createdAt
      updatedAt
      __typename
    }
  }
`;
