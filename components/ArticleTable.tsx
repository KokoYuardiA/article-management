import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";

const dummyArticles = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  title: `Artikel ${i + 1}`,
  category: "Technology",
  createdAt: "April 13, 2025 10:56:12",
  thumbnail: "/orang-ngoding.jpg",
}));

export default function ArticleTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="text-center w-1/5">Thumbnails</TableHead>
            <TableHead className="text-center w-1/5">Title</TableHead>
            <TableHead className="text-center w-1/5">Category</TableHead>
            <TableHead className="text-center w-1/5">Created at</TableHead>
            <TableHead className="text-center w-1/5">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-muted-foreground">
          {dummyArticles.map((item) => (
            <TableRow key={item.id} className="hover:bg-gray-50">
              <TableCell className="text-center align-middle w-1/5">
                <div className="flex justify-center">
                  <Image src={item.thumbnail} alt={item.title} width={60} height={60} className="rounded-md w-[60px] h-[60px]" />
                </div>
              </TableCell>
              <TableCell className="text-center align-middle w-1/5">{item.title}</TableCell>
              <TableCell className="text-center align-middle w-1/5">{item.category}</TableCell>
              <TableCell className="text-center align-middle w-1/5">{item.createdAt}</TableCell>
              <TableCell className="text-center align-middle w-1/5 space-x-2 text-sm">
                <Link href={`/admin/articles/${item.id}/preview`} className="text-blue-600 underline">Preview</Link>
                <Link href={`/admin/articles/${item.id}/edit`} className="text-green-600 underline">Edit</Link>
                <button className="text-red-500 underline">Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="flex justify-center mt-4 p-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}