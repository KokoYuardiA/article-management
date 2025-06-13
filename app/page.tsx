"use client";
import Layout from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleSearchBar } from "@/components/ArticleSearchBar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Design", "UI/UX"];

  const dummyArticles = Array.from({ length: 9 }).map((_, i) => ({
    title: `Judul Artikel ${i + 1}`,
    date: "April 5, 2025",
    excerpt: "Ini adalah ringkasan artikel yang membahas tentang topik desain, teknologi, dan lainnya.",
    imageUrl: "/orang-ngoding.jpg",
    categories: "Design",
  }));

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div
          className="relative flex flex-col items-center justify-center text-white min-h-[500px] py-12 md:py-24 px-2 md:px-4"
          style={{
            backgroundImage: "url('/young-male-designer-using-graphics-tablet-while-working-with-com.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#2563EBDB]"></div>
          <div className="relative z-10 flex flex-col items-center w-full max-w-3xl text-center gap-2">
            <span className="mb-1 text-sm md:text-base font-medium">Blog genzet</span>
            <h1 className="text-2xl md:text-5xl text-center mb-1 md:mb-2 drop-shadow">
              The Journal : Design Resources, Interviews, and Industry News
            </h1>
            <p className="text-base md:text-2xl opacity-90 mb-4 md:mb-8">Your daily dose of design insights!</p>
            <div className="flex flex-col md:flex-row w-full max-w-2xl gap-3 bg-blue-500 p-2 rounded-2xl shadow-lg">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="flex items-center justify-between bg-white text-black rounded-lg shadow-none border-none h-10 px-4 w-full md:w-60 text-base font-normal min-h-[40px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Select category</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex-1 text-black">
                <ArticleSearchBar onSearch={(val) => console.log(val)} />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-2 md:px-4 py-6 md:py-10">
          <p className="text-xs md:text-sm mb-2 md:mb-4 text-slate-600">Showing: 1-9 of 23 articles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyArticles.map((article, idx) => (
              <ArticleCard
                key={idx}
                title={article.title}
                date={article.date}
                excerpt={article.excerpt}
                imageUrl={article.imageUrl}
                categories={Array.isArray(article.categories) ? article.categories : [article.categories]}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2 py-10">
            <Button variant="outline">{"<"}</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">{">"}</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}