import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [selectedOption, setSelectedOption] = useState("All");
  const [selectedLang, setSelectedLang] = useState("EN");

  const handleChangel = (event) => {
    setSelectedLang(event.value);
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="nav">
        {/*Home logo*/}
        <div className="logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/040/342/original/amazon-logo-editorial-free-vector.jpg"
            alt="home"
          />
          <h5>🏠 Home</h5>
        </div>
        {/* Location */}
        <div className="loc">
          <h5>Location</h5>
          <h4>
            <img
              src="https://i.pinimg.com/474x/18/21/66/182166af501f2c7a7014d0ccbb22547c.jpg"
              alt="Locationn"
            />
            Hello
          </h4>
          <div className="addr">
            <h3>select your address</h3>
          </div>
        </div>
        {/* search */}
        <div className="search-bar">
          <div className="dropdown-container">
            <select
              className="dropdown"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="All ">All </option>
              <option value="All Categories">All Categories</option>
              <option value="AlexaSkills">Alexa Skills</option>
              <option value="AmazonDevice">Amazon Device</option>
              <option value="Amazon Fashion">Amazon Fashion</option>
              <option value="Amazon Fashion">Amazon Fashion</option>
              <option value="Baby">Baby</option>
              <option value="Apps & Games">Apps & Games</option>
              <option value="Books ">Books</option>
              <option value="Electronics">Electronics</option>
              <option value="Giftcards">Giftcards</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <input
            type="text"
            className="input-field"
            placeholder=" Search Amazon.in"
          />
          <button className="submit-button">🔍︎</button>
        </div>
        {/* Lang */}
        <div className="lang">
          <img
            src="https://hotemoji.com/images/emoji/4/v05s4j10t4zh4.png"
            alt="language"
          />
          <div className="dpl">
            <select
              className="dplan"
              value={selectedLang}
              onChange={handleChangel}
            >
              <option value="EN">
                {" "}
                <b>EN</b>{" "}
              </option>
              <option value="TE"> TE </option>
              <option value="HI"> HI </option>
              <option value="KN"> KN </option>
            </select>
          </div>
        </div>
        {/* hello sign in */}
        <div className="txt">
          <h6>Hello,sign in</h6>
          <h2>Accounts & list ⌄</h2>
        </div>
        <div className="txt">
          <h6>Returns</h6>
          <h2> &Orders</h2>
        </div>
        {/* cart */}
        <div className="cart">
          <img
            src="https://img.myloview.com/stickers/shopping-cart-icon-isolated-on-dark-background-400-253477467.jpg"
            alt="cart"
          />
          <h5>Checkout</h5>
        </div>
      </div>
      {/* b bar */}
      <div className="nav-container">
        <div className="bbar">
          <h3>☰ ALL</h3>
          <h3>Amazon mini</h3>
          <h3>Sell</h3>
          <h3>Best Sellers</h3>
          <h3>Today's Deals</h3>
          <h3>Mobiles</h3>
          <h3>New Releases</h3>
          <h3>Prime ⌄</h3>
          <h3>Customer Service</h3>
          <h3>Electronics</h3>
          <h3>Gift Ideas</h3>
          <h3>Home & Kitchen</h3>
          <h3>Amazon Pay</h3>
          <h3>Computers</h3>
          <h3>Fashion</h3>
          <h3>Books</h3>
          <h3>Coupons</h3>
        </div>
      </div>
    </div>
  );
}

export default Nav;
