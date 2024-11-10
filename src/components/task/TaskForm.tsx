"use client";
import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "../../../schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useAppContext } from "@/context";

const TaskForm = () => {
  const form = useForm({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      id: 0,
      title: "",
      description: "",
    },
  });

  const { tasks, setTasks } = useAppContext();
  const [lastId, setLastId] = useState(0);

  const onSubmit = (data: z.infer<typeof TaskSchema>) => {
    const newTask = {
      ...data,
      id: lastId + 1,
    };
    setTasks([...tasks, newTask]);
    setLastId(lastId + 1);
    form.reset();
  };

  return (
    <CardWrapper title="Tasks">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  {" "}
                  <FormLabel>Create Task</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="New Task" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  {" "}
                  <FormLabel>Create description</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="New Description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Add task
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default TaskForm;
