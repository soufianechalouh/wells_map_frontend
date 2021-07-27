import {Component} from "react";
import WellsMap from "./components/WellsMap";
import axios from "axios";
import Header from "./components/Header";

const api = axios.create({
    baseURL: `http://localhost:5000`
})

class App extends Component {

    state = {
        wellsData: {}
    }
    constructor() {
        super();
        api.get("/data").then(res => {
            console.log(res.data["data"])
            this.setState( {wellsData : res.data["data"]})
        })
    }


    render(){
      return (
            <div>
                <Header/>

                <div id="mapid">
                    {Object.keys(this.state.wellsData).length > 0 ? <WellsMap wellsData={this.state.wellsData}/>: "Wait a bit, please"}
                </div>
            </div>
          );
    }
}

export default App;
