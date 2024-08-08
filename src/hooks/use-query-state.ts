import { useCallback, useRef, useState } from "react";

export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null)
) => void;

const useQueryState = <S extends Record<string, any>>(
  initialState: S | (() => S)
): [S, SetState<S>, () => any] => {
  const [state, setState] = useState<S>(initialState);

  const stateRef = useRef<Record<string, any>>(initialState);

  const setMergeState = useCallback((patch?: any) => {
    setState((prevState) => {
      if (typeof patch === "function") {
        stateRef.current = patch(prevState);
        console.log("----------patch(prevState)------", patch(prevState));
        return patch(prevState);
      } else {
        const obj = { ...prevState, ...patch };
        stateRef.current = obj;
        return obj;
      }
    });
  }, []);
  console.log("stateRef.current===>", stateRef.current);
  const getState = () => stateRef.current;
  return [state, setMergeState, getState];
};

export default useQueryState;
