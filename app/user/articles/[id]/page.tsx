// app/user/articles/[id]/page.tsx
import Layout from "@/components/Layout";
import ArticleContent from "@/components/ArticleContent";
import OtherArticles from "@/components/OtherArticles";

// Simulasi fetch data berdasarkan ID
async function getArticle(id: string) {
  // Ganti ini dengan fetch ke API asli
  return {
    id,
    title: "Figma’s New Dev Mode: A Game-Changer for Designers & Developers",
    date: "February 5, 2025",
    author: "Admin",
    imageUrl: "/orang-ngoding.jpg",
    content: `
      <h3>🔹 What is Dev Mode?</h3>
      <p>Dev Mode is a new workflow...</p>
      <h3>🔹 Bridging the Gap...</h3>
      <p>Traditionally, handoff was hard...</p>
      <h3>🔹 Why it Matters</h3>
      <p>For designers working in agile...</p>
    `,
  };
}

async function getOtherArticles(categories = "Design") {
  return Array.from({ length: 3 }).map((_, i) => ({
    title: `Judul Artikel ${i + 1}`,
    date: "April 5, 2025",
    excerpt: "Ini adalah ringkasan artikel yang membahas tentang topik desain, teknologi, dan lainnya.",
    imageUrl: "/orang-ngoding.jpg",
    categories: "Design",
  }));
}

export default async function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);
  const others = await getOtherArticles();

  return (
    <Layout headerVariant="article">
      <ArticleContent {...article} />
      <OtherArticles articles={others} />
    </Layout>
  );
}
