import React from "react";

function ImageCard(props) {
  return (
    <div className="bg-gray-800 rounded-xl p-5 m-3 ">
      <div className="h-full w-full flex-col flex justify-center items-center grayscale hover:grayscale-0 duration-300 ease-in-out ">
        <img src={props.src} alt={props.alt} className="h-4/5 w-1/2 p-1 flex items-center justify-center hover:scale-105"/>
        <h3 className="font-wixmadefor h-1/5 flex items-center justify-center">{props.title}</h3>
      </div>
    </div>
  );
}

export default ImageCard;
