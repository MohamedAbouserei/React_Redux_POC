import { IReactReduxProps } from "../components/IReactReduxProps";

import { ISiteURLProps } from "../components/SiteURLPart";
import { assign } from "lodash";

export interface IWebpartState {
  properties: ISiteURLProps;
}

export const UPDATE_PROPERTY = "webpart/UPDATE_PROPERTY";
export const APPLY_PROPERTIES = "webpart/APPLY_PROPERTIES";

export interface IUpdatePropertyAction {
  type: "webpart/UPDATE_PROPERTY"; // TODO is there a way to use the const?
  propertyName: string;
  value: any;
}
export interface IApplyPropertiesAction {
  type: "webpart/APPLY_PROPERTIES"; // TODO is there a way to use the const?
  properties: ISiteURLProps;
}
export type IWebpartAction = IUpdatePropertyAction | IApplyPropertiesAction;

export const initialState: IWebpartState = {
  properties: { SiteURL: "" },
};

export default (state = initialState, action: IWebpartAction) => {
  switch (action.type) {
    case "webpart/UPDATE_PROPERTY":
      return assign({}, state, {
        state: assign({}, state.properties, {
          [action.propertyName]: action.value,
        }),
      });
    case "webpart/APPLY_PROPERTIES":
      return assign({}, state, {
        properties: action.properties,
      });
    default:
      //console.log(state);
      return state;
  }
};

export function updateProperty(propertyDescribtion: string, value: any) {
  return { type: UPDATE_PROPERTY, propertyDescribtion, value };
}

export function applyProperties(properties: ISiteURLProps) {
  return { type: APPLY_PROPERTIES, properties };
}
