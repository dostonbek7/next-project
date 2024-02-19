import PriceList from "@/components/PriceList";
import StatusButton from "@/components/StatusButton";
import Link from "next/link";

async function getData(id) {
  const req = await fetch(`http://localhost:4000/data/` + id);
  const data = await req.json();
  return data;
}

export default async function SingleInvoice({ params }) {
  const singleInvoice = await getData(params.id);
  return (
    <div className="pt-8 pb-5">
      <Link className="mb-8 flex gap-7 items-center" href="/">
        <img src='./assest/left-arrow.svg' alt="left-arrow" />
        <span>Go back</span>
      </Link>
      <section className="min-w-[327px] max-h-[91px] md:max-w-[688px] lg:min-w-[730px] lg:min-h-[88px] flex items-center md:justify-between rounded-lg bg-white sm-shadow px-6 pt-6 pb-7 md:px-8 md:py-5 mb-4">
       <div className="flex items-center gap-[180px] md:gap-4">
       <span>Status</span>
        <StatusButton status={singleInvoice.status} />
       </div>
        <div className="hidden md:flex md:items-center md:gap-2">
          <button className="btn rounded-3xl py-4 px-6 bg-[#F9FAFE] text-[#7E88C3]">
            Edit
          </button>
          <button className="btn bg-[#EC5757] rounded-3xl px-6 py-4 text-white">
            Delete
          </button>
          <button className="btn bg-[#7C5DFA] rounded-3xl px-7 py-4 text-white">
            Mark as Paid
          </button>
        </div>
      </section>
      <section className="p-6 md:p-8 lg:p-12 rounded-lg sm-shadow bg-white min-w-[327px] min-h-[695px] md:max-w-[688px] md:min-h-[602px] lg:max-w-[730px] lg:min-h-[631px]">
        <div className='md:flex items-center gap-[434px]'>
        <div className="mb-[30px]">
          <h1 className="text-[#7E88C3]">
            #
            <span className="text-sm font-bold text-[#0C0E16] leading-4">
              {singleInvoice.id}
            </span>
          </h1>
          <h2 className="text-[#7E88C3] leading-4">
            {singleInvoice.description}
          </h2>
        </div>
        <div className="flex flex-col gap-1 small-text mb-[30px]">
          <span>{singleInvoice.senderAddress.street}</span>
          <span>{singleInvoice.senderAddress.city}</span>
          <span>{singleInvoice.senderAddress.postCode}</span>
          <span>{singleInvoice.senderAddress.country}</span>
        </div>
        </div>
        <div className="flex gap-10 flex-wrap md:justify-between md:pr-[95px]">
          <div>
            <div className="mb-8">
              <span className="title-text">Invoice Date</span>
              <h2 className="bold-text">{singleInvoice.createdAt}</h2>
            </div>
            <div>
              <span className="title-text">Payment Due</span>
              <h3 className="bold-text">{singleInvoice.paymentDue}</h3>
            </div>
          </div>
          <div>
            <span className="text-xs text-[#7E88C3] leading-4">Bill To</span>
            <h3 className="bold-text mt-3">{singleInvoice.clientName}</h3>
            <div className="flex flex-col mt-2 mb-9">
              <span className="small-text">
                {singleInvoice.clientAddress.street}
              </span>
              <span className="small-text">
                {singleInvoice.clientAddress.city}
              </span>
              <span className="small-text">
                {singleInvoice.clientAddress.postCode}
              </span>
              <span className="small-text">
                {singleInvoice.clientAddress.countrty}
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-10 md:mb-12">
            <span className="title-text">Sent to</span>
            <span className="bold-text">{singleInvoice.clientEmail}</span>
          </div>
        </div>
        <PriceList singleInvoice={singleInvoice} />
        <div className="min-w-[279px] min-h-[80px] md:max-w-[624px] mb-14 md:mb-0 bg-[#373B53] p-6 rounded-bl-lg rounded-br-lg flex gap-[80px] md:gap-[370px] items-center">
          <span className="leading-5 text-sm text-white">Grand Total</span>
          <h2 className="font-bold text-xl leading-8 text-white">
            £{singleInvoice.total}.00
          </h2>
        </div>
        <div className="max-w-[375px] bg-white px-6 py-[22px] flex items-center gap-1 md:hidden">
          <button className="btn rounded-3xl py-4 px-6 bg-[#F9FAFE] text-[#7E88C3]">
            Edit
          </button>
          <button className="btn bg-[#EC5757] rounded-3xl px-6 py-4 text-white">
            Delete
          </button>
          <button className="btn bg-[#7C5DFA] rounded-3xl px-7 py-4 text-white">
            Mark as Paid
          </button>
        </div>
      </section>
    </div>
  );
}
