import * as React from "react";
import { Button } from "@/components/ui/button";

interface IconLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export function IconLink({ href, label, children }: IconLinkProps) {
  return (
    <Button variant="ghost" size="icon" asChild>
      <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
        {children}
      </a>
    </Button>
  );
}
