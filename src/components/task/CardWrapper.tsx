import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import TaskHeader from "./TaskHeader";

interface CardWrapperProps {
  title: string;
  children: React.ReactNode;
}

const CardWrapper = ({ title, children }: CardWrapperProps) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md">
      <CardHeader>
        <TaskHeader title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
