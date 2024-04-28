import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FormWrapperCardProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const FormWrapperCard = ({
  children,
  title,
  description,
}: FormWrapperCardProps) => {
  return (
    <Card className="min-w-[400px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
