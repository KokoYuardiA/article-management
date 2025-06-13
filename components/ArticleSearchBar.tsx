"use client";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/lib/useDebounce";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  onSearch: (value: string) => void;
}

export const ArticleSearchBar = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 400);

  useEffect(() => {
    onSearch(debounced);
  }, [debounced]);

  return (
    <div className="relative w-full">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
        <Image src="/search.svg" alt="Search" width={20} height={20} />
      </span>
      <Input
        placeholder="Search articles"
        className="bg-white max-w-md h-10 rounded-b-md pl-10 pr-4 text-base font-normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};