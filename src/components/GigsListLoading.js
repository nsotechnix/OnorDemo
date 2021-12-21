import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

function GigsListLoading() {
  return (
    <div>
      <Skeleton
        animation="wave"
        variant="rect"
        className={"mx-4"}
        height={150}
        style={{ marginBottom: 6 }}
      ></Skeleton>
      <Skeleton
        animation="wave"
        variant="h4"
        className={"mx-4"}
        style={{ marginBottom: 6 }}
      ></Skeleton>
      <Skeleton
        animation="wave"
        variant="caption"
        className={"mx-4"}
        style={{ marginBottom: 6 }}
      ></Skeleton>
      <Skeleton
        animation="wave"
        height={10}
        className={"mx-4"}
        style={{ marginBottom: 6 }}
      />
    </div>
  );
}

export default GigsListLoading;
