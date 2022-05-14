import React from "react";
import Navbar from "../../common/Navbar";

const RightSideBar = () => {
  return (
    <>
      <div className="border-b-2">
        <Navbar></Navbar>
      </div>
      <div className="py-8 grid grid-cols-12">
        <div className="col-span-8">
          <h3 className="text-2xl font-bold">Company Details</h3>

          {/* First Box */}
          <div className="my-4 border-2 rounded-2xl px-6 py-6 space-y-10">
            <div className="flex space-x-8">
              <h4>box</h4>
              <p>Business / Treding Name</p>
            </div>
            <div>
              <h3>CallIcon</h3>
            </div>
          </div>

          {/* Second Box */}
          <div className="my-4 border-2 rounded-2xl px-6 py-6 space-y-10">
            <div className="">
              <h3 className="text-xl font-bold">CR Number</h3>
              <p>1011022074</p>
            </div>
            <div className="grid grid-cols-12 bg-gray-100 px-6 rounded-2xl">
              <div className="col-span-5">
                <ul className="space-y-5 py-6">
                  <li> CR Status </li>
                  <li> Expiry Date of CR </li>
                  <li> Company Name in Arabic </li>
                  <li> Activity </li>
                  <li> Entity Structure </li>
                  <li> Date of Establishment </li>
                  <li> Company Capital </li>
                  <li> National Address </li>
                </ul>
              </div>
              <div className="col-span-5 bg-white my-2"></div>
              <div className="col-span-2"></div>
            </div>
          </div>

          {/* Banking Details */}
          <div className="my-4 border-2 rounded-2xl px-6 py-6 space-y-10">
            <div className="">
              <h3 className="text-xl font-bold">Banking Details</h3>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-5">
                <p>IBAN</p>
              </div>
              <div className="col-span-7">
                <div className="grid grid-cols-12 bg-gray-100 px-6 rounded-2xl">
                  <div className="col-span-5">
                    <ul className="space-y-5 py-6">
                      <li> Swift Code </li>
                      <li> Bank Name </li>
                    </ul>
                  </div>
                  <div className="col-span-5 bg-white my-2"></div>
                  <div className="col-span-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4"></div>
      </div>
    </>
  );
};

export default RightSideBar;
