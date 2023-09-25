import CustomerCreateForm from "@/ui-components/CustomerCreateForm";
import { Heading, Button, Flex } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
export default function NewCustomer() {
    const router = useRouter();
    return (
        <>
          <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
            <Heading level={1}>Create new customer</Heading>
            <CustomerCreateForm
            width="340px"
            border="1px solid black"
            borderRadius="1rem"
            onSuccess={() => router.push("../success")}>
            
            </CustomerCreateForm>
          </Flex>
        </>
    );
}