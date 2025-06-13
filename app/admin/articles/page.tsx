"use client";
import AdminSidebar from "@/components/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ArticleTable from "@/components/ArticleTable";
import { ArticleSearchBar } from "@/components/ArticleSearchBar";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { use } from "react";

export default function AdminArticlesPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 bg-gray-100">
        <div className="bg-white shadow-sm px-8 py-6 sticky top-0 z-20 flex items-center justify-between min-h-[68px]">
          <h2 className="text-2xl font-semibold">Articles</h2>
          <div className="flex items-center gap-2">
            <Image
              src="/avatar.svg"
              alt="User Avatar"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span
              className="text-sm font-medium text-slate-900 underline max-[375px]:hidden"
            >
              James Dean
            </span>
          </div>
        </div>

        <section className="mx-auto p-6">
          <div className="bg-white rounded-lg shadow-md">
            <section className="border-b border-gray-200">
              <section className="p-6 flex flex-wrap items-center gap-4 mb-4 border-b border-gray-200">
                Total Articles: <span className="font-semibold">10</span>
              </section>
              <div className="px-6 flex flex-wrap justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Select>
                    <SelectTrigger className="w-[109px] text-slate-900">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AllCategory">Category</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Design">Design</SelectItem>
                    </SelectContent>
                  </Select>
                  <ArticleSearchBar
                    onSearch={(value) => {
                      console.log(value);
                    }}
                    placeholder="Search by title"
                  />
                </div>
                <Button className="bg-blue-600 text-white">
                  <PlusIcon size={16} /> Add Articles
                </Button>
              </div>
            </section>
            <ArticleTable />
          </div>
        </section>
      </main>
    </div>
  );
}
