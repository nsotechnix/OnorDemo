import React from "react";
import { useParams } from "react-router-dom";

function Search(props) {
  let { keyword } = props.match.params.keyword;
  return <div>{keyword}</div>;
}

export default Search;
