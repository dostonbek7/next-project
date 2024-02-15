import Image from 'next/image';
import bottomArrow from '../assets/bottom-arrow.svg'
import plusIcon from '../assets/plus-icon.svg'

function InvoiceTop() {
  return (
    <div className="flex items-center justify-between py-[34px] px-6 md:px-12 md:py-14 lg:hidden">
      <div>
        <h1 className="text-[20px] md:text-[32px] font-bold text-[#0C0E16] tracking-[-0.625px] md:tracking-[-1px] mb-1 md:mb-4">
          Invoise
        </h1>
        <p className="text-base font-medium text-[#888EB0] leading-4 tracking-[-0.25px]">
          <span className="hidden md:inline-block">There are</span> 7{" "}
          <span className="hidden md:inline-block">total</span> invoise
        </p>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center">
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="text-[#0C0E16] bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button"
          >
            Filter <span className="hidden md:inline-block">by status</span>
            <Image className="ml-3" src={bottomArrow} width={8} height={4} alt="icon down svg" />
          </button>
          <div
            id="dropdown"
            className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </h6>
            <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
              <li className="flex items-center">
                <input
                  id="apple"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />

                <label
                  htmlFor="apple"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Apple (56)
                </label>
              </li>

              <li className="flex items-center">
                <input
                  id="fitbit"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />

                <label
                  htmlFor="fitbit"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Fitbit (56)
                </label>
              </li>

              <li className="flex items-center">
                <input
                  id="dell"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />

                <label
                  htmlFor="dell"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Dell (56)
                </label>
              </li>
            </ul>
          </div>
        </div>
        <button className="w-[90px] h-[44px] md:w-[150px] md:h-12 bg-[#7C5DFA] flex items-center md:justify-center gap-2 py-[6px] pl-[6px] pr-[14px] md:py-2 md:pl-2 md:pr-4 rounded-3xl">
          <span className="h-8 w-8 p-[6px] rounded-[50%] bg-[#fff] flex justify-center items-center md:p-[11px]">
            <Image className="md:w-8 md:h-8"  src={plusIcon} alt="" />
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