import React from "react";
import Card from "./card";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "src/services/dashboard";

const ListContainer = () => {
  const { data } = useQuery(["all-posts"], getAllPosts);
  // console.log(data);
  return (
    <div className="sm:absolute xs:w-full left-auto sm:left-0 top-20 z-0 flex min-h-[1100px] w-full md:w-5/6 flex-row flex-wrap content-start justify-start  gap-3 px-5 mb-16 lg:mb-auto">
      {data?.data.posts.map((i) => (
        <Card
          key={i._id}
          amount={i.amount}
          category={i.category}
          images={i.images}
          createdAt={i.createdAt}
          options={i.options}
        />
      ))}
    </div>
  );
};

export default ListContainer;
