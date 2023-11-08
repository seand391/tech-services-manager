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
import {
  getService,
  listOrderServices,
  listOrders,
  orderServicesByServiceId,
} from "../graphql/queries";
import { API } from "aws-amplify";
import {
  createOrderService,
  deleteOrderService,
  updateService,
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
export default function ServiceUpdateForm(props) {
  const {
    id: idProp,
    service: serviceModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    price: "",
    teamID: "",
    orders: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [price, setPrice] = React.useState(initialValues.price);
  const [teamID, setTeamID] = React.useState(initialValues.teamID);
  const [orders, setOrders] = React.useState(initialValues.orders);
  const [ordersLoading, setOrdersLoading] = React.useState(false);
  const [ordersRecords, setOrdersRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = serviceRecord
      ? { ...initialValues, ...serviceRecord, orders: linkedOrders }
      : initialValues;
    setName(cleanValues.name);
    setPrice(cleanValues.price);
    setTeamID(cleanValues.teamID);
    setOrders(cleanValues.orders ?? []);
    setCurrentOrdersValue(undefined);
    setCurrentOrdersDisplayValue("");
    setErrors({});
  };
  const [serviceRecord, setServiceRecord] = React.useState(serviceModelProp);
  const [linkedOrders, setLinkedOrders] = React.useState([]);
  const canUnlinkOrders = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getService.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getService
        : serviceModelProp;
      const linkedOrders = record
        ? (
            await API.graphql({
              query: orderServicesByServiceId.replaceAll("__typename", ""),
              variables: {
                serviceId: record.id,
              },
            })
          ).data.orderServicesByServiceId.items.map((t) => t.order)
        : [];
      setLinkedOrders(linkedOrders);
      setServiceRecord(record);
    };
    queryData();
  }, [idProp, serviceModelProp]);
  React.useEffect(resetStateValues, [serviceRecord, linkedOrders]);
  const [currentOrdersDisplayValue, setCurrentOrdersDisplayValue] =
    React.useState("");
  const [currentOrdersValue, setCurrentOrdersValue] = React.useState(undefined);
  const ordersRef = React.createRef();
  const getIDValue = {
    orders: (r) => JSON.stringify({ id: r?.id }),
  };
  const ordersIdSet = new Set(
    Array.isArray(orders)
      ? orders.map((r) => getIDValue.orders?.(r))
      : getIDValue.orders?.(orders)
  );
  const getDisplayValue = {
    orders: (r) => `${r?.completed ? r?.completed + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    price: [{ type: "Required" }],
    teamID: [],
    orders: [],
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
          or: [{ completed: { contains: value } }, { id: { contains: value } }],
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
        (item) => !ordersIdSet.has(getIDValue.orders?.(item))
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
          name,
          price,
          teamID: teamID ?? null,
          orders: orders ?? null,
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
          const ordersToLinkMap = new Map();
          const ordersToUnLinkMap = new Map();
          const ordersMap = new Map();
          const linkedOrdersMap = new Map();
          orders.forEach((r) => {
            const count = ordersMap.get(getIDValue.orders?.(r));
            const newCount = count ? count + 1 : 1;
            ordersMap.set(getIDValue.orders?.(r), newCount);
          });
          linkedOrders.forEach((r) => {
            const count = linkedOrdersMap.get(getIDValue.orders?.(r));
            const newCount = count ? count + 1 : 1;
            linkedOrdersMap.set(getIDValue.orders?.(r), newCount);
          });
          linkedOrdersMap.forEach((count, id) => {
            const newCount = ordersMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                ordersToUnLinkMap.set(id, diffCount);
              }
            } else {
              ordersToUnLinkMap.set(id, count);
            }
          });
          ordersMap.forEach((count, id) => {
            const originalCount = linkedOrdersMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                ordersToLinkMap.set(id, diffCount);
              }
            } else {
              ordersToLinkMap.set(id, count);
            }
          });
          ordersToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const orderServiceRecords = (
              await API.graphql({
                query: listOrderServices.replaceAll("__typename", ""),
                variables: {
                  filter: {
                    and: [
                      { orderId: { eq: recordKeys.id } },
                      { serviceId: { eq: serviceRecord.id } },
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
          ordersToLinkMap.forEach((count, id) => {
            const orderToLink = orderRecords.find((r) =>
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
                      serviceId: serviceRecord.id,
                      orderId: orderToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            price: modelFields.price,
            teamID: modelFields.teamID ?? null,
          };
          promises.push(
            API.graphql({
              query: updateService.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: serviceRecord.id,
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
      {...getOverrideProps(overrides, "ServiceUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              price,
              teamID,
              orders,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        value={price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              price: value,
              teamID,
              orders,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Team id"
        isRequired={false}
        isReadOnly={false}
        value={teamID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              price,
              teamID: value,
              orders,
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
              name,
              price,
              teamID,
              orders: values,
            };
            const result = onChange(modelFields);
            values = result?.orders ?? values;
          }
          setOrders(values);
          setCurrentOrdersValue(undefined);
          setCurrentOrdersDisplayValue("");
        }}
        currentFieldValue={currentOrdersValue}
        label={"Orders"}
        items={orders}
        hasError={errors?.orders?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("orders", currentOrdersValue)
        }
        errorMessage={errors?.orders?.errorMessage}
        getBadgeText={getDisplayValue.orders}
        setFieldValue={(model) => {
          setCurrentOrdersDisplayValue(
            model ? getDisplayValue.orders(model) : ""
          );
          setCurrentOrdersValue(model);
        }}
        inputFieldRef={ordersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Orders"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Order"
          value={currentOrdersDisplayValue}
          options={ordersRecords.map((r) => ({
            id: getIDValue.orders?.(r),
            label: getDisplayValue.orders?.(r),
          }))}
          isLoading={ordersLoading}
          onSelect={({ id, label }) => {
            setCurrentOrdersValue(
              ordersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentOrdersDisplayValue(label);
            runValidationTasks("orders", label);
          }}
          onClear={() => {
            setCurrentOrdersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchOrdersRecords(value);
            if (errors.orders?.hasError) {
              runValidationTasks("orders", value);
            }
            setCurrentOrdersDisplayValue(value);
            setCurrentOrdersValue(undefined);
          }}
          onBlur={() => runValidationTasks("orders", currentOrdersDisplayValue)}
          errorMessage={errors.orders?.errorMessage}
          hasError={errors.orders?.hasError}
          ref={ordersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "orders")}
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
          isDisabled={!(idProp || serviceModelProp)}
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
              !(idProp || serviceModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
