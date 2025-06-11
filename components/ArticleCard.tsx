import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  categories: string[]; // ubah jadi array untuk banyak kategori
}

export const ArticleCard = ({
  title,
  date,
  excerpt,
  imageUrl,
  categories,
}: Props) => (
  <div className="bg-white rounded-2xl overflow-hidden">
    <Image
      src={imageUrl}
      alt={title}
      width={400}
      height={240}
      className="w-full h-[200px] object-cover rounded-2xl"
    />
    <div className="py-6 space-y-3">
      <p className="text-sm text-slate-600">{date}</p>
      <h3 className="font-semibold text-xl leading-snug text-slate-900">{title}</h3>
      <p className="text-base text-slate-600">{excerpt}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {categories.map((cat) => (
          <Badge key={cat} variant="outline" className="bg-[#BFDBFE] text-blue-900 border-none rounded-2xl">
            {cat}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);