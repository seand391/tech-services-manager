/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first
        last
        phone
        email
        Orders {
          nextToken
          __typename
        }
        Devices {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        brand
        password
        serialNumber
        customerID
        Orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const devicesByCustomerID = /* GraphQL */ `
  query DevicesByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    devicesByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        brand
        password
        serialNumber
        customerID
        Orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const ordersByCustomerID = /* GraphQL */ `
  query OrdersByCustomerID(
    $customerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCustomerID(
      customerID: $customerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const ordersByDeviceID = /* GraphQL */ `
  query OrdersByDeviceID(
    $deviceID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByDeviceID(
      deviceID: $deviceID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
