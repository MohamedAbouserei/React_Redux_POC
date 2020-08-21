import { HttpClient } from "@microsoft/sp-http";
import { ServiceScope, ServiceKey } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IWebPartContext,
} from "@microsoft/sp-webpart-base";

export class WebhockService {
  public static readonly serviceKey = ServiceKey.create<WebhockService>(
    "@WM:WebhockService",
    WebhockService
  );
  protected readonly http: HttpClient;

  constructor(scope: ServiceScope) {
    scope.whenFinished(() => {
      (this as any).http = scope.consume(HttpClient.serviceKey);
      //   (this as any).context = scope.consume(IWebPartContext.serviceKey);
    });
  }
  public trigger(url: string, method: string, body: any): Promise<any> {
    if (!url) {
      return Promise.resolve();
    }

    return this.http
      .fetch(url, HttpClient.configurations.v1, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: body ? JSON.stringify(body) : undefined,
      })
      .catch((e) => {
        console.log(e);
      });
  }
  //   public readlist() {
  //     siteUrl = siteUrl || this.http.pageContext.web.absoluteUrl;
  //     selectFilterQuery = selectFilterQuery || "";
  //     return this.CTX.spHttpClient
  //       .get(
  //         `${siteUrl}/_api/lists/GetByTitle('${listName}')/items?${selectFilterQuery}`,
  //         SPHttpClient.configurations.v1
  //       )
  //       .then((response: SPHttpClientResponse) => {
  //         return response.json().then((responseJSON: any) => responseJSON);
  //       });
  //   }
}
