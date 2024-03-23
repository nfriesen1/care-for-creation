import React from "react";
import "./Resources.css";
import Container from "react-bootstrap/Container";

const Resources = () => {
  return (
    <div>
      <h1 id="resources-title" className="display-4">
        Resources
      </h1>
      <Container style={{textAlign: 'left'}}>
        <p>
          <h2 id="action-header">2 Minute Actions:</h2> Simple, everyday actions
          that anyone can incorporate into their routine to support
          environmental sustainability.
        </p>
        <ul>
          <li>
            <a href="https://secure.everyaction.com/JKmLyDOyYk23Ax4AatvgFA2?contactdata=HQi4icw1OKtW01vN8zcfyCTCReJ4+CJEtrt1XwZNBT7bJm%2f7z2%2fpTo948VRNrJ0c98DHc4hLyr07dNXov9fARfCd0%2fA6Bwv2uppI3mLTw3X24k7iiMvrIKSLxuCgyp+bOoC%2fzhPWwXwD%2fbxjmKY1CD4s6BfWjxcDr+3I8IhL4zU+wfr37Rfg8dx%2fdHcJ8M3qtS1qTDYkO35mtUjK1puewUqHnG4F0SLTzNUlXPWaAVNtwbbE6P+xO4iI7qFGH%2f5HcA7VPQFVeuij0oiHQ7Mj3Q%3d%3d&emci=c1de594f-d0df-ee11-85fb-002248223794&emdi=37cee13a-e6df-ee11-85fb-002248223794&ceid=2754895">
              Support Geothermal in MN
            </a>
          </li>
          <li>
            <a href="https://citizensclimatelobby.org/get-loud-take-action/prove-it-act/">
              PROVE IT Act
            </a>
          </li>
          <li>
            <a href="https://citizensclimatelobby.org/get-loud-take-action/energy-innovation-act/">
              Energy Innovation Act
            </a>
          </li>
          <li>
            <a href="https://citizensclimatelobby.org/get-loud-take-action/climate-smart-forestry/?utm_term=Email%20Congress&utm_campaign=Climate%20action%20program&utm_content=email&utm_source=Act-On+Software&utm_medium=email">
              Climate Smart Forestry
            </a>
          </li>
        </ul>
        <p>
          <h2 id="action-header">10 Minute Actions:</h2> Actions that take a little more time like sending an email 
          or calling someone, but are still relatively simple efforts to support environmental sustainability.
        </p>
      </Container>
    </div>
  );
};

export default Resources;
