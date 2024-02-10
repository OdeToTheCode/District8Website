import React from 'react';
import '../styles/Resources.css';

const Resources = () => {

  const intergroupAddress = "St. Paul AA Intergroup, 33 Wentworth Ave E, West St. Paul, MN 55118";
  const minnesotaAddictionHelpWebsite = "https://mn.gov/dhs/people-we-serve/adults/health-care/chemical-dependency/resources/";
  const minnesotaAddictionHelpPhone = "(651) 431-2460";
  const nationalHotlinePhone = "1-800-662-HELP (4357)";

  return (
    <div className="resources-container">
      <h1 className="resources-heading">Resources</h1>
      <div className="resource">
        <h2 className="resource-heading">AAWS Website</h2>
        <p className="resource-text">If you would like to visit the AAWS website, you can do so at <a href="https://www.aa.org/" target="_blank" rel="noopener noreferrer">https://www.aa.org/</a>.</p>
      </div>
      <div className="resource">
        <h2 className="resource-heading">Area 36 Southern Minnesota</h2>
        <p className="resource-text">For more information about AA in Southern Minnesota, visit the Area 36 website at <a href="https://area36.org/" target="_blank" rel="noopener noreferrer">https://area36.org/</a>.</p>
      </div>
      <div className="resource">
        <h2 className="resource-heading">Intergroup Website</h2>
        <p className="resource-text">If you would like to visit the intergroup website for our area, you can do so at <a href="https://www.aastpaul.org/" target="_blank" rel="noopener noreferrer">https://www.aastpaul.org</a>.</p>
        <p className="resource-text">AA St.Paul has a 24-hour hotline you can reach by calling <a href="tel:+16512275502">(651) 227-5502</a>. If you would like to visit them in person, their address is:</p>
        <div className="resource-address">
          <p className="resource-address-line">{intergroupAddress}</p>
        </div>
      </div>
      <div className="resource">
        <h2 className="resource-heading">Minnesota Addiction Help</h2>
        <p className="resource-text">For resources related to addiction in Minnesota, visit <a href={minnesotaAddictionHelpWebsite} target="_blank" rel="noopener noreferrer">Minnesota Addiction Help</a>.</p>
        <p className="resource-text">You can also contact Minnesota Addiction Help by phone at: <a href={`tel:${minnesotaAddictionHelpPhone}`}>{minnesotaAddictionHelpPhone}</a>.</p>
      </div>
      <div className="resource">
        <h2 className="resource-heading">National Helpline</h2>
        <p className="resource-text">For immediate assistance with addiction, you can contact the National Helpline at <a href={`tel:${nationalHotlinePhone}`}>{nationalHotlinePhone}</a>. The helpline is available 24/7, 365 days a year.</p>
      </div>
    </div>
  );
}

export default Resources;
