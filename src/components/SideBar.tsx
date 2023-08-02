import { CalendarIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useNavigationStore } from "@/store";
import { api } from "@/utils/api";

// import { AbilityContext } from "./acl/can";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  // const ability = React.useContext(AbilityContext);
  //
  const [myMenu, updateCurrent, updateActive, reset] = useNavigationStore(
    (state) => [
      state.navigationMenu,
      state.updateCurrent,
      state.updateActive,
      state.reset,
    ]
  );
  //   const userQuery = api.user.getUser.useQuery();

  //   if (userQuery.isLoading) {
  //     return <p>Loading...</p>;
  //   }

  //   if (userQuery.data) {
  //     if (userQuery.data.role === "$superAdmin@") {
  return (
    <nav className="mt-5 flex-1 space-y-1 border-r-2 px-2">
      {myMenu.map((item, menuIndex) => (
        <React.Fragment key={menuIndex}>
          {item.href === "#" ? (
            <React.Fragment key={menuIndex}>
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  // reset();
                  updateActive(item.name);
                }}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-800 dark:text-white dark:bg-card hover:bg-gray-700 hover:text-white",
                  "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                )}
              >
                <div className="group flex">
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-300"
                        : "text-gray-800 group-hover:text-gray-300",
                      "mr-3 h-6 w-6 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </div>
                {/* {item.subMenu && <p className="align-middle">A</p>} */}
              </Link>

              {item.subMenu && (
                <div className={classNames(item.active ? "" : "hidden")}>
                  {item.subMenu.map((subItem, subIndex) => (
                    <React.Fragment key={subIndex}>
                      <Link
                        key={subIndex}
                        className={classNames(
                          subItem.current
                            ? "bg-gray-100 text-gray-900"
                            : "dark:text-white hover:bg-gray-50 hover:text-gray-900",
                          "md:ml-4 group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                        )}
                        href={subItem.href}
                        onClick={() => {
                          reset();
                          //
                          updateCurrent(menuIndex, subIndex);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment key={menuIndex}>
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  reset();
                  updateActive(item.name);
                }}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-800 hover:bg-gray-700 dark:bg-card dark:text-white hover:text-white",
                  "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                )}
              >
                <div className="group flex">
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-300"
                        : "text-gray-400 group-hover:text-gray-300",
                      "mr-3 h-6 w-6 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </div>
                {/* {item.subMenu && <p className="align-middle">A</p>} */}
              </Link>

              {item.subMenu && (
                <div className={classNames(item.active ? "" : "hidden")}>
                  {item.subMenu.map((subItem, subIndex) => (
                    <React.Fragment key={subIndex}>
                      <Link
                        key={subIndex}
                        className={classNames(
                          subItem.current
                            ? "bg-gray-100 text-gray-900"
                            : "dark:text-gray-200 text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                        )}
                        href={subItem.href}
                        onClick={() => {
                          reset();
                          //
                          updateCurrent(menuIndex, subIndex);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
