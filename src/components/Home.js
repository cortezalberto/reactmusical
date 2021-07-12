import React, { Component } from 'react';
import Navigation from './Navigation';
import { instrumentos } from '../datos/instrumentos.json';

import { Container, Carousel } from 'react-bootstrap';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            instrumentos
        }
    }


    render() {
        let traerMarcaModelo = this.state.instrumentos;
     
     
        return (
            <React.Fragment>
                <Navigation></Navigation>

                <Container fluid="md">
                    <h1> Alberto Musical Lo de  Hendrix es una tienda de instrumentos musicales con  más de 15 años de experiencia.</h1>
                    <Carousel className="margen carro w-50">
                        <Carousel.Item>
                            <img
                                className="align-self-center d-block w-100"
                                src={require(`../assets/images/${traerMarcaModelo[0].imagen}`).default}
                          
                                alt="no funciono todavia"
                            />
                            <Carousel.Caption>
                                <h3 style={{color:"black"}}>Marca: {traerMarcaModelo[0].marca}</h3>
                                <p style={{color:"black"}}>Modelo: {traerMarcaModelo[0].modelo}</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="align-self-center d-block w-100"
                                src={require(`../assets/images/${traerMarcaModelo[1].imagen}`).default}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3 style={{color:"black"}}>Marca: {traerMarcaModelo[1].marca}</h3>
                                <p style={{color:"black"}}>Modelo: {traerMarcaModelo[1].modelo}</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="align-self-center d-block w-100"
                                src={require(`../assets/images/${traerMarcaModelo[2].imagen}`).default}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3 style={{color:"black"}}>Marca: {traerMarcaModelo[2].marca}</h3>
                                <p style={{color:"black"}}>Modelo: {traerMarcaModelo[2].modelo}</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                    <h3>Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</h3>
                    
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;