import React from "react";
import "../styles/Resources.css";
import Container from "react-bootstrap/Container";

const Resources = () => {
  return (
    <div>
      <h1 id="resources-title" className="display-4">
        Resources
      </h1>
      <Container style={{ textAlign: "left" }}>
        <p>
          <h2 id="action-header">2 Minute Actions:</h2> Simple, everyday actions
          that anyone can incorporate into their routine to support
          environmental sustainability.
        </p>
        <ul>
          <li>
            <a
              href="https://secure.everyaction.com/JKmLyDOyYk23Ax4AatvgFA2?contactdata=HQi4icw1OKtW01vN8zcfyCTCReJ4+CJEtrt1XwZNBT7bJm%2f7z2%2fpTo948VRNrJ0c98DHc4hLyr07dNXov9fARfCd0%2fA6Bwv2uppI3mLTw3X24k7iiMvrIKSLxuCgyp+bOoC%2fzhPWwXwD%2fbxjmKY1CD4s6BfWjxcDr+3I8IhL4zU+wfr37Rfg8dx%2fdHcJ8M3qtS1qTDYkO35mtUjK1puewUqHnG4F0SLTzNUlXPWaAVNtwbbE6P+xO4iI7qFGH%2f5HcA7VPQFVeuij0oiHQ7Mj3Q%3d%3d&emci=c1de594f-d0df-ee11-85fb-002248223794&emdi=37cee13a-e6df-ee11-85fb-002248223794&ceid=2754895"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Geothermal in MN
            </a>
          </li>
          <li>
            <a
              href="https://citizensclimatelobby.org/get-loud-take-action/prove-it-act/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PROVE IT Act
            </a>
          </li>
          <li>
            <a
              href="https://citizensclimatelobby.org/get-loud-take-action/energy-innovation-act/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Energy Innovation Act
            </a>
          </li>
          <li>
            <a
              href="https://citizensclimatelobby.org/get-loud-take-action/climate-smart-forestry/?utm_term=Email%20Congress&utm_campaign=Climate%20action%20program&utm_content=email&utm_source=Act-On+Software&utm_medium=email"
              target="_blank"
              rel="noopener noreferrer"
            >
              Climate Smart Forestry
            </a>
          </li>
        </ul>
        <p>
          <h2 id="action-header">10 Minute Actions:</h2> Actions that take a
          little more time like sending an email or calling someone, but are
          still relatively simple efforts to support environmental
          sustainability.
        </p>
        <ul>
          <li>
            <a
              href="https://mn.gov/commerce/energy/consumer/energy-programs/home-energy-rebates.jsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              MN Energy Programs Information
            </a>
          </li>
          <li>
            <a
              href="https://www.minnesotaenergyresources.com/savings/rebates"
              target="_blank"
              rel="noopener noreferrer"
            >
              MN Rebates Info
            </a>
          </li>
          <li>
            <p>
              Learn about the rebates that are available to you - and look out
              for our future rebate meeting at St. C’s!
            </p>
          </li>
        </ul>
        <p>
          <h2 id="action-header">Couple Hour Actions:</h2> Actions that take a
          fair amount of time like attending an event.
        </p>
        <ul>
          <li></li>
        </ul>
        <p>
          <h2 id="action-header">Individual Actions:</h2> Personal lifestyle
          changes and habits that contribute to environmental preservation.
        </p>
        <ul>
          <li>
            <p>
              Turn off your car when parked, by not idling you keep our air
              clean and save money
            </p>
          </li>
          <li>
            <p>
              Save leftovers instead of throwing them away, wasting food
              releases greenhouse gasses
            </p>
          </li>
        </ul>
        <p>
          <h2 id="action-header">Local Community Actions:</h2> Opportunities to
          get involved in local initiatives and projects aimed at environmental
          conservation and sustainability within our community.
        </p>
        <ul>
          <li>
            <p>
              Celebrate Earth Day! Join a local park clean-up, or go to{" "}
              <a
                href="https://www.familyfuntwincities.com/twin-cities-earth-day-family-events/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.familyfuntwincities.com/twin-cities-earth-day-family-events/
              </a>{" "}
              for ideas the whole family can participate in!
            </p>
          </li>
        </ul>
        <p>
          <h2 id="action-header">Political Actions:</h2> Ways to advocate for
          environmental policies and engage with local legislators to address
          climate change and protect the environment.
        </p>
        <ul>
          <li></li>
        </ul>
        <p>
          <h2 id="action-header">Book List:</h2> Books both scientific and
          spirtual that give the reader to insights into how to care for our
          Common Home
        </p>
        <h4 id="sub-header">Scientific:</h4>
        <ul>
          <li>
          ENTANGLED LIFE: How Fungi Make Our World, Change our Minds, and Shape our Futures by Merlin Sheldrake
          </li>
        </ul>
        <h4 id="sub-header">Spirtual:</h4>
        <ul>
          <li>
          SACRED EARTH, SACRED SOUL: Celtic Wisdom for Reawakening to What Our Souls Know and Healing the World By John Phillip Newell
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Resources;
