import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/profile2.jpg"; // Check the spelling of 'graduation'

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-dark bg-gradient">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-white">
                About Page
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow mt-5 p-5 mb-5">
              <div className="row">
                <div className="col-lg-4">
                  <center><img src={myImage} alt="About Me" className="img-fluid" /></center>
                </div>
                <div className="col-lg-8">
                  <div className="card box shadow mb-3 p-3 bg-dark">
                    <h4 className="text-white"><span>About Me</span></h4>
                    <p className="text-white">
                      I'm Justine P. Pantajo, 22 years of age from Brgy Tapi Kabankalan City Neg. Occ. taking a Bachelor of Science in Information Technology (BSIT) at Central Philippines State University (CPSU). I have an interest in Networking and PC Repair.
                    </p>
                    <p>
                      I am a content creator, making Facebook reels related to Eat Unwind Travel (EUT) and posting videos on TikTok. I also live stream my gameplay on MLBB using my main hero Zilong with 3K Matches.
                    </p>
                  </div>
                  <div className="card box shadow p-3 bg-dark">
                    <h4 className="text-dark"><span>Academic</span></h4>
                    <p className="text-white">
                      Primary: Candiacap Elementary School S.Y:2013 <br />
                      Secondary: Junior High: Tapi National High School S.Y:2017 <br />
                      Senior High: Tapi Senior School S.Y:2020 <br />
                      Tertiary: Central Philippines State University (CPSU) S.Y:2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
