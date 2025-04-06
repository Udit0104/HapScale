import React, { useState } from "react";
import { assets } from "../assets/assets";
const testimonialList = [
  [
    {
      img: assets.deep,
      name: "Deepankar Bishvas",
      position: "CEO & Founder at ClearTrust",
      content:
        "Thanks Rajesh Srivastava for your one liners, Tom dick and harry and the other amazing anecdotes you shared with us. It made the event a memorable one to remember",
    },
    {
      img: assets.gur,
      name: "Gurcharan Singh",
      position: "Founder and Managing Director",
      content:
        "Dear Rajesh, so proud of you for your efforts to provide guidance to the youngsters to become successful by implementing their education and ideas in the industry. You are creating a significant momentum for them to become employable and be successful in their startup. Keep it up.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Aditya Singh",
      position: "Senior Executive IIITians Network",
      content:
        "Had a chance to attend an amazing session at IIIT Ranchi, learnt to listen, not to imitate, thanks to Rajesh Sir!",
    },
  ],
];

function ShapeOne() {
  return (
    <svg
      className="absolute bottom-0 left-0 -z-[1]"
      width="404"
      height="572"
      viewBox="0 0 404 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="118"
        cy="286"
        r="265.5"
        stroke="#4175DF"
        strokeOpacity="0.2"
        strokeWidth="41"
      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute top-0 right-0 -z-[1]"
      width="269"
      height="479"
      viewBox="0 0 269 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="239.5"
        cy="239.5"
        r="239.5"
        fill="#FC4755"
        fillOpacity="0.25"
      />
    </svg>
  );
}

const Testimonial23 = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section className="ezy__testimonial23 py-14 md:py-24 bg-[#5f6fff] text-black relative z-[1] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      <ShapeOne />
      <ShapeTwo />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center justify-between mb-6 md:mb-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h2 className="text-[32px] font-bold leading-normal text-white">
               What Our Clients Say 
            </h2>
          </div>
          {/* <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-[1.7] opacity-80 text-white bold">
              Take a look on what our users have to say about our HapScale Product and Services
            </p>
          </div> */}
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-3 gap-6">
            {testimonialList[index].map((testimonial, i) => (
              <div className="col-span-3 lg:col-span-1" key={i}>
                <div className="bg-[#e5f6f6] shadow-2xl h-full p-6 xl:p-10 rounded-lg">
                  <div className="flex items-center mb-6">
                    <div className="mr-3">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="max-w-full h-auto rounded-full border"
                        width="65"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm mb-2">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="opacity-75 mb-2">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 m-0 mt-12">
            {testimonialList.map((item, i) => (
              <button
                className={`w-2 h-2 rounded-full ${
                  index === i
                    ? "scale-125 bg-blue-600"
                    : " bg-gray-400"
                } `}
                key={i}
                onClick={() => handleSelect(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial23;
