import React from "react";

import IbuSari from "../../assets/img/OurTeam/Picture2.png";
import Drake from "../../assets/img/OurTeam/Picture3.png";
import Anggia from "../../assets/img/OurTeam/Picture4.png";

export default function OurTeam() {
  return (
    <div className="container mx-auto px-20 pt-6">
      <div className="grid grid-flow-cols grid-cols-3 gap-4 py-10">
        <div>
          <figure className="bg-gradient-to-t from-gray-300 to-gray-50 rounded-xl p-8 md:p-0 shadow-lg ">
            <div className="grid justify-items-center pt-6">
              <img
                className="flex items-center w-32 h-32 rounded-full "
                src={IbuSari}
                alt=""
              />
              <figcaption className="font-medium p-4 text-center">
                <div className="text-red-800 text-lg font-bold">SARI DEWI</div>
                <div className="text-black">Director</div>
              </figcaption>
              <blockquote>
                <p className="text-center text-sm font-semibold text-gray-600 p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vehicula felis in sagittis tincidunt. Nam sem felis,
                  laoreet sed condimentum sit amet, faucibus eget elit.
                  Phasellus id turpis commodo, egestas mauris a, dapibus odio.
                  Cras congue est nisl. In sollicitudin, elit eu dignissim
                  feugiat, tellus metus pretium turpis, vitae imperdiet diam
                  odio sit amet risus. Etiam sagittis, quam a lacinia dapibus,
                  purus massa feugiat turpis, in iaculis ligula libero quis
                  velit. Sed posuere dui eget massa fringilla blandit.
                </p>
              </blockquote>
            </div>
          </figure>
        </div>
        <div>
          <figure className="bg-gradient-to-t from-gray-300 to-gray-50 rounded-xl p-8 md:p-0 shadow-lg ">
            <div className="grid justify-items-center pt-6">
              <img
                className="flex items-center w-32 h-32 rounded-full "
                src={Drake}
                alt="Drake"
              />
              <figcaption className="font-medium p-4 text-center">
                <div className="text-red-800 text-lg font-bold">
                  JOHAN DRAKE NURTANIO
                </div>
                <div className="text-black">Deputy Director</div>
              </figcaption>
              <blockquote>
                <p className="text-center text-sm font-semibold text-gray-600 p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vehicula felis in sagittis tincidunt. Nam sem felis,
                  laoreet sed condimentum sit amet, faucibus eget elit.
                  Phasellus id turpis commodo, egestas mauris a, dapibus odio.
                  Cras congue est nisl. In sollicitudin, elit eu dignissim
                  feugiat, tellus metus pretium turpis, vitae imperdiet diam
                  odio sit amet risus. Etiam sagittis, quam a lacinia dapibus,
                  purus massa feugiat turpis, in iaculis ligula libero quis
                  velit. Sed posuere dui eget massa fringilla blandit.
                </p>
              </blockquote>
            </div>
          </figure>
        </div>
        <div>
          <figure className="bg-gradient-to-t from-gray-300 to-gray-50 rounded-xl p-8 md:p-0 shadow-lg ">
            <div className="grid justify-items-center pt-6">
              <img
                className="flex items-center w-32 h-32 rounded-full "
                src={Anggia}
                alt="Anggia"
              />
              <figcaption className="font-medium p-4 text-center">
                <div className="text-red-800 text-lg font-bold">
                  ANGGIA DIAN
                </div>
                <div className="text-black">
                  HEAD OF MARCOMM RAY WHITE INDONESIA
                </div>
              </figcaption>
              <blockquote>
                <p className="text-center text-sm font-semibold text-gray-600 p-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vehicula felis in sagittis tincidunt. Nam sem felis,
                  laoreet sed condimentum sit amet, faucibus eget elit.
                  Phasellus id turpis commodo, egestas mauris a, dapibus odio.
                  Cras congue est nisl. In sollicitudin, elit eu dignissim
                  feugiat, tellus metus pretium turpis, vitae imperdiet diam
                  odio sit amet risus. Etiam sagittis, quam a lacinia dapibus,
                  purus massa feugiat turpis, in iaculis ligula libero quis
                  velit. Sed posuere dui eget massa fringilla blandit.
                </p>
              </blockquote>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
