import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button ,makeStyles} from '@material-ui/core/';
import Cart from './Cart';



const Header = () => {

    return(
        
        <nav  className="navbar navbar-expand-lg  p-3 navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Shopping</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-between p-1" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/avaliacoes">Avaliações da loja</a>
      </li>
      <li className="nav-item">
      </li>
    </ul>
    <ul className="navbar-nav">
                <li class="nav-item">
                <Cart  />  
                </li>
     
    </ul>
   

  </div>

            
        </nav>
    )
}

export default Header;
