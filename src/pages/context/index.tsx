import React, {useEffect} from "react";
import CRUDUserModal from "../../components/modals/CRUDUserModal";
import useUsers from "./useUsers";

interface Props {
    children: React.ReactNode;
}

const UserPageConnector = ({children}: Props) => {

    const {init} = useUsers().actions

    useEffect(init, []);

    return <>
        {children}
        <CRUDUserModal/>
    </>
}

export default UserPageConnector