import React, { useReducer } from "react";
import styled from "styled-components";

function formatBounty(num: number) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export type Props = {
  title: string;
  body: string;
  bounty: number;
  difficulty: string;
};
export default function Project({ title, body, bounty, difficulty }: Props) {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectBody>{body}</ProjectBody>
      <ProjectBounty>Bounty: ${formatBounty(bounty)} USD</ProjectBounty>
      <ProjectDifficulty>Difficulty: {difficulty}</ProjectDifficulty>
    </ProjectContainer>
  );
}

const unit = 8;
const white = "#e4e9e8";

const ProjectContainer = styled.div`
  border: 1px solid ${white};
  padding: ${3 * unit}px;
  margin-top: ${4 * unit}px;
  box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.4);
`;

const ProjectDifficulty = styled.div`
  font-weight: 500;
`;

const ProjectBounty = styled.div`
  font-weight: 500;
`;

const ProjectBody = styled.div`
  color: white;
  margin-bottom: ${2 * unit}px;
`;

const ProjectTitle = styled.div`
  font-size: 1.4em;
  font-weight: 500;
  margin-bottom: ${2 * unit}px;
`;
