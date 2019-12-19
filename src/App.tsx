import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Context, initialState, reducer } from "./store";

import Project from "./Project";
import Header from "./Header";
import About from "./About";
import FAQ from "./FAQ";
import Fund from "./Fund";

const primary = "#b59758";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700');
  @import url('https://fonts.googleapis.com/css?family=Mr+De+Haviland');
  body {
    background: #0a0a0c;
    color: ${primary};
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    line-height: 1.5em;
    padding: 0;
    margin: 0;
    margin-bottom: 60px;
  }
  
  * {
    box-sizing: border-box;
  }

  a {
    color: ${primary}
    text-decoration: none;
  }
`;

const MOCK_PROJECT_DATA = [
  {
    title: "Evaluate the effects of BPA-free Plastics",
    body:
      "Research on the health effects of BPF and BPS is still in its early stages — just because a chemical has the ability to behave a certain way in the body doesn’t necessarily mean it’s dangerous. Still, the researchers say based on what we do know, the average consumer has reason to be a little concerned. BPA has been shown to cause problems with human reproduction, metabolism, neurological function and a whole host of other problems.",
    bounty: 1000,
    difficulty: "B"
  },
  {
    title: "Design an RL Agent with Robustness to Distributional Shift",
    body:
      "Imagine that a machine learning model is trained on one distribution (call it p0) but deployed on a potentially different test distribution (call it p∗). Our goal is to ensure that the model “performs reasonably” on p∗, in the sense that (1) it often performswell on p∗, and (2) it knows when it is performing badly (and ideally can avoid/mitigate the bad performance by taking conservative actions or soliciting human input).",
    bounty: 100000,
    difficulty: "S"
  },
  {
    title: "Assign Moral Weight to Different Species' Lives",
    body:
      "there is almost no literature attempting to estimate the comparative moral weight of different species’ lives and subjective experiences under varying assumptions. This book would build on some preliminary thoughts from Luke Muehlhauser's report on Open Philanthropy.",
    bounty: 30000,
    difficulty: "A"
  },
  {
    title: "Does poor eyesight make you smarter?",
    body:
      "It seems natural, that losing some eyesight during the critical period (i.e. childhood myopia), if left uncorrected, would cause some of the changes that we encounter in fully blind people.",
    bounty: 1000,
    difficulty: "B"
  }
];

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const projects = MOCK_PROJECT_DATA.map(project => <Project {...project} />);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <Shell>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header title="Quest Board" />
              {projects}
            </Route>
            <Route exact path="/about">
              <Header title="About" />
              <About />
            </Route>
            <Route exact path="/faq">
              <Header title="Q and A" />
              <FAQ />
            </Route>
            <Route exact path="/fund">
              <Header title="Fund the Future" />
              <Fund />
            </Route>
          </Switch>
        </BrowserRouter>
      </Shell>
    </Context.Provider>
  );
}

const Shell = styled.div`
  max-width: 1000px;
  padding-right: 40px;
  padding-left: 40px;
  margin: auto;
`;
