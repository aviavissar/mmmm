import React from 'react';


export class HeaderComponent extends React.Component {
  

  render() {
    return (
      <div className="header container">
        <div className=" row">
       
          <div className="logo col-12 col-lg-6">
            <h1>My Flights</h1>
          </div>
        </div>

      </div>
    )
  }
};

export default HeaderComponent;
