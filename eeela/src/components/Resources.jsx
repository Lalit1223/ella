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
            <div className="certifications-awards">
              <h3>Certifications</h3>
              <ul>
                <li>
                  CPCB Certified as per Indian Standards ISO:17088 for
                  Compostable Plastics
                </li>
                <li>
                  Certified ISO 9001:2005 Company. Delivered by the TÜV SÜD
                  Body, guarantees ISO standards by the company
                </li>
                <li>
                  Certified ‘OK Compost’ by globally recognized TÜV Austria
                  Belgium NV
                </li>
                <li>
                  Certified ‘Compostable’ as per DIN EN13432 as per European
                  German Testing Standards
                </li>
                <li>
                  Certified BPI Compostable as per specifications established in
                  American Society for Testing and Materials standard ASTM D6400
                  and/or D6868
                </li>
              </ul>
              <h3>Awards</h3>
              <ul>
                <li>
                  Recognized as ‘Innovative Technology’ by TIFAC, Department of
                  Science and Technology, Govt. of India
                </li>
                <li>
                  Listed in ‘Top 26 Most Innovative Company’ at the CII
                  Industrial Innovation Summit organized by Confederation of
                  Indian Industries (CII) &amp; Department of Industrial
                  Promotion and Policy (DIPP), Govt. of India
                </li>
                <li>
                  Listed as ‘Fastest Growing Indian Company Excellence Award
                  2017’ by International Achievers Conference
                </li>
              </ul>
            </div>
            <AwardsCarousel />
          </Tab>

          {/* Why Tab */}
          <Tab eventKey="why" title="Why?">
            <div className="why-carousel">
              <h3>Why Choose Eeela and Bio-Polymers?</h3>
              <WhyCarousel />
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Resources;
