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
  useTheme,
} from "@aws-amplify/ui-react";
import {
  fetchByPath,
  getOverrideProps,
  validateField,
} from "../ui-components/utils";
import { API } from "aws-amplify";
import { listCustomers, listDevices, listServices } from "../graphql/queries";
import { createOrder, createOrderService } from "../graphql/mutations";
import { currentUserSub } from "../pages/api/helpers";
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
        <ScrollView height="inherit" maxHeight={"7rem"}>
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
export default function OrderCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    customerID: undefined,
    deviceID: undefined,
    Services: [],
  };
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
  const [Services, setServices] = React.useState(initialValues.Services);
  const [ServicesLoading, setServicesLoading] = React.useState(false);
  const [ServicesRecords, setServicesRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCustomerID(initialValues.customerID);
    setCurrentCustomerIDValue(undefined);
    setCurrentCustomerIDDisplayValue("");
    setDeviceID(initialValues.deviceID);
    setCurrentDeviceIDValue(undefined);
    setCurrentDeviceIDDisplayValue("");
    setServices(initialValues.Services);
    setCurrentServicesValue(undefined);
    setCurrentServicesDisplayValue("");
    setErrors({});
  };
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
  const [currentServicesDisplayValue, setCurrentServicesDisplayValue] =
    React.useState("");
  const [currentServicesValue, setCurrentServicesValue] =
    React.useState(undefined);
  const ServicesRef = React.createRef();
  const getIDValue = {
    Services: (r) => JSON.stringify({ id: r?.id }),
  };
  const ServicesIdSet = new Set(
    Array.isArray(Services)
      ? Services.map((r) => getIDValue.Services?.(r))
      : getIDValue.Services?.(Services)
  );
  const getDisplayValue = {
    customerID: (r) => `${r?.first ? r?.first + " - " : ""}${r?.id}`,
    deviceID: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
    Services: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    customerID: [{ type: "Required" }],
    deviceID: [{ type: "Required" }],
    Services: [{ type: "Required", validationMessage: "Service is required." }],
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
          query: listCustomers.replaceAll("__typename", ""),
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
          query: listDevices.replaceAll("__typename", ""),
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
  const fetchServicesRecords = async (value) => {
    setServicesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listServices.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listServices?.items;
      var loaded = result.filter(
        (item) => !ServicesIdSet.has(getIDValue.Services?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setServicesRecords(newOptions.slice(0, autocompleteLength));
    setServicesLoading(false);
  };
  React.useEffect(() => {
    fetchCustomerIDRecords("");
    fetchDeviceIDRecords("");
    fetchServicesRecords("");
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
          customerID,
          deviceID,
          Services,
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
          const modelFieldsToSave = {
            customerID: modelFields.customerID,
            deviceID: modelFields.deviceID,
          };
          const order = (
            await API.graphql({
              query: createOrder.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                  completed: false,
                  intakeDate: new Date().toISOString(),
                  teamID: await currentUserSub(),
                },
              },
            })
          )?.data?.createOrder;
          const promises = [];
          promises.push(
            ...Services.reduce((promises, service) => {
              promises.push(
                API.graphql({
                  query: createOrderService.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      orderId: order.id,
                      serviceId: service.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrderCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              customerID: value,
              deviceID,
              Services,
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
              customerID,
              deviceID: value,
              Services,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              customerID,
              deviceID,
              Services: values,
            };
            const result = onChange(modelFields);
            values = result?.Services ?? values;
          }
          setServices(values);
          setCurrentServicesValue(undefined);
          setCurrentServicesDisplayValue("");
        }}
        currentFieldValue={currentServicesValue}
        label={"Services"}
        items={Services}
        hasError={errors?.Services?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Services", currentServicesValue)
        }
        errorMessage={errors?.Services?.errorMessage}
        getBadgeText={getDisplayValue.Services}
        setFieldValue={(model) => {
          setCurrentServicesDisplayValue(
            model ? getDisplayValue.Services(model) : ""
          );
          setCurrentServicesValue(model);
        }}
        inputFieldRef={ServicesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Services"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Service"
          value={currentServicesDisplayValue}
          options={ServicesRecords.map((r) => ({
            id: getIDValue.Services?.(r),
            label: getDisplayValue.Services?.(r),
          }))}
          isLoading={ServicesLoading}
          onSelect={({ id, label }) => {
            setCurrentServicesValue(
              ServicesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentServicesDisplayValue(label);
            runValidationTasks("Services", label);
          }}
          onClear={() => {
            setCurrentServicesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchServicesRecords(value);
            if (errors.Services?.hasError) {
              runValidationTasks("Services", value);
            }
            setCurrentServicesDisplayValue(value);
            setCurrentServicesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Services", currentServicesDisplayValue)
          }
          errorMessage={errors.Services?.errorMessage}
          hasError={errors.Services?.hasError}
          ref={ServicesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Services")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
