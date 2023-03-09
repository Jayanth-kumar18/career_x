import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/';
import {Card} from 'react-bootstrap';
function ProductList(props) {
    const products=props.prds;
  return (
    <div>
        {
            products.map(p=>{
                return(
                    <Card key={p.id}>
                        {/* <CardImg src={p.img}>    </CardImg> */}
                        <Card.Body>
                            <Card.Title>{p.title}</Card.Title>
                            <Card.Desc> {p.desc}</Card.Desc>
                            <Card.Footer>{p.price}</Card.Footer>
                        </Card.Body>
                    </Card>
                )
            })
        }
    </div>
  )
}

export default ProductList