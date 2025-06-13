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
          <h2 className="text-2xl font-semibold">User Profile</h2>
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
            <main className="flex flex-1 py-24 justify-center min-h-[calc(100vh-300px)]">
              <div className="w-full max-w-[400px] flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-4">User Profile</h2>
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-3xl mb-2">
                  J
                </div>
                <div className="w-full flex flex-col gap-2 px-6">
                  <div className="flex bg-gray-100 rounded-md px-4 py-2 items-center justify-between text-sm">
                    <div className="flex items-center min-w-[97px] justify-between">
                      <span className="font-semibold">Username</span>
                      <span className="mx-2">:</span>
                    </div>
                    <span>James Dean</span>
                  </div>
                  <div className="flex bg-gray-100 rounded-md px-4 py-2 items-center justify-between text-sm">
                    <div className="flex items-center min-w-[97px] justify-between">
                      <span className="font-semibold">Password</span>
                      <span className="mx-2">:</span>
                    </div>
                    <span>Admin123</span>
                  </div>
                  <div className="flex bg-gray-100 rounded-md px-4 py-2 items-center justify-between text-sm">
                    <div className="flex items-center min-w-[97px] justify-between">
                      <span className="font-semibold">Email</span>
                      <span className="mx-2">:</span>
                    </div>
                    <span>User</span>
                  </div>
                  <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    Back to home
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </section>
      </main>
    </div>
  );
}
