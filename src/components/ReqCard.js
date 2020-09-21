import React, { Component } from "react";

class ReqCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { first_name, last_name, email, address, mobile } = this.props.req;
    return (
      <div class="card">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          class="card-img-top"
          alt="..."
          style={{}}
        ></img>
        <div class="card-body">
          <h5 class="card-title">
            {first_name} {last_name}
          </h5>
          <p class="card-text">
            <ul style={{ listStyle: "none" }}>
              <li>
                <span>Email: </span>
                {email}
              </li>
              <li>
                <span>Address: </span>
                {address}
              </li>
              <li>
                <span>Mobile: </span>
                {mobile}
              </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default ReqCard;
