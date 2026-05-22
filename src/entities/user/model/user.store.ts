import type { StateCreator } from 'zustand';
import { createWithEqualityFn } from 'zustand/traditional';
import type { User } from '.';
import { devtools } from 'zustand/middleware';

export type UserState = {
  profile?: User;
};

export type UserActions = {
  getProfile: () => void;
};

type createUserStoreType = StateCreator<UserState & UserActions, [['zustand/devtools', never]]>;

const userSlice: createUserStoreType = () => {
  profile: undefined;
  getProfile: async () => {
    // ...
  };
};

export const useUserStore = createWithEqualityFn<UserState & UserActions>()(
  devtools(userSlice, {
    name: 'userStore',
  }),
);
