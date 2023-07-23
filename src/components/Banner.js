import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './Banner.css';

const img0 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/Post/PD23/Unrec/PC_hero_1_2x._CB599886239_.jpg";
const img1 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/ATF/Unrec/Kotak_bankStripe/Shoes/Shoes_3000._CB599886137_.jpg";
const img2 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/July/Unrec/TE_3000x1200._CB600178615_.jpg";
const img3 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg";
const img4 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/MA_3000._CB603210873_.jpg";

function Banner() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true, 
  };

  return (
    <div className="ban">
      <Slider {...settings}>
        <div className="fade-img">
          <img src={img0} alt="Slide 1" />
        </div>
        <div className="fade-img">
          <img src={img1} alt="Slide 2" />
        </div>
        <div className="fade-img">
          <img src={img2} alt="Slide 3" />
        </div>
        <div className="fade-img">
          <img src={img3} alt="Slide 4" />
        </div>
        <div className="fade-img">
          <img src={img4} alt="Slide 5" />
        </div>
      </Slider>
      <div className="allcards" style={{ marginTop: "-25%" }}>
        <div className="card">
          <span className="card-heading">Revamp your home in style</span>
          <div className="ccds">
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"
                alt="Image 1"
              />
              <p>Bedsheets, curtains & more</p>
            </div>
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg"
                alt="Image 2"
              />
              <p>Home decoration</p>
            </div>
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg"
                alt="Image 3"
              />
              <p>Home storage</p>
            </div>
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"
                alt="Image 4"
              />
              <p>Lighting solution lights</p>
            </div>
            <div className="link-container">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Explore all
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <span className="card-heading">
            Up to 60% off | Premium diapers & curated toys |...
          </span>
          <div className="ccds">
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/Tile_186x116_4._SY116_CB600052791_.jpg"
                alt="Image 1"
              />
              <p>Starting $99 Baby products</p>
            </div>
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/Tile_186x116_3._SY116_CB600052791_.jpg"
                alt="Image 2"
              />
              <p>Starting $299 toys </p>
            </div>
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/Tile_186x116_2._SY116_CB600052791_.jpg"
                alt="Image 3"
              />
              <p>Starting $299</p>
            </div>
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/Tile_186x116_1._SY116_CB600052791_.jpg"
                alt="Image 4"
              />
              <p>Starting $499RC/cars</p>
            </div>
            <div className="link-container">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Explore all
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <span className="card-heading">
            Starting ₹99 | All your home improvement needs
          </span>
          <div className="ccds">
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg"
                alt="Image 1"
              />
              <p>Spin mops,wipes </p>
            </div>
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg"
                alt="Image 2"
              />
              <p>Bathroom hardware </p>
            </div>
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg"
                alt="Image 3"
              />
              <p>Hammers,Screwdriver </p>
            </div>
            <div className="image-container">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"
                alt="Image 4"
              />
              <p>Extension boards,plugs </p>
            </div>
            <div className="link-container">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Explore all
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={{height:'150px'}}>
          <span className="card-heading">Sign in for your best experience</span>
          <div className="ccds">
            <button className="submit">Sign in securely</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
