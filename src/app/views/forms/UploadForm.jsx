import React, { useState } from 'react'
import { Breadcrumb, SimpleCard, MatxProgressBar } from 'app/components'
import { Fab, Icon, Card, Grid, Divider, Button } from '@material-ui/core'
import clsx from 'clsx'

const UploadForm = () => {
    const [files, setFiles] = useState([])
    const [queProgress, setQueProgress] = useState(0)
    const [dargClass, setDragClass] = useState('')

    const handleFileSelect = (event) => {
        let files = event.target.files
        let list = []

        for (const iterator of files) {
            list.push({
                file: iterator,
                uploading: false,
                error: false,
                progress: 0,
            })
        }
        setFiles(list)
    }

    const handleDragOver = (event) => {
        event.preventDefault()
        setDragClass('drag-shadow')
    }

    const handleDrop = (event) => {
        event.preventDefault()
        event.persist()

        let files = event.dataTransfer.files
        let list = []

        for (const iterator of files) {
            list.push({
                file: iterator,
                uploading: false,
                error: false,
                progress: 0,
            })
        }

        setDragClass('')
        setFiles(list)

        return false
    }

    const handleDragStart = (event) => {
        setDragClass('drag-shadow')
    }

    const handleSingleRemove = (index) => {
        let tempList = [...files]
        tempList.splice(index, 1)
        setFiles([...tempList])
    }

    const handleAllRemove = () => {
        setFiles([])
        setQueProgress(0)
    }

    const uploadSingleFile = (index) => {
        let allFiles = [...files]
        let file = files[index]

        allFiles[index] = { ...file, uploading: true, error: false }

        setFiles([...allFiles])
    }

    const uploadAllFile = () => {
        let allFiles = []

        files.map((item) => {
            allFiles.push({
                ...item,
                uploading: true,
                error: false,
            })

            return item
        })

        setFiles([...allFiles])
        setQueProgress(35)
    }

    const handleSingleCancel = (index) => {
        let allFiles = [...files]
        let file = files[index]

        allFiles[index] = { ...file, uploading: false, error: true }

        setFiles([...allFiles])
    }

    const handleCancelAll = () => {
        let allFiles = []

        files.map((item) => {
            allFiles.push({
                ...item,
                uploading: false,
                error: true,
            })

            return item
        })

        setFiles([...allFiles])
        setQueProgress(0)
    }

    let isEmpty = !!!files.length

    return (
        <div className="upload-form m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Others', path: '/' },
                        { name: 'Upload' },
                    ]}
                />
            </div>
            <SimpleCard title="File Upload">
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="upload-single-file">
                        <Fab
                            className="capitalize"
                            color="primary"
                            component="span"
                            variant="extended"
                        >
                            <div className="flex items-center">
                                <Icon className="pr-8">cloud_upload</Icon>
                                <span>Single File</span>
                            </div>
                        </Fab>
                    </label>
                    <input
                        className="hidden"
                        onChange={handleFileSelect}
                        id="upload-single-file"
                        type="file"
                    />
                    <div className="px-4"></div>
                    <label htmlFor="upload-multiple-file">
                        <Fab
                            className="capitalize"
                            color="primary"
                            component="span"
                            variant="extended"
                        >
                            <div className="flex items-center">
                                <Icon className="pr-8">cloud_upload</Icon>
                                <span>Multiple File</span>
                            </div>
                        </Fab>
                    </label>
                    <input
                        className="hidden"
                        onChange={handleFileSelect}
                        id="upload-multiple-file"
                        type="file"
                        multiple
                    />
                </div>

                <div
                    className={clsx(
                        'h-200 w-full border-radius-4 bg-light-gray mb-6 flex justify-center items-center',
                        dargClass
                    )}
                    onDragEnter={handleDragStart}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    {isEmpty ? (
                        <span>Drop your files here</span>
                    ) : (
                        <h5 className="m-0">
                            {files.length} file{files.length > 1 ? 's' : ''}{' '}
                            selected...
                        </h5>
                    )}
                </div>

                <Card className="mb-6" elevation={2}>
                    <div className="p-4">
                        <Grid
                            container
                            spacing={2}
                            justify="center"
                            alignItems="center"
                            direction="row"
                        >
                            <Grid item lg={4} md={4}>
                                Name
                            </Grid>
                            <Grid item lg={1} md={1}>
                                Size
                            </Grid>
                            <Grid item lg={2} md={2}>
                                Progress
                            </Grid>
                            <Grid item lg={1} md={1}>
                                Status
                            </Grid>
                            <Grid item lg={4} md={4}>
                                Actions
                            </Grid>
                        </Grid>
                    </div>
                    <Divider></Divider>

                    {isEmpty && <p className="px-4">Que is empty</p>}

                    {files.map((item, index) => {
                        let { file, uploading, error, progress } = item
                        return (
                            <div className="px-4 py-4" key={file.name}>
                                <Grid
                                    container
                                    spacing={2}
                                    justify="center"
                                    alignItems="center"
                                    direction="row"
                                >
                                    <Grid item lg={4} md={4} sm={12} xs={12}>
                                        {file.name}
                                    </Grid>
                                    <Grid item lg={1} md={1} sm={12} xs={12}>
                                        {(file.size / 1024 / 1024).toFixed(1)}{' '}
                                        MB
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={12} xs={12}>
                                        <MatxProgressBar
                                            value={progress}
                                        ></MatxProgressBar>
                                    </Grid>
                                    <Grid item lg={1} md={1} sm={12} xs={12}>
                                        {error && (
                                            <Icon color="error">error</Icon>
                                        )}
                                        {/* {uploading && <Icon className="text-green">done</Icon>} */}
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={12} xs={12}>
                                        <div>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="primary"
                                                disabled={uploading}
                                                onClick={() =>
                                                    uploadSingleFile(index)
                                                }
                                            >
                                                Upload
                                            </Button>
                                            <Button
                                                className="mx-2"
                                                size="small"
                                                variant="contained"
                                                disabled={!uploading}
                                                color="secondary"
                                                onClick={() =>
                                                    handleSingleCancel(index)
                                                }
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                className="bg-error"
                                                onClick={() =>
                                                    handleSingleRemove(index)
                                                }
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        )
                    })}
                </Card>

                <div>
                    <p className="m-0">Queue progress:</p>
                    <div className="py-4">
                        <MatxProgressBar value={queProgress}></MatxProgressBar>
                    </div>
                    <div className="flex">
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isEmpty}
                            onClick={uploadAllFile}
                        >
                            Upload All
                        </Button>
                        <Button
                            className="mx-2"
                            variant="contained"
                            color="secondary"
                            disabled={isEmpty}
                            onClick={handleCancelAll}
                        >
                            Cancel All
                        </Button>
                        {!isEmpty && (
                            <Button
                                variant="contained"
                                className="bg-error"
                                onClick={handleAllRemove}
                            >
                                Remove All
                            </Button>
                        )}
                    </div>
                </div>
            </SimpleCard>
        </div>
    )
}

export default UploadForm
