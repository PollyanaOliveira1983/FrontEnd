import { createContext } from 'react';

export type ContextNumberCountType = {
  contextNumberCount: number;
  setContextNumberCount: (contextNumberCount: number) => void;
};

export const ContextNumberCount = createContext<ContextNumberCountType>({
  contextNumberCount: 0,
  setContextNumberCount: () => {},
});
