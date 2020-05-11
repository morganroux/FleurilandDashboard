import React, {useContext, useEffect, useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import StatusSelector from './StatusSelector';
import axios from 'axios';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { AuthContext } from '../../context/auth/auth.context';

interface OrderItemProps extends WithSnackbarProps {
    order: any,
}

const OrderItem: React.FC<OrderItemProps> = (props) => {
    const { order } = props;
    return (
            order && (
            <TableRow key={order.id}>
            <IdCell {...props }/>
            <NameCell {...props }/>
            <PriceCell {...props }/>
            <StatusCell {...props }/>
            <DateCell {...props} />
            <CityCell {...props} />
            <MethodCell {...props }/>
            </TableRow>
            )
    );
}

const IdCell: React.FC<OrderItemProps> = ({ order }) => {
    return (
        <TableCell>{order.id}</TableCell>
    );
}

const NameCell: React.FC<OrderItemProps> = ({ order }) => {
    const firstName = order.billing.first_name.charAt(0).toUpperCase() + order.billing.first_name.slice(1).toLowerCase();
    const lastName = order.billing.last_name.charAt(0).toUpperCase() + order.billing.last_name.slice(1).toLowerCase();
    return (
        <TableCell>
            <Link onClick={(event) => event.preventDefault()}>
                {lastName} {firstName}
            </Link>
        </TableCell>
        
    );
}

const PriceCell: React.FC<OrderItemProps> = ({ order }) => {
    const {authState, authDispatch} = useContext(AuthContext);
    return (
        <TableCell>{authState.user.email == 'valerie@fleuriland.fr' ? order.total : '***'}€</TableCell>
    );
}

const StatusCell: React.FC<OrderItemProps> = ({order, enqueueSnackbar}) => {
    const [status, setStatus] = useState(order.status);
    const {authState, authDispatch} = useContext(AuthContext);

    const handleChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
        const status = event.target.value;
        if (authState.user.email != 'valerie@fleuriland.fr') {
           
            enqueueSnackbar(`Vous n'avez pas l'autorisation d'apporter des modifications`, { 
                variant: 'warning',
                anchorOrigin: { vertical: 'bottom', horizontal: 'right'}
            });
            return;
        }
        const rep = await axios.put(`api/updateOrder?id=${order.id}&status=${status}`);
        if (rep.data.status == event.target.value) {
            setStatus(event.target.value as string);
            enqueueSnackbar('Mise à jour réussie', { 
                variant: 'success',
                anchorOrigin: { vertical: 'bottom', horizontal: 'right'}
            });
        }
        else
            enqueueSnackbar('Erreur de connexion au serveur', { 
                variant: 'error',
                anchorOrigin: { vertical: 'bottom', horizontal: 'right'}
        });
    };
 
    return (
        <TableCell style={{ borderRadius:10 }}>
            <StatusSelector status={status} handleChange={handleChange}/>
        </TableCell>
    );
}

const DateCell: React.FC<OrderItemProps> = ({ order }) => {
    const date:Date = new Date(order.date_created);
    const min = date.getMinutes().toString().padStart(2, "0");
    const hh = date.getHours().toString().padStart(2, "0");
    const dd = date.getDate().toString().padStart(2, "0");
    const mm = (date.getMonth()+1).toString().padStart(2, "0");
    const yyyy = date.getFullYear().toString().padStart(2, "0");
    return (
        <TableCell>{`${dd}-${mm}-${yyyy} ${hh}:${min}`}</TableCell>
    );
}

const CityCell: React.FC<OrderItemProps> = ({ order }) => {
    const city = order.shipping.city.charAt(0).toUpperCase() + order.shipping.city.slice(1).toLowerCase();
    return (
        <TableCell>{city}</TableCell>
    )
}

const MethodCell: React.FC<OrderItemProps> = ({ order }) => {
    const method = order.shipping_lines[0] ? order.shipping_lines[0].method_title : 'Aucune méthode renseignée';
    return (
        <TableCell align="center">
            { (!!method) && (
                <Tooltip 
                    title={method}
                    TransitionComponent={Fade} 
                    TransitionProps={{ timeout: 600 }}
                >
                    <div>
                        {method == "Retrait en point de vente" && (
                                <HouseOutlinedIcon fontSize='large'/>
                        )}
                        {method == "Livraison chez vous" && (
                            <LocalShippingIcon fontSize='large'/>
                        )}
                </div>
                </Tooltip>
            )}
        </TableCell>
    );
}

export default withSnackbar(OrderItem);