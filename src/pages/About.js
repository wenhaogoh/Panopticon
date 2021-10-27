import { Card, Text } from "@arwes/core";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 100px;
`;

const StyledCard = styled(Card)`
  .css-owqs0u-Card {
    width: 400px;
  }
  img {
    background-color: white;
  }
  margin-bottom: 50px;
`;

const ReversedStyledCard = styled(StyledCard)`
  .arwes-card__container {
    flex-direction: row-reverse;
  }
`;

const StyledText = styled(Text)`
  margin-bottom: 10px;
`;

const PANAPTICON_URL = "/assets/images/panopticon.jpg";
const NEURAL_NETWORK_URL = "/assets/images/neural-network.png";

const About = () => {
  return (
    <Wrapper>
      <StyledCard title="Summary" animator={{ animate: false }}>
        <StyledText>
          Panopticon is a simulation that explores the mechanisms of
          disciplinary power and the effects they have on individuals in the age
          of digital surveillance. It simulates a day in the life of a citizen
          living in Panopticon, a nation state that has adopted a
          dystopian-esque surveillance program to maintain social order.
          Throughout the day, you are given different scenarios where you must
          decide which course of action to take. Each decision may or may not be
          detected by the government’s surveillance program. Decisions that are
          deemed illegal will warrant official warnings. Upon receiving 3 such
          warnings, you will be arrested and thereby losing the “game”. Your
          goal is to make it through the day by receiving as little warnings as
          possible.
        </StyledText>
        <Text>Sound Credits: Papers, Please</Text>
      </StyledCard>
      <StyledCard
        animator={{ animate: false }}
        title="Motivation"
        image={{ src: PANAPTICON_URL, alt: "Bentham's Panopticon" }}
        landscape
      >
        <StyledText>
          The term “Panopticon” originally refers to a type of prison designed
          by English philosopher Jeremy Bentham in the 18th century. The
          prison’s architecture conceptually allows all prisoners to be observed
          by a single security guard, without the inmates being able to tell
          whether they are being watched. Although the security guard is
          incapable of observing all the prisoners at once, the fact that the
          inmates cannot tell when they are being watched motivates them to act
          as though they are being watched all the time.
        </StyledText>
        <StyledText>
          In today’s context, one would think that self-regulatory behaviours
          would be prevalent among individuals given the amount of data that
          that is being collected 24/7 by the authorities. However, this is not
          the case as evident from the number illegal activities that are still
          taking place. Unlike Bentham’s Panopticon, citizens are either unaware
          that they are being watched or confident that their digital footprints
          are unlikely to be singled out among the sea of online information. It
          could also be due to the authorities’ lack of manpower to deal with
          every single transgression. As a result, the primary driver of
          disciplinary power, the fear of being watched, is greatly diminished.
        </StyledText>
        <Text>
          In recent years, there have been several observations that seem to
          indicate a change in the status quo. Whistle-blowers such as Edward
          Snowden have brought to light shocking revelations about global
          surveillance programmes. Additionally, the acceleration in machine
          learning has enabled data to be processed and interpreted at
          record-breaking rate and precision. These factors contribute towards
          the realisation of Bentham’s Panopticon in the near future as the
          previous reasonings for its failure will no longer hold true.
        </Text>
      </StyledCard>
      <ReversedStyledCard
        title="Problem"
        landscape
        image={{ src: NEURAL_NETWORK_URL, alt: "Neural Network" }}
      >
        Through this simulation, players can catch a glimpse of how technology
        could potentially shift the power balance in favour of institutions and
        how this might affect their daily lives. In the worst-case scenario,
        society could be devoid of any room for agonic struggle should
        technology one day be advanced enough to enable those in power to
        automate disciplinary mechanisms. With all the ongoing hype around
        artificial intelligence, a lot of bright individuals are looking to
        specialise in that field. During one of Elon Musk’s interview in which
        he was sharing his concerns about AI with the public, he brought up a
        conversation that he had with a student from MIT where he asked what
        percentage of the cohort was going into AI and the student replied: “All
        of them.” Hence, this simulation aims to get people to take a step back
        amidst the tech boom and think about the societal issues that could
        arise from such powerful technologies.
      </ReversedStyledCard>
    </Wrapper>
  );
};

export default About;
