import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import OrderTable from './OrderTable';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Fade from '@material-ui/core/Fade';
import { useStylesOrders } from './Orders.style';
import { Toolbar, IconButton, Tooltip, InputBase } from '@material-ui/core';

const Orders: React.FC = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStylesOrders();
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        async function loadOrders() {
            const newOrders = await axios.get("https://fleurilanddashboard.now.sh/api/orders");
            setOrders(newOrders.data);
            setIsLoading(false);
        }
        loadOrders();
    }, []);

    return (
        <div className = {classes.root}>
            <Toolbar className = {classes.toolbar}>
                <Typography className = {classes.title} variant="h4" noWrap>Commandes</Typography>
                <div className = {classes.search}>
                    <Tooltip title = "Rechercher">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Tooltip>
                    <InputBase 
                        className={classes.searchtextfield} 
                        placeholder="Rechercher"
                        onChange={(event) => setSearchText(event.target.value)}
                        value={searchText}/>
                </div>
            </Toolbar>
            {isLoading == true && <CircularProgress />}
            <Fade in={!isLoading} timeout={500}>
                <OrderTable orders={orders} searchtext={searchText}/>
            </Fade>
        </div>
    )
}
export default Orders;