import {
    Button,
    Icon,
    Grid,
    TreeSelect,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    Box,
    Fab,
} from '@mui/material'

import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect, Fragment } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
//import Modal from 'antd/lib/modal/Modal'
//import EditableTable from './milestone'
import { SimpleCard } from 'app/components'
import Modal from 'react-modal'
import App from '../dialog/App'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import FormDialog from '../dialog/FormDialog'
//import React, { useState, Fragment } from "react";
import { nanoid } from 'nanoid'
//import "./App.css";
import data from '../dialog/mock-data.json'
// import ReadOnlyRow from "./components/ReadOnlyRow";
// import EditableRow from "./components/EditableRow";
import EditableRow from './components/EditableRow'
import ReadOnlyRow from './components/ReadOnlyRow'
import Demo from './Demo'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

Modal.setAppElement('#root')

const SimpleForm = () => {
    const [state, setState] = useState({
        startdate: new Date(),
        endDate: new Date(),
        show: false,
    })

    const [open, setOpen] = React.useState(false)

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        console.log('submitted')
        console.log(event)
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleStartDateChange = (startDate) => {
        setState({ ...state, startDate })
    }

    const handleEndDateChange = (endDate) => {
        setState({ ...state, endDate })
    }
    // const handleModal = () => {
    //     setState({ ...state, show})
    // }
    const showModal = () => {
        setState({ show: true })
    }
    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    const {
        Id,
        description,
        coustmer,
        coustmerPOC,
        NavtechPOC,
        startDate,
        endDate,
        cost,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="Id"
                            id="standard-basic"
                            onChange={handleChange}
                            value={Id || ''}
                            validators={[
                                'required',
                                // 'minStringLength: 4',
                                // 'maxStringLength: 9',
                            ]}
                            label="Sow ID"
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="NavtechPOC"
                            onChange={handleChange}
                            name="NavtechPOC"
                            type="TreeSelect"
                            value={NavtechPOC || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Description"
                            onChange={handleChange}
                            type="text"
                            name="description"
                            value={description || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={startDate}
                                onChange={handleStartDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Start Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        <Button
                            color="primary"
                            variant="contained"
                            type="button"
                            onClick={showModal}
                            //type="submit"
                            //onClock={showModal}
                        >
                            <Icon>MiFillMediumCircle</Icon>
                            {/* <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                                Submit
                            </Span> */}
                        </Button>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Coustmer Name"
                            onChange={handleChange}
                            type="text"
                            name="coustmer"
                            value={coustmer || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="coustmerPOC"
                            onChange={handleChange}
                            type="TreeSelect"
                            name="coustmerPOC"
                            value={coustmerPOC || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        <TextField
                            label="Cost"
                            onChange={handleChange}
                            type="text"
                            name="cost"
                            value={cost || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={endDate}
                                onChange={handleEndDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="End Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                        >
                            <Icon>send</Icon>
                            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                                Submit
                            </Span>
                        </Button>
                    </Grid>
                </Grid>
            </ValidatorForm>
            <Modal
                isOpen={state.show}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => {
                    setState({ ...state, show: false })
                }}
                style={customStyles}
                //backgroundColor="red"
                contentLabel="Example Modal"
                draggerable="true"
            >
                <Demo />
            </Modal>
            {/* <Modal
                isOpen={state.show}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => {
                    setState({ ...state, show: false })
                }}
                style={customStyles}
                backgroundColor="white"
                contentLabel="Example Modal"
                draggerable="true"
            >
                <h1>MileStone</h1>
                <form>
                    <table className="card">
                        <tr>
                            <div className="form-group" align="left">
                                <tr>
                                    <td>
                                        <label>MileStone ID : </label>
                                    </td>

                                    <td>
                                        <input
                                            type="text"
                                            name="modalInputName"
                                        />
                                    </td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td>
                                        <label>MileStone Description :</label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="modalInputName"
                                        />
                                    </td>
                                </tr>
                            </div>
                        </tr>
                        <tr>
                            <div className="form-group" align="left">
                                <tr>
                                    <td>
                                        <label>MileStone Scope : </label>
                                    </td>

                                    <td>
                                        <input
                                            type="text"
                                            name="modalInputName"
                                        />
                                    </td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td>
                                        <label>Estimated Efforts:</label>
                                    </td>
                                    <td>
                                        <input
                                            type="hours"
                                            name="modalInputName"
                                        />
                                    </td>
                                </tr>
                            </div>
                        </tr>
                        <tr>
                            <div className="form-group" align="left">
                                <tr>
                                    <td>
                                        <label>Actual Efforts : </label>
                                    </td>

                                    <td>
                                        <input
                                            type="hours"
                                            name="modalInputName"
                                        />
                                    </td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td>
                                        <label>Planned Due Date:</label>
                                    </td>
                                    <td>
                                        <input
                                            type="Date"
                                            name="modalInputName"
                                        />
                                    </td>
                                </tr>
                            </div>
                        </tr>
                        <tr>
                            <div className="form-group" align="left">
                                <tr>
                                    <td>
                                        <label>Actual Due Date : </label>
                                    </td>

                                    <td>
                                        <input
                                            type="date"
                                            name="modalInputName"
                                        />
                                    </td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td>
                                        <label>Cost :</label>
                                    </td>
                                    <td>
                                        <input
                                            type="currency"
                                            name="modalInputName"
                                        />
                                    </td>
                                </tr>
                            </div>
                        </tr>
                        <tr>
                            <td>
                                <label>Add File :</label>
                                <input type="file" name="modalInputName" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    onClick={() => {
                                        setState({ ...state, show: false })
                                    }}
                                >
                                    close
                                </button>
                            </td>{' '}
                            <td>
                                <button>save</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </Modal> */}
        </div>
    )
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        borderStyle: 'solid',
        backgroundColor: 'white',
        Box: '2',
        color: 'Black',
        ModalColor: 'red',
        draggerable: true,
        backdrop: 'blue',
        backgroundColor: 'rgba(41, 45, 57, 0.5)',
    },
}

export default SimpleForm
