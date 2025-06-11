import { ArticleCard } from "@/components/ArticleCard";

interface Props {
  articles: Array<{
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    categories: string | string[];
  }>;
}

export default function OtherArticles({ articles }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <h2 className="text-lg font-semibold mb-4 text-slate-900">Other articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-600">
        {articles.map((a, i) => (
          <ArticleCard
            key={i}
            title={a.title}
            date={a.date}
            excerpt={a.excerpt}
            imageUrl={a.imageUrl}
            categories={Array.isArray(a.categories) ? a.categories : [a.categories]}
          />
        ))}
      </div>
    </section>
  );
}