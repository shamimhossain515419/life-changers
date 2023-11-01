import React from "react";
import TextModifier from "react-text-modifier";
const SingleBannerSlider = ({Slider}) => {
  const { bg, title, sub_title } = Slider;
  return (
    <>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white">
        <p className="text-2xl md:text-3xl font-bold font-serif">{sub_title}</p>
        <TextModifier
          text={title}
          as="h1"
          renderSeparator={() => <div className="mt-1 md:mt-4" />}
          className="font-bold text-2xl md:text-3xl lg:text-4xl font-serif"
          highlight={[
            "life",
            "Life",
            "HEALTH",
            "Journey",
            "time",
            "Lifestyle",
            "assistance",
          ]}
          highlightClassName="text-4xl md:text-5xl lg:text-6xl text-emerald-500"
        />
        <button className="text-xl font-bold font-serif my-6  primaryBg p-4  ">
          Read More
        </button>
        <button className="text-xl font-bold font-serif my-6 secondaryBg p-4  ms-5">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default SingleBannerSlider;
