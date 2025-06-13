'use client';
import { Button } from "./ui/button";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { LogOutIcon, NewspaperIcon, TagIcon } from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm ${
      pathname === href
        ? "bg-blue-500 text-white font-base text-[16px]"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <aside className="bg-blue-600 text-white min-h-screen w-1/7 p-4 sticky top-0 h-screen">
      <div className="flex items-center gap-2 mb-6 ml-3">
        <Image src="/logoipsum.svg" alt="Logo" width={134} height={24} />
      </div>
      <nav className="space-y-2 text-[16px]">
        <Link href="/admin/articles" className={linkClass("/admin/articles")}>
          <NewspaperIcon size={20} />
          <span>Articles</span>
        </Link>
        <Link href="/admin/category" className={linkClass("/admin/category")}>
          <TagIcon size={20} />
          <span>Category</span>
        </Link>
        <Button
          className="bg-blue-600 justify-start ml-2 w-full hover:bg-blue-500"
        >
          <LogOutIcon size={20} />
          Logout
        </Button>
      </nav>
    </aside>
  );
}