import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2563EB] py-6 px-4 mt-auto border-t-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <Image src="/logoipsum.svg" alt="Logo" width={134} height={24} />
          <p className="text-sm text-white text-center md:text-left md:ml-2">
            © 2025 Blog genzet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}