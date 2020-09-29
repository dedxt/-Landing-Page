import React, { Component } from "react";
import Axios from "axios";
import ReqCard from "./ReqCard";


const randomImage = "https://picsum.photos/200";

class FeatRequester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requesters: [],
    };
  }

  async componentDidMount() {
    const resp = await Axios.get("http://icrowd1.herokuapp.com/workers");
    this.setState({
      requesters: [...resp.data.workers],
    });
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{ padding: "20px", minHeight: "50vh" }}
      >
        <div>
          <h3 style={{ textAlign: "center", padding: "15px" }}>
            Featured Requester
          </h3>
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gridGap: "6%",
            }}
          >
            {this.state.requesters.map((req, k) => {
             return <ReqCard req={req} key={k} className="grid-item" image={randomImage} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FeatRequester;
