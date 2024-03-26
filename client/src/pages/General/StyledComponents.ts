import { styled } from '@mui/material';

const Container = styled('div', { name: 'listing__container' })`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  
  .MuiDataGrid-root {
    width: 100%;
  }
`;

export const TopListingActions = styled('div', { name: 'top__listing_actions' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const ContainerPagination = styled('div', { name: 'ContainerPagination' })`
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

export default Container;
