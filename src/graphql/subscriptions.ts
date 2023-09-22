/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
          type
          brand
          password
          serialNumber
          customerID
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
          type
          brand
          password
          serialNumber
          customerID
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
          type
          brand
          password
          serialNumber
          customerID
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onCreateDevice(filter: $filter) {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onUpdateDevice(filter: $filter) {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onDeleteDevice(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      orderNumber
      intakeDate
      status
      completed
      customerID
      deviceID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      orderNumber
      intakeDate
      status
      completed
      customerID
      deviceID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      orderNumber
      intakeDate
      status
      completed
      customerID
      deviceID
      createdAt
      updatedAt
      __typename
    }
  }
`;
