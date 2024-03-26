import {styled} from "@mui/material";
import React from "react";
import {GridRenderCellParams} from "@mui/x-data-grid/models/params/gridCellParams";
import {Address} from "@services/requests/usersLoader/types";

export const Container = styled('div', { name: 'AddressContainer' })`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 10px 20px;
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


const AddressComponent = (props:GridRenderCellParams<any, Address, any>) => {
    const mixValues = Object.keys(props.value).map((k) => props.value[k]);
    const value = mixValues.filter(Boolean).join(', ')
    return (
        <Container>
            {value}
        </Container>
    );
};

export default AddressComponent