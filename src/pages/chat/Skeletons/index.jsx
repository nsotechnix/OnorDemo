import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

export default function Animations() {
    const classes = useStyles();
    return (
        <div className={'w-100 mt-md-2'}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
        </div>
    );
}