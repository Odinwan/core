import useCRUDUserModal from '@components/modals/CRUDUserModal/useCRUDUserModal';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useUsers from '@pages/General/context/useUsers';
import { User } from '@services/requests/usersLoader/types';
import React from 'react';

import UserPageConnector from './context';
import Container from './StyledComponents';

const columns: GridColDef<User>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
];

const CustomFooter = () => {
  const { useUsersListParams, useUsersListCount } = useUsers();
  const [count] = useUsersListCount().useState();
  const [{ limit, offset }, setParams] = useUsersListParams().useState();

  const page = limit + offset;
  const prev = () => {
    setParams((prev) => {
      if (prev.offset - prev.limit <= 0) {
        return {
          ...prev,
          offset: 0,
        };
      }

      return {
        ...prev,
        offset: prev.offset - prev.limit,
      };
    });
  };

  const next = () => {
    setParams((prev) => {
      if (prev.offset + prev.limit > count) {
        return {
          ...prev,
          offset: prev.offset + prev.limit,
        };
      }

      return {
        ...prev,
        offset: prev.offset + prev.limit,
      };
    });
  };
  return (
    <div>
      <button onClick={prev} disabled={offset === 0}>
        -
      </button>
      <div>
        {page} / {count}
      </div>
      <button onClick={next} disabled={offset + limit > count}>
        +
      </button>
    </div>
  );
};

function General() {
  const { useUsersList, useLoading, useUsersListParams } = useUsers();
  const [users] = useUsersList().useState();
  const [isLoading] = useLoading().useState();
  const setParams = useUsersListParams().setState;
  const setOpen = useCRUDUserModal().useCRUDIsOpen().setState;

  const openModal = () => setOpen(true);

  return (
    <UserPageConnector>
      <Container>
        <DataGrid
          rows={users}
          columns={columns}
          hideFooterPagination={true}
          slots={{
            footer: CustomFooter,
          }}
          loading={isLoading}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        <button onClick={openModal}>Open</button>
      </Container>
    </UserPageConnector>
  );
}

export default General;
