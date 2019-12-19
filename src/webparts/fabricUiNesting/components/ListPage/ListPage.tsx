import * as React from 'react';
import styles from './ListPage.module.scss';
import ListElement from './ListElement/listElement';

class ListPage extends React.Component<any,any,any> {
  constructor(props:any) {
    super(props);

    this.state = {
      listData: this.props.listData
    };

    console.log("[ListPage.jsx] - STATE PROPS",this.state.listData);
  }

  public nameChangeHandler = (nameChange:string, id:number) => {
    console.log("NAME Passed nameChangeHandler: ",nameChange);
    console.log("ID Passed nameChangeHandler: ",id);
  }


  public render() {
    return (
      <div className={ styles.column }>
        <p>List Page content</p>
        {
          this.state.listData.map((index)=> {
            return (
              <ListElement key={index.Id} styleVar={styles.tab} {...index} nameChangeHandler={this.nameChangeHandler} />
            );
          })
        }
      </div>
    );
  }

}

export default ListPage;