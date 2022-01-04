import React from "react";
import TextTransition, { presets } from "react-text-transition";
import "./TransitionText.scss";

const TEXTS = [
  "Social media",
  "Shows & Reels",
  "Parties",
  "Events",
  "Yourself",
  "Your World",
];

const TransitionText = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className={"main-sub-header"}>
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.slow}
      />
    </h1>
  );
};
export default TransitionText;
