import React from 'react';


export class AppsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CountriesArr: this.getCountry()
    }
  //  this.handleInputChange = this.handleInputChange.bind(this);



  }
  componentWillMount() {
    this.setState = ({
      CountriesArr: this.getCountry()
    })

  }
  componentDidUpdate(){
    this.setState = ({
      CountriesArr: this.getCountry()
    })
  }


  // handleInputChange(event) {
  //   this.setState({
  //     ifchecked: event.target.checked
  //   });
  // }

  getCountry = () => {
    fetch(`http://localhost:8000/api/countriesToFlight`)
      .then(response => {
        return response.json()
      })
      .then(json => {
       
        this.Countries = json;
        console.log(this.Countries);
      
      })
      .catch((e) => {
        console.log("eror is coming...");
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row panel">
          <div className="col-12 col-lg-12">
            <select>
              {(this.Countries == undefined) ? (
                <option>אין </option>
              ) : (
                  this.state.CountriesArr.map((cnt) => {
                    <option key={cnt} value={cnt}>cnt</option>
                  })
                )
              }

            </select>
          
          </div>

        </div>
        <div className="row panel">
          <div className="col-1 col-lg-1">
            <h4>
              Id
           </h4>
          </div>
          <div className="col-2 col-lg-2">
            <h4>
              Destination
           </h4>
          </div>
          <div className="col-2 col-lg-2">
            <h4>
              Departure
           </h4>
          </div>
          <div className="col-2 col-lg-2">
            <h4>
              Arrive-at
           </h4>
          </div>
          <div className="col-2 col-lg-2">
            <h4>
              Price
           </h4>
          </div>
          <div className="col-2 col-lg-2">
            <h4>
              Country
           </h4>
          </div>
          <div className="col-1 col-lg-1">
            <h4>
              IsSelected
           </h4>
          </div>

        </div>
        <div className="row">
          {
            // this.props.pics.map((qu) => {
            //   return <div className="row panel">
            //     <div className="col-1 col-lg-1">
            //       <h4>
            //         Id
            //     </h4>
            //     </div>
            //     <div className="col-2 col-lg-2">
            //       <h4>
            //         Destination
            //     </h4>
            //     </div>
            //     <div className="col-2 col-lg-2">
            //       <h4>
            //         Departure
            //     </h4>
            //     </div>
            //     <div className="col-2 col-lg-2">
            //       <h4>
            //         Arrive-at
            //     </h4>
            //     </div>
            //     <div className="col-2 col-lg-2">
            //       <h4>
            //         Price
            //     </h4>
            //     </div>
            //     <div className="col-2 col-lg-2">
            //       <h4>
            //         Country
            //     </h4>
            //     </div>
            //     <div className="col-1 col-lg-1">
            //       <h4>
            //         IsSelected
            //     </h4>
            //     </div>

            //   </div>
            // })
          }
        </div>
      </div>
    )
  }
}


export default AppsComponent;
