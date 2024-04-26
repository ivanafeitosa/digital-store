import { Link, NavLink } from "react-router-dom";
import "./index.css";
import icone from './assets/icone.png';
import cart from './assets/cart.png';
import { useContext, useState } from 'react';
import { LoginContext } from "../../contexts/LoginContext";

const Header = () => {

    const [visibleCart, setVisibleCart] = useState(false);
    const { estaLogado } = useContext(LoginContext);

    return (
        <header>
            <div className="logo">
                <img src={icone} alt="Digital Store logo" />
                {'Digital Store'}
            </div>
            <div className="pesquisa">
                <input type="text" placeholder="Pesquisar produto..."/>
                <button></button>
            </div>
            <div className="acoes">
                {
                    !estaLogado && (
                        <>
                        <Link to={'/cadastro'}>Cadastre-se</Link>
                        <Link to={'/login'} className="btn">Entrar</Link>
                        </> 
                    )
                }
                
                <div className="carrinho" onClick={() => setVisibleCart(!visibleCart)}>
                    <span>0</span>
                    <img src={cart} alt="Icone carrinho" />
                    <div className={`modal ${visibleCart && 'active'}`}>
                        <h4>Meu Carrinho</h4>
                        <ul>
                            <li>
                                <img src={''} alt="" />
                                <div className="info-produto">
                                    <h5>Tênis Nike Revolution 6 Next Nature Masculino</h5>
                                    <h6>R$ 219,00 <del>R$ 219,00</del></h6>
                                </div>
                            </li>
                            <li>
                                <img src={''} alt="" />
                                <div className="info-produto">
                                    <h5>Tênis Nike Revolution 6 Next Nature Masculino</h5>
                                    <h6>R$ 219,00 <del>R$ 219,00</del></h6>
                                </div>
                            </li>                        
                        </ul>
                        <h4>Valor total: <strong>R$219,00</strong> </h4>
                        <div className="modal-acoes">
                            <Link to={''}>Esvaziar</Link>
                            <Link to={'/carrinho'} className='btn'>Ver Carrinho</Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/produtos'}>Produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/categorias'}>Categorias</NavLink>
                    </li>
                    <li>
                        {
                            estaLogado && (
                                <NavLink to={'/meus-pedidos'}>Meus Pedidos</NavLink>
                            )
                        }
                        
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;