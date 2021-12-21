import React from "react";

const FirebaseContext = React.createContext(null);

export const withFirebase = (Component) => (prop) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...prop} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
