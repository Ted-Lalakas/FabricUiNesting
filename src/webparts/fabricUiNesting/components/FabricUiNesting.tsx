import * as React from 'react';
import styles from './FabricUiNesting.module.scss';
import { IFabricUiNestingProps } from './IFabricUiNestingProps';

import ListPage from './ListPage/ListPage';

export default class FabricUiNesting extends React.Component<IFabricUiNestingProps, {}> {
  constructor(props) {
    super(props);

    console.log("[FabricUiNesting.tsx]",props);
  }

  public render(): React.ReactElement<IFabricUiNestingProps> {
    return (
      <div className={ styles.fabricUiNesting }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <p>Check the console. Props should be passing the list in: listData</p>
            <ListPage { ...this.props } />
          </div>
        </div>
      </div>
    );
  }
}
