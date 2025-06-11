import Image from "next/image";

export default function Header({ variant }: { variant?: string }) {
  return (
    <header
      className={
        variant === "article"
          ? "w-full bg-white shadow-sm px-4 py-3 fixed top-0 left-0 z-20 flex items-center justify-between min-h-[69px]"
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
      <div className="flex items-center gap-2">
        <Image
          src="/avatar.jpg"
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
      </div>
    </header>
  );
}