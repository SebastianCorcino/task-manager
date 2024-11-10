"use client";

import { ITask } from "@/@types";
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const AppContext = createContext<AppContextType>({
  tasks: [],
  setTasks: () => {},
});

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
