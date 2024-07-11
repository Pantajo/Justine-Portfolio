import React from 'react';
import Navbar from "./Navbar";
import styles from "./Experience.css"; 
import oms1Image from "./img/ojt1.jpg";
import oms2Image from "./img/ojt2.jpg";
import oms3Image from "./img/ojt5.jpg";

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className={styles.experienceInfo}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className={`fw-bold display-1 text-center mt-5 pt-5 ${styles.mainHeader}`}>
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`exp ${styles.experience}`}>
  <div className="container">
    <div className="row">
      <div className="col text-center"> {/* Added text-center class */}
        <h3>On-the-job Training</h3>
        <hr className={styles.sectionHr} />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className={`card shadow ${styles.card}`}>
          <img
            src={oms1Image}
            className="card-img-top"
            alt="Calculator Project"
          />
          <div className="card-body">
            <h4>Calculator Project</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className={`card shadow ${styles.card}`}>
          <img
            src={oms2Image}
            className="card-img-top"
            alt="My React Project"
          />
          <div className="card-body">
            <h4>My React Project</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className={`card shadow ${styles.card}`}>
          <img
            src={oms3Image}
            className="card-img-top"
            alt="Final Frontend Project"
          />
          <div className="card-body">
            <h4>Final Frontend Project</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default Experience;
