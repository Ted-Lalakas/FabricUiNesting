import * as React from 'react';
import styles from './FabricUiNesting.module.scss';
import { IFabricUiNestingProps } from './IFabricUiNestingProps';

export default class FabricUiNesting extends React.Component<IFabricUiNestingProps, {}> {
  constructor(props) {
    super(props);

    console.log("Props Display",props);
  }

  public render(): React.ReactElement<IFabricUiNestingProps> {
    return (
      <div className={ styles.fabricUiNesting }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p>Check the console. Props should be passing the list in: listData</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
