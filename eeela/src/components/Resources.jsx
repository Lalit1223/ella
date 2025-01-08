import React from "react";
import "../Styles/Resources.css";
import { Tabs, Tab } from "react-bootstrap";
import AwardsCarousel from "./AwardCarousel";

const Resources = () => {
  return (
    <section id="resources" className="resources-section py-5">
      <div className="container">
        <h2 className="text-center mb-2">Resources</h2>
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

          {/* Why Bio-Polymers Tab */}
          <Tab eventKey="bio-polymers" title="Why Bio-Polymers?">
            <div className="bio-polymers">
              <p>
                1. Bio-polymers are derived from renewable resources, making
                them eco-friendly.
              </p>
              <p>
                2. They decompose naturally, reducing the waste burden on
                landfills.
              </p>
              <p>
                3. Bio-polymers significantly reduce carbon emissions compared
                to traditional plastics.
              </p>
              <p>
                4. They meet international composting standards, ensuring safety
                for the environment.
              </p>
              <p>5. Preferred for sustainable packaging solutions worldwide.</p>
            </div>
          </Tab>

          {/* Why Eeela Tab */}
          <Tab eventKey="why-eeela" title="Why Eeela?">
            <div className="why-eeela">
              <p>
                1. Eeela is a CPCB Certified company, adhering to the highest
                Indian compostable standards.
              </p>
              <p>
                2. We prioritize customer satisfaction by delivering
                eco-friendly, high-quality products.
              </p>
              <p>
                3. Our certifications from TÜV SÜD, TÜV Austria, and DIN EN13432
                highlight our global reliability.
              </p>
              <p>
                4. Eeela's products are designed for sustainability and
                innovation.
              </p>
              <p>
                5. Trusted by leading organizations for compostable solutions.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Resources;
