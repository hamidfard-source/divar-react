import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { checkOtp } from "services/auth";
import { getProfile } from "services/user";
import { setCookie } from "utils/cookie";

const CheckOtpForm = ({ mobile, setCode, code, setModalOpen }) => {
  const navigate = useNavigate();
  // const { data, isLoading, error } = useQuery(["profile"], getProfile)

  // console.log({data,isLoading,error});

  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return "";

    const { response, error } = await checkOtp(code, mobile);

    if (response) {
      setCookie(response.data, 1);
      navigate(0);
    }
    if (error) return console.log(error);
  };

  // if(isLoading)return 'Loading'
  return (
    <form onSubmit={submitHandler} className=" flex flex-1 flex-col ">
      <div className="flex flex-auto flex-col justify-evenly border-b px-5 mb-4">
        <h2 className="text-slate-700">کد ارسالی به تلفن خود را وارد نمایید</h2>
        <input
          className="inset-1 text-left rounded-md bg-slate-200 p-3 text-xl"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          type="number"
          name="checkOtp"
          id="checkOtp"
        />
      </div>

      <div className="flex flex-row justify-between">
        <button
          type="submit"
          className="self-end rounded-md px-5 py-3 text-slate-500 hover:bg-slate-200"
        >
          <span> تغییر شماره </span>
        </button>
        <button
          type="submit"
          className="self-end rounded-md bg-red-500  px-5 py-3  text-slate-50"
        >
          <span> تأیید </span>
        </button>
      </div>
    </form>
  );
};

export default CheckOtpForm;
