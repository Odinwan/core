import {IconButton, styled} from "@mui/material";
import React from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import useCRUDUserModal from "@components/modals/CRUDUserModal/context/useCRUDUserModal";
import useUsers from "@pages/General/context/useUsers";

export const Container = styled('div', {name: 'AddressContainer'})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const ActionsComponent = (props: any) => {
    const {handleOpenModalWithCurrentUser} = useCRUDUserModal().actions;
    const {useUsersList,useInit} = useUsers();
    const trigger = useInit().setState;

    const [users] = useUsersList().useState([props.id])
    const user = users.find((client) => client.id === props.id);

    const openModal = () => {
        handleOpenModalWithCurrentUser(user, () => trigger(v => !v))
    };

    return (
        <Container>
            <IconButton onClick={openModal}>
                <ModeEditIcon/>
            </IconButton>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Container>
    );
};

export default ActionsComponent