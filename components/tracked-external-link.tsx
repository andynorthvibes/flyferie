"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track } from "@vercel/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: string;
  eventData?: Record<string, string>;
};

export function TrackedExternalLink({ children, eventName, eventData, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(event) => {
        track(eventName, eventData);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
