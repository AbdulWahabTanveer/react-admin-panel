import React from "react";

import { Img, Input, Line, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const CheckoutinprocessPage: React.FC = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-105 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-center justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-bluegray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Checkout
                </Text>
                <Text
                  className="text-base text-bluegray-400 text-right w-auto"
                  size="txtInterRegular16"
                >
                  <span className="text-bluegray-400 font-inter font-normal">
                    Shop Central/
                  </span>
                  <span className="text-bluegray-800 font-inter font-normal">
                    {" "}
                  </span>
                  <span className="text-bluegray-400 font-inter font-normal">
                    Product detail/
                  </span>
                  <span className="text-bluegray-800 font-inter font-normal">
                    {" "}
                    Checkout
                  </span>
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col h-[796px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[236px] py-12 rounded shadow-bs w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Img
                    className="h-[270px] w-[270px]"
                    src="images/img_creditcardpay.svg"
                    alt="creditcardpay"
                  />
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-full"
                      size="txtInterBold24Bluegray900"
                    >
                      In Process...
                    </Text>
                    <Text
                      className="text-bluegray-900 text-center text-sm w-full"
                      size="txtInterRegular14Bluegray900"
                    >
                      Please wait a minute, your order is processing
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutinprocessPage;
