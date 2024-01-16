"use client";
import { FormInputPost } from "@/types";
import { Tag } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
  initialValues?: FormInputPost;
  isLoadingSubmit: boolean;
}

const FormPost: FC<FormPostProps> = ({
  submit,
  isEditing,
  initialValues,
  isLoadingSubmit,
}) => {
  const { register, handleSubmit } = useForm<FormInputPost>({
    defaultValues: initialValues,
  });

  //fetch list of tags
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const res = await axios.get("/api/tags");
      return res.data;
    },
  });
  // console.log(dataTags);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        placeholder="post title"
        className="input input-bordered w-full max-w-lg"
        {...register("title", { required: true })}
      />

      <textarea
        className="textarea textarea-bordered  w-full max-w-lg"
        placeholder="Content"
        {...register("content", { required: true })}
      ></textarea>

      {isLoadingTags ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : (
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue={""}
          {...register("tagId", { required: true })}
        >
          <option disabled value="">
            Select tags
          </option>
          {dataTags?.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      )}

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isLoadingSubmit && <span className="loading loading-spinner"></span>}
        {isEditing
          ? isLoadingSubmit
            ? "Updating..."
            : "Update"
          : isLoadingSubmit
          ? "Creating..."
          : "Create"}
      </button>
    </form>
  );
};
export default FormPost;
