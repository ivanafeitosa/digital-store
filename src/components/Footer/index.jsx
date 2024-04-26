import { styled } from 'styled-components';
import logo from './assets/logo.png';
import { FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';


const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  padding: 70px 100px;
  padding-bottom: 0px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  & .coluna {
    flex: 1;
    color: white; 
    &:first-of-type{
      width: 45%;
      flex: initial;
      & .img {
        height: 44px;
        margin-bottom: 35 px;
      }
      & p{
        line-height: 26px;
        font-size: 16px;
        margin-bottom: 40px;
      }
      & .redes{
        display: flex;
        align-items: center;
        gap: 35px;
        & svg:hover{
          fill: #C92071;
        }
      }
    }
    &:last-of-type{
      width: 100%;
      flex: initial;
      margin-top: 26px;
      & h5 {
        line-height: 70px;
        text-align: center;
        border-top: 1px solid;
        font-size: 13px;
        font-weight: normal;
      }
    }
    & a{
      color: #FFF;
      font-size: 16px;
      line-height: 38px;
      &:hover{
        color: #C92071;
      }
    }
    & h6{
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 28px;
    }
    & address {
      font-size: 14px;
      line-height: 26px;
      margin-bottom: 8px;
      font-style: normal;
    }
  }
  
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="coluna">
        <img src={logo} alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad at ipsum dolorem dolorum, architecto molestiae corrupti cum? Possimus ipsam optio vel similique dolores voluptas architecto repellendus eveniet impedit quo.</p>
        <div className="redes">
        <Link to={''}><FacebookLogo size={24} /></Link>
        <Link to={''}><InstagramLogo size={24} /></Link>
        <Link to={''}><TwitterLogo size={24} /></Link>          
        </div>
      </div>
      <div className="coluna">
        <h6>Informação</h6>
        <ul>
          <li>
            <Link to={''}> Sobre Drip store
            </Link>
          </li>
          <li>
          <Link to={''}> Segurança
            </Link>
          </li>
          <li>
          <Link to={''}> Wishlist
            </Link>
          </li>
          <li>
          <Link to={''}> Blog
            </Link>
          </li>
          <li>
          <Link to={''}> Trabalhe conosco
            </Link>
          </li>
          <li>
          <Link to={''}> Meus Pedidos
            </Link>
          </li>
        </ul>
      </div>
      <div className="coluna">
      <h6>Categorias</h6>
        <ul>
          <li>
            <Link to={''}> Camisetas
            </Link>
          </li>
          <li>
          <Link to={''}> Calças
            </Link>
          </li>
          <li>
          <Link to={''}> Bonés
            </Link>
          </li>
          <li>
          <Link to={''}> Headphones
            </Link>
          </li>
          <li>
          <Link to={''}> Tênis
            </Link>
          </li>
        </ul>
      </div>
      <div className="coluna">
      <h6>Contato</h6>
      <address>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</address>
      <a href="tel:+8530513411">(85) 3051-3411</a>
      </div>
      <div className="coluna">
        <h5>&copy;2022 Digital College</h5>
      </div>
    </FooterContainer>
  )
};

export default Footer;