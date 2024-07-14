import React from "react";
import { bSlah2Slash } from "src/utils/string";
import { sp } from "utils/numbers";

const Card = ({ amount, images, createdAt, options }) => {

  // console.log(images);
  return (
    <div className="flex flex-auto flex-row rounded-sm border-2 sm:p-4 justify-between xs:text-xs px-2 py-4 lg:text-lg lg:max-w-[20rem]">
      <div className="flex flex-1  md:w-36 w-40 flex-col items-start justify-stretch gap-1">
        <h2 className="h-22 mb-3 line-clamp-2 max-w-32 sm:max-w-40 "> {options?.title??'بینام'}</h2>
        <span className="text-xs font-extralight text-slate-500">
          {sp(amount)+ ' تومان'}
        </span>
        <span className="text-xs font-extralight text-slate-500">
          {options?.city}{" "}
        </span>
        <span className="text-xs font-extralight text-slate-500">
          {new Date(createdAt).toLocaleDateString("fa-ir")}
        </span>
      </div>
      <div className="h-20 w-20 xs:h-20 xs:w-16 sm:h-32 sm:w-32 rounded-md bg-purple-400">
        <img
          onError={(e)=>e.currentTarget.src = './placeholder.png'}
          src={`${import.meta.env.VITE_BASE_URL}/` + bSlah2Slash(images[0])}
          className="h-full w-full object-cover"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Card;
