import * as React from "react";
import { connect } from "react-redux";

import { IState } from "../store";
import { SiteURLPart } from "../components";
const mapStateToProps = (state: IState) => ({
  SiteURLPart: state.webpart.properties.SiteURL,
});

const DefaultContainer = ({ SiteURL }) => (
  <div>
    <SiteURLPart SiteURL={SiteURL} />
  </div>
);

export default connect(mapStateToProps)(DefaultContainer);
