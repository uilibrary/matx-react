import React from 'react'
import { Button, Icon } from '@material-ui/core'
import clsx from 'clsx'

const AddToCartButton = ({
    className,
    color,
    amount,
    totalUnit,
    handleAddProduct,
    handleUpdateCart,
}) => {
    const handleAmountIncrease = () => {
        handleUpdateCart(amount + 1)
    }
    const handleAmountDecrease = () => {
        handleUpdateCart(amount - 1)
    }

    return (
        <div>
            {amount === 0 && (
                <Button
                    className={className}
                    variant="contained"
                    color="primary"
                    onClick={handleAddProduct}
                >
                    <Icon className="mr-2" fontSize="small">
                        shopping_cart
                    </Icon>
                    Add To Cart
                </Button>
            )}
            {amount > 0 && (
                <div className={clsx('flex justify-between w-160', className)}>
                    <Button
                        className="p-2 min-w-32"
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={handleAmountDecrease}
                    >
                        <Icon fontSize="small">remove</Icon>
                    </Button>
                    <div className="flex-grow flex justify-center items-center bg-paper">
                        {amount}
                    </div>
                    <Button
                        className="p-2 min-w-32"
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={handleAmountIncrease}
                        disabled={amount === totalUnit}
                    >
                        <Icon fontSize="small">add</Icon>
                    </Button>
                </div>
            )}
        </div>
    )
}

export default AddToCartButton
