import DeviceCreateForm from "@/ui-components/DeviceCreateForm";
import OrderCreateForm from "@/ui-components/OrderCreateForm";
import { Heading, Button, Flex } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter();
  return (
    <>
    <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
    <Heading level={1} >Order creation page under construction :/</Heading>
    <Button onClick={() => router.push("./customer/new")}>
        Create new customer
    </Button>
    <OrderCreateForm
        width="340px"
        border="1px solid black"
        borderRadius="1rem"
        onSuccess={() => router.push("../success")}
        onError={() => console.log("error creating order")}>
        
    </OrderCreateForm>
    </Flex>
    </>
  );

}