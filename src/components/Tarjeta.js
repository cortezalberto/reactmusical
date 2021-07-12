import React from 'react';
import camion from "../assets/images/camion.png";

import { Card, Button } from 'react-bootstrap';

const Tarjeta = (props) => {
    const nOv = props.costoEnvio;
    let texto;
    if (nOv === 'G') {
        texto = <p style={{ color: 'green' }}>
            <img style={{ width: 20, height: 20 }}
                src={camion} alt="d"></img>
            Envío gratis a todo el país</p>
    } else {
        texto = <p style={{ color: 'orange' }}>kkkosto de Envío Interior de Argentina: ${props.costoEnvio}</p>
    }

    
    return (
        <div>
            <Card style={{ width: '18rem' }} className="margenesTarjeta">
                    <Card.Img variant="top" src={require(`../assets/images/${props.imagen}`).default} height={200} width={200} />
                    <Card.Body>
                        <Card.Title></Card.Title>

                        <Card.Text nOv={nOv} >
                            <p>{props.instrumento}</p>
                            <p>${props.precio}</p>
                            {texto}
                            <p>{props.cantidadVendida} vendidosss</p>
                        </Card.Text>



                        <Button href={`products/${props.id}`} variant="primary">Detalle</Button>
                    </Card.Body>

                </Card>
        </div>
    );
};

export default Tarjeta;