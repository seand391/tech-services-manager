/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomerInput = {
  id?: string | null,
  first: string,
  last: string,
  phone: string,
  email?: string | null,
};

export type ModelCustomerConditionInput = {
  first?: ModelStringInput | null,
  last?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
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

export type Customer = {
  __typename: "Customer",
  id: string,
  first: string,
  last: string,
  phone: string,
  email?: string | null,
  Orders?: ModelOrderConnection | null,
  Devices?: ModelDeviceConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  orderNumber: string,
  intakeDate: string,
  status?: string | null,
  completed: boolean,
  customerID: string,
  deviceID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelDeviceConnection = {
  __typename: "ModelDeviceConnection",
  items:  Array<Device | null >,
  nextToken?: string | null,
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

export type UpdateCustomerInput = {
  id: string,
  first?: string | null,
  last?: string | null,
  phone?: string | null,
  email?: string | null,
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
  orderNumber: string,
  intakeDate: string,
  status?: string | null,
  completed: boolean,
  customerID: string,
  deviceID: string,
};

export type ModelOrderConditionInput = {
  orderNumber?: ModelStringInput | null,
  intakeDate?: ModelStringInput | null,
  status?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  customerID?: ModelIDInput | null,
  deviceID?: ModelIDInput | null,
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
  orderNumber?: string | null,
  intakeDate?: string | null,
  status?: string | null,
  completed?: boolean | null,
  customerID?: string | null,
  deviceID?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  first?: ModelStringInput | null,
  last?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  orderNumber?: ModelStringInput | null,
  intakeDate?: ModelStringInput | null,
  status?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  customerID?: ModelIDInput | null,
  deviceID?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first?: ModelSubscriptionStringInput | null,
  last?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
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
  orderNumber?: ModelSubscriptionStringInput | null,
  intakeDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  deviceID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        type: string,
        brand?: string | null,
        password?: string | null,
        serialNumber?: string | null,
        customerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        type: string,
        brand?: string | null,
        password?: string | null,
        serialNumber?: string | null,
        customerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        type: string,
        brand?: string | null,
        password?: string | null,
        serialNumber?: string | null,
        customerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
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
    orderNumber: string,
    intakeDate: string,
    status?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
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
    orderNumber: string,
    intakeDate: string,
    status?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
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
    orderNumber: string,
    intakeDate: string,
    status?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
    createdAt: string,
    updatedAt: string,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        type: string,
        brand?: string | null,
        password?: string | null,
        serialNumber?: string | null,
        customerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        __typename: "ModelDeviceConnection",
        nextToken?: string | null,
      } | null,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
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
    orderNumber: string,
    intakeDate: string,
    status?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
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
      orderNumber: string,
      intakeDate: string,
      status?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
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
      orderNumber: string,
      intakeDate: string,
      status?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
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
      orderNumber: string,
      intakeDate: string,
      status?: string | null,
      completed: boolean,
      customerID: string,
      deviceID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        type: string,
        brand?: string | null,
        password?: string | null,
        serialNumber?: string | null,
        customerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        type: string,
        brand?: string | null,
        password?: string | null,
        serialNumber?: string | null,
        customerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Devices?:  {
      __typename: "ModelDeviceConnection",
      items:  Array< {
        __typename: "Device",
        id: string,
        type: string,
        brand?: string | null,
        password?: string | null,
        serialNumber?: string | null,
        customerID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
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
        orderNumber: string,
        intakeDate: string,
        status?: string | null,
        completed: boolean,
        customerID: string,
        deviceID: string,
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
    orderNumber: string,
    intakeDate: string,
    status?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
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
    orderNumber: string,
    intakeDate: string,
    status?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
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
    orderNumber: string,
    intakeDate: string,
    status?: string | null,
    completed: boolean,
    customerID: string,
    deviceID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
