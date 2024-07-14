import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory } from "services/admin";

const CategoryList = () => {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);

  if (isLoading) return "loading";
  return (
    <div className="mb-8 mt-6 flex  w-1/3 flex-col items-center">
      <h2 className=" mb-3 self-start border-b-4 border-b-rose-800 text-xl font-medium text-slate-800 ">
        لیست دسته بندی{" "}
      </h2>
      {isLoading
        ? "Loading..."
        : data.data.map((i) => (
            <div
              className="my-1 flex w-full flex-row items-center justify-between border border-b-slate-300 text-sm"
              key={i._id}
            >
              <div className="">
                <img className="inline p-1" src={`${i.icon}.svg`} alt="icon" />
                <h5 className="inline-block font-medium">{i.name}</h5>
              </div>
              <p className="mx-1  text-sm font-extralight">Slug: {i.slug}</p>
            </div>
          ))}
    </div>
  );
};

export default CategoryList;
