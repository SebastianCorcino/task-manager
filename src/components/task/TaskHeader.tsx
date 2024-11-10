import React from "react";

interface TaskHeaderProps {
  title: string;
}

const TaskHeader = ({ title }: TaskHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">{title}</h1>
    </div>
  );
};

export default TaskHeader;
