/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
    onCreateService(filter: $filter) {
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
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
    onUpdateService(filter: $filter) {
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
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
    onDeleteService(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateOrderService = /* GraphQL */ `
  subscription OnCreateOrderService(
    $filter: ModelSubscriptionOrderServiceFilterInput
  ) {
    onCreateOrderService(filter: $filter) {
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
export const onUpdateOrderService = /* GraphQL */ `
  subscription OnUpdateOrderService(
    $filter: ModelSubscriptionOrderServiceFilterInput
  ) {
    onUpdateOrderService(filter: $filter) {
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
export const onDeleteOrderService = /* GraphQL */ `
  subscription OnDeleteOrderService(
    $filter: ModelSubscriptionOrderServiceFilterInput
  ) {
    onDeleteOrderService(filter: $filter) {
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
