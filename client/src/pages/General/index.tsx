import React from 'react';
import CONST from './consts';
import UserPageConnector from './context';
import {DataGrid} from '@mui/x-data-grid';
import Container, { TopListingActions } from './StyledComponents';
import Header from "@components/common/Header";
import useUsers from '@pages/General/context/useUsers';
import CustomFooter from "@pages/General/components/CustomFooter";
import Button from '@mui/material/Button';
import useCRUDUserModal from "@components/modals/CRUDUserModal/context/useCRUDUserModal";
import {LinearProgress} from "@mui/material";

function General() {
    const {useUsersList, useLoading, useInit} = useUsers();
    const [users] = useUsersList().useState();
    const [isLoading] = useLoading().useState();
    const trigger = useInit().setState;
    const {handleOpenCreateClient} = useCRUDUserModal().actions;

    const openCreateClient = () => {
        handleOpenCreateClient(() => trigger(v => !v))
    }

    return (
        <>
            <Header/>
            <UserPageConnector>
                <TopListingActions>
                    <div></div>
                    <Button onClick={openCreateClient}>Create Client</Button>
                </TopListingActions>
                <Container>
                    {isLoading && <LinearProgress/>}
                    <DataGrid
                        rows={users}
                        columns={CONST.columns}
                        hideFooterPagination={true}
                        slots={{
                            footer: CustomFooter,
                        }}
                        loading={isLoading}
                        pageSizeOptions={[10]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Container>
            </UserPageConnector>
        </>
    );
}

export default General;
