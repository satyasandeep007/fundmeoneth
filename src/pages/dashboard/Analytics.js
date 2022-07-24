import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Analytics = () => {
  const { userInfo } = useContext(GlobalContext);

  const [tabs, setTabs] = useState([
    { name: "User", href: "/analytics/dashboard/user", count: "4", current: true },
    { name: "Creator", href: "/analytics/dashboard/creator", count: "22", current: false }
  ]);

  const onTabSelect = (val) => {
    if (val == 0) {
      const tabsCopy = [...tabs];
      tabsCopy[0].current = true;
      tabsCopy[1].current = false;
      setTabs(tabsCopy);
    }
    if (val == 1) {
      const tabsCopy = [...tabs];
      tabsCopy[0].current = false;
      tabsCopy[1].current = true;
      setTabs(tabsCopy);
    }
  };

  useEffect(() => {
    if ((userInfo && !userInfo.isCreator) || !userInfo) {
      const ts = [{ name: "User", href: "/analytics/dashboard/user", count: "4", current: true }];
      setTabs(ts);
    }
  }, []);

  return (
    <>
      <div className="min-h-full">
        <main className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <nav className="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab, i) => (
                  <Link
                    key={tab.name}
                    to={tab.href}
                    onClick={() => onTabSelect(i)}
                    className={classNames(
                      tab.current
                        ? "border-purple-500 text-purple-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                      "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    )}>
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </div>

            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Analytics;
