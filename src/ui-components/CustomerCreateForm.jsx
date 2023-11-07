/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, Heading, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createCustomer } from "../graphql/mutations";
export default function CustomerCreateForm(props) {
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
    first: "",
    last: "",
    phone: "",
    email: "",
  };
  const [first, setFirst] = React.useState(initialValues.first);
  const [last, setLast] = React.useState(initialValues.last);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirst(initialValues.first);
    setLast(initialValues.last);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setErrors({});
  };
  const validations = {
    first: [{ type: "Required" }],
    last: [{ type: "Required" }],
    phone: [{ type: "Required" }, { type: "Phone" }],
    email: [{ type: "Email" }],
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
          email,
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
            query: createCustomer.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
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
      {...getOverrideProps(overrides, "CustomerCreateForm")}
      {...rest}
    >
      <Heading
        level={4}
        children="Customer Information:"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="First name"
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
        label="Last name"
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
        label="Phone number"
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
        label="Email address"
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
