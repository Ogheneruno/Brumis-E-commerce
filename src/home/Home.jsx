import React, {useState, useEffect} from 'react';
import Rate from '../rate/Rate';
import Counter from '../counter/Counter';
import Option from '../option/Option';
import Navbar from '../navbar/Navbar';
import {
    alpha,
    AppBar,
    Avatar, 
    Toolbar, 
    IconButton, 
    Typography, 
    InputBase, 
    Badge, 
    MenuItem, 
    makeStyles,
    Paper,
    Box,
    useTheme,
   useMediaQuery
} from '@material-ui/core';
import { ShoppingCart, Search} from '@material-ui/icons';
import EcoIcon from '@material-ui/icons/Eco';
import Pay from '../pay/Pay';
import DrawerComponent from "../Drawer";

import './home.css';
import Image from '../img/banner.png'; // Import using relative path



const useStyles = makeStyles(theme => ({
   
     paperContainer: {
        width: '100%',
        height: '600px',
        boxShadow: '0px',
        position: 'relative'

    },
    paperImg:{
        position: 'relative',
        width: '100%',
        height: '600px',
        boxShadow: 'none',
        [theme.breakpoints.down("xs")]:{
            display: 'none',
       }
    },
    paperText:{
        position: 'absolute',
        width: '40%',
        top: '100px',
        left: '20px',
        [theme.breakpoints.down("xs")]:{
            width: '100%',
            position: 'relative',
       }
    },
    iconColor:{
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        backgroundColor: '#fff2f4',
        borderRadius: '20px',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("xs")]:{
            width: '50%',
       }
    },
    iconColorText:{
        fontSize: '13px',
        marginLeft: theme.spacing(1)
    },
    topHead:{
        color: '#0e233f',
        fontWeight: 'bold'
    },
    bottomHead:{
        color: '#15283e',
        fontWeight: 'bold'
    },
    paperBody:{
        fontSize: '14px'
    }

    
}))


const Home = () => {
    const classes = useStyles();
    const [count, setCount] = useState(1);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    const handleIncrement = () => {
        setCount( (add) => add + 1);
    };

    const handleDecrement = () =>{
        setCount( (sub) => sub - 1);
        
    };
    return (
        <>
        <div>
            <div className={classes.PaperContainer}>
                <img className={classes.paperImg} src={Image} />
                <div className={classes.paperText}>
                    <div className={classes.iconColor}>
                        <EcoIcon/>
                        <Typography className={classes.iconColorText}>Natural Products</Typography>
                    </div>
                        <Typography className={classes.topHead} variant="h4">Be good to your skin.</Typography>
                        <Typography className={classes.bottomHead} variant="h5">You will wear it everyday for you.</Typography>
                        <Rate/>
                        <Typography className={classes.paperBody} mt={2}>Most dermatologist agree it is important to cleanse the face twice daily to get bacteria, dirt and pollutants off your skin</Typography>
                        <Counter/>
                        <Option/>
                       
                </div>
           </div>
        </div>
   
        </>
        
    )
}

export default Home;
