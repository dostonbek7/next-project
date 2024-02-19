function PriceList({ singleInvoice }) {
  return (
    <div className="p-6 min-w-[279px] min-h-[120px] md:max-w-[624px] md:max-h-[184px] bg-[#F9FAFE] rounded-tl-lg rounded-tr-lg">
      <div className="hidden md:flex justify-between items-center mb-8">
        <span className="md-price">Item Name</span>
        <span className="md-price">QTY</span>
        <span className="md-price">Price</span>
        <span className="md-price">Total</span>
      </div>
      <div className="flex items-center gap-[82px] ">
        <div className="flex flex-col md:flex-row md:justify-between">
          <h3 className="font-bold leading-4 text-[#0C0E16] mb-2 md:mb-0 md:mr-[80px]">
            {singleInvoice.items[0].name}
          </h3>
          <div className="md:flex gap-[140px]">
            <span className="font-bold text-[#7E88C3] leading-4">
              {singleInvoice.items[0].quantity}
            </span>
            <span className="font-bold text-[#7E88C3] leading-4">
              <span className="md:hidden">*</span>£
              {singleInvoice.items[0].price}
            </span>
          </div>
        </div>
        <span className="text-[#0C0E16] leading-4 font-bold">
          £{singleInvoice.items[0].total.toLocaleString("en-Us")}
        </span>
      </div>

      {singleInvoice.items[1] && (
        <div className="flex items-center gap-[82px] md:mt-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <h3 className="font-bold leading-4 text-[#0C0E16] mb-2 md:mb-0 md:mr-[80px]">
              {singleInvoice.items[1].name}
            </h3>
            <div className="md:flex gap-[140px]">
              <span className="font-bold text-[#7E88C3] leading-4">
                {singleInvoice.items[1].quantity}
              </span>
              <span className="font-bold text-[#7E88C3] leading-4">
                <span className="md:hidden">*</span>£
                {singleInvoice.items[1].price}
              </span>
            </div>
          </div>
          <span className="text-[#0C0E16] leading-4 font-bold">
            £{singleInvoice.items[1].total.toLocaleString("en-Us")}
          </span>
        </div>
      )}
    </div>
  );
}

export default PriceList;
