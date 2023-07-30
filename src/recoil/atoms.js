import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const usersState = atom({
  key: "usersState",
  default: [
    {
      id: "user1",
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: "user2",
      name: "Jane Smith",
      email: "jane@example.com",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
export const projectsState = atom({
  key: "projectsState",
  default: [], // Initially, there are no projects
  effects_UNSTABLE: [persistAtom],
});

export const filterState = atom({
  key: "filterState",
  default: {
    assignedTo: null,
  },
  effects_UNSTABLE: [persistAtom],
});
