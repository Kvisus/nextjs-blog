import { BookOpenCheck } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-100">
      <div className="container">
        <div className="flex-1">
          <Link href={"/"}>
            <BookOpenCheck color="blue" />
            Icon
          </Link>
        </div>
        <div className="flex-none">
          {/* <button className="btn btn-ghost">Create Post</button> */}
          <Link href="/create" className="btn btn-ghost">
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
