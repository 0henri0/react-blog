import React, { Component } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { connect } from "react-redux";

class DisplayCount extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <Card className="col-4">
          <CardBody>
            <CardTitle className="text-primary text-center">
              <h2>Bảng đếm số</h2>
            </CardTitle>
            <h1 className="text-center text-danger">{this.props.count}</h1>
            <h4 className="text-center text-success">
              {this.props.statusPrev}
            </h4>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    statusPrev: state.statusPrev
  };
};

export default connect(
  mapStateToProps,
  null
)(DisplayCount);
