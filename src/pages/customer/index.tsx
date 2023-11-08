import { Heading, Button, Flex } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CustomerTableValues } from "@/types/types";
import * as queries from "@/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListCustomersQuery } from "@/API";
import { API } from "aws-amplify";
import CustomerTable from "@/components/customer-table"
import { currentUserSub } from "../api/helpers";

export default function Customer() {
    const router = useRouter();
    const [customer, setCustomer] = useState<CustomerTableValues[]>();

    useEffect(()=> {
    async function grabCustomers(){
      const allCustomers = await API.graphql<GraphQLQuery<ListCustomersQuery>>({
        query: 
        `query currentUserCustomers {
            listCustomers(filter: {teamID: {eq: "`+ await currentUserSub() + `"}}) {
            items {
              id
              first
              last
              email
              phone
              Orders {
                nextToken
              }
              Devices {
                nextToken
              }
            }
          }
        }`,
      });
      setCustomer(allCustomers.data?.listCustomers?.items as CustomerTableValues[]);
    }
    grabCustomers();
    }, []);
    return (
        <>
          <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} marginBottom="1rem">
            <Heading level={1}>Customer search page under construction :/</Heading>
            <Button onClick={() => router.push("./customer/new")}>
                Create new customer
            </Button>
          </Flex>
          {customer === undefined ? null : (
            <CustomerTable tableName="Customers" data={customer} />
          )}
        </>
    );
}