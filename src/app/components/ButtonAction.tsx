"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ButtonActionProps {
  id: string;
}
const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();

  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <Link className="btn mr-2" href={`/edit/${id}`}>
        <Pencil />
        Edit
      </Link>
      <button onClick={() => deletePost()} className="btn btn-error">
        {isPending && <span className="loading loading-spinner"></span>}
        {isPending ? (
          "Deleting..."
        ) : (
          <>
            <Trash />
            Delete
          </>
        )}
      </button>
    </div>
  );
};
export default ButtonAction;
