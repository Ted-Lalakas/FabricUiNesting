import * as React from 'react';
import styles from './ListPage.module.scss';
import ListElement from './ListElement/listElement';
import { Modal} from 'office-ui-fabric-react';
import FormWindow from './FormWindow/FormWindow';

class ListPage extends React.Component<any,any,any> {
  constructor(props:any) {
    super(props);

    this.state = {
      listData: this.props.listData,
      modalOpen: false,
      modalIndexValue: null
    };

    console.log("[ListPage.jsx] - STATE PROPS",this.state.listData);
  }

  public componentDidUpdate() {
    console.log("----------------------------------------------------------------");
    console.log("componentDidUpdate",this.state);
    console.log("----------------------------------------------------------------");
  }

  public nameChangeHandler = (nameChange:string, id:number) => {
    const indexValue = this.state.listData.findIndex( e => e.Id == id );
    const newItems = [...this.state.listData];
    newItems[indexValue].Title = nameChange;
    this.setState({ listData: newItems });
  }

  public teamChangeHandler = (team:string, id:number) => {
    const indexValue = this.state.listData.findIndex( e => e.Id == id );
    const newItems = [...this.state.listData];
    newItems[indexValue].Team = team;
    this.setState({ listData: newItems });
  }

  public depChangeHandler = (department:string, id:number) => {
    const indexValue = this.state.listData.findIndex( e => e.Id == id );
    const newItems = [...this.state.listData];
    newItems[indexValue].Department = department;
    this.setState({ listData: newItems });
  }

  public openModalWindow = (id:number) => {
    const indexValue = this.state.listData.findIndex( e => e.Id == id );
    this.setState({ modalOpen: true, modalIndexValue: indexValue });
  }

  public closeModalWindow = () => {
    this.setState({ modalOpen: false });
  }


  public render() {
    return (
      <div className={ styles.column }>
        <p>List Page content</p>
        {
          this.state.listData.map((index)=> {
            return (
              <ListElement 
                key={index.Id} 
                styleVar={styles.tab} 
                {...index} 
                // nameChangeHandler={this.nameChangeHandler} 
                openModal={this.openModalWindow} 
              />
            );
          })
        }
        <Modal isOpen={this.state.modalOpen} containerClassName={styles.container}>
          <FormWindow 
            closeWindow={this.closeModalWindow} 
            userDetails={this.state.listData[this.state.modalIndexValue]} 
            nameChangeHandler={this.nameChangeHandler} 
            teamChangeHandler={this.teamChangeHandler}
            depChangeHandler={this.depChangeHandler}
          />
        </Modal>
      </div>
    );
  }

}

export default ListPage;