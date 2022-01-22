import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';
import '../styles/card.css'


const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();

    return(
                <div  className="col-5  p-2 col-md-3 mb-5 m-1 ContainerCard justify-content-between">
                    <img width="140px" src={product.image} alt={product.name_product}/>
                    <h6>
                        {children}
                    </h6>
                    <p>
                        R$ {product.price.toFixed(2)}
                    </p>
                
                <Button 
                    variant="contained"
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                >
                    Adicionar
                </Button>
                </div>
    )
}

export default Card;
