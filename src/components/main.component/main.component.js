import React from 'react';
import HeaderComponent from "../header.component/header.component";
import Footer from "../footer.component/footer.component"
import Apps from '../apps.component/apps.component';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            txt:"a"
        }
    }

    render() {
        return (
            <div key="Apps">
                <HeaderComponent></HeaderComponent>
                <Apps searchTxt={this.state.txt} ></Apps>
                <Footer></Footer>
            </div>
        )
    }
    mytext=(c)=>{
        console.log(c)
        this.setState({txt:c})
    }

}
export default Main;
