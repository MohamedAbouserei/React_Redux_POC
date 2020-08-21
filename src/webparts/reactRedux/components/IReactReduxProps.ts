import { IUserLookup } from "../../../controls/userModels";

export interface IReactReduxProps {
  description?: string;
}
export interface IReactReduxState {
  RequesterLookup?: IUserLookup;
  URL: string;
  validation?: ReactReduxValidation;
  SavedSuccessfully: boolean;
  FailedToSaved?: boolean;
  FailedToSavedError?: string;
  errMsg?: string;
  postURL?: string;
}

export interface ReactReduxValidation {
  SiteURLHasError?: boolean;
}
