"use client";
import AdminSidebar from "@/components/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArticleSearchBar } from "@/components/ArticleSearchBar";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const dummyCategories = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: "Technology",
  createdAt: "April 13, 2025 10:55:12",
}));

export default function AdminArticlesPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 bg-gray-100">
        <div className="bg-white shadow-sm px-8 py-6 sticky top-0 z-20 flex items-center justify-between min-h-[68px]">
          <h2 className="text-2xl font-semibold">Category</h2>
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
                Total Category: <span className="font-base">10</span>
              </section>
              <div className="px-6 flex flex-wrap justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <ArticleSearchBar
                    onSearch={(value) => {
                        console.log(value);
                    }}
                    placeholder="Search Category"
                  />
                </div>
                <Button className="bg-blue-600 text-white">
                  <PlusIcon size={16} /> Add Articles
                </Button>
              </div>
            </section>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow className="text-muted-foreground">
                    <TableHead className="text-center w-1/3">Category</TableHead>
                    <TableHead className="text-center w-1/3">Created at</TableHead>
                    <TableHead className="text-center w-1/3">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-muted-foreground">
                  {dummyCategories.map((item) => (
                    <TableRow key={item.id} className="hover:bg-gray-50 border-b">
                      <TableCell className="text-center align-middle">{item.name}</TableCell>
                      <TableCell className="text-center align-middle">{item.createdAt}</TableCell>
                      <TableCell className="text-center align-middle space-x-4 text-sm">
                        <Link href={`/admin/category/${item.id}/edit`} className="text-blue-600 underline">Edit</Link>
                        <button className="text-red-500 underline">Delete</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {/* Pagination */}
            <Pagination className="flex justify-center mt-4 p-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <span className="px-2 text-gray-400">...</span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </main>
    </div>
  );
}
