import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 font-sans p-2">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl text-center font-bold font-sans">
          Last mile mobility platform for{" "}
          <span className="text-customText font-black">भारत</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-10 lg:ml-48 ">
          {/* Head Office */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl text-customText font-semibold">
              Head Office
            </h3>
            <p className="mt-2 text-xl font-medium">
              Arohana Technologies Private Limited <br />
              401 Bldg No B1, Boomerang Equity Bussipark, Cts No 4, <br />
              Mumbai-400072, Maharashtra, India
            </p>
          </div>

          {/* Regional Office */}
          <div className="text-center md:text-left">
            <h3 className="text-customText text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
              Regional Office
            </h3>
            <p className="mt-2 text-xl font-medium">
              H-1489, Awas Vikas No 1, Mansa Apartment, <br />
              Keshavpuram, Kalyanpur, <br />
              Kanpur-208017, Uttar Pradesh, India
            </p>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="text-customText text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold">
              Contact Us
            </h3>
            <p className="mt-2 text-xl font-medium">
              Phone:{" "}
              <Link href="tel:+918047488855" className="text-customText">
                +91 80 4748 8855
              </Link>
              <br />
              Email:{" "}
              <Link href="mailto:help@myrik.in" className="text-customText">
                help@myrik.in
              </Link>
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-8">              
              <Link href="https://www.youtube.com/@MyRik-fi2rr" className="text-gray-900"
                target="_blank"
                rel="noopener noreferrer">
                <FaYoutube size={36} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/myrik"
                className="text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={36} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-4 text-center">
          <p className="text-xl font-semibold">
            &copy; Copyright <span className="text-customText">MyRik</span>. All
            Rights Reserved
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy-policy" className="text-gray-700">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-700">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
