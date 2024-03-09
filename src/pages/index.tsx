import React from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {User} from '../services/requests/usersLoader/types';
import Container from "./StyledComponents";
import UserPageConnector from "./context";
import useCRUDUserModal from "../components/modals/CRUDUserModal/useCRUDUserModal";
import useUsers from "./context/useUsers";

const columns: GridColDef<User>[] = [
    {field: 'id', headerName: 'ID', width: 90},
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

function App() {
    const [users] = useUsers().useUsersList().useState();
    const setOpen = useCRUDUserModal().useCRUDIsOpen().setState;

    const openModal = () => setOpen(true);

    return (
        <UserPageConnector>
            <Container>
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
                <button onClick={openModal}>Open</button>
            </Container>
        </UserPageConnector>
    );
}

export default App;
