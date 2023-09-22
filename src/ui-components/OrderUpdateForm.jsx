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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import {
  getCustomer,
  getDevice,
  getOrder,
  listCustomers,
  listDevices,
} from "../graphql/queries";
import { updateOrder } from "../graphql/mutations";
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
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order: orderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    orderNumber: "",
    intakeDate: "",
    status: "",
    completed: false,
    customerID: undefined,
    deviceID: undefined,
  };
  const [orderNumber, setOrderNumber] = React.useState(
    initialValues.orderNumber
  );
  const [intakeDate, setIntakeDate] = React.useState(initialValues.intakeDate);
  const [status, setStatus] = React.useState(initialValues.status);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [customerID, setCustomerID] = React.useState(initialValues.customerID);
  const [customerIDLoading, setCustomerIDLoading] = React.useState(false);
  const [customerIDRecords, setCustomerIDRecords] = React.useState([]);
  const [selectedCustomerIDRecords, setSelectedCustomerIDRecords] =
    React.useState([]);
  const [deviceID, setDeviceID] = React.useState(initialValues.deviceID);
  const [deviceIDLoading, setDeviceIDLoading] = React.useState(false);
  const [deviceIDRecords, setDeviceIDRecords] = React.useState([]);
  const [selectedDeviceIDRecords, setSelectedDeviceIDRecords] = React.useState(
    []
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord, customerID, deviceID }
      : initialValues;
    setOrderNumber(cleanValues.orderNumber);
    setIntakeDate(cleanValues.intakeDate);
    setStatus(cleanValues.status);
    setCompleted(cleanValues.completed);
    setCustomerID(cleanValues.customerID);
    setCurrentCustomerIDValue(undefined);
    setCurrentCustomerIDDisplayValue("");
    setDeviceID(cleanValues.deviceID);
    setCurrentDeviceIDValue(undefined);
    setCurrentDeviceIDDisplayValue("");
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getOrder,
              variables: { id: idProp },
            })
          )?.data?.getOrder
        : orderModelProp;
      const customerIDRecord = record ? record.customerID : undefined;
      const customerRecord = customerIDRecord
        ? (
            await API.graphql({
              query: getCustomer,
              variables: { id: customerIDRecord },
            })
          )?.data?.getCustomer
        : undefined;
      setCustomerID(customerIDRecord);
      setSelectedCustomerIDRecords([customerRecord]);
      const deviceIDRecord = record ? record.deviceID : undefined;
      const deviceRecord = deviceIDRecord
        ? (
            await API.graphql({
              query: getDevice,
              variables: { id: deviceIDRecord },
            })
          )?.data?.getDevice
        : undefined;
      setDeviceID(deviceIDRecord);
      setSelectedDeviceIDRecords([deviceRecord]);
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [orderRecord, customerID, deviceID]);
  const [currentCustomerIDDisplayValue, setCurrentCustomerIDDisplayValue] =
    React.useState("");
  const [currentCustomerIDValue, setCurrentCustomerIDValue] =
    React.useState(undefined);
  const customerIDRef = React.createRef();
  const [currentDeviceIDDisplayValue, setCurrentDeviceIDDisplayValue] =
    React.useState("");
  const [currentDeviceIDValue, setCurrentDeviceIDValue] =
    React.useState(undefined);
  const deviceIDRef = React.createRef();
  const getDisplayValue = {
    customerID: (r) => `${r?.first ? r?.first + " - " : ""}${r?.id}`,
    deviceID: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
  };
  const validations = {
    orderNumber: [{ type: "Required" }],
    intakeDate: [{ type: "Required" }],
    status: [],
    completed: [{ type: "Required" }],
    customerID: [{ type: "Required" }],
    deviceID: [{ type: "Required" }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  const fetchCustomerIDRecords = async (value) => {
    setCustomerIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ first: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listCustomers,
          variables,
        })
      )?.data?.listCustomers?.items;
      var loaded = result.filter((item) => customerID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCustomerIDRecords(newOptions.slice(0, autocompleteLength));
    setCustomerIDLoading(false);
  };
  const fetchDeviceIDRecords = async (value) => {
    setDeviceIDLoading(true);
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
      var loaded = result.filter((item) => deviceID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setDeviceIDRecords(newOptions.slice(0, autocompleteLength));
    setDeviceIDLoading(false);
  };
  React.useEffect(() => {
    fetchCustomerIDRecords("");
    fetchDeviceIDRecords("");
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
          orderNumber,
          intakeDate,
          status: status ?? null,
          completed,
          customerID,
          deviceID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          await API.graphql({
            query: updateOrder,
            variables: {
              input: {
                id: orderRecord.id,
                ...modelFields,
              },
            },
          });
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
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
      <TextField
        label="Order number"
        isRequired={true}
        isReadOnly={false}
        value={orderNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber: value,
              intakeDate,
              status,
              completed,
              customerID,
              deviceID,
            };
            const result = onChange(modelFields);
            value = result?.orderNumber ?? value;
          }
          if (errors.orderNumber?.hasError) {
            runValidationTasks("orderNumber", value);
          }
          setOrderNumber(value);
        }}
        onBlur={() => runValidationTasks("orderNumber", orderNumber)}
        errorMessage={errors.orderNumber?.errorMessage}
        hasError={errors.orderNumber?.hasError}
        {...getOverrideProps(overrides, "orderNumber")}
      ></TextField>
      <TextField
        label="Intake date"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={intakeDate && convertToLocal(new Date(intakeDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              orderNumber,
              intakeDate: value,
              status,
              completed,
              customerID,
              deviceID,
            };
            const result = onChange(modelFields);
            value = result?.intakeDate ?? value;
          }
          if (errors.intakeDate?.hasError) {
            runValidationTasks("intakeDate", value);
          }
          setIntakeDate(value);
        }}
        onBlur={() => runValidationTasks("intakeDate", intakeDate)}
        errorMessage={errors.intakeDate?.errorMessage}
        hasError={errors.intakeDate?.hasError}
        {...getOverrideProps(overrides, "intakeDate")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderNumber,
              intakeDate,
              status: value,
              completed,
              customerID,
              deviceID,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              orderNumber,
              intakeDate,
              status,
              completed: value,
              customerID,
              deviceID,
            };
            const result = onChange(modelFields);
            value = result?.completed ?? value;
          }
          if (errors.completed?.hasError) {
            runValidationTasks("completed", value);
          }
          setCompleted(value);
        }}
        onBlur={() => runValidationTasks("completed", completed)}
        errorMessage={errors.completed?.errorMessage}
        hasError={errors.completed?.hasError}
        {...getOverrideProps(overrides, "completed")}
      ></SwitchField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              orderNumber,
              intakeDate,
              status,
              completed,
              customerID: value,
              deviceID,
            };
            const result = onChange(modelFields);
            value = result?.customerID ?? value;
          }
          setCustomerID(value);
          setCurrentCustomerIDValue(undefined);
        }}
        currentFieldValue={currentCustomerIDValue}
        label={"Customer id"}
        items={customerID ? [customerID] : []}
        hasError={errors?.customerID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("customerID", currentCustomerIDValue)
        }
        errorMessage={errors?.customerID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.customerID(
                customerIDRecords.find((r) => r.id === value) ??
                  selectedCustomerIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentCustomerIDDisplayValue(
            value
              ? getDisplayValue.customerID(
                  customerIDRecords.find((r) => r.id === value) ??
                    selectedCustomerIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentCustomerIDValue(value);
          const selectedRecord = customerIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedCustomerIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={customerIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Customer id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Customer"
          value={currentCustomerIDDisplayValue}
          options={customerIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.customerID?.(r),
            }))}
          isLoading={customerIDLoading}
          onSelect={({ id, label }) => {
            setCurrentCustomerIDValue(id);
            setCurrentCustomerIDDisplayValue(label);
            runValidationTasks("customerID", label);
          }}
          onClear={() => {
            setCurrentCustomerIDDisplayValue("");
          }}
          defaultValue={customerID}
          onChange={(e) => {
            let { value } = e.target;
            fetchCustomerIDRecords(value);
            if (errors.customerID?.hasError) {
              runValidationTasks("customerID", value);
            }
            setCurrentCustomerIDDisplayValue(value);
            setCurrentCustomerIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("customerID", currentCustomerIDValue)
          }
          errorMessage={errors.customerID?.errorMessage}
          hasError={errors.customerID?.hasError}
          ref={customerIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "customerID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              orderNumber,
              intakeDate,
              status,
              completed,
              customerID,
              deviceID: value,
            };
            const result = onChange(modelFields);
            value = result?.deviceID ?? value;
          }
          setDeviceID(value);
          setCurrentDeviceIDValue(undefined);
        }}
        currentFieldValue={currentDeviceIDValue}
        label={"Device id"}
        items={deviceID ? [deviceID] : []}
        hasError={errors?.deviceID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("deviceID", currentDeviceIDValue)
        }
        errorMessage={errors?.deviceID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.deviceID(
                deviceIDRecords.find((r) => r.id === value) ??
                  selectedDeviceIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentDeviceIDDisplayValue(
            value
              ? getDisplayValue.deviceID(
                  deviceIDRecords.find((r) => r.id === value) ??
                    selectedDeviceIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentDeviceIDValue(value);
          const selectedRecord = deviceIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedDeviceIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={deviceIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Device id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Device"
          value={currentDeviceIDDisplayValue}
          options={deviceIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.deviceID?.(r),
            }))}
          isLoading={deviceIDLoading}
          onSelect={({ id, label }) => {
            setCurrentDeviceIDValue(id);
            setCurrentDeviceIDDisplayValue(label);
            runValidationTasks("deviceID", label);
          }}
          onClear={() => {
            setCurrentDeviceIDDisplayValue("");
          }}
          defaultValue={deviceID}
          onChange={(e) => {
            let { value } = e.target;
            fetchDeviceIDRecords(value);
            if (errors.deviceID?.hasError) {
              runValidationTasks("deviceID", value);
            }
            setCurrentDeviceIDDisplayValue(value);
            setCurrentDeviceIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("deviceID", currentDeviceIDValue)}
          errorMessage={errors.deviceID?.errorMessage}
          hasError={errors.deviceID?.hasError}
          ref={deviceIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "deviceID")}
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
          isDisabled={!(idProp || orderModelProp)}
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
              !(idProp || orderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
