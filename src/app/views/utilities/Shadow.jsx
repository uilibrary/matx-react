import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
} from '@material-ui/core'
import { Breadcrumb, SimpleCard } from 'app/components'

const Shadow = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Utilities', path: '/utilities' },
                        { name: 'Shadow' },
                    ]}
                />
            </div>
            <SimpleCard title="Shadow">
                <p className="m-0">
                    The classes are named using the format-
                    <code>elevation-z(size)</code>
                </p>
                <p>
                    Where <em>size</em> is one of:
                </p>
                <ul>
                    <li>
                        <code className="whitespace-pre-wrap\">
                            [{[...Array(25).keys()].toString()}]
                        </code>
                    </li>
                </ul>

                <Table className="whitespace-pre">
                    <TableHead>
                        <TableRow className="bg-default">
                            <TableCell className="px-0">Class Name</TableCell>
                            <TableCell className="px-0" align="center">
                                Example
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[...Array(25).keys()].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="px-0" align="left">
                                    elevation-z{item}
                                </TableCell>
                                <TableCell className="px-0" align="left">
                                    <div
                                        className={`text-center px-20 py-4 my-2 elevation-z${item}`}
                                    >
                                        {`elevation-z${item}`}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </SimpleCard>
        </div>
    )
}

export default Shadow
