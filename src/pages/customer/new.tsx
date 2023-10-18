import CustomerCreateForm from "@/components/CustomerCreateForm";
import { Heading, Button, Flex, Authenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify"
import { currentUserSub, updateCustomerTeam} from "../api/helpers";

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
        onSuccess={() => {
          router.push("../success")
          }
        }
        onError={(fields, message) => {alert(message)
          //TODO: handle errors more gracefully ex: extract the source of the error from message and display the field that caused the error
          }
        }
        
        >
        </CustomerCreateForm>
      </Flex>
    </>
  );
}