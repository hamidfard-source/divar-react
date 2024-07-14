import { sendOtp } from "../services/auth";

const SendOtpForm = ({ mobile, setMobile, setStep }) => {
  async function submitHandler(event) {
    event.preventDefault();
    if (mobile.length != 11) return;

    const { response, error } = await sendOtp(mobile);
    console.log({ response, error });
    setStep(2);
  }
  return (
    <form onSubmit={submitHandler} className="flex flex-col  flex-auto">
      <div className="flex flex-auto  flex-col justify-evenly border-b-2 border-b-slate-100 mb-4">
        <h1 className="text-lg indent-3">شماره موبایل خود را وارد کنید</h1>
        <p className="text-xs text-slate-400 px-4 ">
          برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید.
          کد تأیید به این شماره پیامک خواهد شد.
        </p>
        <div className="flex flex-row mx-3">
          <input
            className=" bg-slate-100 p-2 flex-1"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="tel"
            name="phoneNumber"
            placeholder=" ... شماره موبایل"
            id="phoneNumber"
            inputMode="numeric"
            aria-invalid="false"
          />
          <input type="tel" disabled value={'+98'} className="w-12 mx-1 bg-slate-100 rounded-sm p-2 cursor-not-allowed" />
        </div>

      </div>
      <button
        type="submit"
        className=" self-end rounded-md bg-red-500 hover:bg-red-600  px-5 py-3 mb-3 text-slate-50"
      >
        <span> تأیید </span>
      </button>
    </form>
  );
};

export default SendOtpForm;
