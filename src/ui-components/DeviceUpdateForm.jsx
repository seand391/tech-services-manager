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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getDevice, listOrders } from "../graphql/queries";
import { updateDevice, updateOrder } from "../graphql/mutations";
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
export default function DeviceUpdateForm(props) {
  const {
    id: idProp,
    device: deviceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    brand: "",
    password: "",
    serialNumber: "",
    customerID: "",
    Orders: [],
  };
  const [type, setType] = React.useState(initialValues.type);
  const [brand, setBrand] = React.useState(initialValues.brand);
  const [password, setPassword] = React.useState(initialValues.password);
  const [serialNumber, setSerialNumber] = React.useState(
    initialValues.serialNumber
  );
  const [customerID, setCustomerID] = React.useState(initialValues.customerID);
  const [Orders, setOrders] = React.useState(initialValues.Orders);
  const [OrdersLoading, setOrdersLoading] = React.useState(false);
  const [OrdersRecords, setOrdersRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = deviceRecord
      ? { ...initialValues, ...deviceRecord, Orders: linkedOrders }
      : initialValues;
    setType(cleanValues.type);
    setBrand(cleanValues.brand);
    setPassword(cleanValues.password);
    setSerialNumber(cleanValues.serialNumber);
    setCustomerID(cleanValues.customerID);
    setOrders(cleanValues.Orders ?? []);
    setCurrentOrdersValue(undefined);
    setCurrentOrdersDisplayValue("");
    setErrors({});
  };
  const [deviceRecord, setDeviceRecord] = React.useState(deviceModelProp);
  const [linkedOrders, setLinkedOrders] = React.useState([]);
  const canUnlinkOrders = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getDevice.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDevice
        : deviceModelProp;
      const linkedOrders = record?.Orders?.items ?? [];
      setLinkedOrders(linkedOrders);
      setDeviceRecord(record);
    };
    queryData();
  }, [idProp, deviceModelProp]);
  React.useEffect(resetStateValues, [deviceRecord, linkedOrders]);
  const [currentOrdersDisplayValue, setCurrentOrdersDisplayValue] =
    React.useState("");
  const [currentOrdersValue, setCurrentOrdersValue] = React.useState(undefined);
  const OrdersRef = React.createRef();
  const getIDValue = {
    Orders: (r) => JSON.stringify({ id: r?.id }),
  };
  const OrdersIdSet = new Set(
    Array.isArray(Orders)
      ? Orders.map((r) => getIDValue.Orders?.(r))
      : getIDValue.Orders?.(Orders)
  );
  const getDisplayValue = {
    Orders: (r) => `${r?.orderNumber ? r?.orderNumber + " - " : ""}${r?.id}`,
  };
  const validations = {
    type: [{ type: "Required" }],
    brand: [],
    password: [],
    serialNumber: [],
    customerID: [{ type: "Required" }],
    Orders: [],
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
          query: listOrders.replaceAll("__typename", ""),
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
  React.useEffect(() => {
    fetchOrdersRecords("");
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
          type,
          brand: brand ?? null,
          password: password ?? null,
          serialNumber: serialNumber ?? null,
          customerID,
          Orders: Orders ?? null,
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
                `Order ${original.id} cannot be unlinked from Device because deviceID is a required field.`
              );
            }
            promises.push(
              API.graphql({
                query: updateOrder.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    deviceID: null,
                  },
                },
              })
            );
          });
          ordersToLink.forEach((original) => {
            promises.push(
              API.graphql({
                query: updateOrder.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    deviceID: deviceRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            type: modelFields.type,
            brand: modelFields.brand ?? null,
            password: modelFields.password ?? null,
            serialNumber: modelFields.serialNumber ?? null,
            customerID: modelFields.customerID,
          };
          promises.push(
            API.graphql({
              query: updateDevice.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: deviceRecord.id,
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
      {...getOverrideProps(overrides, "DeviceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              brand,
              password,
              serialNumber,
              customerID,
              Orders,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Brand"
        isRequired={false}
        isReadOnly={false}
        value={brand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              brand: value,
              password,
              serialNumber,
              customerID,
              Orders,
            };
            const result = onChange(modelFields);
            value = result?.brand ?? value;
          }
          if (errors.brand?.hasError) {
            runValidationTasks("brand", value);
          }
          setBrand(value);
        }}
        onBlur={() => runValidationTasks("brand", brand)}
        errorMessage={errors.brand?.errorMessage}
        hasError={errors.brand?.hasError}
        {...getOverrideProps(overrides, "brand")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={false}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              brand,
              password: value,
              serialNumber,
              customerID,
              Orders,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="Serial number"
        isRequired={false}
        isReadOnly={false}
        value={serialNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              brand,
              password,
              serialNumber: value,
              customerID,
              Orders,
            };
            const result = onChange(modelFields);
            value = result?.serialNumber ?? value;
          }
          if (errors.serialNumber?.hasError) {
            runValidationTasks("serialNumber", value);
          }
          setSerialNumber(value);
        }}
        onBlur={() => runValidationTasks("serialNumber", serialNumber)}
        errorMessage={errors.serialNumber?.errorMessage}
        hasError={errors.serialNumber?.hasError}
        {...getOverrideProps(overrides, "serialNumber")}
      ></TextField>
      <TextField
        label="Customer id"
        isRequired={true}
        isReadOnly={false}
        value={customerID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              brand,
              password,
              serialNumber,
              customerID: value,
              Orders,
            };
            const result = onChange(modelFields);
            value = result?.customerID ?? value;
          }
          if (errors.customerID?.hasError) {
            runValidationTasks("customerID", value);
          }
          setCustomerID(value);
        }}
        onBlur={() => runValidationTasks("customerID", customerID)}
        errorMessage={errors.customerID?.errorMessage}
        hasError={errors.customerID?.hasError}
        {...getOverrideProps(overrides, "customerID")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              type,
              brand,
              password,
              serialNumber,
              customerID,
              Orders: values,
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
          isDisabled={!(idProp || deviceModelProp)}
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
              !(idProp || deviceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
