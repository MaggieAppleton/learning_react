import React from "react";

function Greeting(props) {
    return (
        <div>
            <h3>Hello, {props.firstName} {props.secondName}</h3>
        </div>
    )
}


const MainContent = () => {
  return <div className="container">
    <Greeting firstName="Mary" secondName="Wollstonecraft" />
  </div>;
};

export default MainContent;
