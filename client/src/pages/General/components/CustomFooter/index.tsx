import useUsers from "@pages/General/context/useUsers";
import {ContainerPagination} from "@pages/General/StyledComponents";
import {IconButton} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const CustomFooter = () => {
    const { useUsersListParams, useUsersListCount } = useUsers();
    const [count] = useUsersListCount().useState();
    const [{ limit, offset }, setParams] = useUsersListParams().useState();

    const page = limit + offset;
    const prev = () => {
        setParams((prev) => {
            const {offset,limit} = prev
            if (offset - limit <= 0) {
                return {
                    ...prev,
                    offset: 0,
                };
            }

            return {
                ...prev,
                offset: offset - limit,
            };
        });
    };

    const next = () => {
        setParams((prev) => {
            const {offset,limit} = prev
            if (offset + limit > count) {
                return {
                    ...prev,
                    offset: offset + limit,
                };
            }

            return {
                ...prev,
                offset: offset + limit,
            };
        });
    };

    return (
        <ContainerPagination>
            <IconButton onClick={prev} disabled={offset === 0}>
                <RemoveIcon/>
            </IconButton>
            <div>
                {page} / {count}
            </div>
            <IconButton onClick={next} disabled={offset + limit > count}>
                <AddIcon/>
            </IconButton>
        </ContainerPagination>
    );
};

export default CustomFooter