import { Heading, Button, Flex } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

export default function Customer() {
    const router = useRouter();
    return (
        <>
          <Flex justifyContent={'center'} alignItems={'center'} direction={'row'}>
            <Heading level={1}>Customer search page under construction :/</Heading>
            <Button onClick={() => router.push("./customer/new")}>
                Create new customer
            </Button>
          </Flex>
        </>
    );
}