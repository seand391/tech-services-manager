import { Heading, Button, Flex } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

export default function Success() {
    const router = useRouter();
    return (
        <>
          <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
            <Heading level={1}>Created successfully!</Heading>
            <Button onClick={() => router.push("./")}>
                Back to Dashboard
            </Button>
          </Flex>
        </>
    );
}