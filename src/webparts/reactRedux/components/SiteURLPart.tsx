import { VFTextBox } from "../../../controls/VF-TextBox";
import * as React from "react";
import { applyProperties, updateProperty } from "../reducers/webpart";
import { Store } from "redux";
import { createStore, IState } from "../store";

export interface ISiteURLProps {
  SiteURL: string;
}

const SiteURLPart = ({ SiteURL }: ISiteURLProps) => (
  <div className="ms-Grid" dir="ltr">
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <p>{JSON.stringify({ SiteURL })}</p>

        <VFTextBox
          label="Site URL"
          Required={true}
          maxLength={200}
          ctrlName="SiteURL"
          handleInputChange={(event) => {
            handleInputChange(event);
          }}
          handleOnBlur={() => {}}
          value={SiteURL}
          showError={null}
          errorMessage={null}
          tooltip={false}
        ></VFTextBox>
      </div>
    </div>
  </div>
);

export default SiteURLPart;
let store: Store<IState>;
store = createStore();
let handleInputChange = (event) => {
  const value = event.target.value;
  const name = event.target.name;
  store.dispatch(updateProperty(name, value));
};
