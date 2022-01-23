import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import { Paper, Button, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const HomePage = () => {
    const productsFromSelector = useSelector(state => state.products)
    const [products,setProducts]= useState(productsFromSelector);
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = { };

    for(let i = 0; i < arrayCategory.length; i++){    
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)    
    }

    function filterByCategoria(categoria){
        if(categoria){
        let productsFiltered = products.filter(product=>  {return product.name_categorys===categoria});
        setProducts(productsFiltered);
        }
        else{
            setProducts(productsFromSelector);

        }
    }
    return(
        <div class="container mt-3">
        <div className="row ">
            <div className="col-md-3 col-12 mb-3">
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>
                        <button class="btn btn-primary border w-100 m-1" key="LimparFiltros" onClick={() => filterByCategoria()}>
                            Limpar filtros
                        </button>
                        {category.map(
                            category => {
                                return (
                               <button class="btn btn-default border w-100 m-1" key = {category.id}  onClick={() => filterByCategoria(category.name)}>
                                    <Item
                                        
                                        name= {category.name}
                                        details={count[category.name]}
                                       
                                    />
                            </button>
                                )
                            }
                        )}
                    </List>
                </Paper>
            </div>
            <div className="col-md-9 col-12">
                <div className="row justify-content-center">
                {products.map(item => {
                    return(
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePage;
