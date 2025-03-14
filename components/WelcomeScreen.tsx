import React from "react";
import PromtiorLogo from "./promtior-logo";
import { Button } from "./ui/button";
import Link from "next/link";

export default function WelcomeScreen() {
  return (
    <>
      <PromtiorLogo className="w-16 z-10 h-16 bg-transparent logo animate-fade-up animate-duration-600" />
      <p className="mt-4 font-medium animate-fade-down animate-duration-500 animate-delay-100">
        Welcome to the Promtior Assistant!
      </p>
      <Button
        variant="link"
        className="text-muted-foreground cursor-pointer hover:text-cyan-500 animate-fade-down animate-duration-400 animate-delay-200"
      >
        <Link href="https://www.promtior.ai" target="_blank">
          www.promtior.ai
        </Link>
      </Button>
    </>
  );
}
