import { Thread } from "@/components/thread";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <Thread />
      </div>
      <div className="absolute sm:top-4 sm:right-8 sm:w-12 top-4 right-4">
        {/* a small button on the bottom right corner on desktop and on the top right corner on mobile */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="https://github.com/TomasVilalta/promtior-challenge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/image.png"
                  alt="TomasVilalta"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Go to Github Repository</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
