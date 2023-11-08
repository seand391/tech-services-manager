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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import {
  getCustomer,
  getDevice,
  getOrder,
  listCustomers,
  listDevices,
  listNotes,
  listOrderServices,
  listServices,
  orderServicesByOrderId,
} from "../graphql/queries";
import {
  createOrderService,
  deleteOrderService,
  updateNote,
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
    intakeDate: "",
    pickupDate: "",
    completed: false,
    customerID: undefined,
    deviceID: undefined,
    teamID: "",
    Notes: [],
    Services: [],
    status: "",
  };
  const [intakeDate, setIntakeDate] = React.useState(initialValues.intakeDate);
  const [pickupDate, setPickupDate] = React.useState(initialValues.pickupDate);
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
  const [teamID, setTeamID] = React.useState(initialValues.teamID);
  const [Notes, setNotes] = React.useState(initialValues.Notes);
  const [NotesLoading, setNotesLoading] = React.useState(false);
  const [NotesRecords, setNotesRecords] = React.useState([]);
  const [Services, setServices] = React.useState(initialValues.Services);
  const [ServicesLoading, setServicesLoading] = React.useState(false);
  const [ServicesRecords, setServicesRecords] = React.useState([]);
  const [status, setStatus] = React.useState(initialValues.status);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? {
          ...initialValues,
          ...orderRecord,
          customerID,
          deviceID,
          Notes: linkedNotes,
          Services: linkedServices,
        }
      : initialValues;
    setIntakeDate(cleanValues.intakeDate);
    setPickupDate(cleanValues.pickupDate);
    setCompleted(cleanValues.completed);
    setCustomerID(cleanValues.customerID);
    setCurrentCustomerIDValue(undefined);
    setCurrentCustomerIDDisplayValue("");
    setDeviceID(cleanValues.deviceID);
    setCurrentDeviceIDValue(undefined);
    setCurrentDeviceIDDisplayValue("");
    setTeamID(cleanValues.teamID);
    setNotes(cleanValues.Notes ?? []);
    setCurrentNotesValue(undefined);
    setCurrentNotesDisplayValue("");
    setServices(cleanValues.Services ?? []);
    setCurrentServicesValue(undefined);
    setCurrentServicesDisplayValue("");
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  const [linkedNotes, setLinkedNotes] = React.useState([]);
  const canUnlinkNotes = false;
  const [linkedServices, setLinkedServices] = React.useState([]);
  const canUnlinkServices = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getOrder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getOrder
        : orderModelProp;
      const customerIDRecord = record ? record.customerID : undefined;
      const customerRecord = customerIDRecord
        ? (
            await API.graphql({
              query: getCustomer.replaceAll("__typename", ""),
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
              query: getDevice.replaceAll("__typename", ""),
              variables: { id: deviceIDRecord },
            })
          )?.data?.getDevice
        : undefined;
      setDeviceID(deviceIDRecord);
      setSelectedDeviceIDRecords([deviceRecord]);
      const linkedNotes = record?.Notes?.items ?? [];
      setLinkedNotes(linkedNotes);
      const linkedServices = record
        ? (
            await API.graphql({
              query: orderServicesByOrderId.replaceAll("__typename", ""),
              variables: {
                orderId: record.id,
              },
            })
          ).data.orderServicesByOrderId.items.map((t) => t.service)
        : [];
      setLinkedServices(linkedServices);
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [
    orderRecord,
    customerID,
    deviceID,
    linkedNotes,
    linkedServices,
  ]);
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
  const [currentNotesDisplayValue, setCurrentNotesDisplayValue] =
    React.useState("");
  const [currentNotesValue, setCurrentNotesValue] = React.useState(undefined);
  const NotesRef = React.createRef();
  const [currentServicesDisplayValue, setCurrentServicesDisplayValue] =
    React.useState("");
  const [currentServicesValue, setCurrentServicesValue] =
    React.useState(undefined);
  const ServicesRef = React.createRef();
  const getIDValue = {
    Notes: (r) => JSON.stringify({ id: r?.id }),
    Services: (r) => JSON.stringify({ id: r?.id }),
  };
  const NotesIdSet = new Set(
    Array.isArray(Notes)
      ? Notes.map((r) => getIDValue.Notes?.(r))
      : getIDValue.Notes?.(Notes)
  );
  const ServicesIdSet = new Set(
    Array.isArray(Services)
      ? Services.map((r) => getIDValue.Services?.(r))
      : getIDValue.Services?.(Services)
  );
  const getDisplayValue = {
    customerID: (r) => `${r?.first ? r?.first + " - " : ""}${r?.id}`,
    deviceID: (r) => `${r?.type ? r?.type + " - " : ""}${r?.id}`,
    Notes: (r) => `${r?.text ? r?.text + " - " : ""}${r?.id}`,
    Services: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    intakeDate: [{ type: "Required" }],
    pickupDate: [],
    completed: [{ type: "Required" }],
    customerID: [{ type: "Required" }],
    deviceID: [{ type: "Required" }],
    teamID: [],
    Notes: [],
    Services: [{ type: "Required", validationMessage: "Service is required." }],
    status: [],
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
  const fetchNotesRecords = async (value) => {
    setNotesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ text: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listNotes.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listNotes?.items;
      var loaded = result.filter(
        (item) => !NotesIdSet.has(getIDValue.Notes?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setNotesRecords(newOptions.slice(0, autocompleteLength));
    setNotesLoading(false);
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
    fetchNotesRecords("");
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
          intakeDate,
          pickupDate: pickupDate ?? null,
          completed,
          customerID,
          deviceID,
          teamID: teamID ?? null,
          Notes: Notes ?? null,
          Services,
          status: status ?? null,
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
          const notesToLink = [];
          const notesToUnLink = [];
          const notesSet = new Set();
          const linkedNotesSet = new Set();
          Notes.forEach((r) => notesSet.add(getIDValue.Notes?.(r)));
          linkedNotes.forEach((r) => linkedNotesSet.add(getIDValue.Notes?.(r)));
          linkedNotes.forEach((r) => {
            if (!notesSet.has(getIDValue.Notes?.(r))) {
              notesToUnLink.push(r);
            }
          });
          Notes.forEach((r) => {
            if (!linkedNotesSet.has(getIDValue.Notes?.(r))) {
              notesToLink.push(r);
            }
          });
          notesToUnLink.forEach((original) => {
            if (!canUnlinkNotes) {
              throw Error(
                `Note ${original.id} cannot be unlinked from Order because orderID is a required field.`
              );
            }
            promises.push(
              API.graphql({
                query: updateNote.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    orderID: null,
                  },
                },
              })
            );
          });
          notesToLink.forEach((original) => {
            promises.push(
              API.graphql({
                query: updateNote.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    orderID: orderRecord.id,
                  },
                },
              })
            );
          });
          const servicesToLinkMap = new Map();
          const servicesToUnLinkMap = new Map();
          const servicesMap = new Map();
          const linkedServicesMap = new Map();
          Services.forEach((r) => {
            const count = servicesMap.get(getIDValue.Services?.(r));
            const newCount = count ? count + 1 : 1;
            servicesMap.set(getIDValue.Services?.(r), newCount);
          });
          linkedServices.forEach((r) => {
            const count = linkedServicesMap.get(getIDValue.Services?.(r));
            const newCount = count ? count + 1 : 1;
            linkedServicesMap.set(getIDValue.Services?.(r), newCount);
          });
          linkedServicesMap.forEach((count, id) => {
            const newCount = servicesMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                servicesToUnLinkMap.set(id, diffCount);
              }
            } else {
              servicesToUnLinkMap.set(id, count);
            }
          });
          servicesMap.forEach((count, id) => {
            const originalCount = linkedServicesMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                servicesToLinkMap.set(id, diffCount);
              }
            } else {
              servicesToLinkMap.set(id, count);
            }
          });
          servicesToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const orderServiceRecords = (
              await API.graphql({
                query: listOrderServices.replaceAll("__typename", ""),
                variables: {
                  filter: {
                    and: [
                      { serviceId: { eq: recordKeys.id } },
                      { orderId: { eq: orderRecord.id } },
                    ],
                  },
                },
              })
            )?.data?.listOrderServices?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                API.graphql({
                  query: deleteOrderService.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: orderServiceRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          servicesToLinkMap.forEach((count, id) => {
            const serviceToLink = serviceRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                API.graphql({
                  query: createOrderService.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      orderId: orderRecord.id,
                      serviceId: serviceToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            intakeDate: modelFields.intakeDate,
            pickupDate: modelFields.pickupDate ?? null,
            completed: modelFields.completed,
            customerID: modelFields.customerID,
            deviceID: modelFields.deviceID,
            teamID: modelFields.teamID ?? null,
            status: modelFields.status ?? null,
          };
          promises.push(
            API.graphql({
              query: updateOrder.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: orderRecord.id,
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
      {...getOverrideProps(overrides, "OrderUpdateForm")}
      {...rest}
    >
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
              intakeDate: value,
              pickupDate,
              completed,
              customerID,
              deviceID,
              teamID,
              Notes,
              Services,
              status,
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
        label="Pickup date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={pickupDate && convertToLocal(new Date(pickupDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              intakeDate,
              pickupDate: value,
              completed,
              customerID,
              deviceID,
              teamID,
              Notes,
              Services,
              status,
            };
            const result = onChange(modelFields);
            value = result?.pickupDate ?? value;
          }
          if (errors.pickupDate?.hasError) {
            runValidationTasks("pickupDate", value);
          }
          setPickupDate(value);
        }}
        onBlur={() => runValidationTasks("pickupDate", pickupDate)}
        errorMessage={errors.pickupDate?.errorMessage}
        hasError={errors.pickupDate?.hasError}
        {...getOverrideProps(overrides, "pickupDate")}
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
              intakeDate,
              pickupDate,
              completed: value,
              customerID,
              deviceID,
              teamID,
              Notes,
              Services,
              status,
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
              intakeDate,
              pickupDate,
              completed,
              customerID: value,
              deviceID,
              teamID,
              Notes,
              Services,
              status,
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
              intakeDate,
              pickupDate,
              completed,
              customerID,
              deviceID: value,
              teamID,
              Notes,
              Services,
              status,
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
      <TextField
        label="Team id"
        isRequired={false}
        isReadOnly={false}
        value={teamID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              intakeDate,
              pickupDate,
              completed,
              customerID,
              deviceID,
              teamID: value,
              Notes,
              Services,
              status,
            };
            const result = onChange(modelFields);
            value = result?.teamID ?? value;
          }
          if (errors.teamID?.hasError) {
            runValidationTasks("teamID", value);
          }
          setTeamID(value);
        }}
        onBlur={() => runValidationTasks("teamID", teamID)}
        errorMessage={errors.teamID?.errorMessage}
        hasError={errors.teamID?.hasError}
        {...getOverrideProps(overrides, "teamID")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              intakeDate,
              pickupDate,
              completed,
              customerID,
              deviceID,
              teamID,
              Notes: values,
              Services,
              status,
            };
            const result = onChange(modelFields);
            values = result?.Notes ?? values;
          }
          setNotes(values);
          setCurrentNotesValue(undefined);
          setCurrentNotesDisplayValue("");
        }}
        currentFieldValue={currentNotesValue}
        label={"Notes"}
        items={Notes}
        hasError={errors?.Notes?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Notes", currentNotesValue)
        }
        errorMessage={errors?.Notes?.errorMessage}
        getBadgeText={getDisplayValue.Notes}
        setFieldValue={(model) => {
          setCurrentNotesDisplayValue(
            model ? getDisplayValue.Notes(model) : ""
          );
          setCurrentNotesValue(model);
        }}
        inputFieldRef={NotesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Notes"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Note"
          value={currentNotesDisplayValue}
          options={NotesRecords.filter(
            (r) => !NotesIdSet.has(getIDValue.Notes?.(r))
          ).map((r) => ({
            id: getIDValue.Notes?.(r),
            label: getDisplayValue.Notes?.(r),
          }))}
          isLoading={NotesLoading}
          onSelect={({ id, label }) => {
            setCurrentNotesValue(
              NotesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentNotesDisplayValue(label);
            runValidationTasks("Notes", label);
          }}
          onClear={() => {
            setCurrentNotesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchNotesRecords(value);
            if (errors.Notes?.hasError) {
              runValidationTasks("Notes", value);
            }
            setCurrentNotesDisplayValue(value);
            setCurrentNotesValue(undefined);
          }}
          onBlur={() => runValidationTasks("Notes", currentNotesDisplayValue)}
          errorMessage={errors.Notes?.errorMessage}
          hasError={errors.Notes?.hasError}
          ref={NotesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Notes")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              intakeDate,
              pickupDate,
              completed,
              customerID,
              deviceID,
              teamID,
              Notes,
              Services: values,
              status,
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
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              intakeDate,
              pickupDate,
              completed,
              customerID,
              deviceID,
              teamID,
              Notes,
              Services,
              status: value,
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
