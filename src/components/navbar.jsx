import divar from "/divar.svg";
import location from "/location.svg";
import { Link } from "react-router-dom";

import Menu from "./menu";

const Navbar = () => {
  return (
    <>
      <nav className="fixed flex w-full flex-row items-center justify-evenly border-b border-gray-300/80 bg-white py-2 text-sm text-slate-500 ">
        <Link to={"/"}>
          <img className="h-11" src={divar} alt="divar" />
        </Link>
        <Link to={"/"}>
          <img className="inline h-5" src={location} alt="divar" />
          تهران
        </Link>
        <Link to={"/"}>دسته ها</Link>

        <input
          className="m-1 basis-4/12 bg-slate-100 p-2 "
          type="search"
          name="search"
          id="search"
          placeholder="جست و جو در همه ی اگهی ها"
        />

        <Menu />

        <Link to={"/"}>چت</Link>
        <Link to={"/"}>پشتیبانی</Link>
        <Link className="rounded-md bg-red-800 p-2 px-4 text-white" to={"/dashboard"}>
          ثبت آگهی
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
