import styled from "styled-components";
const ProdutoContainer = styled.div`
& .imagem{
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 16px;
    position: relative;
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
        top: 16px;
        left: 16px;
    }
    & img{
        width: 100%;
    }
}
& .infos{
    & h6{
        font-size: 12px;
        line-height: 24px;
        letter-spacing: .75px;
        color: #8f8f8f;
        margin-top: 18px;
    }
    & h5 {
        font-size: 24px;
        line-height: 38px;
        letter-spacing: .75px;
        color: #474747;
        font-weight: normal;
    }
    & .preco {
        font-size: 24px;
        line-height: 38px;
        letter-spacing: .75px;
        color: #000000;
        font-weight: bold;
        & del{
            color: #8f8f8f;
            text-decoration: line-through;
            font-size: 18px;
            margin-right: 10px;
            font-weight: normal;
        }  
    }
}
`;

const Produto = ({ nome, categoria, imagem, preco, desconto }) => {
    return (
        <ProdutoContainer>
            <div className="imagem">
                {
                    desconto && <div className="desconto">{desconto}% off</div>
                }
                <img src={imagem} alt={nome} />
            </div>
            <div className="infos">
                <h6>{categoria}</h6>
                <h5>{nome}</h5>
                <div className="preco">
                    {
                        desconto ? (
                            <>
                                <del>R$ {preco.toFixed(2)}</del>
                                R$ {(preco - (preco * desconto / 100)).toFixed(2)}
                            </>
                        ) : (
                            <>
                                R$ {preco.toFixed(2)}
                            </>
                        )
                    }
                </div>
            </div>
        </ProdutoContainer>
    )
};

export default Produto;