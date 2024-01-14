import Link from "next/link";

const Postcard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link className="hover:underline" href="/blog/1">
            Read more..
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Postcard;
