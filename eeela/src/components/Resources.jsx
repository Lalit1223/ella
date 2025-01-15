import React from "react";
import "../Styles/Resources.css";
import { Tabs, Tab } from "react-bootstrap";
import AwardsCarousel from "./AwardCarousel";
import WhyCarousel from "./WhyCarousel";

const Resources = () => {
  return (
    <section id="resources" className="resources-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Resources</h2>
        <Tabs
          defaultActiveKey="certifications"
          id="resources-tabs"
          className="mb-3"
        >
          {/* Certifications & Awards Tab */}
          <Tab eventKey="certifications" title="Certifications & Awards">
            <AwardsCarousel />
          </Tab>

          {/* Why Tab */}
          <Tab eventKey="why" title="Why We're Different">
            <div className="why-carousel ">
              <WhyCarousel />
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Resources;
