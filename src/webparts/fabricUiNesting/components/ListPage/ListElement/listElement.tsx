import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

const listElement = (props:any) => {
  return (
    <div className={props.styleVar}>
      <ul>
        <li>{ props.Title }</li>
        <li>{ props.Department }</li>
        <li>{ props.Team }</li>
        <TextField label="Rename yourself" defaultValue={ props.Title } onChange={(event, newValue) => props.nameChangeHandler(newValue, props.Id)} />
      </ul>
    </div>
  );
};

export default listElement;