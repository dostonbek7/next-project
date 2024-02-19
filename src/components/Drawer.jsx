"use client";
import { useSelector } from "react-redux";

function Drawer() {
  const { drawerOpen } = useSelector((state) => state.invoice);
  return (
    <div
      className={`absolute left-0 top-0 bottom-0 bg-white z-10 w-[719px] transition ${
        drawerOpen && "translate-x-full"
      } duration-300`}
    >
      <h1>Drawer</h1>
    </div>
  );
}

export default Drawer;
