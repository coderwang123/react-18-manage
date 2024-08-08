import { create } from "zustand";
import { produce } from "immer";
import { mapMenusToRoutes } from "@/utils/system-permission";
import { fakeMenuWeb } from "@/fake-data";

interface TestState {
  bears: number;
  testList: any[];
  increase: (by: number) => void;
  immerInc: () => void;
}

const useTestStore = create<TestState>()((set) => ({
  bears: 0,
  testList: [],
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  immerInc: () =>
    set(
      produce((state: TestState) => {
        state.testList = mapMenusToRoutes(fakeMenuWeb);
        console.log("state.testList  ==> ", state.testList);
      })
    )
}));
export default useTestStore;
