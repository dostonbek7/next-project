"use client";
import Link from "next/link"
import StatusButton from "./StatusButton";

function InvoiceList({ invoice }) {
  return (
    <ul className="flex flex-col items-center gap-4">
      {invoice.map((invoice) => {
        return (
          <Link href={`/invoice/${invoice.id}`}
            key={invoice.id}
            className="min-w-[327px] min-h-[134px] md:w-[730px] md:min-h-[72px] flex items-center flex-col p-6 sm-shadow md:flex-row justify-between gap-5 rounded-lg md:bg-shadow bg-white"
          >
            <div className="w-full flex gap-[130px] items-center md:gap-10 mb-6 md:mb-0">
              <h1 className="font-bold">#{invoice.id}</h1>
              <h2 className="hidden md:block text-[#7E88C3] text-xs mb-2 md:mb-0">
                {invoice.paymentDue}
              </h2>
              <h3 className="font-normal text-xs text-[#858BB2]">
                {invoice.clientName}
              </h3>
            </div>
            <div className="w-full flex gap-[90px] items-center">
              <div className="md:flex items-center">
                <h2 className="text-[#7E88C3] text-xs mb-2 md:mb-0 md:hidden">
                  {invoice.paymentDue}
                </h2>
                <h4 className="font-bold">
                  ${invoice.total.toLocaleString("en-Us")}
                </h4>
              </div>
              <StatusButton status={invoice.status} />
            </div>
            <Link href={`/invoice/${invoice.id}`}>
              <img
                className="hidden md:inline-block md:pr-6"
                src='./assets/right-arrow.svg'
                alt="right-icon"
              />
            </Link>
          </Link>
        );
      })}
    </ul>
  );
}

export default InvoiceList;
