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
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { listCustomers, listOrders } from "../graphql/queries";
import { createTeam, updateCustomer, updateOrder } from "../graphql/mutations";
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
export default function TeamCreateForm(props) {
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
    owner: "",
    Customers: [],
    Orders: [],
    members: [],
    settings: "",
  };
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [Customers, setCustomers] = React.useState(initialValues.Customers);
  const [CustomersLoading, setCustomersLoading] = React.useState(false);
  const [CustomersRecords, setCustomersRecords] = React.useState([]);
  const [Orders, setOrders] = React.useState(initialValues.Orders);
  const [OrdersLoading, setOrdersLoading] = React.useState(false);
  const [OrdersRecords, setOrdersRecords] = React.useState([]);
  const [members, setMembers] = React.useState(initialValues.members);
  const [settings, setSettings] = React.useState(initialValues.settings);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOwner(initialValues.owner);
    setCustomers(initialValues.Customers);
    setCurrentCustomersValue(undefined);
    setCurrentCustomersDisplayValue("");
    setOrders(initialValues.Orders);
    setCurrentOrdersValue(undefined);
    setCurrentOrdersDisplayValue("");
    setMembers(initialValues.members);
    setCurrentMembersValue("");
    setSettings(initialValues.settings);
    setErrors({});
  };
  const [currentCustomersDisplayValue, setCurrentCustomersDisplayValue] =
    React.useState("");
  const [currentCustomersValue, setCurrentCustomersValue] =
    React.useState(undefined);
  const CustomersRef = React.createRef();
  const [currentOrdersDisplayValue, setCurrentOrdersDisplayValue] =
    React.useState("");
  const [currentOrdersValue, setCurrentOrdersValue] = React.useState(undefined);
  const OrdersRef = React.createRef();
  const [currentMembersValue, setCurrentMembersValue] = React.useState("");
  const membersRef = React.createRef();
  const getIDValue = {
    Customers: (r) => JSON.stringify({ id: r?.id }),
    Orders: (r) => JSON.stringify({ id: r?.id }),
  };
  const CustomersIdSet = new Set(
    Array.isArray(Customers)
      ? Customers.map((r) => getIDValue.Customers?.(r))
      : getIDValue.Customers?.(Customers)
  );
  const OrdersIdSet = new Set(
    Array.isArray(Orders)
      ? Orders.map((r) => getIDValue.Orders?.(r))
      : getIDValue.Orders?.(Orders)
  );
  const getDisplayValue = {
    Customers: (r) => `${r?.first ? r?.first + " - " : ""}${r?.id}`,
    Orders: (r) => `${r?.orderNumber ? r?.orderNumber + " - " : ""}${r?.id}`,
  };
  const validations = {
    owner: [{ type: "Required" }],
    Customers: [],
    Orders: [],
    members: [],
    settings: [{ type: "JSON" }],
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
  const fetchCustomersRecords = async (value) => {
    setCustomersLoading(true);
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
      var loaded = result.filter(
        (item) => !CustomersIdSet.has(getIDValue.Customers?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCustomersRecords(newOptions.slice(0, autocompleteLength));
    setCustomersLoading(false);
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
  React.useEffect(() => {
    fetchCustomersRecords("");
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
          owner,
          Customers,
          Orders,
          members,
          settings,
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
            owner: modelFields.owner,
            members: modelFields.members,
            settings: modelFields.settings,
          };
          const team = (
            await API.graphql({
              query: createTeam,
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createTeam;
          const promises = [];
          promises.push(
            ...Customers.reduce((promises, original) => {
              promises.push(
                API.graphql({
                  query: updateCustomer,
                  variables: {
                    input: {
                      id: original.id,
                      teamID: team.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Orders.reduce((promises, original) => {
              promises.push(
                API.graphql({
                  query: updateOrder,
                  variables: {
                    input: {
                      id: original.id,
                      teamID: team.id,
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
      {...getOverrideProps(overrides, "TeamCreateForm")}
      {...rest}
    >
      <TextField
        label="Owner"
        isRequired={true}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner: value,
              Customers,
              Orders,
              members,
              settings,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              Customers: values,
              Orders,
              members,
              settings,
            };
            const result = onChange(modelFields);
            values = result?.Customers ?? values;
          }
          setCustomers(values);
          setCurrentCustomersValue(undefined);
          setCurrentCustomersDisplayValue("");
        }}
        currentFieldValue={currentCustomersValue}
        label={"Customers"}
        items={Customers}
        hasError={errors?.Customers?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Customers", currentCustomersValue)
        }
        errorMessage={errors?.Customers?.errorMessage}
        getBadgeText={getDisplayValue.Customers}
        setFieldValue={(model) => {
          setCurrentCustomersDisplayValue(
            model ? getDisplayValue.Customers(model) : ""
          );
          setCurrentCustomersValue(model);
        }}
        inputFieldRef={CustomersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Customers"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Customer"
          value={currentCustomersDisplayValue}
          options={CustomersRecords.filter(
            (r) => !CustomersIdSet.has(getIDValue.Customers?.(r))
          ).map((r) => ({
            id: getIDValue.Customers?.(r),
            label: getDisplayValue.Customers?.(r),
          }))}
          isLoading={CustomersLoading}
          onSelect={({ id, label }) => {
            setCurrentCustomersValue(
              CustomersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCustomersDisplayValue(label);
            runValidationTasks("Customers", label);
          }}
          onClear={() => {
            setCurrentCustomersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCustomersRecords(value);
            if (errors.Customers?.hasError) {
              runValidationTasks("Customers", value);
            }
            setCurrentCustomersDisplayValue(value);
            setCurrentCustomersValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Customers", currentCustomersDisplayValue)
          }
          errorMessage={errors.Customers?.errorMessage}
          hasError={errors.Customers?.hasError}
          ref={CustomersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Customers")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              owner,
              Customers,
              Orders: values,
              members,
              settings,
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
              owner,
              Customers,
              Orders,
              members: values,
              settings,
            };
            const result = onChange(modelFields);
            values = result?.members ?? values;
          }
          setMembers(values);
          setCurrentMembersValue("");
        }}
        currentFieldValue={currentMembersValue}
        label={"Members"}
        items={members}
        hasError={errors?.members?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("members", currentMembersValue)
        }
        errorMessage={errors?.members?.errorMessage}
        setFieldValue={setCurrentMembersValue}
        inputFieldRef={membersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Members"
          isRequired={false}
          isReadOnly={false}
          value={currentMembersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.members?.hasError) {
              runValidationTasks("members", value);
            }
            setCurrentMembersValue(value);
          }}
          onBlur={() => runValidationTasks("members", currentMembersValue)}
          errorMessage={errors.members?.errorMessage}
          hasError={errors.members?.hasError}
          ref={membersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "members")}
        ></TextField>
      </ArrayField>
      <TextAreaField
        label="Settings"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              owner,
              Customers,
              Orders,
              members,
              settings: value,
            };
            const result = onChange(modelFields);
            value = result?.settings ?? value;
          }
          if (errors.settings?.hasError) {
            runValidationTasks("settings", value);
          }
          setSettings(value);
        }}
        onBlur={() => runValidationTasks("settings", settings)}
        errorMessage={errors.settings?.errorMessage}
        hasError={errors.settings?.hasError}
        {...getOverrideProps(overrides, "settings")}
      ></TextAreaField>
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
