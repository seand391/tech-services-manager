/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderCreateFormInputValues = {
    orderNumber?: string;
    intakeDate?: string;
    status?: string;
    completed?: boolean;
    customerID?: string;
    deviceID?: string;
    teamID?: string;
};
export declare type OrderCreateFormValidationValues = {
    orderNumber?: ValidationFunction<string>;
    intakeDate?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    customerID?: ValidationFunction<string>;
    deviceID?: ValidationFunction<string>;
    teamID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderCreateFormOverridesProps = {
    OrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderNumber?: PrimitiveOverrideProps<TextFieldProps>;
    intakeDate?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    customerID?: PrimitiveOverrideProps<AutocompleteProps>;
    deviceID?: PrimitiveOverrideProps<AutocompleteProps>;
    teamID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderCreateFormProps = React.PropsWithChildren<{
    overrides?: OrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrderCreateFormInputValues) => OrderCreateFormInputValues;
    onSuccess?: (fields: OrderCreateFormInputValues) => void;
    onError?: (fields: OrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderCreateFormInputValues) => OrderCreateFormInputValues;
    onValidate?: OrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrderCreateForm(props: OrderCreateFormProps): React.ReactElement;
