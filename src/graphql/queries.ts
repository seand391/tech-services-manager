/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
      id
      name
      price
      teamID
      orders {
        items {
          id
          serviceId
          orderId
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
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        teamID
        orders {
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
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      text
      orderID
      date
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        orderID
        date
        author
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const notesByOrderID = /* GraphQL */ `
  query NotesByOrderID(
    $orderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByOrderID(
      orderID: $orderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        orderID
        date
        author
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
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
          intakeDate
          pickupDate
          completed
          customerID
          deviceID
          teamID
          status
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
          intakeDate
          pickupDate
          completed
          customerID
          deviceID
          teamID
          status
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
        teamID
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
          intakeDate
          pickupDate
          completed
          customerID
          deviceID
          teamID
          status
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
      intakeDate
      pickupDate
      completed
      customerID
      deviceID
      teamID
      Notes {
        items {
          id
          text
          orderID
          date
          author
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Services {
        items {
          id
          serviceId
          orderId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      status
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
        intakeDate
        pickupDate
        completed
        customerID
        deviceID
        teamID
        Notes {
          nextToken
          __typename
        }
        Services {
          nextToken
          __typename
        }
        status
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
        intakeDate
        pickupDate
        completed
        customerID
        deviceID
        teamID
        Notes {
          nextToken
          __typename
        }
        Services {
          nextToken
          __typename
        }
        status
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
        intakeDate
        pickupDate
        completed
        customerID
        deviceID
        teamID
        Notes {
          nextToken
          __typename
        }
        Services {
          nextToken
          __typename
        }
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderService = /* GraphQL */ `
  query GetOrderService($id: ID!) {
    getOrderService(id: $id) {
      id
      serviceId
      orderId
      service {
        id
        name
        price
        teamID
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        intakeDate
        pickupDate
        completed
        customerID
        deviceID
        teamID
        Notes {
          nextToken
          __typename
        }
        Services {
          nextToken
          __typename
        }
        status
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderServices = /* GraphQL */ `
  query ListOrderServices(
    $filter: ModelOrderServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        serviceId
        orderId
        service {
          id
          name
          price
          teamID
          createdAt
          updatedAt
          __typename
        }
        order {
          id
          intakeDate
          pickupDate
          completed
          customerID
          deviceID
          teamID
          status
          createdAt
          updatedAt
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
export const orderServicesByServiceId = /* GraphQL */ `
  query OrderServicesByServiceId(
    $serviceId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderServicesByServiceId(
      serviceId: $serviceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        serviceId
        orderId
        service {
          id
          name
          price
          teamID
          createdAt
          updatedAt
          __typename
        }
        order {
          id
          intakeDate
          pickupDate
          completed
          customerID
          deviceID
          teamID
          status
          createdAt
          updatedAt
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
export const orderServicesByOrderId = /* GraphQL */ `
  query OrderServicesByOrderId(
    $orderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderServicesByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        serviceId
        orderId
        service {
          id
          name
          price
          teamID
          createdAt
          updatedAt
          __typename
        }
        order {
          id
          intakeDate
          pickupDate
          completed
          customerID
          deviceID
          teamID
          status
          createdAt
          updatedAt
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
