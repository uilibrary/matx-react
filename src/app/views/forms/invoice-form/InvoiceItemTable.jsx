import React, { useState, useEffect } from 'react'
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Button,
    IconButton,
    Icon,
    Select,
    MenuItem,
} from '@material-ui/core'
import { FieldArray } from 'formik'
import { Autocomplete } from '@material-ui/lab'
import { getProductList, calculateAmount } from './InvoiceFormService'

const InvoiceItemTable = ({ values, handleChange, setFieldValue }) => {
    const [isAlive, setIsAlive] = useState(true)
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProductList().then(({ data }) => {
            if (isAlive) setProductList(data)
        })

        return () => setIsAlive(false)
    }, [isAlive])

    return (
        <FieldArray name="items">
            {(arrayHelpers) => (
                <div className="overflow-auto">
                    <Table className="whitespace-pre min-w-750">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={7}>Item Details</TableCell>
                                <TableCell colSpan={2}>Quantity </TableCell>
                                <TableCell colSpan={2}>Rate</TableCell>
                                <TableCell colSpan={2}>Discount</TableCell>
                                <TableCell colSpan={2} align="center">
                                    Amount
                                </TableCell>
                                <TableCell
                                    colSpan={1}
                                    className="p-0"
                                    align="center"
                                />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {values.items?.map((item, ind) => (
                                <TableRow
                                    className="position-relative"
                                    key={ind}
                                >
                                    <TableCell
                                        colSpan={7}
                                        className="p-0"
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <img
                                                className="w-48"
                                                src={item?.imgUrl}
                                                alt=""
                                            />
                                            <Autocomplete
                                                className="w-full"
                                                size="small"
                                                options={productList}
                                                getOptionLabel={(option) =>
                                                    option.title
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        variant="outlined"
                                                        fullWidth
                                                    />
                                                )}
                                                onChange={(event, newValue) => {
                                                    handleChange({
                                                        target: {
                                                            name: `items[${ind}]`,
                                                            value: newValue,
                                                        },
                                                    })
                                                }}
                                            />
                                        </div>
                                    </TableCell>

                                    <TableCell
                                        colSpan={2}
                                        className="p-0"
                                        align="left"
                                    >
                                        <TextField
                                            name={`items[${ind}].quantity`}
                                            size="small"
                                            variant="outlined"
                                            type="number"
                                            fullWidth
                                            defaultValue={item.quantity || ''}
                                            onChange={handleChange}
                                        />
                                    </TableCell>
                                    <TableCell
                                        colSpan={2}
                                        className="p-0"
                                        align="left"
                                    >
                                        <TextField
                                            name={`items[${ind}].price`}
                                            size="small"
                                            variant="outlined"
                                            type="number"
                                            fullWidth
                                            value={item.price || ''}
                                            onChange={handleChange}
                                        />
                                    </TableCell>
                                    <TableCell
                                        colSpan={2}
                                        className="p-0"
                                        align="left"
                                    >
                                        <TextField
                                            name={`items[${ind}].discount`}
                                            size="small"
                                            variant="outlined"
                                            type="number"
                                            fullWidth
                                            value={item.discount || ''}
                                            onChange={handleChange}
                                            InputProps={{
                                                style: {
                                                    paddingRight: 0,
                                                },
                                                endAdornment: (
                                                    <Select
                                                        name={`items[${ind}].discountType`}
                                                        margin="none"
                                                        variant="standard"
                                                        disableUnderline
                                                        value={
                                                            item.discountType ||
                                                            '%'
                                                        }
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value="$">
                                                            $
                                                        </MenuItem>
                                                        <MenuItem value="%">
                                                            %
                                                        </MenuItem>
                                                    </Select>
                                                ),
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        colSpan={2}
                                        className="p-0"
                                        align="center"
                                    >
                                        {calculateAmount(item).toFixed(2)}
                                    </TableCell>
                                    <TableCell
                                        colSpan={1}
                                        className="p-0"
                                        align="center"
                                    >
                                        <IconButton
                                            size="small"
                                            onClick={() =>
                                                arrayHelpers.remove(ind)
                                            }
                                        >
                                            <Icon
                                                color="error"
                                                fontSize="small"
                                            >
                                                clear
                                            </Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Button
                        className="mt-4"
                        color="primary"
                        variant="contained"
                        size="small"
                        onClick={() => arrayHelpers.push({})}
                    >
                        + Add New Item
                    </Button>
                </div>
            )}
        </FieldArray>
    )
}

export default InvoiceItemTable
