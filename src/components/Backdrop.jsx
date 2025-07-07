import { createPortal } from "react-dom";

const Backdrop = ({ onClick }) => {
  return createPortal(
    <div
      className="fixed inset-0 top-[96px] z-40 bg-black/60 transition-opacity"
      onClick={onClick}
      aria-hidden="true"
    />,
    document.body,
  );
};

export default Backdrop;
