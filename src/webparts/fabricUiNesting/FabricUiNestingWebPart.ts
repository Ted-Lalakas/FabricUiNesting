import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import * as strings from 'FabricUiNestingWebPartStrings';
import FabricUiNesting from './components/FabricUiNesting';
import { IFabricUiNestingProps } from './components/IFabricUiNestingProps';

import { Environment, EnvironmentType } from '@microsoft/sp-core-library';

import { mockData } from '../fabricUiNesting/MockData';

import getRestData from './getRestData';

export interface IFabricUiNestingWebPartProps {
  description: string;
  context: any;
  listData: any[];
}

export default class FabricUiNestingWebPart extends BaseClientSideWebPart<IFabricUiNestingWebPartProps> {

  // Environment Checker
  private get _isSharePoint(): boolean {
    return (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint);
  }

  public render(): void {
    // Check if the app is running on local or online environment
    if (!this._isSharePoint) {
      console.log("LOCAL");
      
      this.checkConditionPassToRender(mockData);
    } else {
      // If online then grab the list and .THEN once that is done render the component to the DOM.
      console.log("ONLINE");

      getRestData(this.context, "/_api/web/lists/getByTitle('NewYearsParty')/items").then(response => {      
        this.checkConditionPassToRender(response);
      });
    }
  }

  private checkConditionPassToRender(listData:any[]) {
    const element: React.ReactElement<IFabricUiNestingProps > = React.createElement(
      FabricUiNesting,
      {
        description: this.properties.description,
        context: this.context,
        listData: listData
      }
    );    
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
