import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import sneakers from "./assets/white-sneakers.png";
import ornament from "./assets/ornament.png";

const CarroselContainer = styled.div`
/* margin: auto; */
background-color: #F5F5F5; 
color: #000000;
padding-bottom: 30px;
width: 100%;


/* Editando os dots do carrossel */
.slick-dots li button:before {
    color: #CCCCCC; /* Cor dos dots inativos */
}

.slick-dots li.slick-active button:before {
        color: #C92071; /* Cor do dot ativo */
}

.slick-dots li button:before {
    font-size: 12px; /* Tamanho do dot */
}

& .banner{
    background-color: #F5F5F5;
    height: 550px;    
    display: flex !important;
    align-items: center;
    position: relative;
    
    & .coluna {       
        padding-left: 100px;
        & h5 {
            color: #F6AA1C;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: .75px;
        }
        & h1 {
            width: 510px;
            margin: 20px 0 20px 0;
            color: #1F1F1F;
            font-weight: 800;
            font-size: 64px;
            line-height: 66px;
            letter-spacing: 1px;    
        }
        & p {
            width: 495px;
            color: #474747;
            font-weight: 400;
            font-size: 18px;
            line-height: 34px;
            letter-spacing: .75px;        
        }
        & .btn {
            display: block;
            width: 220px;
            margin-top: 40px;
            background-color: #C92071;
            border-radius: 5px;
            padding: 0 48px;
            color: #F5F5F5;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            line-height: 48px;
            letter-spacing:.75px;        
            text-align: center;
        }
        
    }
    & .sneakers {
            width: 730px;
            position: absolute;
            top: 0;
            right: 90px;

        }
        & .ornament {
            width: 140px;
            position: absolute;
            top: 60px;
            right: 40px;
        }
}



`;

export default function Carrossel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <CarroselContainer>
            <Slider {...settings}>
                <section className="banner">
                    <div className="coluna">
                        <h5>Melhores ofertas personalizadas</h5>
                        <h1>Queima de stoque Nike &#128293;</h1>
                        <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <Link to={''} className="btn">Ver Ofertas</Link>
                    </div>

                    <img src={sneakers} alt="white sneakers" className="sneakers" />
                    <img src={ornament} alt="ornament" className="ornament" />

                </section>
                <section>
                    <h3>TESTE 2</h3>
                </section>
                <section>
                    <h3>TESTE 3</h3>
                </section>
                <section>
                    <h3>TESTE 4</h3>
                </section>
            </Slider>
        </CarroselContainer>

    );
}