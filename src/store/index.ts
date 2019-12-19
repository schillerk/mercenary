import { createContext, useContext } from "react";

import { State, Action, ContextType } from "./types";
import KEYS from "./constants";

export function reducer(state: State, action: Action): State {
  const { key } = action;

  // TODO kind of ugly.
  if (Object.values(KEYS).indexOf(key) > -1) {
    return { ...state, [action.key]: action.value };
  }

  return state;
}

export const initialState: State = {
  [KEYS.COUNT]: 0,
  [KEYS.INPUT]: ""
};

export const Context = createContext<ContextType>({
  state: initialState,
  // TODO kind of ugly.
  dispatch: () => {}
});

export function useStateValue() {
  return useContext(Context);
}
