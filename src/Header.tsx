import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header({ title }: { title: string }) {
  return (
    <>
      <HeaderContainer>
        <HeaderEnd />
        <Link to="/">
          <HeaderItem>quests</HeaderItem>
        </Link>
        <Link to="/faq">
          <HeaderItem>faq</HeaderItem>
        </Link>
        <Link to="/about">
          <HeaderItem>about</HeaderItem>
        </Link>
        <Link to="/fund">
          <HeaderItem>fund</HeaderItem>
        </Link>
        <HeaderEnd />
      </HeaderContainer>
      <Title>{title}</Title>
    </>
  );
}

const unit = 8;
const primary = "#b59758";

const HeaderEnd = styled.div`
  border: 1px solid ${primary};
  margin-top: ${unit / 2}px;
  height: 0;
  width: ${3 * unit}px;
  margin-left: ${1 * unit}px;
  margin-right: ${1 * unit}px;
`;

const HeaderContainer = styled.div`
  display: inline-flex;
  top: 0;
  left: 0;
  padding-top: ${3 * unit}px;
  padding-bottom: ${3 * unit}px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const HeaderItem = styled.div`
  margin-left: ${1.5 * unit}px;
  margin-right: ${1.5 * unit}px;
  transition: color 150ms ease-in-out;
  &:hover {
    color: #c4b998;
  }
`;

const Title = styled.div`
  font-family: "Mr De Haviland", cursive;
  font-size: 5em;
  font-weight: 500;
  margin-bottom: 1em;
  margin-top: 1em;
  text-align: center;
`;
