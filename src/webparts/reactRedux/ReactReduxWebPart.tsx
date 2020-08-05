import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart,
  IWebPartContext,
} from "@microsoft/sp-webpart-base";

import * as strings from "ReactReduxWebPartStrings";
import ReactRedux from "./components/ReactRedux";
import { IReactReduxProps } from "./components/IReactReduxProps";
import { Store } from "redux";
import { Provider } from "react-redux";
import { createStore, IState } from "./store";
import DefaultContainer from "./containers/DefaultContainer";
import { applyProperties, updateProperty } from "./reducers/webpart";

export default class ReactReduxWebPart extends BaseClientSideWebPart<
  IReactReduxProps
> {
  private store: Store<IState>;

  public constructor(context: IWebPartContext) {
    super();

    this.store = createStore();
  }
  public render(): void {
    // const element: React.ReactElement<IReactReduxProps> = React.createElement(
    //   ReactRedux,
    //   {
    //     description: this.properties.description
    //   }
    // );
    const element = (
      <Provider store={this.store}>
        <DefaultContainer />
      </Provider>
    );
    this.store.dispatch(applyProperties(this.properties));
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
  protected get disableReactivePropertyChanges() {
    return this.properties ? this.properties.disableReactive : false;
  }

  protected onPropertyChanged(propertyPath, oldValue, newValue) {
    if (!this.disableReactivePropertyChanges) {
      this.store.dispatch(updateProperty(propertyPath, newValue));
    }
  }

  // protected onInit(): Promise<boolean> {
  //   this.store.dispatch(applyProperties(this.properties));

  //   return Promise.resolve(true);
  // }

  protected onAfterPropertyPaneChangesApplied() {
    this.store.dispatch(applyProperties(this.properties));
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
