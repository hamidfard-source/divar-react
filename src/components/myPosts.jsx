import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyPosts } from "services/dashboard";
import { sp } from "utils/numbers";
import { bSlah2Slash } from "utils/string";
import { deleteMyPost } from "services/dashboard";
import toast from "react-hot-toast";

const MyPosts = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery(["my-posts"], getMyPosts);
  console.log("data :>> ", data?.data);

  const { mutate } = useMutation(deleteMyPost, {
    onSuccess: () =>
      queryClient.invalidateQueries("my-posts") &&
      toast.success("آگهی با موفقیت حذف شد "),
  });

  if (isLoading) return "loading";

  return (
    <div className="flex w-2/3 flex-col  items-center justify-center ">
      <h2>آگهی های شما - ({data?.data.count})</h2>
      <div className="flex flex-row flex-wrap gap-7">
        {data.data.posts.map((i) => (
          <div key={i._id} className="flex flex-row rounded-sm border-2 p-4">
            <div className="flex w-48 flex-col items-start justify-stretch gap-1">
              <h2 className="h-22 mb-3 line-clamp-2 max-w-40 ">
                {" "}
                {i.options.name}
              </h2>
              <span className="text-xs font-extralight text-slate-500">
                {i.options.content}
              </span>
              <span className="text-xs font-extralight text-slate-500">
                {sp(i.amount)}{" "}
              </span>
              <span className="text-xs font-extralight text-slate-500">
                {i.options.city}
              </span>
              <span className="text-xs font-extralight text-slate-500">
                {new Date(i.createdAt).toLocaleDateString("fa-ir")}
              </span>
              <button
                className="rounded-md bg-rose-700 px-2 py-1 text-white"
                onClick={() => mutate(i._id)}
              >
                Delete
              </button>
            </div>
            <div className=" h-32 w-32 rounded-md bg-purple-400">
              <img
                src={
                  `${import.meta.env.VITE_BASE_URL}/` + bSlah2Slash(i.images[0])
                }
                className="h-full w-full object-cover"
                alt="img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
