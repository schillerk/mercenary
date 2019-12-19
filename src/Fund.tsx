import React, { useState } from "react";
import styled from "styled-components";

const unit = 8;
const white = "#e4e9e8";
const primary = "#b59758";
const secondary = "#c4b998";
const background = "#0a0a0c";
const maxWidth = 480;

const fields = [
  "Life Sciences",
  "AI Safety",
  "Longevity",
  "Fact Checking",
  "Cognitive Enhacement",
  "Charter Cities",
  "Autism",
  "Meta Science",
  "Literature Review",
  "Applied Ethics",
  "Other"
];

const funds = [
  "$100",
  "$250",
  "$500",
  "$1,000",
  "$2,500",
  "$5,000",
  "$10,000",
  "$25,000",
  "$50,000",
  "$100,000"
];

export default function Fund() {
  const [selectedFields, setSelectedFields] = useState([""]);
  const [slider, setSlider] = useState(2);
  const [sliderHover, setSliderHover] = useState(false);

  const tags = fields.map((field: string) => (
    <Tag
      key={field}
      active={selectedFields.includes(field)}
      onClick={() => setSelectedFields([...selectedFields, field])}
    >
      {field}
    </Tag>
  ));

  const fieldInput = selectedFields.includes("Other") ? <Input /> : null;

  return (
    <AboutContainer>
      <Paragraph>
        <Question>
          We're looking for visionary investors to join the founding team.
        </Question>
        Fundamental research is now in a time of extreme scarcity. Industry
        continues to exploit the inventions of the past, not plant the seeds for
        a humane future. Government and foundation grants prefer low-risk
        incremental work. Just keeping our tiny group alive has been a constant
        desperate struggle.
      </Paragraph>
      <Paragraph>
        <InputLabel>Name</InputLabel>
        <Input />
        <InputLabel>Email</InputLabel>
        <Input />
        <InputLabel>
          What categories of research are you interested in?
        </InputLabel>
        <Tags>{tags}</Tags>
        {fieldInput}
        <InputLabel>What level are you interested in contributing?</InputLabel>
        <Slider hover={sliderHover}>
          <SliderValueContainer>
            <SliderValue
              left={
                slider == funds.length - 1
                  ? "auto"
                  : `${(slider * maxWidth) / funds.length}px`
              }
            >
              {funds[slider]}
            </SliderValue>
            <SliderValueBar
              hover={sliderHover}
              width={((maxWidth + 31) / funds.length) * slider + 1}
            />
          </SliderValueContainer>
          <input
            type="range"
            className="slider"
            step="1"
            min="0"
            max={funds.length - 1}
            value={slider}
            onChange={(e: any) => setSlider(e.target.value)}
            onMouseOver={() => setSliderHover(true)}
            onMouseOut={() => setSliderHover(false)}
          />
        </Slider>
        <InputLabel>Are there researchers you would like to refer?</InputLabel>
        <Input />
        <Button>Submit</Button>
      </Paragraph>
    </AboutContainer>
  );
}

const AboutContainer = styled.div``;

const SliderRange = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`;

const SliderTick = styled.div`
  color: ${primary};
`;

interface SliderValueBarProps {
  width: number;
  hover: boolean;
}
const SliderValueBar = styled.div<SliderValueBarProps>`
  background: ${props => (props.hover ? secondary : primary)};
  width: ${props => `${props.width}px`};
  height: 5px;
  position: absolute;
  left: 0;
  top: 32px;
  transition: background 150ms ease-in-out;
`;

interface SliderValueProps {
  left: string;
}
const SliderValue = styled.div<SliderValueProps>`
  color: ${white};
  left: ${props => props.left};
  right: 0px;
  position: absolute;
  margin: 2px;
`;
const SliderValueContainer = styled.div`
  position: relative;
  height: 1.5em;
`;

interface SliderProps {
  hover: boolean;
}
const Slider = styled.div<SliderProps>`
  .slider {
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    height: ${unit / 2}px;
    outline: none;
    margin: 0;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: ${white}
      width: ${2.5 * unit}px;
      height: ${2.5 * unit}px;
      border-radius: 100%;
      border: 2px solids;
      border-color: ${props => (props.hover ? secondary : primary)};
      cursor: pointer;
      transition: background 150ms ease-in-out;
    }

    &::-moz-range-thumb {
    }
  }
`;

const Tags = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

interface TagProps {
  active: boolean;
}
const Tag = styled.div<TagProps>`
  background: ${props => (props.active ? "#c4b998" : primary)};
  border-radius: 1px;
  border-top-right-radius: 6px;
  padding: ${0.5 * unit}px ${1 * unit}px;
  font-size: 0.8em;
  margin-right: 1em;
  margin-bottom: 1em;
  color: ${background};
  cursor: pointer;
  transition: background 150ms ease-in-out;

  &:hover {
    background: ${secondary};
  }
`;

const Button = styled.div`
  margin-top: 2em;
  background: ${primary};
  padding: ${1.5 * unit}px;
  color: ${background};
  text-align: center;
  cursor: pointer;
  transition: background 150ms ease-in-out;

  &:hover {
    background: #c4b998;
  }
`;

const InputLabel = styled.div`
  font-weight: 700;
  color: ${primary};
  margin-bottom: 0.5em;
  margin-top: 2em;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${primary};
  font-family: "Roboto Mono", monospace;
  font-size: 1em;
  font-weight: 500;
  color: ${white};
  background: ${background};
  padding: ${1.5 * unit}px;

  &:focus {
    outline: none;
    outline-offset: none;
  }
`;

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
  max-width: ${maxWidth}px;
  margin: auto;
  color: ${white};
  margin-bottom: 2em;
`;
