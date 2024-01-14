import BackButton from "@/app/components/BackButton";
import ButtonAction from "@/app/components/ButtonAction";

const BlogDetailPage = () => {
  return (
    <>
      <div>
        <BackButton />
        <h2 className="text-2xl font-bold my-4">Post one</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-700">Post one content</p>
    </>
  );
};
export default BlogDetailPage;
