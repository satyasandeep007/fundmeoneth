import React from "react";

export default function Example() {
  return (
    <div className="p-5">
      <div className="mt-1 relative flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search your favorite creators"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center   rounded px-2 text-sm font-sans font-medium text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </kbd>
        </div>
      </div>
    </div>
  );
}
