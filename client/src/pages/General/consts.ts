import {GridColDef} from "@mui/x-data-grid";
import {Client} from "@services/requests/usersLoader/types";
import AddressComponent from "@pages/General/components/cells/AddressComponent";
import ActionsComponent from "@pages/General/components/cells/ActionsComponent";

const columns: GridColDef<Client>[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'email',
        headerName: 'Email',
        width: 150,
        editable: false,
    },
    {
        field: 'firstName',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
    {
        field: 'lastName',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 150,
        editable: false,
    },
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 150,
        editable: false,
    },
    {
        field: 'birthDate',
        headerName: 'Birth Date',
        width: 150,
        editable: false,
    },
    {
        field: 'admin',
        headerName: 'Is Admin',
        width: 150,
        editable: false,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 150,
        editable: false,
        renderCell: AddressComponent
    },
    {
        field: 'roles',
        headerName: 'Roles',
        width: 150,
        editable: false,
    },
    {
        field: 'createdDate',
        headerName: '',
        width: 150,
        editable: false,
        renderCell: ActionsComponent
    },
];

const CONST = {
    columns
}

export default CONST