"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "./button";

type LoginButtonProps = {
  children: React.ReactNode;
  provider: string;
};

export default function LoginButton({ children, provider }: LoginButtonProps) {
  return (
    <Button
      onClick={() => signIn(`${provider}`, { callbackUrl: "/dashboard" })}
      size={"sm"}
    >
      {children}
    </Button>
  );
}
