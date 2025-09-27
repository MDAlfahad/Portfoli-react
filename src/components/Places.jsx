import React from "react";
import CircularGallery from "../animation/CircularGallery";

const Places = () => {
  return (
    <div className="py-16 w-full bg-[#000]" >
      <div className="overflow-x-hidden " style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
};

export default Places;
