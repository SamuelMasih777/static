"use client"
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-64 sm:py-36">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-16">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-semibold text-center text-customText mt-16">
          Terms and Conditions
        </h1>
        <p className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold text-gray-950 mb-6 p-16">
          PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. BY USING THIS
          WEBSITE AND/OR PLATFORM YOU AGREE TO BE BOUND BY ALL OF THE BELOW
          TERMS AND CONDITIONS.
        </p>

        {/* Rider Terms of Service */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-customText mb-6">
            Rider Terms of Service
          </h2>
          <p className="text-gray-950 text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal mb-6">
            The <strong>Customer Terms and Conditions</strong> for usage of the
            MyRik Customer App published by Arohana Technologies Private
            Limited.
          </p>
          <ul className="space-y-6 text-gray-950 text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal">
            <li>
              <span className="font-bold">1.</span>{" "}
              <strong>Acceptance:</strong> The Customer shall be deemed to have
              accepted these Terms and Conditions on continuing to use the
              MyRik Customer App, and these Terms and Conditions shall come
              into effect and be held to be a valid agreement between MyRik and
              the Customer.
            </li>
            <li>
              <span className="font-bold">2.</span>{" "}
              <strong>Registration Eligibility:</strong> Use of the MyRik
              Customer App is available only to persons who can enter into
              legally binding contracts under the Indian Contract Act, 1872.
            </li>
            <li>
              <span className="font-bold">3.</span>{" "}
              <strong>Customer&apos;s Account and Registration Obligations:</strong>{" "}
              Registration on the MyRik Customer App is a pre-requisite for
              using the Services, and the Customer shall provide certain
              information to create a Customer Account.
            </li>
          </ul>
        </div>

        {/* Delivery Terms of Service */}
        <div>
          <h2 className="text-4xl font-semibold text-customText mb-6">
            Delivery Terms of Service
          </h2>
          <p className="text-gray-950 text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal mb-6">
            The <strong>Merchant Terms and Conditions</strong> for the usage of
            the MyRik Delivery App published by Arohana Technologies Private
            Limited.
          </p>
          <ul className=" space-y-6 text-gray-950 text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-normal">
            <li>
              <span className="font-bold">1.</span>{" "}
              <strong>Acceptance:</strong> The Merchant agrees to all terms and
              conditions under these Terms and Conditions by accessing,
              registering, transacting, or using the MyRik Delivery App and the
              Services.
            </li>
            <li>
              <span className="font-bold">2.</span>{" "}
              <strong>Registration Eligibility:</strong> Use of the MyRik
              Delivery App is available only to persons who can enter into
              legally binding contracts under the Indian Contract Act, 1872.
            </li>
            <li>
              <span className="font-bold">3.</span>{" "}
              <strong>Merchant&apos;s Account and Registration Obligations:</strong>{" "}
              Registration on the MyRik Delivery App is a pre-requisite for
              using the Services, and the Merchant is required to provide
              certain information to create a Merchant Account.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
