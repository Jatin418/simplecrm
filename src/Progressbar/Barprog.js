import React from "react"

const ProgressBar = (props) => {
  const { bgcolor, completed, label } = props;

  const containerStyles = {
    height: 35,
    width: '90%',
    backgroundColor: "#e0e0de",
    borderRadius: 3,
    margin: 20.5,
   // backgroundSize: "80px 80px"
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'center',
    backgroundImage:"-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
    
    
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontSize:"15px",
    fontWeight: 'bold',
    textAlign:"center"
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${label}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;


// width: 0;
// height: 100%;
// font-size: 12px;
// line-height: 20px; 
// color: #fff;    width: 50%;
// }
// .progress .blue {
//     background-color: #39f;
// }
// .progress .progress-bar {
//     font-size: inherit;
//     line-height: 36px;
//     text-align: left;
//     position: absolute;
//     left: 0;
//     z-index: 1;
//     overflow: hidden;
// }
// .progress-bar-striped, .progress-striped .progress-bar {
//     background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
//     background-image: -o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
//     /* background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent); */
//     /* -webkit-background-size: 40px 40px; */
//     background-size: 40px 40px;