import {
    Button,
    Icon,
    Grid,
    Autocomplete,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Breadcrumb, SimpleCard } from 'app/components'
import { createFilterOptions } from '@mui/material/Autocomplete'

// styeles
const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const Genrelist = [
    { label: 'Daily Needs' },
    { label: 'Life Style' },
]
const DealerList = [
    { label: 'Ashok' },
    { label: 'manoj' },
    { label: 'Rajaram' },
]
const sizelist=[
    {label: 'ml'},
    {label: 'kg'}
]
const Categorylist=[
    {label: 'Grocery and Staples'},
    {label: 'baby kids'}
]
const SubCategorylist=[
    {label: 'chawal'},
    {label: 'oil'}
]
const DabaList=[
    {label: 'none'},
    {label: 'box1'}
]
const AutoComplete = styled(Autocomplete)(() => ({
    marginBottom: '16px',
}))

const filter = createFilterOptions()

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))
const UpdateProductStatus = () => {
    const [state, setState] = useState({
        date: new Date(),
    })
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
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const [valueofgenre, setvalueofgenre] = React.useState(null);
    const [valueofDelar, setvalueofDelar] = React.useState(null);
    const [valueofDabba, setvalueofDabba] = React.useState(null);
    const [valueofCategory,setvalueofCategory] =React.useState(null);
    // select of genre
    const handleChangeoption = (event, newValue) => {
        if (newValue && newValue.inputValue) {
            setvalueofgenre({
                label: newValue.inputValue,
            })
            return
        }
        console.log(newValue);
        setvalueofgenre(newValue)
    }
    // select of dealer
const handleChangeDelar=(event, newValue) => {
    if (newValue && newValue.inputValue) {
        setvalueofDelar({
            label: newValue.inputValue,
        })
        return
    }
    console.log(newValue);
    setvalueofDelar(newValue)
}
// select of Dibba
const handleChangeDabba=(event, newValue) => {
    if (newValue && newValue.inputValue) {
        setvalueofDabba({
            label: newValue.inputValue,
        })
        return
    }
    console.log(newValue);
    setvalueofDabba(newValue)
}

    const {
        BarCode,
        Hexadecimalcode,
        SimilarSrid,
        genre,
        Delarname,
        ProductBrand,
        ProductName,
        Description,
        Qty,
        Crate,
        Dibba,
        Trate,
        LandRate,
        Dp,
        Mrp,
        Discount,
        Location,
        SizeType,
        Size,
        Category,
        SubCategory,
        ImageName,
        MultiFileName,
        StockCapacity
    } = state

    return (
        <Container>
            <SimpleCard >
                <div className="breadcrumb">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Update Product Status' },
                        ]}
                    />
                </div>

                <div>
                    <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                        <Grid container spacing={6}>
                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                              
                                <TextField
                                    label="Srid"
                                    onChange={handleChange}
                                    type="text"
                                    name="Hexadecimalcode"
                                    value={Hexadecimalcode || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />

                            
                         
                                       <AutoComplete
                                    options={sizelist}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label=" Select Product Stataus..."
                                            variant="outlined"
                                            fullWidth
                                        />
                                    )}
                                />
                               
                            </Grid>


                        </Grid>
                        <Button color="primary" variant="contained" type="submit">
                            <Icon>send</Icon>
                            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                                Submit
                            </Span>
                        </Button>
                    </ValidatorForm>
                </div>

            </SimpleCard>

        </Container>
    )
}

export default UpdateProductStatus;
