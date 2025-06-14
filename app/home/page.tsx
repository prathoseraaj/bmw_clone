import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover relative bg-center h-[75vh]"
        style={{
          backgroundImage:
            "url(https://bmw.scene7.com/is/image/BMW/GKL_Web_Banner_3000_3000_new:16to7?fmt=webp&wid=1504&hei=658)",
        }}
      >
        <div className=" absolute bottom-4 mt-5 mb-5 ml-25 text-white">
          <h1 className=" text-[27px]">LUXURY . FAST . FORWARD .</h1>
          <pre>T H E   B M W   7   R A N G E .</pre>

          <button className="bg-blue-600 font-semibold text-[14px] mt-3 px-10 py-4 rounded">
            Discover now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
