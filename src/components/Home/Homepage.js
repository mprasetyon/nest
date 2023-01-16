import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NumberFormat from "react-number-format";

import bubble1 from "../../assets/img/Ellipse 77.png";
import api from "../../data/Api"

import {
  FaRegArrowAltCircleRight,
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Slider from "react-slick";

import ButtonRed from "../../reusableComponents/button/ButtonRed";
import ButtonWhite from "../../reusableComponents/button/ButtonWhite";

import { Link } from "react-router-dom";
import IMAGESHOME from "../../reusableComponents/images";

//data
import { dataInvestment as data } from "../../data/dataInvestment";

class Homepage extends React.Component{

  constructor(props) {
      super(props);
      this.state = { properties:[] };            
  } 

  async componentDidMount() {    
    var props = await api.properties();   
    if(props.data) 
      this.setState({properties:props.data});    
  }

  render_property(item){
    return(
      <div key={item.id} className="p-1">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            className="object-cover w-full"
            src={item.image[0].image_url}
            alt="gambar-properti"
          />
          <div className="absolute bottom-0 left-0 px-6 py-4 bg-gray-600 bg-opacity-75 w-full">
            <p className="leading-normal text-gray-100">
              {item.name}
            </p>
            <p className="leading-normal text-gray-100">
              Price :{" "}
              <NumberFormat
                value={item.funds_needed}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"Rp. "}
              />
            </p>
          </div>
        </div>
      </div>
      );
  }

render() {
  const sliderSettings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 sm:px-5 md:grid-cols-2 md:px-5 lg:grid-cols-2 lg:px-5">
            <div className="pt-20">
              <div>
                <div className="text-4xl py-2">
                  <b>Low Cost Business Investment!</b>
                </div>
                <p className="antialiased break-words">
                  <strong>NEST</strong> believes in making investing in Real
                  Estate approachable, accessible, affordable, and easy to
                  understand for everyone. We leverage 30 years of experience in
                  every real estate to provide our clients with superior
                  returns. With NEST, diversifying into Real Estate investments
                  with the potential to earn passive income has never been so
                  easy.
                </p>
              </div>
              <div className="pt-3">
              <Link to="/investment">
                <ButtonRed
                  className="w-auto flex items-center justify-center text-white p-6 roundbtn"
                  type="submit"
                >
                  Start Investing &nbsp;
                  <FaRegArrowAltCircleRight />
                </ButtonRed>
              </Link>
              </div>
            </div>
            <div className="grid justify-items-center pt-6">
              <img
                src={IMAGESHOME.imgBG}
                className="object-fill"
                alt="background"
              />
            </div>
          </div>
        </div>

        <div className="container m-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-16">
            <div className="relative overflow-hidden h-72">
              <img
                className="object-cover h-32 w-32"
                src={bubble1}
                alt="gambar-properti"
              />
              <img
                className="object-cover h-32 w-32 float-right"
                src={bubble1}
                alt="gambar-properti"
              />
              <div className="absolute top-0 left-0 px-6 w-full">
                <h1 className="tracking-wide text-gray-500 text-4xl font-bold p-0 w-full">
                  Best
                  <span className="text-red-700 text-4xl font-bold">
                    {" "}
                    Offer
                  </span>
                </h1>
                <h3 className="tracking-wide text-gray-500 text-xl font-medium">
                  Invest Now!
                </h3>
                <div>
                  <p className="antialiased break-words">
                    Donec ullamcorper nulla non metus auctor fringilla.
                    Vestibulum id ligula porta felis euismod semper. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur.
                    Fusce dapibus, tellus ac cursus commodo.
                  </p>
                  <Link
                    to="/investment"
                    className="float-right text-red-800 hover:text-gray-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    All Properties &nbsp;
                    <FaRegArrowAltCircleRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 justify-center">
              <Slider {...sliderSettings}>
              {(this.state.properties.length > 0)?this.state.properties.map((item)=>this.render_property(item)):null}
              {(this.state.properties.length > 0)?this.state.properties.map((item)=>this.render_property(item)):null}                
              {(this.state.properties.length > 0)?this.state.properties.map((item)=>this.render_property(item)):null}                
              {(this.state.properties.length > 0)?this.state.properties.map((item)=>this.render_property(item)):null}                
              </Slider>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-8">
          <h1 className="featurette-heading text-center mb-4 font-bold py-4 px-20 text-4xl">
            How it <span className="text-red-700">Works</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
            <figure className="rounded-xl">
              <img
                className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src={IMAGESHOME.imageVector1}
                alt="Register"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-xl text-gray-600 font-bold text-center">
                    Register
                  </p>
                </blockquote>
                <figcaption className="font-medium text-center">
                  <div className="text-gray-700">
                    You have to register first to jump into the next step
                  </div>
                </figcaption>
              </div>
            </figure>
            <figure className="rounded-xl">
              <img
                className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src={IMAGESHOME.imageVector2}
                alt="Find Property And Invest"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-xl text-gray-600 font-bold text-center">
                    Find Property And Invest
                  </p>
                </blockquote>
                <figcaption className="font-medium text-center">
                  <div className="text-gray-700">
                    Find property that suits your taste and budget. Fill the
                    requirements to invest your money
                  </div>
                </figcaption>
              </div>
            </figure>
            <figure className="rounded-xl">
              <img
                className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src={IMAGESHOME.imageVector3}
                alt="Follow the Development"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-xl text-gray-600 font-bold text-center">
                    Follow the Development
                  </p>
                </blockquote>
                <figcaption className="font-medium text-center">
                  <div className="text-gray-700">
                    Follow the development and monitor your Investment
                  </div>
                </figcaption>
              </div>
            </figure>
            <figure className="rounded-xl">
              <img
                className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src={IMAGESHOME.imageVector4}
                alt="Make Money"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-xl text-gray-600 font-bold text-center">
                    Make Money
                  </p>
                </blockquote>
                <figcaption className="font-medium text-center">
                  <div className="text-gray-700">
                    Finally you earn your money by investing in property
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-16 marketing">
          <div className="grid justify-items-center">
            <img
              className="object-fit"
              src={IMAGESHOME.roundBig}
              alt="About-us"
            />
          </div>
          <div className="p-8">
            <h1 className="flex font-bold text-3xl justify-end">
              About <span className="text-red-800 ">&nbsp;Us.</span>
            </h1>
            <p className="leads text-right">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Velit dolorum ducimus quas, libero omnis dolores odio quasi saepe
              cum similique voluptate fugit delectus amet impedit ipsa, atque
              ipsum quisquam cupiditate!
            </p>
            <div className="linktext">
              <a href="/" className="float-right">
                Read more <i className="far fa-arrow-alt-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8">
          <h1 className="grid justify-items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-1 pt-16 text-4xl">
            <strong>
              Benefit of <span className="text-red-700">Crowdfunding</span>
            </strong>
          </h1>
          <div className="box-border h-auto w-auto p-4 rounded-lg bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
              <figure className="rounded-xl p-4">
                <img
                  className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src={IMAGESHOME.imageBenefit1}
                  alt="benefit-1"
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-xl text-gray-600 font-bold text-center">
                      Investment
                    </p>
                  </blockquote>
                  <figcaption className="font-medium text-center">
                    <div className="text-gray-700">
                      Donec ullamcorper nulla non metus auctor fringilla.
                    </div>
                  </figcaption>
                </div>
              </figure>
              <figure className="rounded-xl p-4">
                <img
                  className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src={IMAGESHOME.imageBenefit2}
                  alt="benefit-2"
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-xl text-gray-600 font-bold text-center">
                      Profitable
                    </p>
                  </blockquote>
                  <figcaption className="font-medium text-center">
                    <div className="text-gray-700">
                      Donec ullamcorper nulla non metus auctor fringilla.
                    </div>
                  </figcaption>
                </div>
              </figure>
              <figure className="rounded-xl p-4">
                <img
                  className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src={IMAGESHOME.imageBenefit3}
                  alt="benefit-3"
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-xl text-gray-600 font-bold text-center">
                      Small Capital
                    </p>
                  </blockquote>
                  <figcaption className="font-medium text-center">
                    <div className="text-gray-700">
                      Donec ullamcorper nulla non metus auctor fringilla.
                    </div>
                  </figcaption>
                </div>
              </figure>
              <figure className="rounded-xl p-4">
                <img
                  className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src={IMAGESHOME.imageBenefit4}
                  alt="benefit-4"
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-xl text-gray-600 font-bold text-center">
                      Keep your money safe
                    </p>
                  </blockquote>
                  <figcaption className="font-medium text-center">
                    <div className="text-gray-700">
                      Donec ullamcorper nulla non metus auctor fringilla.
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className="container mx-auto justify-center p-8">
          <h1 className="text-3xl font-bold text-gray-600">
            <strong>
              Get in <span className="text-red-700">Touch</span>
            </strong>
          </h1>
          <p>Please don't hesitate to ask anything</p>
          <div className="flex items-center justify-center pt-6">
            <div className="font-bold rounded-xl border shadow-lg w-5/6">
              <div className="grid md:grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <div className="md:p-8  md:text-left text-center">
                    <h3 className="font-bold text-2xl text-red-700">
                      Send Message
                    </h3>
                    <form className="py-6">
                      <div className="grid md:grid-cols-1 lg:grid-cols-2">
                        <div className="grid cols-span-6 md:grid-cols-1 lg:grid-cols-1 py-2 px-2">
                          <label className="font-medium">Your Name</label>
                          <div className="form-row">
                            <div className="flex items-center border-b border-red-500 px-2">
                              <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                                type="text"
                                aria-label="Full name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid cols-span-6 md:grid-cols-1 lg:grid-cols-1 py-2 px-2">
                          <label className="font-medium">Phone Number</label>
                          <div className="form-row">
                            <div className="flex items-center border-b border-red-500 px-2">
                              <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                                type="text"
                                aria-label="Phone Number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-1 lg:grid-cols-1">
                        <div className="grid cols-span-6 md:grid-cols-1 lg:grid-cols-1 py-2 px-2">
                          <label className="font-medium">Email</label>
                          <div className="form-row">
                            <div className="flex items-center border-b border-red-500 px-2">
                              <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none"
                                type="text"
                                aria-label="Email"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-1 lg:grid-cols-1">
                        <div className="grid cols-span-6 md:grid-cols-1 lg:grid-cols-1 py-2 px-2">
                          <label className="font-medium">Message</label>
                          <div className="form-row">
                            <div className="flex items-center border-b border-red-500">
                              <textarea
                                className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none "
                                id="message"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ButtonWhite
                        className="btn btn-outline-maroon w-auto flex items-center justify-center text-white rounded-lg border p-2 float-right "
                        type="submit"
                      >
                        Submit &nbsp;
                        <FaPaperPlane />
                      </ButtonWhite>
                    </form>
                  </div>
                </div>
                <div className="lg:col-span-4 text-white bg-red-900 object-fill object-center overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                  <div className="pt-6 md:p-8 text-center md:text-left">
                    <h3 className="font-bold text-2xl text-white">
                      Contact Us
                    </h3>
                    <ul className="grid grid-flow-row auto-rows-max font-light pt-6">
                      <li className="inline-flex items-center text-sm p-1">
                        <FaEnvelope /> &nbsp;&nbsp; corporate.rwi@raywhite.co.id
                      </li>
                      <li className="inline-flex items-center text-sm p-1">
                        <FaPhoneAlt /> &nbsp;&nbsp; (021) 2788 9777
                      </li>
                      <li className="inline-flex items-center text-sm p-1">
                        <FaBuilding /> &nbsp;&nbsp;&nbsp;
                        <strong className="font-medium">
                          Sahid Sudirman Center
                        </strong>
                      </li>
                      <li className="inline-flex items-center text-sm p-1">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sahid Sudirman
                        Center 43E <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Floor
                        Jl.Jend.Sudirman No.86 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jakarta Pusat
                        10220 DKI
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jakarta
                        Indonesia
                        <br />
                      </li>
                    </ul>
                    <h3 className="text-white">Follow Us</h3>
                    <hr />
                    <span className="inline-grid grid-cols-5 gap-x-4 py-2">
                      <span className="bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center">
                        <FaFacebookF />
                      </span>
                      <span className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center">
                        <FaLinkedinIn />
                      </span>
                      <span className="bg-blue-400 rounded-full h-8 w-8 flex items-center justify-center">
                        <FaTwitter />
                      </span>
                      <span className="bg-red-600 rounded-full h-8 w-8 flex items-center justify-center">
                        <FaInstagram />
                      </span>
                      <span className="bg-red-700 rounded-full h-8 w-8 flex items-center justify-center">
                        <FaYoutube />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }

}

export default Homepage;
