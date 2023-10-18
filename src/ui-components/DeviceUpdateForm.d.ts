/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Device, Order } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DeviceUpdateFormInputValues = {
    type?: string;
    brand?: string;
    password?: string;
    serialNumber?: string;
    customerID?: string;
    Orders?: Order[];
};
export declare type DeviceUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    brand?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    serialNumber?: ValidationFunction<string>;
    customerID?: ValidationFunction<string>;
    Orders?: ValidationFunction<Order>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeviceUpdateFormOverridesProps = {
    DeviceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    serialNumber?: PrimitiveOverrideProps<TextFieldProps>;
    customerID?: PrimitiveOverrideProps<TextFieldProps>;
    Orders?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type DeviceUpdateFormProps = React.PropsWithChildren<{
    overrides?: DeviceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    device?: Device;
    onSubmit?: (fields: DeviceUpdateFormInputValues) => DeviceUpdateFormInputValues;
    onSuccess?: (fields: DeviceUpdateFormInputValues) => void;
    onError?: (fields: DeviceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeviceUpdateFormInputValues) => DeviceUpdateFormInputValues;
    onValidate?: DeviceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DeviceUpdateForm(props: DeviceUpdateFormProps): React.ReactElement;
