import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/Calcu (2).png"
import jao3Image from "./img/profile3.png"
import jao4Image from "./img/profile4.png"
import jao5Image from "./img/profile5.png"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-dark bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-white">
                Projects 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
  <div className="container bg-dark">
    <div className="row mt-5">
      <hr />
      <div className="col portfolio-item">
        <img className="one" src={calcuImage2} />
        <h4 className="mt-5 text-white">Calculator Project</h4>
      </div>
      <div className="col portfolio-item">
        <img className="two" src={jao3Image} />
        <h4 className="mt-5 text-white">My React Project</h4>
      </div>
      <div className="col portfolio-item">
        <img className="three" src={jao4Image} />
        <h4 className="mt-5 text-white">Final Frontend Project</h4>
      </div>
      <div className="col portfolio-item">
        <img className="four" src={jao5Image} />
        <h4 className="mt-5 text-white">Frontend Project</h4>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Portfolio;
