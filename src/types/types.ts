import { Customer } from "@/API";

export type CustomerTableValues = Pick<Customer, "id" | "first" | "last" | "email" | "phone">;