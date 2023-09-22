/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getCustomer, listDevices, listOrders } from "../graphql/queries";
import {
  updateCustomer,
  updateDevice,
  updateOrder,
} from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CustomerUpdateForm(props) {
  const {
    id: idProp,
    customer: customerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    first: "",
    last: "",
    phone: "",
    email: "",
    Orders: [],
    Devices: [],
  };
  const [first, setFirst] = React.useState(initialValues.first);
  const [last, setLast] = React.useState(initialValues.last);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [Orders, setOrders] = React.useState(initialValues.Orders);
  const [OrdersLoading, setOrdersLoading] = React.useState(false);
  const [OrdersRecords, setOrdersRecords] = React.useState([]);
  const [Devices, setDevices] = React.useState(initialValues.Devices);
  const [DevicesLoading, setDevicesLoading] = React.useState(false);
  const [DevicesRecords, setDevicesRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = customerRecord
      ? {
          ...initialValues,
          ...customerRecord,
          Orders: linkedOrders,
          Devices: linkedDevices,
        }
      : initialValues;
    setFirst(cleanValues.first);
    setLast(cleanValues.last);
    setPhone(cleanValues.phone);
    setEmail(cleanValues.email);
    setOrders(cleanValues.Orders ?? []);
    setCurrentOrdersValue(undefined);
    setCurrentOrdersDisplayValue("");
    setDevices(cleanValues.Devices ?? []);
    setCurrentDevicesValue(undefined);
    setCurrentDevicesDisplayValue("");
    setErrors({});
  };
  const [customerRecord, setCustomerRecord] = React.useState(customerModelProp);
  const [linkedOrders, setLinkedOrders] = React.useState([]);
  const canUnlinkOrders = false;
  const [linkedDevices, setLinkedDevices] = React.useState([]);
  const canUnlinkDevices = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getCustomer,
              variables: { id: idProp },
            })
          )?.data?.getCustomer
        : customerModelProp;
      const linkedOrders = record?.Orders?.items ?? [];
      setLinkedOrders(linkedOrders);
      const linkedDevices = record?.Devices?.items ?? [];
      setLinkedDevices(linkedDevices);
      setCustomerRecord(record);
    };
    queryData();
  }, [idProp, customerModelProp]);
  React.useEffect(resetStateValues, [
    customerRecord,
    linkedOrders,
    linkedDevices,
  ]);
  const [currentOrdersDisplayValue, setCurrentOrdersDisplayValue] =
    React.useState("");
  const [currentOrdersValue, setCurrentOrdersValue] = React.useState(undefined);
  const OrdersRef = React.createRef();
  const [currentDevicesDisplayValue, setCurrentDevicesDisplayValue] =
    React.useState("");
  const [currentDevicesValue, setCurrentDevicesValue] =
    React.useState(undefined);
  const DevicesRef = React.createRef();
  const getIDValue = {
    Orders: (r) => JSON.stringify({ id: r?.id }),
    Devices: (r) => JSON.stringify({ id: r?.id }),
  };
  const OrdersIdSet = new Set(
    Array.isArray(Orders)
      ? Orders.map((r) => getIDValue.Orders?.(r))
      : getIDValue.Orders?.(Orders)
  );
  const DevicesIdSet = new Set(
    Array.isArray(Devices)
      ? Devices.map((r) => getIDValue.Devices?.(r))
      : getIDValue.Devices?.(Devices)
  );
  const getDisplayValue = {
    Orders: (r) => `${r?.orderNumber ? r?.orderNumber + " - " : ""}${r?.id}`,
    Devices: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
  };
  const validations = {
    first: [{ type: "Required" }],
    last: [{ type: "Required" }],
    phone: [{ type: "Required" }, { type: "Phone" }],
    email: [{ type: "Email" }],
    Orders: [],
    Devices: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchOrdersRecords = async (value) => {
    setOrdersLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { orderNumber: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listOrders,
          variables,
        })
      )?.data?.listOrders?.items;
      var loaded = result.filter(
        (item) => !OrdersIdSet.has(getIDValue.Orders?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setOrdersRecords(newOptions.slice(0, autocompleteLength));
    setOrdersLoading(false);
  };
  const fetchDevicesRecords = async (value) => {
    setDevicesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ type: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listDevices,
          variables,
        })
      )?.data?.listDevices?.items;
      var loaded = result.filter(
        (item) => !DevicesIdSet.has(getIDValue.Devices?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setDevicesRecords(newOptions.slice(0, autocompleteLength));
    setDevicesLoading(false);
  };
  React.useEffect(() => {
    fetchOrdersRecords("");
    fetchDevicesRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          first,
          last,
          phone,
          email: email ?? null,
          Orders: Orders ?? null,
          Devices: Devices ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const promises = [];
          const ordersToLink = [];
          const ordersToUnLink = [];
          const ordersSet = new Set();
          const linkedOrdersSet = new Set();
          Orders.forEach((r) => ordersSet.add(getIDValue.Orders?.(r)));
          linkedOrders.forEach((r) =>
            linkedOrdersSet.add(getIDValue.Orders?.(r))
          );
          linkedOrders.forEach((r) => {
            if (!ordersSet.has(getIDValue.Orders?.(r))) {
              ordersToUnLink.push(r);
            }
          });
          Orders.forEach((r) => {
            if (!linkedOrdersSet.has(getIDValue.Orders?.(r))) {
              ordersToLink.push(r);
            }
          });
          ordersToUnLink.forEach((original) => {
            if (!canUnlinkOrders) {
              throw Error(
                `Order ${original.id} cannot be unlinked from Customer because customerID is a required field.`
              );
            }
            promises.push(
              API.graphql({
                query: updateOrder,
                variables: {
                  input: {
                    id: original.id,
                    customerID: null,
                  },
                },
              })
            );
          });
          ordersToLink.forEach((original) => {
            promises.push(
              API.graphql({
                query: updateOrder,
                variables: {
                  input: {
                    id: original.id,
                    customerID: customerRecord.id,
                  },
                },
              })
            );
          });
          const devicesToLink = [];
          const devicesToUnLink = [];
          const devicesSet = new Set();
          const linkedDevicesSet = new Set();
          Devices.forEach((r) => devicesSet.add(getIDValue.Devices?.(r)));
          linkedDevices.forEach((r) =>
            linkedDevicesSet.add(getIDValue.Devices?.(r))
          );
          linkedDevices.forEach((r) => {
            if (!devicesSet.has(getIDValue.Devices?.(r))) {
              devicesToUnLink.push(r);
            }
          });
          Devices.forEach((r) => {
            if (!linkedDevicesSet.has(getIDValue.Devices?.(r))) {
              devicesToLink.push(r);
            }
          });
          devicesToUnLink.forEach((original) => {
            if (!canUnlinkDevices) {
              throw Error(
                `Device ${original.id} cannot be unlinked from Customer because customerID is a required field.`
              );
            }
            promises.push(
              API.graphql({
                query: updateDevice,
                variables: {
                  input: {
                    id: original.id,
                    customerID: null,
                  },
                },
              })
            );
          });
          devicesToLink.forEach((original) => {
            promises.push(
              API.graphql({
                query: updateDevice,
                variables: {
                  input: {
                    id: original.id,
                    customerID: customerRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            first: modelFields.first,
            last: modelFields.last,
            phone: modelFields.phone,
            email: modelFields.email ?? null,
          };
          promises.push(
            API.graphql({
              query: updateCustomer,
              variables: {
                input: {
                  id: customerRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CustomerUpdateForm")}
      {...rest}
    >
      <TextField
        label="First"
        isRequired={true}
        isReadOnly={false}
        value={first}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first: value,
              last,
              phone,
              email,
              Orders,
              Devices,
            };
            const result = onChange(modelFields);
            value = result?.first ?? value;
          }
          if (errors.first?.hasError) {
            runValidationTasks("first", value);
          }
          setFirst(value);
        }}
        onBlur={() => runValidationTasks("first", first)}
        errorMessage={errors.first?.errorMessage}
        hasError={errors.first?.hasError}
        {...getOverrideProps(overrides, "first")}
      ></TextField>
      <TextField
        label="Last"
        isRequired={true}
        isReadOnly={false}
        value={last}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first,
              last: value,
              phone,
              email,
              Orders,
              Devices,
            };
            const result = onChange(modelFields);
            value = result?.last ?? value;
          }
          if (errors.last?.hasError) {
            runValidationTasks("last", value);
          }
          setLast(value);
        }}
        onBlur={() => runValidationTasks("last", last)}
        errorMessage={errors.last?.errorMessage}
        hasError={errors.last?.hasError}
        {...getOverrideProps(overrides, "last")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first,
              last,
              phone: value,
              email,
              Orders,
              Devices,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first,
              last,
              phone,
              email: value,
              Orders,
              Devices,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              first,
              last,
              phone,
              email,
              Orders: values,
              Devices,
            };
            const result = onChange(modelFields);
            values = result?.Orders ?? values;
          }
          setOrders(values);
          setCurrentOrdersValue(undefined);
          setCurrentOrdersDisplayValue("");
        }}
        currentFieldValue={currentOrdersValue}
        label={"Orders"}
        items={Orders}
        hasError={errors?.Orders?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Orders", currentOrdersValue)
        }
        errorMessage={errors?.Orders?.errorMessage}
        getBadgeText={getDisplayValue.Orders}
        setFieldValue={(model) => {
          setCurrentOrdersDisplayValue(
            model ? getDisplayValue.Orders(model) : ""
          );
          setCurrentOrdersValue(model);
        }}
        inputFieldRef={OrdersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Orders"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Order"
          value={currentOrdersDisplayValue}
          options={OrdersRecords.filter(
            (r) => !OrdersIdSet.has(getIDValue.Orders?.(r))
          ).map((r) => ({
            id: getIDValue.Orders?.(r),
            label: getDisplayValue.Orders?.(r),
          }))}
          isLoading={OrdersLoading}
          onSelect={({ id, label }) => {
            setCurrentOrdersValue(
              OrdersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentOrdersDisplayValue(label);
            runValidationTasks("Orders", label);
          }}
          onClear={() => {
            setCurrentOrdersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchOrdersRecords(value);
            if (errors.Orders?.hasError) {
              runValidationTasks("Orders", value);
            }
            setCurrentOrdersDisplayValue(value);
            setCurrentOrdersValue(undefined);
          }}
          onBlur={() => runValidationTasks("Orders", currentOrdersDisplayValue)}
          errorMessage={errors.Orders?.errorMessage}
          hasError={errors.Orders?.hasError}
          ref={OrdersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Orders")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              first,
              last,
              phone,
              email,
              Orders,
              Devices: values,
            };
            const result = onChange(modelFields);
            values = result?.Devices ?? values;
          }
          setDevices(values);
          setCurrentDevicesValue(undefined);
          setCurrentDevicesDisplayValue("");
        }}
        currentFieldValue={currentDevicesValue}
        label={"Devices"}
        items={Devices}
        hasError={errors?.Devices?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Devices", currentDevicesValue)
        }
        errorMessage={errors?.Devices?.errorMessage}
        getBadgeText={getDisplayValue.Devices}
        setFieldValue={(model) => {
          setCurrentDevicesDisplayValue(
            model ? getDisplayValue.Devices(model) : ""
          );
          setCurrentDevicesValue(model);
        }}
        inputFieldRef={DevicesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Devices"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Device"
          value={currentDevicesDisplayValue}
          options={DevicesRecords.filter(
            (r) => !DevicesIdSet.has(getIDValue.Devices?.(r))
          ).map((r) => ({
            id: getIDValue.Devices?.(r),
            label: getDisplayValue.Devices?.(r),
          }))}
          isLoading={DevicesLoading}
          onSelect={({ id, label }) => {
            setCurrentDevicesValue(
              DevicesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentDevicesDisplayValue(label);
            runValidationTasks("Devices", label);
          }}
          onClear={() => {
            setCurrentDevicesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchDevicesRecords(value);
            if (errors.Devices?.hasError) {
              runValidationTasks("Devices", value);
            }
            setCurrentDevicesDisplayValue(value);
            setCurrentDevicesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Devices", currentDevicesDisplayValue)
          }
          errorMessage={errors.Devices?.errorMessage}
          hasError={errors.Devices?.hasError}
          ref={DevicesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Devices")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || customerModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || customerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
