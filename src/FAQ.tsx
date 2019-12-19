import React from "react";
import styled from "styled-components";

export default function FAQ() {
  return (
    <AboutContainer>
      <Paragraph>
        <Question>Why did you build this?</Question>
        There's a shortage of funding available, and tremendous friction when it
        comes to finding smart people to do ad-hoc research. The world needs a
        patronage equivalent to angel investing.
      </Paragraph>
      <Paragraph>
        <Question>How do I sign up?</Question>
        Fill out the <Link>application form</Link> and we'll get in touch.
      </Paragraph>
      <Paragraph>
        <Question>Will I make money?</Question>
        Once you're matched with a research quest, the funds will be dispursed
        to Mercenary to hold in escrow. At the completion of your project, we'll
        determine a portion of the bounty to pay out based on the quality of
        your work. Alternatively, you're free to mutually agree on a third party
        judge, or simply rely on the grant maker's judgement.
      </Paragraph>
      <Paragraph>
        <Question>What are the difficulty levels?</Question>
        Difficulty is a weighted combination of the expertise needed to take on
        the quest, how highly speculative the work is, and the breadth of its
        scope. Donors are encouraged to break up quests into as many parts as
        reasonable to spread the work across parties and encourage
        collaboration.
      </Paragraph>
    </AboutContainer>
  );
}

const unit = 8;
const white = "#e4e9e8";

const AboutContainer = styled.div``;

const Link = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Question = styled.div`
  color: ${white};
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const Paragraph = styled.div`
  max-width: 480px;
  margin: auto;
  color: ${white};
  margin-bottom: 2em;
`;
