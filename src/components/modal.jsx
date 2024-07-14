const Modal = ({ modalOpen, children, setRef }) => {
  return (
    <>
      <div className={`${modalOpen ? "fixed left-2/4 top-2/4 h-dvh w-dvw -translate-x-1/2 -translate-y-1/2 bg-slate-500/50" : " "} `}></div>
      <section ref={setRef} className={`fixed ${modalOpen ? "flex" : "hidden"} left-2/4 top-2/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 flex-col items-stretch bg-white p-4`}>
        {children}
      </section >
    </>
  );
};

export default Modal;
