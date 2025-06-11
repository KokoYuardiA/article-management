import Image from "next/image";

interface Props {
  title: string;
  date: string;
  author: string;
  imageUrl: string;
  content: string;
}

export default function ArticleContent({ title, date, author, imageUrl, content }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-24 pb-20">
      <div className="text-center mb-2 text-xs text-slate-600">
        {date} · Created by {author}
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-slate-900">{title}</h1>
      <div className="flex justify-center mb-8">
        <Image
          src={imageUrl}
          alt={title}
          width={1120}
          height={480}
          className="rounded-2xl object-cover w-full max-h-[480px]"
        />
      </div>
      <article
        className="prose prose-blue max-w-none mx-auto text-justify text-slate-700"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}