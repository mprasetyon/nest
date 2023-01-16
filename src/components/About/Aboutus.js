import React from "react";

import IMAGESHOME from "../../reusableComponents/images";

function Aboutus() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-16">
      <div className="grid justify-items-center">
        <img className="object-fit" src={IMAGESHOME.roundBig} alt="About-us" />
      </div>
      <div className="p-8">
        <h1 className="flex font-bold text-3xl justify-end">
          About <span className="text-red-800 ">&nbsp;Us.</span>
        </h1>
        <p className="leads text-right">
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
          ligula porta felis euismod semper. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum
          ducimus quas, libero omnis dolores odio quasi saepe cum similique
          voluptate fugit delectus amet impedit ipsa, atque ipsum quisquam
          cupiditate!
        </p>
        <div className="linktext">
          <a href="/" className="float-right">
            Read more <i className="far fa-arrow-alt-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="grid place-content-center grid-cols-1 sm:px-5 md:grid-cols-2 md:px-5 lg:grid-cols-2 lg:px-5">
        <div className="grid place-content-center px-4">
          <h1 className="font-bold text-5xl tracking-widest">
            Our Vision & Mission
          </h1>
        </div>
        <div>
          <div className="py-4">
            <h1 className="font-bold text-md text-red-800 border-b-2">
              VISION
            </h1>
            <p className="leading-6 tracking-wider">
              To build a better way to invest.
            </p>
          </div>
          <div className="py-4">
            <h1 className="font-bold text-md text-red-800 border-b-2">
              MISSION
            </h1>
            <p className="leading-6 tracking-wider">
              NEST believes in making investing in Real Estate approachable,
              accessible, affordable, and easy to understand for everyone. We
              leverage 30 years of experience in every real estate class to
              provide our clients with superior returns. With NEST, diversifying
              into Real Estate investments with the potential to earn passive
              income has never been so easy.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="grid place-content-center grid-cols-1 sm:px-5 md:px-5 lg:px-5">
        <div className="grid justify-items-center px-20">
          <img
            src={IMAGESHOME.roundBig2}
            className="object-fill scale-75"
            alt="background"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
