import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addCategory } from "services/admin";

const CategoryForm = () => {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const queryClient = useQueryClient();
  const { mutate, isLoading, error, data } = useMutation(addCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });

  // console.log({ isLoading, error, data });

  const onChangeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
  };
  return (
    <>
      {!!error && (
        <p className="mt-3 rounded-lg bg-rose-500 px-5 py-2 text-white">
          مشکلی پیش امده
        </p>
      )}
      {data?.status === 201 && (
        <p className="absolute top-5 rounded-lg bg-emerald-700 px-5 py-2 text-white"> دسته بندی جدید با موفقیت ساخته شد. </p>
      )}
      <form className="mr-10 mt-5  flex w-1/3 flex-col items-stretch gap-2 " onChange={onChangeHandler} onSubmit={onSubmitHandler} >
        <h3 className="mb-3 self-start border-b-4 border-rose-800 text-xl font-medium text-slate-800"> دسته بندی جدید</h3>
        <div className="flex flex-col gap-2 ">
          <label className="mr-2 text-sm font-semibold text-slate-800" htmlFor="name" > اسم </label>
          <input
            className="mb-2 w-11/12 rounded-lg border-2 border-slate-300 bg-slate-50/90 p-1"
            type="text"
            name="name"
            id="name"
          />
          <label className="mr-2 text-sm font-semibold text-slate-800" htmlFor="slug" > اسلاگ </label>
          <input className="mb-2 w-11/12 rounded-lg border-2 border-slate-300 bg-slate-50/90 p-1" type="text" name="slug" id="slug" />
          <label
            className="mr-2 text-sm font-semibold text-slate-800"
            htmlFor="icon"
          >
            آیکون
          </label>
          <input
            className="mb-2 w-11/12 rounded-lg border-2 border-slate-300 bg-slate-50/90 p-1"
            type="text"
            name="icon"
            id="icon"
          />
        </div>
        <input
          className="mt-10 self-end rounded-md bg-rose-800 px-7 py-2 text-white hover:cursor-pointer hover:bg-rose-700 disabled:opacity-70"
          type="submit"
          value="تایید"
          disabled={isLoading}
        />
      </form>
    </>
  );
};
export default CategoryForm;
