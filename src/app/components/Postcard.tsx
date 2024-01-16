import { Tag } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";

interface PostcardProps {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  };
}
const Postcard: FC<PostcardProps> = ({ post }) => {
  const { title, content, tag, id } = post;
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content.slice(0, 30)}</p>
        <div className="card-actions justify-end">
          <span className="badge badge-neutral">{tag.name}</span>
          <Link className="hover:underline" href={`/blog/${id}`}>
            Read more..
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Postcard;
