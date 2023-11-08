import { Auth, API} from "aws-amplify";
import { updateCustomer } from "@/graphql/mutations"; 
import { CustomerCreateFormInputValues } from "@/ui-components/CustomerCreateForm";

export async function currentUserSub() {
  try {
    const user = await Auth.currentUserInfo();
    console.log(user);
    return user?.attributes?.sub;
  } catch(err) {
    console.log(err);
  }
};

// link the customer to the user that created them
export async function updateCustomerTeam(customerFields: CustomerCreateFormInputValues, callbackFunc: Function){
    const teamID = await currentUserSub();
    const newFields = {
        ...customerFields,
        "teamID": teamID
    }
    console.log("f: " + JSON.stringify(newFields))
    const customer = await API.graphql({
        query: updateCustomer,
        variables: {
            input: {
            ...newFields
            }
        }
    });
    callbackFunc();
}
