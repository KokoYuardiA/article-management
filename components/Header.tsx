import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogOutIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header({ variant }: { variant?: string }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header
      className={
        variant === "article"
          ? "w-full bg-white shadow-sm px-8 py-6 fixed top-0 left-0 z-20 flex items-center justify-between min-h-[69px]"
          : "absolute top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-6 bg-transparent max-h-[69px]"
      }
    >
      <div className="flex items-center gap-2">
        {variant === "article" ? (
          <Image
            src="/frame.svg"
            alt="Logo"
            width={134}
            height={24}
            className="block"
          />
        ) : (
          <>
            <Image
              src="/logoipsum.svg"
              alt="Logo"
              width={134}
              height={24}
              className="block max-[375px]:hidden"
            />
            <Image
              src="/frame.svg"
              alt="Logo"
              width={134}
              height={24}
              className="hidden max-[375px]:block"
            />
          </>
        )}
      </div>
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center gap-2 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
        >
          <Image
            src="/avatar.svg"
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span
            className={
              variant === "article"
                ? "text-sm font-medium text-slate-900 underline max-[375px]:hidden"
                : "text-sm font-medium text-white drop-shadow underline max-[375px]:hidden"
            }
          >
            James Dean
          </span>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border z-30 py-2 animate-fade-in">
            <Link
              href="/profile"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-slate-700"
              onClick={() => setOpen(false)}
            >
              <UserIcon size={18} /> My Account
            </Link>
            <button
              className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 w-full"
              onClick={handleLogout}
            >
              <LogOutIcon size={18} /> Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}