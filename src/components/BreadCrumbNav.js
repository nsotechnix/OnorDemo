import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import GrainIcon from '@material-ui/icons/Grain'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@material-ui/icons/RadioButtonCheckedOutlined';
import tickmark from '../svg/tick.svg'

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    linkActive: {
        display: 'flex',
        color: '#fa6331'
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    iconActive: {
        marginRight: theme.spacing(0.5),
        width: 20,
        color: '#fa6331',
        height: 20,
    },
}));

const BreadCrumbNav = (props) => {
    const location = useLocation()

    const { account, summary } = props

    const classes = useStyles();

    const handleClick = (event, a) => {
        event.preventDefault();
        // props.history.push('/seller')
    }

    const account_jsx = (
        <Breadcrumbs className="mycol mt-4 mb-3" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {
                location.pathname ? 
                <Link color="inherit" to={"/seller/create/accountsecurity"} onClick={handleClick} className={classes.linkActive}>
                    <img src={tickmark} alt={'Tick mark'} style={{height: '20px'}} />&nbsp;
                    Personal Info
                </Link>
                : <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                    <RadioButtonUncheckedOutlinedIcon className={classes.icon} />
                    Personal Info
                </Link>
            }
            {
                location.pathname !== '/seller/create/personalinfo' ? 
                    <Link color="inherit" onClick={handleClick} className={classes.linkActive} >
                        <img src={tickmark} alt={'Tick mark'} style={{height: '20px'}} />&nbsp;
                        Professional Info
                    </Link>
                : <Link color="inherit" onClick={handleClick} className={classes.link} >
                        <RadioButtonUncheckedOutlinedIcon className={classes.icon} />
                        Professional Info
                    </Link>
            }
            {/* <Link color="inherit" className={classes.link}>
                    <RadioButtonUncheckedOutlinedIcon className={classes.icon} />
                Linked Account
            </Link> */}
            {
                location.pathname.match('/seller/create/accountsecurity') ? 
                    <Link color="inherit" as="/" onClick={handleClick} className={classes.linkActive}>
                        <img src={tickmark} alt={'Tick mark'} style={{height: '20px'}} />&nbsp;
                        Account Security
                    </Link>
                : <Link color="inherit" as="/" onClick={handleClick} className={classes.link}>
                        <RadioButtonUncheckedOutlinedIcon className={classes.icon} />
                    Account Security
                </Link>
            }
        </Breadcrumbs>
    )

    const summary_jsx = (
        <Breadcrumbs className="mycol mt-4 mb-3" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick} className={classes.linkActive}>
                <img src={tickmark} alt={'Tick mark'} style={{height: '20px'}} />&nbsp;
                Summary
        </Link>
        {
            location.pathname != '/seller/create/summary' ? 
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick} className={classes.linkActive} >
                <img src={tickmark} alt={'Tick mark'} style={{height: '20px'}} />&nbsp;
                Pricing
            </Link>
            :   
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick} className={classes.link} >
                <RadioButtonUncheckedOutlinedIcon className={classes.icon} />
                Pricing
            </Link>
        }
        {
            location.pathname == '/seller/create/verify' ? 
                <Link color="inherit" href="/seller" onClick={handleClick} className={classes.linkActive}>
                        <img src={tickmark} alt={'Tick mark'} style={{height: '20px'}} />&nbsp;
                        Publish
                </Link>
            :
                <Link color="inherit" href="/seller" onClick={handleClick} className={classes.link}>
                    <RadioButtonUncheckedOutlinedIcon className={classes.icon} />
                    Publish
                </Link>
        }
        </Breadcrumbs>
    )

    const edit_gig_jsx = (
        <Breadcrumbs className="mycol mt-4 mb-3" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick} className={classes.linkActive}>
                <img src={tickmark} alt={'Tick mark'} style={{height: '20px'}} />&nbsp;
                Summary
        </Link>
        {
            location.pathname != '/seller/gigs/edit/summary/:productId' ? 
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick} className={classes.linkActive} >
                <img src={tickmark} alt={'Tick mark'} style={{height: '20px'}} />&nbsp;
                Pricing
            </Link>
            :   
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick} className={classes.link} >
                <RadioButtonUncheckedOutlinedIcon className={classes.icon} />
                Pricing
            </Link>
        }
        </Breadcrumbs>
    )

    return (
        <Fragment>
            {account && account_jsx}
            {summary && summary_jsx}
            {props.editGig && edit_gig_jsx}
        </Fragment>
    )
}

export default connect()(BreadCrumbNav)