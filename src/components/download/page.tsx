import React, { useState } from "react";
import Image from "next/image";
import MyRikLogo from "@/public/images/logomyrik.png";
import DeliveryLogo from "@/public/images/logodelivery.png";
import RiderLogo from "@/public/images/logorider.png";
import GooglePlay from "@/public/images/googleplay.png";
import AndoridApp from "@/public/images/androidapp1.png"

const DownloadPage = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const apps = [
    {
      title: "MyRik Rider",
      image: MyRikLogo,
      description: `Navigate the City, Your Way, Where Every Journey's an Adventure!`,
      detailedText:
        "Download the MyRik Rider app now.\nDownload the MyRik Rider App today for a hassle-free travel experience with doorstep pickups.",
      link: "https://play.google.com/store/apps/details?id=com.arohana.myrick.rider",
    },
    {
      title: "MyRik Delivery",
      image: DeliveryLogo,
      description: "Deliver Beyond Distance, Your Fast Track to Convenience!",
      detailedText:
        "Download the MyRik Delivery app now.\nDownload the MyRik Delivery App today to make your deliveries quick and seamless.",
      link: "https://play.google.com/store/apps/details?id=com.arohana.myrick.merchant&hl=en_IN&gl=US",
    },
    {
      title: "MyRik Driver",
      image: RiderLogo,
      description: "Ride the Wave with MyRik, Drive Smarter, Earn Better!",
      detailedText:
        "Download the MyRik Driver app now.\nDownload the MyRik Driver App today to start earning with ease and flexibility.",
      link: "https://play.google.com/store/apps/details?id=com.arohana.myrick.driver&hl=en_IN&gl=US",
    },
  ];

  // Handle card click and toggle its state
  const handleCardClick = (title: string) => {
    if (openCard === title) {
      setOpenCard(null); // Close the card if clicked again
    } else {
      setOpenCard(title); // Open the clicked card
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-36 px-4">
      <div className="mx-auto text-center">
        <h1 className="text-4xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold text-customText mb-4">
          India&apos;s Budget Rickshaw Finder
        </h1>
        <div className="text-2xl  sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-medium mb-6 p-2 text-gray-950">
          <h2>Most Affordable E-Rickshaw: Go Green</h2>
        </div>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold mb-12 mt-6 p-12">
          <h3>Go Easy on Your Wallet!</h3>
        </div>

        <div className="grid grid-rows-1 md:grid-rows-3 gap-20 justify-items-center mx-auto px-4">
          {apps.map((app) => (
            <div
              key={app.title}
              onClick={() => handleCardClick(app.title)}
              className=" max-w-xl w-auto h-90 bg-customText rounded-2xl p-12 text-white transition-colors group"
            >              

              {/* Conditional rendering for toggled card content */}
              {(
                <div className="flex flex-col space-y-8">
                {/* Image */}
                <div className="flex items-start gap-8">
                <div className="w-24 h-24 bg-white rounded-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-xl transition-shadow duration-200 ">
                  <Image
                    src={app.image}
                    alt={app.title}
                    width={1000}
                    height={1000}
                    className="object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  />
                </div>
                </div>

                {/* Title and description */}
                <div className="text-left">
                  <div className="flex justify-between gap-2 mb-2">
                    <h4 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-left">
                      {app.title}
                    </h4>
                    {/* <ArrowRight size={40} className="transform group-hover:translate-x-1 transition-transform duration-200" /> */}
                  </div>
                  <p className="text-md sm:text-md md:text-md lg:text-lg xl:text-lg text-white/90">{app.description}</p>
                </div>
                <div className="flex items-center justify-center gap-4 -mt-4 ">
  <button className="flex items-center justify-center text-white rounded-lg  transition duration-200 p-2" onClick={() =>
    window.open(app.link, "_blank", "noopener noreferrer")
  }>
    
    <Image 
      src={GooglePlay} 
      alt="Google Play"
      width={180} // Increased size
      height={180} // Increased size
      className="mr-2 rounded-lg w-96 sm:w-150 sm:h-150 md:w-180 md:h-180 lg:w-200 lg:h-200"
    />
    {/* <span>Get it on<br />Google Play</span> */}
  </button>
  
  <button className="flex items-center justify-center text-white rounded-lg  transition duration-200  p-2">
    <Image 
      src={AndoridApp}
      alt="Android"
      width={180} // Increased size
      height={180} // Increased size
      className="mr-2 rounded-lg w-96 sm:w-150 sm:h-150 md:w-180 md:h-180 lg:w-200 lg:h-200"
    />
    {/* <span>Get it on<br />Android App</span> */}
  </button>
</div>
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
