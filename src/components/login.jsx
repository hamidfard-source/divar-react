import { useRef, useState } from "react";

import profile from "/profile.svg";
import Modal from "./modal";
import SendOtpForm from "./sendOtp";
import CheckOtpForm from "./checkOtp";
import { useOutsideModal } from "src/hooks/useOutsidemodal";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const loginModal = useRef()
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  useOutsideModal(loginModal,setModalOpen)
  return (
    <div>
      <button onClick={() => { setModalOpen(true); }} >
        <img className="ml-1 inline h-4 px-1" src={profile} alt="profile" />
        ورود
      </button>
      <Modal modalOpen={modalOpen} setRef={loginModal} >
        <div className=" flex w-full  items-baseline border-b-2 border-b-slate-100 py-3 justify-between">
          <h2 className="ml-4 grow text-lg font-medium text-slate-600 indent-2">
            ورود به حساب کاربری{" "}
          </h2>
          <button onClick={() => setModalOpen(false)} className="hover:bg-slate-200 mr-2  rounded-md px-4 py-3 font-['system-ui'] font-medium" type="button"> X </button>
        </div>
        {step == 1 && (
          <SendOtpForm
            setStep={setStep}
            mobile={mobile}
            setMobile={setMobile}
          />
        )}
        {step == 2 && (
          <CheckOtpForm
            mobile={mobile}
            code={code}
            setCode={setCode}
            setModalOpen={setModalOpen}
          />
        )}
      </Modal>
    </div>
  );
};

export default Login;
