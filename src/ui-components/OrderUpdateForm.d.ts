/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Note, Order, Service } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderUpdateFormInputValues = {
    intakeDate?: string;
    pickupDate?: string;
    completed?: boolean;
    customerID?: string;
    deviceID?: string;
    teamID?: string;
    Notes?: Note[];
    Services?: Service[];
    status?: string;
};
export declare type OrderUpdateFormValidationValues = {
    intakeDate?: ValidationFunction<string>;
    pickupDate?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
    customerID?: ValidationFunction<string>;
    deviceID?: ValidationFunction<string>;
    teamID?: ValidationFunction<string>;
    Notes?: ValidationFunction<Note>;
    Services?: ValidationFunction<Service>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderUpdateFormOverridesProps = {
    OrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    intakeDate?: PrimitiveOverrideProps<TextFieldProps>;
    pickupDate?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
    customerID?: PrimitiveOverrideProps<AutocompleteProps>;
    deviceID?: PrimitiveOverrideProps<AutocompleteProps>;
    teamID?: PrimitiveOverrideProps<TextFieldProps>;
    Notes?: PrimitiveOverrideProps<AutocompleteProps>;
    Services?: PrimitiveOverrideProps<AutocompleteProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    order?: Order;
    onSubmit?: (fields: OrderUpdateFormInputValues) => OrderUpdateFormInputValues;
    onSuccess?: (fields: OrderUpdateFormInputValues) => void;
    onError?: (fields: OrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderUpdateFormInputValues) => OrderUpdateFormInputValues;
    onValidate?: OrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrderUpdateForm(props: OrderUpdateFormProps): React.ReactElement;
