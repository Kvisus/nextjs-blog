import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

const ButtonAction = () => {
  return (
    <div>
      <Link className="btn mr-2" href="/edit/1">
        <Pencil />
        Edit
      </Link>
      <button className="btn btn-error">
        <Trash />
        Delete
      </button>
    </div>
  );
};
export default ButtonAction;
