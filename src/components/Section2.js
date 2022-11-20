import React from "react";
import Section from "./helper/Section";
import Text from "./helper/Text";
import "./Section2.css";
import FeatureBox from "./helper/FeatureBox";

const Section2 = () => {
  return (
    <Section classList="section2">
      <Text classList="text--h2">Up-Level Your Communication</Text>
      <Text classList="text--h5">
        Unlock Grammarly Premium’s advanced features and suggestions.
      </Text>
      <div className="colsContainer twoCols">
        <div className="col col1">
          <FeatureBox
            classList="featureBox1"
            tinyText="FOR CASUAL WRITING"
            h3="Free"
            desc="Basic writing suggestions."
            buttonText={{ text: "Included In Premium", classList: "disabled", link:"#" }}
            features={[
            { text: "Spelling", text2: "Eliminate Spelling errors." },
            { text: "Grammar", text2: "Eliminate grammatical errors. " },
            { text: "Punctuation", text2: "Eliminate punctuation errors." },
            { text: "Conciseness", text2: "Make every sentance concise and easy to follow. " }
            ]}
          />
        </div>
        <div className="col col2">
          <FeatureBox
            classList="featureBox2"
            tinyText="FOR WORK OR SCHOOL"
            h3="Premium"
            desc="Style, tone, and clarity improvements for writing at work and school."
            buttonText={{ text: "Upgrade to Grammarly Premium", classList: "", link:"https://www.grammarly.com/upgrade?utm_campaign=funnelPremiumAboveTheFold&utm_medium=internal&utm_source=funnel" }}
            features={[
              {text:"Everything in Free", text2: null},
              {text:"Clarity-focused sentence rewrites", text2: "Automatically re-write hard to read sentences." },
              {text:"Tone adjustments", text2: "Eliminate hedging language or unnecassary qualifier to sound more confident."},
              {text:"Plagiarism detection", text2: "Ensure your work is fresh and original by checking against 16 billion web pages."},
              {text:"Word choice", text2: "Find vivid words to enliven each and every message."},
              {text:"Formality level", text2: "Write with the appropiate tone, even when you are in a hurry."},
              {text:"Fluency", text2: "Ensure your word choices sound natural and fluent."},
              {text:"Additional advanced suggestions", text2: "Fix inconsistencies in spelling and punctuation, adjust the tone of your writing, and get additional advanced feedback."} 
            ]}
          />
        </div>
      </div>
    </Section>
  );
};
 
export default Section2;
 