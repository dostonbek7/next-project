"use client";
import { useDispatch, useSelector } from "react-redux";
import { toogleDrawer } from "@/redux/invoiceSlice";

function InvoiceTop() {
  const dispatch = useDispatch();
  return (
    <div className="lg:max-w-[730px] lg:mx-auto flex items-center justify-between py-[34px] px-6 md:px-12 md:py-14">
      <div>
        <h1 className="text-[20px] md:text-[32px] font-bold text-[#0C0E16] tracking-[-0.625px] md:tracking-[-1px] mb-1 md:mb-4">
          Invoise
        </h1>
        np
        <p className="text-base font-medium text-[#888EB0] leading-4 tracking-[-0.25px]">
          <span className="hidden md:inline-block">There are</span> 7
          <span className="hidden md:inline-block">total</span> invoise
        </p>
      </div>
      <div className="flex gap-2">
        <div className="dropdown mr-10">
          <div className="flex items-center gap-4">
            <div tabIndex={0} role="button" className="m-1">
              Filter
              <span className="hidden md:inline-block lg:ml-1">by status</span>
            </div>
            <img src="./assets/bottom-arrow.svg" alt="bottom-arrow" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <label className="label cursor-pointer justify-start">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">Paid</span>
              </label>
            </li>
            <li>
              <label className="label cursor-pointer justify-start">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">Pending</span>
              </label>
            </li>
            <li>
              <label className="label cursor-pointer justify-start">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">Darft</span>
              </label>
            </li>
          </ul>
        </div>
        <button
          onClick={() => dispatch(toogleDrawer)}
          className="w-[90px] h-[44px] md:min-w-[200px] md:h-12 bg-[#7C5DFA] flex items-center md:justify-center gap-2 py-[6px] pl-[6px] pr-[14px] md:py-2 md:pl-2 md:pr-4 rounded-3xl"
        >
          <span className="h-8 w-8 p-[6px] rounded-[50%] bg-[#fff] flex justify-center items-center md:p-[11px]">
            <img
              className="md:w-8 md:h-8"
              src="./assets/plus-icon.svg"
              alt="plus-icon"
            />
          </span>
          <h3 className="text-base text-[#fff] font-bold leading-4 tracking-[-0.25px]">
            New <span className="hidden md:inline-block">Invoise</span>
          </h3>
        </button>
      </div>
    </div>
  );
}

export default InvoiceTop;
