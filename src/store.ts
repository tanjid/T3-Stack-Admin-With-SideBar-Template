/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */


import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


import { type NavigationMenuType, mySideBarMenu } from "./sidebar-menu";


type Store = {
  orderList: string[];
};

type Actions = {
  updatePrintIds: (list: string[]) => void;
  removeAllBears: () => void;
};

export const useBearStore = create(
  immer<Store & Actions>((set) => ({
    orderList: [],
    updatePrintIds: (list: string[]) => set((state) => ({ orderList: list })),
    removeAllBears: () => set({ orderList: [] }),
  }))
);

type Store1 = {
  navigationMenu: NavigationMenuType;
};

type Actions1 = {
  updateCurrent: (menuName: number, subMenuName: number) => void;
  updateActive: (name: string) => void;
  reset: () => void;
};

export const useNavigationStore = create(
  immer<Store1 & Actions1>((set) => ({
    navigationMenu: mySideBarMenu,

    updateCurrent: (menuName: number, subMenuName: number) =>
      set((state) => {
        state.navigationMenu[menuName]!.current = true;
        state.navigationMenu[menuName]!.active = true;
        state.navigationMenu[menuName]!.subMenu[subMenuName]!.current = true;
      }),
    reset: () =>
      set({
        navigationMenu: mySideBarMenu,
      }),

    updateActive: (name: string) => {
      const myMenu = [...mySideBarMenu];

      const menu = myMenu.filter((post) => post.name === name)[0];

      if (menu) {
        let updatedMenu = {
          ...menu,
          current: true,
        };

        if (updatedMenu.subMenu) {
          if (updatedMenu.active) {
            updatedMenu = {
              ...updatedMenu,
              active: false,
            };
          } else {
            updatedMenu = {
              ...updatedMenu,
              active: true,
            };
          }
        }

        myMenu.find((o, i) => {
          if (o.name === name) {
            myMenu[i] = updatedMenu;

            set({
              navigationMenu: myMenu,
            });
            return true;
            // stop searching
          }
        });
      }
    },
  }))
);
interface ProgressState {
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
}
export const useProgressStore = create<ProgressState>()((set) => ({
  isAnimating: false,
  setIsAnimating: (isAnimating: boolean) => set(() => ({ isAnimating })),
}));

