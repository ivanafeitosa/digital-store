import { Link } from "react-router-dom";
import styled from "styled-components";
import Carrossel from "../../components/Carrossel";
import tshirt from "./assets/supreme-t-shirt.png";
import adiddas from "./assets/adidas.png";
import fone from "./assets/beats-bass.png";
import blusa from "./assets/t-shirt.png";
import pants from "./assets/pants.png";
import headset from "./assets/headset.png";
import tennis from "./assets/tennis.png";
import line from "./assets/line.png";

const HomeContainer = styled.section`
background-color: #f9f8fe;
width: 100%;
& .produtos{    
    margin: 0 100px 0 100px;
    & .colecoes{        
        
        & h4 {
            margin-top: 38px;
            color: #474747;
            font-weight: 700;
            font-size: 20px;
            line-height: 38px;
            letter-spacing: .75px;
        }
        & .group-banners{
            display: flex;            
            gap: 12px;
            margin-top: 20px;
            & > div {
                width: calc(33.333% - 8px);
            }

            & .minibanner{
                background-color: #D8E3F2;
                border-radius: 8px;                
                position: relative;
                z-index: 1;
                padding: 60px 0 30px 30px;
                & .desconto{
                    display: block;
                    line-height: 30px;
                    padding: 0 20px;
                    border-radius: 15px;
                    background-color: #E7FF86;
                    color: #474747;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: .75px;
                    position: absolute;
                    top: 34px;
                    left: 30px;
                }                
                & h3{
                    position: relative;
                    z-index: 1;
                    margin: 10px 0 10px 0;
                    font-weight: 700;
                    font-size: 30px;
                    line-height: 36px;
                    letter-spacing: 1px;
                    width: 172px;
                    
                }
                & .btn{
                    display: block;
                    position: relative;
                    z-index: 1;
                    width: 140px;
                    background-color: #F5F5F5;
                    color: #C92071;                    
                    border-radius: 5px;                    
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 40px;
                    letter-spacing: .75px;
                    text-align: center;
                }
                & img{
                    height: 220px;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    z-index: -1;
                }
            } 
        }
        & .colecoes-icons {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & ul {
                padding: 20px 0 123px 0;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 48px;
                & .icones{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    color: #474747;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: .75px;                                     
                    & .container-icons{
                        background-color: #FFFFFF;
                        height: 104px;
                        width: 104px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;                        
                        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05); 
                                             
                    }
                }
            }

        }
        

    }

}
`;

const Home = () => {
    return (
        <HomeContainer>
            <Carrossel />
            <section className="produtos">
                <div className="colecoes">
                    <h4>Coleções em destaque</h4>
                    <div className="group-banners">
                        <div className="minibanner">
                            <div className="desconto">30% off</div>
                            <h3>Novo drop Supreme</h3>
                            <Link to={''} className="btn">Comprar</Link>
                            <img src={tshirt} alt="" />
                        </div>
                        <div className="minibanner">
                            <div className="desconto">30% off</div>
                            <h3>Coleção Adidas</h3>
                            <Link to={''} className="btn">Comprar</Link>
                            <img src={adiddas} alt="" />
                        </div>
                        <div className="minibanner">
                            <div className="desconto">30% off</div>
                            <h3>Novo Beats Bass</h3>
                            <Link to={''} className="btn">Comprar</Link>
                            <img src={fone} alt="" />
                        </div>
                    </div>

                    <div className="colecoes-icons">
                        <h4>Coleções em destaque</h4>
                        <ul>
                            <li>
                                <Link to={''} className="icones">
                                    <div className="container-icons">
                                        <img src={blusa} alt="camiseta ícone" />
                                    </div>
                                    Camisetas
                                </Link>
                            </li>
                            <li>
                                <Link to={''} className="icones">
                                    <div className="container-icons">
                                        <img src={pants} alt="camiseta ícone" />
                                    </div>
                                    Calças
                                </Link>
                            </li>
                            <li>
                                <Link to={''} className="icones">
                                    <div className="container-icons">
                                        <img src={pants} alt="camiseta ícone" />
                                    </div>
                                    Bonés
                                </Link>
                            </li>
                            <li>
                                <Link to={''} className="icones">
                                    <div className="container-icons">
                                        <img src={headset} alt="camiseta ícone" />
                                    </div>
                                    Headphones
                                </Link>
                            </li>
                            <li>
                                <Link to={''} className="icones">
                                    <div className="container-icons">
                                        <img src={tennis} alt="camiseta ícone" />
                                    </div>
                                    Tênis
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="cards-produtos">
                        <div>
                            <h4>Produtos em alta</h4>
                            <Link to={''}>
                                Ver todos
                                <img src={line} alt="" />
                            </Link>
                        </div>
                    </div> */}

                </div>

            </section>
        </HomeContainer>
    );
}

export default Home;