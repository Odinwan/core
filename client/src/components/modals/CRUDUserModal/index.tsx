import {
    Drawer,
    FormControl,
    IconButton,
    InputLabel,
    LinearProgress,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from '@mui/material';
import React from 'react';
import useCRUDUserModal from './context/useCRUDUserModal';
import Container from "@components/modals/CRUDUserModal/StyledComponents";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import ENUMS, {Gender} from "@settings/enums";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs, {Dayjs} from "dayjs";
import {Address, Client} from "@services/requests/usersLoader/types";

const CRUDUserModal = () => {

    const [isOpen, setIsOpen] = useCRUDUserModal().useCRUDIsOpen().useState();
    const [isLoading] = useCRUDUserModal().useIsLoading().useState();
    const [errors] = useCRUDUserModal().useErrors().useState();
    const [user, setUser] = useCRUDUserModal().useCurrentUser().useState();
    const {handleSave, handleClearError} = useCRUDUserModal().actions;
    const onClose = () => setIsOpen(false);

    const handleChangeString = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: keyof Client) => {
        handleClearError(key);
        const value = event.target.value;

        setUser(p => ({
            ...p,
            [key]: value
        }));
    }

    const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: keyof Address) => {
        handleClearError(key);
        const value = event.target.value;

        setUser(p => ({
            ...p,
            address: {
                ...p.address,
                [key]: value
            }
        }));
    }

    const handleChangeGender = (event: SelectChangeEvent<Gender>) => {
        handleClearError('gender');
        const gender = event.target.value as undefined as Gender;
        setUser(p => ({
            ...p,
            gender
        }));
    }

    const handleChangeBirthDate = (birthDate: Dayjs) => {
        handleClearError('birthDate');
        setUser(p => ({
            ...p,
            birthDate: birthDate.toString()
        }));
    }

    return (
        <Drawer anchor={'right'} open={isOpen} onClose={onClose}>
            <Container>
                <div className="header">
                    <IconButton onClick={onClose}><CloseIcon/></IconButton>
                    <IconButton onClick={handleSave}><SaveIcon/></IconButton>
                </div>
                {isLoading && <LinearProgress/>}
                {user && (
                    <div className="body">
                        <TextField
                            id="First-basic"
                            label="First Name"
                            variant="outlined"
                            value={user.firstName}
                            error={!!errors["firstName"]}
                            helperText={errors["firstName"]}
                            onChange={(event) => handleChangeString(event, "firstName")}
                        />
                        <TextField
                            id="Last-basic"
                            label="Last Name"
                            variant="outlined"
                            value={user.lastName}
                            error={!!errors["lastName"]}
                            helperText={errors["lastName"]}
                            onChange={(event) => handleChangeString(event, "lastName")}
                        />
                        <TextField
                            id="Phone-basic"
                            label="Phone"
                            variant="outlined"
                            value={user.phone}
                            error={!!errors["phone"]}
                            helperText={errors["phone"]}
                            onChange={(event) => handleChangeString(event, "phone")}
                        />
                        <TextField
                            id="Email-basic"
                            label="Email"
                            variant="outlined"
                            value={user.email}
                            error={!!errors["email"]}
                            helperText={errors["email"]}
                            onChange={(event) => handleChangeString(event, "email")}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                error={!!errors["gender"]}
                                value={user.gender}
                                label="Gender"
                                onChange={handleChangeGender}
                            >
                                {Object.keys(ENUMS.gender).map((v) => <MenuItem key={v} value={ENUMS.gender[v]}>{v}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <DatePicker
                            label={'Birth Date'}
                            value={dayjs(user.birthDate || '2022-04-17')}
                            onChange={handleChangeBirthDate}
                        />
                        <TextField
                            id="City-basic"
                            label="City"
                            variant="outlined"
                            value={user.address.city}
                            error={!!errors["city"]}
                            helperText={errors["city"]}
                            onChange={(event) => handleChangeAddress(event, "city")}
                        />
                        <TextField
                            id="Zip-basic"
                            label="Zip"
                            variant="outlined"
                            value={user.address.zip}
                            error={!!errors["zip"]}
                            helperText={errors["zip"]}
                            onChange={(event) => handleChangeAddress(event, "zip")}
                        />
                        <TextField
                            id="Country-basic"
                            label="Country Name"
                            variant="outlined"
                            value={user.address.country}
                            error={!!errors["country"]}
                            helperText={errors["country"]}
                            onChange={(event) => handleChangeAddress(event, "country")}
                        />
                        <TextField
                            id="Street-basic"
                            label="Street Name"
                            variant="outlined"
                            value={user.address.street}
                            error={!!errors["street"]}
                            helperText={errors["street"]}
                            onChange={(event) => handleChangeAddress(event, "street")}
                        />
                        <TextField
                            id="House-basic"
                            label="House Name"
                            variant="outlined"
                            value={user.address.house}
                            error={!!errors["house"]}
                            helperText={errors["house"]}
                            onChange={(event) => handleChangeAddress(event, "house")}
                        />
                    </div>
                )}
            </Container>
        </Drawer>
    );
};

export default CRUDUserModal;
