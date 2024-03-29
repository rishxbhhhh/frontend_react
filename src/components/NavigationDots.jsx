import React from "react";

function NavigationDots({active}) {
  return (
    <div className="app__navigation">
      {["home", "work", "skills","contact"].map((item,index) => (
        <a
            href={`#${item}`}
            title={item}
            key={item+index}
            className="app__navigation-dot"
            style={active===item?{backgroundColor: '#313BAC'}:{}}
        >{''}</a>
      ))}
    </div>
  );
}

export default NavigationDots;
