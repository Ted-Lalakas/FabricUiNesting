import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

const getRestData = (contextOf:any, restLink:string ): Promise<any[]> => {
  return contextOf.spHttpClient.get(contextOf.pageContext.web.absoluteUrl + restLink, SPHttpClient.configurations.v1)
    .then((response: SPHttpClientResponse) => {
      console.log("Response",response);
      console.log("Response.json()",response.json());
      return response.json();
    })
    .then(jsonResponse => {
      console.log("JSON Response",jsonResponse);
      console.log("JSON Response.value",jsonResponse.json());
      return jsonResponse.value;
    }) as Promise<any[]>;
};

export default getRestData;


// Example Usage
// getRestData(this.context, "/_api/web/lists/getByTitle('NewYearsParty')/items").then(response => {      
//   this.checkConditionPassToRender(response);
// });