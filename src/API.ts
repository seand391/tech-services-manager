/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateServiceInput = {
  id?: string | null,
  name: string,
  price: string,
  teamID?: string | null,
};

export type ModelServiceConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelStringInput | null,
  teamID?: ModelIDInput | null,
  and?: Array< ModelServiceConditionInput | null > | null,
  or?: Array< ModelServiceConditionInput | null > | null,
  not?: ModelServiceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Service = {
  __typename: "Service",
  id: string,
  name: string,
  price: string,
  teamID?: string | null,
  orders?: ModelOrderServiceConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderServiceConnection = {
  __typename: "ModelOrderServiceConnection",
  items:  Array<OrderService | null >,
  nextToken?: string | null,
};

export type OrderService = {
  __typename: "OrderService",
  id: string,
  serviceId: string,
  orderId: string,
  service: Service,
  order: Order,
  createdAt: string,
  updatedAt: string,
};

export type Order = {
  __typename: "Order",
  id: string,
  intakeDate: string,
  pickupDate?: string | null,
  completed: boolean,
  customerID: string,
  deviceID: string,
  teamID?: string | null,
  Notes?: ModelNoteConnection | null,
  Services?: ModelOrderServiceConnection | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection",
  items:  Array<Note | null >,
  nextToken?: string | null,
};

export type Note = {
  __typename: "Note",
  id: string,
  text: string,
  orderID: string,
  date: string,
  author: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateServiceInput = {
  id: string,
  name?: string | null,
  price?: string | null,
  teamID?: string | null,
};

export type DeleteServiceInput = {
  id: string,
};

export type CreateNoteInput = {
  id?: string | null,
  text: string,
  orderID: string,
  date: string,
  author: string,
};

export type ModelNoteConditionInput = {
  text?: ModelStringInput | null,
  orderID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type UpdateNoteInput = {
  id: string,
  text?: string | null,
  orderID?: string | null,
  date?: string | null,
  author?: string | null,
};

export type DeleteNoteInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  first: string,
  last: string,
  phone: string,
  email?: string | null,
  teamID?: string | null,
};

export type ModelCustomerConditionInput = {
  first?: ModelStringInput | null,
  last?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  teamID?: ModelIDInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  first: string,
  last: string,
  phone: string,
  email?: string | null,
  Orders?: ModelOrderConnection | null,
  Devices?: ModelOrderConnection | null,
  teamID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type UpdateCustomerInput = {
  id: string,
  first?: string | null,
  last?: string | null,
  phone?: string | null,
  email?: string | null,
  teamID?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateDeviceInput = {
  id?: string | null,
  type: string,
  brand?: string | null,
  password?: string | null,
  serialNumber?: string | null,
  customerID: string,
};

export type ModelDeviceConditionInput = {
  type?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  password?: ModelStringInput | null,
  serialNumber?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  and?: Array< ModelDeviceConditionInput | null > | null,
  or?: Array< ModelDeviceConditionInput | null > | null,
  not?: ModelDeviceConditionInput | null,
};

export type Device = {
  __typename: "Device",
  id: string,
  type: string,
  brand?: string | null,
  password?: string | null,
  serialNumber?: string | null,
  customerID: string,
  Orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDeviceInput = {
  id: string,
  type?: string | null,
  brand?: string | null,
  password?: string | null,
  serialNumber?: string | null,
  customerID?: string | null,
};

export type DeleteDeviceInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  intakeDate: string,
  pickupDate?: string | null,
  completed: boolean,
  customerID: string,
  deviceID: string,
  teamID?: string | null,
  status?: string | null,
};

export type ModelOrderConditionInput = {
  intakeDate?: ModelStringInput | null,
  pickupDate?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  customerID?: ModelIDInput | null,
  deviceID?: ModelIDInput | null,
  teamID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOrderInput = {
  id: string,
  intakeDate?: string | null,
  pickupDate?: string | null,
  completed?: boolean | null,
  customerID?: string | null,
  deviceID?: string | null,
  teamID?: string | null,
  status?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateOrderServiceInput = {
  id?: string | null,
  serviceId: string,
  orderId: string,
};

export type ModelOrderServiceConditionInput = {
  serviceId?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  and?: Array< ModelOrderServiceConditionInput | null > | null,
  or?: Array< ModelOrderServiceConditionInput | null > | null,
  not?: ModelOrderServiceConditionInput | null,
};

export type UpdateOrderServiceInput = {
  id: string,
  serviceId?: string | null,
  orderId?: string | null,
};

export type DeleteOrderServiceInput = {
  id: string,
};

export type ModelServiceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  price?: ModelStringInput | null,
  teamID?: ModelIDInput | null,
  and?: Array< ModelServiceFilterInput | null > | null,
  or?: Array< ModelServiceFilterInput | null > | null,
  not?: ModelServiceFilterInput | null,
};

export type ModelServiceConnection = {
  __typename: "ModelServiceConnection",
  items:  Array<Service | null >,
  nextToken?: string | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  orderID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  first?: ModelStringInput | null,
  last?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  teamID?: ModelIDInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelDeviceFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  password?: ModelStringInput | null,
  serialNumber?: ModelStringInput | null,
  customerID?: ModelIDInput | null,
  and?: Array< ModelDeviceFilterInput | null > | null,
  or?: Array< ModelDeviceFilterInput | null > | null,
  not?: ModelDeviceFilterInput | null,
};

export type ModelDeviceConnection = {
  __typename: "ModelDeviceConnection",
  items:  Array<Device | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  intakeDate?: ModelStringInput | null,
  pickupDate?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  customerID?: ModelIDInput | null,
  deviceID?: ModelIDInput | null,
  teamID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderServiceFilterInput = {
  id?: ModelIDInput | null,
  serviceId?: ModelIDInput | null,
  orderId?: ModelIDInput | null,
  and?: Array< ModelOrderServiceFilterInput | null > | null,
  or?: Array< ModelOrderServiceFilterInput | null > | null,
  not?: ModelOrderServiceFilterInput | null,
};

export type ModelSubscriptionServiceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionStringInput | null,
  teamID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionServiceFilterInput | null > | null,
  or?: Array< ModelSubscriptionServiceFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  orderID?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionNoteFilterInput | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first?: ModelSubscriptionStringInput | null,
  last?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  teamID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type ModelSubscriptionDeviceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  serialNumber?: ModelSubscriptionStringInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDeviceFilterInput | null > | null,
  or?: Array< ModelSubscriptionDeviceFilterInput | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  intakeDate?: ModelSubscriptionStringInput | null,
  pickupDate?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  deviceID?: ModelSubscriptionIDInput | null,
  teamID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionOrderServiceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  serviceId?: ModelSubscriptionIDInput | null,
  orderId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderServiceFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderServiceFilterInput | null > | null,
};

export type CreateServiceMutationVariables = {
  input: CreateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type CreateServiceMutation = {
  createService?:  {
    __typename: "Service",
    id: string,
    name: string,
    price: string,
    teamID?: string | null,
    orders?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateServiceMutationVariables = {
  input: UpdateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type UpdateServiceMutation = {
  updateService?:  {
    __typename: "Service",
    id: string,
    name: string,
    price: string,
    teamID?: string | null,
    orders?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteServiceMutationVariables = {
  input: DeleteServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type DeleteServiceMutation = {
  deleteService?:  {
    __typename: "Service",
    id: string,
    name: string,
    price: string,
    teamID?: string | null,
    orders?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    orderID: string,
    date: string,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    orderID: string,
    date: string,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    orderID: string,
    date: string,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    first: string,
    last: string,
    phone: string,
    email?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    teamID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    first: string,
    last: string,
    phone: string,
    email?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    teamID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    first: string,
    last: string,
    phone: string,
    email?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    teamID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDeviceMutationVariables = {
  input: CreateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type CreateDeviceMutation = {
  createDevice?:  {
    __typename: "Device",
    id: string,
    type: string,
    brand?: string | null,
    password?: string | null,
    serialNumber?: string | null,
    customerID: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDeviceMutationVariables = {
  input: UpdateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceMutation = {
  updateDevice?:  {
    __typename: "Device",
    id: string,
    type: string,
    brand?: string | null,
    password?: string | null,
    serialNumber?: string | null,
    customerID: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDeviceMutationVariables = {
  input: DeleteDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type DeleteDeviceMutation = {
  deleteDevice?:  {
    __typename: "Device",
    id: string,
    type: string,
    brand?: string | null,
    password?: string | null,
    serialNumber?: string | null,
    customerID: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    intakeDate: string,
    pickupDate?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
    teamID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        orderID: string,
        date: string,
        author: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    intakeDate: string,
    pickupDate?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
    teamID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        orderID: string,
        date: string,
        author: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    intakeDate: string,
    pickupDate?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
    teamID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        orderID: string,
        date: string,
        author: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderServiceMutationVariables = {
  input: CreateOrderServiceInput,
  condition?: ModelOrderServiceConditionInput | null,
};

export type CreateOrderServiceMutation = {
  createOrderService?:  {
    __typename: "OrderService",
    id: string,
    serviceId: string,
    orderId: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: string,
      teamID?: string | null,
      orders?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    order:  {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderServiceMutationVariables = {
  input: UpdateOrderServiceInput,
  condition?: ModelOrderServiceConditionInput | null,
};

export type UpdateOrderServiceMutation = {
  updateOrderService?:  {
    __typename: "OrderService",
    id: string,
    serviceId: string,
    orderId: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: string,
      teamID?: string | null,
      orders?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    order:  {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderServiceMutationVariables = {
  input: DeleteOrderServiceInput,
  condition?: ModelOrderServiceConditionInput | null,
};

export type DeleteOrderServiceMutation = {
  deleteOrderService?:  {
    __typename: "OrderService",
    id: string,
    serviceId: string,
    orderId: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: string,
      teamID?: string | null,
      orders?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    order:  {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetServiceQueryVariables = {
  id: string,
};

export type GetServiceQuery = {
  getService?:  {
    __typename: "Service",
    id: string,
    name: string,
    price: string,
    teamID?: string | null,
    orders?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: ModelServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices?:  {
    __typename: "ModelServiceConnection",
    items:  Array< {
      __typename: "Service",
      id: string,
      name: string,
      price: string,
      teamID?: string | null,
      orders?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    orderID: string,
    date: string,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      text: string,
      orderID: string,
      date: string,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotesByOrderIDQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotesByOrderIDQuery = {
  notesByOrderID?:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      text: string,
      orderID: string,
      date: string,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    first: string,
    last: string,
    phone: string,
    email?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    teamID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      first: string,
      last: string,
      phone: string,
      email?: string | null,
      Orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      Devices?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      teamID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDeviceQueryVariables = {
  id: string,
};

export type GetDeviceQuery = {
  getDevice?:  {
    __typename: "Device",
    id: string,
    type: string,
    brand?: string | null,
    password?: string | null,
    serialNumber?: string | null,
    customerID: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDevicesQueryVariables = {
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDevicesQuery = {
  listDevices?:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      type: string,
      brand?: string | null,
      password?: string | null,
      serialNumber?: string | null,
      customerID: string,
      Orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DevicesByCustomerIDQueryVariables = {
  customerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DevicesByCustomerIDQuery = {
  devicesByCustomerID?:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      type: string,
      brand?: string | null,
      password?: string | null,
      serialNumber?: string | null,
      customerID: string,
      Orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    intakeDate: string,
    pickupDate?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
    teamID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        orderID: string,
        date: string,
        author: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByCustomerIDQueryVariables = {
  customerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByCustomerIDQuery = {
  ordersByCustomerID?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByDeviceIDQueryVariables = {
  deviceID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByDeviceIDQuery = {
  ordersByDeviceID?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderServiceQueryVariables = {
  id: string,
};

export type GetOrderServiceQuery = {
  getOrderService?:  {
    __typename: "OrderService",
    id: string,
    serviceId: string,
    orderId: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: string,
      teamID?: string | null,
      orders?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    order:  {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrderServicesQueryVariables = {
  filter?: ModelOrderServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderServicesQuery = {
  listOrderServices?:  {
    __typename: "ModelOrderServiceConnection",
    items:  Array< {
      __typename: "OrderService",
      id: string,
      serviceId: string,
      orderId: string,
      service:  {
        __typename: "Service",
        id: string,
        name: string,
        price: string,
        teamID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      order:  {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderServicesByServiceIdQueryVariables = {
  serviceId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderServicesByServiceIdQuery = {
  orderServicesByServiceId?:  {
    __typename: "ModelOrderServiceConnection",
    items:  Array< {
      __typename: "OrderService",
      id: string,
      serviceId: string,
      orderId: string,
      service:  {
        __typename: "Service",
        id: string,
        name: string,
        price: string,
        teamID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      order:  {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderServicesByOrderIdQueryVariables = {
  orderId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderServicesByOrderIdQuery = {
  orderServicesByOrderId?:  {
    __typename: "ModelOrderServiceConnection",
    items:  Array< {
      __typename: "OrderService",
      id: string,
      serviceId: string,
      orderId: string,
      service:  {
        __typename: "Service",
        id: string,
        name: string,
        price: string,
        teamID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      order:  {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateServiceSubscriptionVariables = {
  filter?: ModelSubscriptionServiceFilterInput | null,
};

export type OnCreateServiceSubscription = {
  onCreateService?:  {
    __typename: "Service",
    id: string,
    name: string,
    price: string,
    teamID?: string | null,
    orders?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateServiceSubscriptionVariables = {
  filter?: ModelSubscriptionServiceFilterInput | null,
};

export type OnUpdateServiceSubscription = {
  onUpdateService?:  {
    __typename: "Service",
    id: string,
    name: string,
    price: string,
    teamID?: string | null,
    orders?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteServiceSubscriptionVariables = {
  filter?: ModelSubscriptionServiceFilterInput | null,
};

export type OnDeleteServiceSubscription = {
  onDeleteService?:  {
    __typename: "Service",
    id: string,
    name: string,
    price: string,
    teamID?: string | null,
    orders?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnCreateNoteSubscription = {
  onCreateNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    orderID: string,
    date: string,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    orderID: string,
    date: string,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  filter?: ModelSubscriptionNoteFilterInput | null,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote?:  {
    __typename: "Note",
    id: string,
    text: string,
    orderID: string,
    date: string,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    first: string,
    last: string,
    phone: string,
    email?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    teamID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    first: string,
    last: string,
    phone: string,
    email?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    teamID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    first: string,
    last: string,
    phone: string,
    email?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    teamID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
};

export type OnCreateDeviceSubscription = {
  onCreateDevice?:  {
    __typename: "Device",
    id: string,
    type: string,
    brand?: string | null,
    password?: string | null,
    serialNumber?: string | null,
    customerID: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
};

export type OnUpdateDeviceSubscription = {
  onUpdateDevice?:  {
    __typename: "Device",
    id: string,
    type: string,
    brand?: string | null,
    password?: string | null,
    serialNumber?: string | null,
    customerID: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
};

export type OnDeleteDeviceSubscription = {
  onDeleteDevice?:  {
    __typename: "Device",
    id: string,
    type: string,
    brand?: string | null,
    password?: string | null,
    serialNumber?: string | null,
    customerID: string,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        intakeDate: string,
        pickupDate?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        teamID?: string | null,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    intakeDate: string,
    pickupDate?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
    teamID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        orderID: string,
        date: string,
        author: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    intakeDate: string,
    pickupDate?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
    teamID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        orderID: string,
        date: string,
        author: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    intakeDate: string,
    pickupDate?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
    teamID?: string | null,
    Notes?:  {
      __typename: "ModelNoteConnection",
      items:  Array< {
        __typename: "Note",
        id: string,
        text: string,
        orderID: string,
        date: string,
        author: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Services?:  {
      __typename: "ModelOrderServiceConnection",
      items:  Array< {
        __typename: "OrderService",
        id: string,
        serviceId: string,
        orderId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderServiceSubscriptionVariables = {
  filter?: ModelSubscriptionOrderServiceFilterInput | null,
};

export type OnCreateOrderServiceSubscription = {
  onCreateOrderService?:  {
    __typename: "OrderService",
    id: string,
    serviceId: string,
    orderId: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: string,
      teamID?: string | null,
      orders?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    order:  {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderServiceSubscriptionVariables = {
  filter?: ModelSubscriptionOrderServiceFilterInput | null,
};

export type OnUpdateOrderServiceSubscription = {
  onUpdateOrderService?:  {
    __typename: "OrderService",
    id: string,
    serviceId: string,
    orderId: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: string,
      teamID?: string | null,
      orders?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    order:  {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderServiceSubscriptionVariables = {
  filter?: ModelSubscriptionOrderServiceFilterInput | null,
};

export type OnDeleteOrderServiceSubscription = {
  onDeleteOrderService?:  {
    __typename: "OrderService",
    id: string,
    serviceId: string,
    orderId: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      price: string,
      teamID?: string | null,
      orders?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    order:  {
      __typename: "Order",
      id: string,
      intakeDate: string,
      pickupDate?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      teamID?: string | null,
      Notes?:  {
        __typename: "ModelNoteConnection",
        nextToken?: string | null,
      } | null,
      Services?:  {
        __typename: "ModelOrderServiceConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
