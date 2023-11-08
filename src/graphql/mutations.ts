/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderService = /* GraphQL */ `
  mutation CreateOrderService(
    $input: CreateOrderServiceInput!
    $condition: ModelOrderServiceConditionInput
  ) {
    createOrderService(input: $input, condition: $condition) {
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
export const updateOrderService = /* GraphQL */ `
  mutation UpdateOrderService(
    $input: UpdateOrderServiceInput!
    $condition: ModelOrderServiceConditionInput
  ) {
    updateOrderService(input: $input, condition: $condition) {
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
export const deleteOrderService = /* GraphQL */ `
  mutation DeleteOrderService(
    $input: DeleteOrderServiceInput!
    $condition: ModelOrderServiceConditionInput
  ) {
    deleteOrderService(input: $input, condition: $condition) {
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
