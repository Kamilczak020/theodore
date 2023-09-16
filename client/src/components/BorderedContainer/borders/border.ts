import { ReactNode } from "react";
import { SimpleBorder } from "./simple";
import { TripleBorder } from "./triple";
import { BlockBorder } from "./block";

export interface BorderProps {
  children: ReactNode | Array<ReactNode>;
  className?: string;
}

export const BorderMap = new Map<string, JSX.ElementType>([
  ['simple', SimpleBorder],
  ['block', BlockBorder],
  ['triple', TripleBorder],
]);

