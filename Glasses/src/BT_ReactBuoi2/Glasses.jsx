import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";

export default class Glasses extends Component {
  state = {
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlassesList = () => {
    return dataGlasses.map((glassesItem) => {
      return (
        <img
          onClick={() => {
            this.changeGlass(glassesItem);
          }}
          className="ml-2 p-2 border border-width-1"
          style={{ width: "130px", cursor: "pointer" }}
          key={glassesItem.id}
          src={glassesItem.url}
        />
      );
    });
  };

  changeGlass = (types) => {
    this.setState({ glassesCurrent: types });
  };
  render() {
    const styleGlasses = {
      top: "75px",
      left: "59px",
      width: "135px",
      height: "50px",
      opacity: "0.9",
    };

    const infoGlasses = {
      width: "251px",
      top: "140px",
      left: "250px",
      paddingLeft: "15px",
      textAlign: "left",
      height: "115px",
      backgroundColor: "rgba(255,127,0,0.5)",
    };
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "100%",
          minHeight: "1000px",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: " 1000px" }}
        >
          <h3
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
            className="text-center text-light p-5"
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-sm-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    src="./glassesImage/model.jpg"
                    alt="model1"
                    width="250px"
                  />
                  <img
                    style={styleGlasses}
                    className="position-relative"
                    src={this.state.glassesCurrent.url}
                  />
                  <div style={infoGlasses} className="position-relative ">
                    <p
                      style={{ color: "#AB82FF", fontSize: "17px" }}
                      className="font-weight-bold"
                    >
                      {this.state.glassesCurrent.name}
                    </p>
                    <span
                      style={{ fontSize: "13px" }}
                      className="text-light font-weight-bold"
                    >
                      {this.state.glassesCurrent.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="./glassesImage/model.jpg"
                  alt="model1"
                  width="250px"
                />
              </div>
            </div>
          </div>
          <div className="bg-light container text-center mt-5 p-5 d-flex justify-content-center">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
