import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react';
import styles from '../../FabricUiNesting.module.scss';

const listElement = (props:any) => {
  return (
    <div className={props.styleVar}>
      <ul>
        <li>Name: { props.Title }</li>
        <li>Department: { props.Department }</li>
        <li>Team: { props.Team }</li>
        {/* <TextField className={styles.textField} label="Temp Renaming to show Nesting works" defaultValue={ props.Title } onChange={(event, newValue) => props.nameChangeHandler(newValue, props.Id)} /> */}
        <li><DefaultButton text="Update User" onClick={(event) => props.openModal(props.Id)} /></li>
      </ul>
    </div>
  );
};

export default listElement;