import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LinearProgress, CircularProgress } from '@material-ui/core'
import { Breadcrumb, SimpleCard } from 'app/components'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    progress: {
        margin: theme.spacing(2),
    },
}))

const AppProgress = () => {
    const classes = useStyles()
    const [completed, setCompleted] = React.useState(0)

    React.useEffect(() => {
        function progress() {
            setCompleted((oldCompleted) => {
                if (oldCompleted === 100) {
                    return 0
                }
                const diff = Math.random() * 10
                return Math.min(oldCompleted + diff, 100)
            })
        }

        const timer = setInterval(progress, 500)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Prgress' },
                    ]}
                />
            </div>
            <SimpleCard title="Circuar Progress (Indeterminate)">
                <CircularProgress className={classes.progress} />
                <CircularProgress
                    className={classes.progress}
                    color="secondary"
                />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Circuar Progress (static)">
                <CircularProgress
                    variant="static"
                    value={25}
                    className={classes.progress}
                />
                <CircularProgress
                    variant="static"
                    value={50}
                    className={classes.progress}
                    color="secondary"
                />
                <CircularProgress
                    variant="static"
                    value={75}
                    className={classes.progress}
                    color="secondary"
                />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Linear Progress (Indeterminate)">
                <LinearProgress />
                <br />
                <LinearProgress color="secondary" />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="Linear Progress (Determinate)">
                <LinearProgress variant="determinate" value={completed} />
                <br />
                <LinearProgress
                    color="secondary"
                    variant="determinate"
                    value={completed}
                />
            </SimpleCard>
        </div>
    )
}
export default AppProgress
