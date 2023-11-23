import "./welcomePage.css";
import { TypeAnimation } from "react-type-animation";
const WelcomePage = () => {
  return (
    <div className="box">
      <h1 className="home-heading">Expense Tracker</h1>
      <img className="homeImg" src="/src/assets/homeImg.png" alt="wELCOME" />
      <div className="box1">
        {/* <p>Calculate smarter,</p>
            <p>Spend wiser, </p>
            <p>Save More ...</p> */}
        <p>
          <TypeAnimation
            style={{
              whiteSpace: "pre-line", height: '160px', display: 'block',
            }}
            sequence={[
              `Calculate smarter,\nSpend wiser,\nSave More ...`,
              1000,
              "",
            ]}
            repeat={Infinity}
          />
        </p>
        <button className="btn1"><a href="/login">Get Started &rarr;</a></button>
        <div className="foot">
          <span>Already have account?</span>
          <a href="/login">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

