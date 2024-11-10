"use client";

import { useState, useEffect } from "react";
import { useAppContext } from "@/context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FilterOption = "all" | "active" | "completed";

export default function TaskFilter() {
  const { tasks, setTasks } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState<FilterOption>("all");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    const filtered = tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter =
        filterOption === "all" ||
        (filterOption === "active" && new Date(task.expireDate) > new Date()) ||
        (filterOption === "completed" &&
          new Date(task.expireDate) <= new Date());
      return matchesSearch && matchesFilter;
    });
    setFilteredTasks(filtered);
  }, [tasks, searchTerm, filterOption]);

  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle>Filter Tasks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="search">Search Tasks</Label>
          <Input
            id="search"
            type="text"
            placeholder="Search by title or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="filter">Filter by Status</Label>
          <Select
            value={filterOption}
            onValueChange={(value: FilterOption) => setFilterOption(value)}
          >
            <SelectTrigger id="filter">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tasks</SelectItem>
              <SelectItem value="active">Active Tasks</SelectItem>
              <SelectItem value="completed">Completed Tasks</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            Showing {filteredTasks.length} of {tasks.length} tasks
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
