### What is it ?

- SPFX integrated with redux .
- built using yeoman over react enviroment .


# Redux

![](https://miro.medium.com/max/875/0*95tBOgxEPQAVq9YO.png)

**How to generate**
## create new folder

`$ mkdir newProject`

`$ cd newProject`

## Download Resources 

`$ npm install @microsoft/generator-sharepoint -g`

## Use the Yeoman SharePoint generator

`$ yo`

## Setup the folders
**Inside ~/src/webparts/webpartName**
* create folder Store
* create folder Reducers
* create folder containers
## Inside Store
* create index.ts 
* add the following code
```
import {
  Store,
  createStore as reduxCreateStore,
  compose,
  applyMiddleware,
} from "redux";
import { createLogger } from "redux-logger";
import { rootReducer, IState } from "../reducers";

export { IState } from "../reducers";

export function createStore(initialState?: IState): Store<IState> {
  const loggerMiddleware = createLogger();

  const middlewares = [
    // add additional middleware like redux-thunk here
    loggerMiddleware,
  ];

  return reduxCreateStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}
```
## Inside Reducers
* create index.ts 
* add the following code
```
import { combineReducers, Reducer } from "redux";
import webpartReducer, { IWebpartState } from "./webpart";

export interface IState {
  webpart: IWebpartState;
}

export const rootReducer: Reducer<IState> = combineReducers<IState>({
  webpart: webpartReducer,
});
```
* create webpart.ts 
* add the following code
```
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
```
## Inside Containers
* create DefaultContainer.tsx
* add the following code
```
import * as React from "react";
import { connect } from "react-redux";

import { IState } from "../store";
import { SiteURLPart } from "../components"; //include all components of your webpart 
//add all your props
const mapStateToProps = (state: IState) => ({
  SiteURLPart: state.webpart.properties.SiteURL,
});

const DefaultContainer = ({ SiteURL }) => (
  <div>
    <SiteURLPart SiteURL={SiteURL} />
  </div>
);

export default connect(mapStateToProps)(DefaultContainer);
```
## Inside Components
* create files with the name of the parts or components 

* create index.ts
* include the parts inside it 
```
import SiteURLPart from "./SiteURLPart";

export { SiteURLPart };
```

### End
