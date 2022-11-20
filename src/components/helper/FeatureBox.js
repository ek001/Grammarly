import React from "react";
import "./FeatureBox.css";
import Text from "./Text";
import Button from "./Button";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css'  
const FeatureBox = (props) => {
  return (
    <div className={"featureBox " + props.classList}>
      <Text classList="text--tiny">{props.tinyText}</Text>
      <Text classList="text--h3">{props.h3}</Text>
      <Text classList="text--medium">{props.desc}</Text>
      <Button link={props.buttonText.link} classList={props.buttonText.classList}>{props.buttonText.text}</Button>
      <ul>
        {props.features.map((feature, index) => {
          return <li className="ind" key={index}><Tippy className="tipp" placement='bottom' content={<image className="tip">{feature.text2}</image>}>
          <span>{feature.text}</span>
          </Tippy></li>;
        })}
      </ul>
    </div>
  );
};
 
export default FeatureBox;
  