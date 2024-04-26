import { Link } from "react-router-dom";
import styled from "styled-components";
import gmail from "./assets/gmail.png";
import meta from "./assets/meta.png";
import { useForm } from "react-hook-form";

const LoginContainer = styled.section`
    background-image: linear-gradient(#B5B6F2, #EFEFFF);
    padding: 120px 100px 160px 100px;
    & form{
        width: 580px;
        background-color: #FFF;
        border-radius: 5px;
        padding: 30px;
        & h3 {
            font-size: 32px;
            line-height: 36px;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }
        & p{
            font-size: 16px;
            line-height: 28px;
            letter-spacing: .75px;
            margin-bottom: 30px;
            color: #474747;
            & a{
                text-decoration: underline;
                color: #474747;
            }
        }
        & label {
            font-size: 12px;
            font-weight: bold;
            line-height: 24px;
            letter-spacing: .75px;
            color: #474747;
            display: block;
            margin-bottom: 5px;
        }
        & input {
            width: 100%;
            height: 60px;
            padding-left: 24px;
            border-radius: 8px;
            background-color: #47474710;
            margin-bottom: 20px;
        }
        & > a {
            display: block;
            text-decoration: underline;
            color: #474747;
        }
        & button{
            background-color: #C92071;
            width: 100%;
            height: 48px;
            color: #FFF;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            margin-top: 30px;
            margin-bottom: 30px;
        }
        & .loginSocial{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            color: #474747;
        }
    }
`;

const Login = () => {

    const { register, handleSubmit } = useForm();

    function logar(dados){
        console.log(dados);
    }

    return (
        <LoginContainer>
            <form action="" onSubmit={handleSubmit(logar)}>
                <h3>Acesse sua conta</h3>
                <p>Novo cliente? então registre-se <Link to={'/cadastro'}>aqui</Link></p>
                <label htmlFor="email">Email*</label>
                <input
                    id="email"
                    type="email"
                    placeholder="email@email.com" 
                    {...register('email')}
                    />
                <label htmlFor="password">Senha*</label>
                <input id="password" type="password" placeholder="*******" 
                {...register('password')}
                />
                <Link to={'/esqueci-minha-senha'}>Esqueci minha senha</Link>
                <button type="submit">Acessar conta</button>
                <div className="loginSocial">
                    Ou faça login com
                    <img src={gmail} alt="gmail icone" />
                    <img src={meta} alt="meta icone" />
                </div>
            </form>
        </LoginContainer>
    );
}

export default Login;