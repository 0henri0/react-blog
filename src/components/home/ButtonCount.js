import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addition, subtraction } from "./../../actions/DisplayCount";

class ButtonCount extends Component {
  render() {
    var addCount = () => {
      this.props.onAdd();
    };

    var subCount = () => {
      this.props.onSub();
    };
    return (
      <Fragment>
        <div className="row justify-content-center mt-4">
          <div className="justify-content-center">
            <button className="btn btn-success mr-3" onClick={addCount}>Cộng</button>
            <button className="btn btn-danger" onClick={subCount}>Trừ</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAdd: () => {
      dispatch(addition());
    },
    onSub: () => {
      dispatch(subtraction());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ButtonCount);
