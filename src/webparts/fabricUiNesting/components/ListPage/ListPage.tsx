import * as React from 'react';
import styles from './ListPage.module.scss';


class ListPage extends React.Component<any,any,any> {
  constructor(props:any) {
    super(props);

    this.state = {
      listData: this.props.listData
    };

    console.log("[ListPage.jsx] - STATE PROPS",this.state.listData);
  }

  public render() {
    return (
      <React.Fragment>
        <p>List Page content</p>
        {
          this.state.listData.map((index)=> {
            return (
              <div className={styles.tab} key={index.Id}>
                <ul>
                 <li>{ index.Title }</li>
                 <li>{ index.Department }</li>
                 </ul>
              </div>
            );
          })
        }

      </React.Fragment>
    );
  }

}

export default ListPage;