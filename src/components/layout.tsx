import React from "react";
import Link from "next/link";
import { Button, Divider, Flex, useAuthenticator } from "@aws-amplify/ui-react";

export default function Layout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const routes = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/create",
      label: "Create Order",
    },
    {
      href: "/customer",
      label: "Search Customer",
    },
    {
      href: "/drafts",
      label: "View Drafts",
    },
    {
      href: "/closed",
      label: "View Closed Orders",
    },
    {
      href: "/settings",
      label: "Settings",
    },
  ];
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="1rem"
        padding="1rem"
        backgroundColor={"hsl(226, 23%, 24%)"}
      >
        <Flex
          as="nav"
          alignItems="center"
          gap="3rem"
          margin="0 1rem"
          color="white"
          {...props}
        >
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              {route.label}
            </Link>
          ))}
        </Flex>
        <Button onClick={signOut} colorTheme="overlay" color="white" variation="link">
          Sign out
        </Button>
      </Flex>
      <Divider size="small"></Divider>
      {children}
    </>
  );
}