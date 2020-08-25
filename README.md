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


### End
