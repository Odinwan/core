import React from "react"
import {IconButton} from "@mui/material";
import FitbitIcon from '@mui/icons-material/Fitbit';
import useCRUDUserModal from "@components/modals/CRUDUserModal/context/useCRUDUserModal";
import Container from "@components/common/Header/StyledComponents";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Header = () => {
    const setOpen = useCRUDUserModal().useCRUDIsOpen().setState;

    const openModal = () => setOpen(true);
    return (
        <Container>
            <IconButton><FitbitIcon/></IconButton>
            <IconButton onClick={openModal}><OpenInNewIcon/></IconButton>
        </Container>
    )
}

export default Header