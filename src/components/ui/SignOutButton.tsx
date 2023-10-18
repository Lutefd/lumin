"use client";

import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "./button";

type LoginButtonProps = {
  children: React.ReactNode;
};

export default function SignOutButton({ children }: LoginButtonProps) {
  return (
    <Button onClick={() => signOut()} size={"sm"}>
      {children}
    </Button>
  );
}
