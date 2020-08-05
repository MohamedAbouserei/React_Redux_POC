import * as React from "react";
import { connect } from "react-redux";

import { IState } from "../store";
import { ReactRedux, ReactiveInfo } from "../components";
const mapStateToProps = (state: IState) => ({
  description: state.webpart.properties.description,
});

const DefaultContainer = ({ description, reactive }) => (
  <div>
    <ReactRedux description={description} />
    <ReactiveInfo reactive={reactive} />
  </div>
);

export default connect(mapStateToProps)(DefaultContainer);
