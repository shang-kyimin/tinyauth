"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Header } from "@/components/auth/Header";
import { Social } from "@/components/auth/Social";
import { BackButton } from "@/components/auth/BackButton";

interface CardWrapperProps {
  children: React.ReactNode,
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="min-w-72 max-w-md mx-auto shadow-md py-4 px-2">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>

      {showSocial && (
        <CardContent>
          <Social />
        </CardContent>
      )}

      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
}
