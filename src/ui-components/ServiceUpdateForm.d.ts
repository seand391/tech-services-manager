/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Order, Service } from "../API.ts";
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
export declare type ServiceUpdateFormInputValues = {
    name?: string;
    price?: string;
    teamID?: string;
    orders?: Order[];
};
export declare type ServiceUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    teamID?: ValidationFunction<string>;
    orders?: ValidationFunction<Order>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceUpdateFormOverridesProps = {
    ServiceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    teamID?: PrimitiveOverrideProps<TextFieldProps>;
    orders?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ServiceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServiceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    service?: Service;
    onSubmit?: (fields: ServiceUpdateFormInputValues) => ServiceUpdateFormInputValues;
    onSuccess?: (fields: ServiceUpdateFormInputValues) => void;
    onError?: (fields: ServiceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceUpdateFormInputValues) => ServiceUpdateFormInputValues;
    onValidate?: ServiceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceUpdateForm(props: ServiceUpdateFormProps): React.ReactElement;
