// src/types.ts
export type Task = {
  id: number;
  name: string;
  isDone: boolean;
};

export type FilterType = "ALL" | "TODO" | "DONE";