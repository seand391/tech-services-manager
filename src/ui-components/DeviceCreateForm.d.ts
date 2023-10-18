/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Order } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DeviceCreateFormInputValues = {
    type?: string;
    brand?: string;
    password?: string;
    serialNumber?: string;
    customerID?: string;
    Orders?: Order[];
};
export declare type DeviceCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    brand?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    serialNumber?: ValidationFunction<string>;
    customerID?: ValidationFunction<string>;
    Orders?: ValidationFunction<Order>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeviceCreateFormOverridesProps = {
    DeviceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    serialNumber?: PrimitiveOverrideProps<TextFieldProps>;
    customerID?: PrimitiveOverrideProps<TextFieldProps>;
    Orders?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type DeviceCreateFormProps = React.PropsWithChildren<{
    overrides?: DeviceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DeviceCreateFormInputValues) => DeviceCreateFormInputValues;
    onSuccess?: (fields: DeviceCreateFormInputValues) => void;
    onError?: (fields: DeviceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeviceCreateFormInputValues) => DeviceCreateFormInputValues;
    onValidate?: DeviceCreateFormValidationValues;
} & React.CSSProperties>;
export default function DeviceCreateForm(props: DeviceCreateFormProps): React.ReactElement;
