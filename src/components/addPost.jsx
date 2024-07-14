import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getCategory } from "services/admin";
import { createPost } from "services/dashboard";
import { p2e } from "utils/numbers";

const AddPost = () => {
  const queryClient = useQueryClient();
  const [post, setPost] = useState({
    title: "",
    content: "",
    amount: 1000,
    city: "",
    category: "",
    images: null,
  });

  const { data } = useQuery(["get-categories"], getCategory);

  const { mutate, isLoading, error } = useMutation(createPost, {
    onSuccess: () => queryClient.invalidateQueries("my-posts"),
  });

  const onChangeHandle = (e) => {
    const name = e.target.name;
    if (name !== "images") {
      setPost({ ...post, [name]: e.target.value });
    } else {
      setPost({ ...post, [name]: e.target.files[0] });
    }
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i in post) {
      formData.append(i, post[i]);
    }
    if (!post.name || !post.content || !post.amount || !post.city) return;
    // console.log(post);
    mutate(formData);
  };

  if (error) console.log(error);

  return (
    <form
      className="mt-20  flex w-3/4 flex-col items-start justify-start gap-2 p-3"
      onSubmit={onSubmitHandle}
      onChange={onChangeHandle}
    >
      <h3 className="border-b-4 border-rose-800 text-xl font-medium ">
        افزودن آگهی
      </h3>
      <label htmlFor="title">عنوان</label>
      <input
        className="w-1/3 border-2 p-1"
        type="text"
        name="title"
        id="title"
      />
      <label htmlFor="content">توضیحات</label>
      <textarea
        className="h-28 w-1/3 border-2 p-1"
        name="content"
        id="content"
      />
      <label htmlFor="amount">مبلغ</label>
      <input
        className="w-1/3 border-2 p-1"
        inputMode="numeric"
        defaultValue={post.amount}
        type="number"
        name="amount"
        id="amount"
      />
      <label htmlFor="city">شهر</label>
      <input
        className="w-1/3 border-2  p-1"
        type="text"
        name="city"
        id="city"
      />
      <label htmlFor="category">دسته بندی</label>
      <select
        className="w-2/6 cursor-pointer rounded-lg border-2  p-1"
        defaultValue={""}
        name="category"
        id="category"
      >
        <option value={""}>انتخاب</option>
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input
        className="bg-slate-100 p-2 "
        type="file"
        name="images"
        id="images"
        accept="image/png, image/jpeg"
      />

      <input
        className="my-2 ml-5 self-end rounded-lg bg-rose-800 px-7 py-2 text-lg text-white"
        type="submit"
        value="ایجاد"
      />
    </form>
  );
};

export default AddPost;
