import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, headerVariant }: { children: React.ReactNode; headerVariant?: string }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F6FC]">
      <Header variant={headerVariant} />
      <main className="flex-grow bg-white">{children}</main>
      <Footer />
    </div>
  );
}
