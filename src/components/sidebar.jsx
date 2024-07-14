import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getCategory } from "services/admin";

const Sidebar = () => {
  const { data } = useQuery(["get-categories"], getCategory);
  return (
    <aside className=" hidden fixed  right-0 md:top-20 md:flex h-dvh w-32 md:w-1/6 flex-col gap-5  overflow-hidden border-l-2 border-gray-200 px-4 pt-8 sm:text-xs font-extralight text-slate-500 text-xs xl:text-lg">
      <h2 className="text-md text-slate-900 xl:text-lg">دسته ها</h2>
      {data?.data.map((i) => (
        <Link key={i._id}>
          <img className="mx-2 inline h-5" src={`${i.icon}.svg`} alt="home" />
          {i.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
