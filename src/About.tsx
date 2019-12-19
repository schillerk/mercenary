import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <AboutContainer>
      <Paragraph>
        Capital needs to again be used to fund individual iconoclasts; and to
        fund them on the promise of greatness instead of the proof of
        accomplishment.
      </Paragraph>
      <Paragraph>
        Capital needs to again be used to create bastions of intellectual
        freedom instead of further buttressing the shortcomings of academia. The
        world needs to revive scientific patronage.
      </Paragraph>
      <Paragraph>
        Do whatever you can’t stop thinking about. Documenting your findings in
        public (regardless of outcomes) is a worthy contribution to society,
        full stop. If you’re doing something new, and you care about
        understanding the problem, people will pay attention. What’s more,
        they’ll take your ideas and make them better than you’d ever imagined.
        And that style of research - living in service to the public - starts to
        look very different from the bloated, ivory tower models we’ve been
        accustomed to.
      </Paragraph>
      <Paragraph>
        Mercenary is built by Kyle Schiller, and advised by Alexey Guzey.
      </Paragraph>
    </AboutContainer>
  );
}

const unit = 8;
const white = "#e4e9e8";

const AboutContainer = styled.div``;

const Paragraph = styled.div`
  max-width: 480px;
  margin: auto;
  color: ${white};
  margin-bottom: 2em;
`;
