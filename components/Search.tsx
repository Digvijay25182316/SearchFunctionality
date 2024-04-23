"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

function Search() {
  const router = useRouter();
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (isNaN(Number(e.target.value))) {
      router.push(`/?search=${e.target.value}`);
    } else {
      router.push(`/?search=${Number(e.target.value)}`);
    }
  }

  return (
    <div className="w-full">
      <form action="" className="w-full">
        <div className="flex items-center gap-5 border w-full px-4 py-2.5 text-lg rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            className="outline-none w-full"
            onChange={handleChange}
            placeholder="Search . . . "
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
