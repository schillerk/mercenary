import { Dispatch } from "react";
import KEYS from "./constants";

export type Action =
  | { key: typeof KEYS.COUNT; value: number }
  | { key: typeof KEYS.INPUT; value: string };

export type State = {
  [KEYS.COUNT]: number;
  [KEYS.INPUT]: string;
};

export type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};
