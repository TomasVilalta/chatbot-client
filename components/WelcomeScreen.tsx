import React from "react";
import PromtiorLogo from "./promtior-logo";
import { Button } from "./ui/button";
import Link from "next/link";

export default function WelcomeScreen() {
  return (
    <>
      <PromtiorLogo className="w-16 h-16 bg-transparent logo " />
      <p className="mt-4 font-medium">Welcome to the Promtior Assistant!</p>
      <Button
        variant="link"
        className="text-muted-foreground cursor-pointer hover:text-cyan-500"
      >
        <Link href="https://www.promtior.ai" target="_blank">
          www.promtior.ai
        </Link>
      </Button>
    </>
  );
}
