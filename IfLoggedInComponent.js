import React from "react";
import { connect } from "react-redux";

class IfLoggedInComponent extends React.Component {
  render() {
    return <div>{this.props.currentUser ? this.props.children : null}</div>;
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  null
)(IfLoggedInComponent);
