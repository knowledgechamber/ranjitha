import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function AboutCard() {
  const  { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          {t('Greeting')} {t('Im')} <span className="green">Ranjitha P</span>, {t('Computer Scince Engineering Student')} {t('Pursing my Final year at')} <span className="green">{t('Gov College of Engineering')}</span> {t('Bodinayakanur')}.
            <br/>
            {t('I have great passion in frontend development and as well as backend development & i use ')} <span className="green">Python </span> {t('for backend')} {t('')} <span className="green">projects</span> {t('')}.
            
            <br/>
            <br/>
            {t('Interests')}
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> frontend
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Python
            </li>
            
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
