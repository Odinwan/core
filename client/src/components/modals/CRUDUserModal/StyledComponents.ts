import {styled} from '@mui/material';

const Container = styled('div', {name: 'modal__container'})`
  min-width: 500px;
  
  .header {
    display: flex;
    background: #b7b7ff;
    padding: 10px 10px;
    justify-content: space-between;
    align-items: center;
  }
  
  .body  {
    padding: 20px 10px;
    display: flex;
    gap: 10px;
    flex-flow: column;
  }
`;


export default Container;
