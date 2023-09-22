import { Heading, useAuthenticator, Button, Flex } from "@aws-amplify/ui-react"

export default function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <>
    <Button onClick={signOut}  backgroundColor={"hsl(158, 78%, 75%)"} alignItems={"left"}>Sign out</Button>
    <Flex justifyContent={'center'} alignItems={'center'} direction={'row'}>
    <Heading level={1} >Site under construction :/</Heading>
    </Flex>
    </>
    
  )
}
