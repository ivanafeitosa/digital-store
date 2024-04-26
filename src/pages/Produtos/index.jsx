import { useEffect, useState } from "react";
import styled from "styled-components";
import Produto from "../../components/Produto";

const ProdutosContainer = styled.section`   
    padding: 40px 100px 0 100px;
    background-color: #F9F8FE;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    & .ordenacao{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & h6 {
            color: #474747;
            font-size: 14px;
            line-height: 22px;
            & p {
                display: inline;
                font-weight: 400;
            }
        }
        & .ordenar{
            border: solid 1px #474747;
            border-radius: 4px;
            padding: 16px;            
            color: #1F1F1F;
            font-size: 14px;
            letter-spacing: .75px;
            text-align: center;
            & label{              
                font-weight: 700;
                /* line-height: 28px; */
            }
            & select{
                background-color: #F9F8FE;
                font-weight: 400;
                border: 0px;
            }
        }


    }
    & .filtros {
        width: 300px;
        background-color: #FFF;
        border-radius: 4px;
        padding: 30px;
        & h6 {
            color: #474747;
            font-size: 14px;
            line-height: 22px;
            &:first-of-type{
                font-size: 16px;
                line-height: 24px;
            }

        }
        & hr{
            background-color: #CCC;
            height: 1px;
            margin: 20px 0;
        }
        & ul {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 16px;
            & li label{
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                color: #474747;
                line-height: 22px;
                cursor: pointer;
                & input{
                    width: 22px;
                    height: 22px;
                    accent-color: #C92071;
                    cursor: pointer;
                }
            }
        }
    }
    & .produtos {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        & > div {
            width: calc(33.333% - 10px);
        }
    }

`;

const Produtos = () => {

    const [marcas, setMarcas] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [estados, setEstados] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [filtros, setFiltros] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const [tipoOrdenacao, setTipoOrdenacao] = useState('');

    function selecionarFiltro(value) {
        if (filtros.includes(value)) {
            setFiltros([...filtros.filter(valor => valor != value)]);
            return;
        }
        setFiltros([...filtros, value]);
    }

    // console.log(filtros)

    async function buscarMarcas() {
        const request = await fetch('http://localhost:3000/marcas');
        const response = await request.json();
        setMarcas(response);
    }

    async function buscarCategorias() {
        const request = await fetch('http://localhost:3000/categorias');
        const response = await request.json();
        setCategorias(response);
    }

    async function buscarGeneros() {
        const request = await fetch('http://localhost:3000/genero');
        const response = await request.json();
        setGeneros(response);
    }

    async function buscarEstados() {
        const request = await fetch('http://localhost:3000/estado');
        const response = await request.json();
        setEstados(response);
    }

    async function buscarProdutos() {
        const request = await fetch('http://localhost:3000/produtos');
        const response = await request.json();
        setProdutos(response);
    }

    function ordenaProdutos(value) {
        
    }

    useEffect(() => {
        buscarMarcas();
        buscarCategorias();
        buscarGeneros();
        buscarEstados();
        buscarProdutos();
    }, []);

    useEffect(() => {
        if (filtros.length > 0) {
            setProdutosFiltrados(produtos.filter(p => filtros.includes(p.marca.nome) || filtros.includes(p.categoria.nome) || filtros.includes(p.genero) || filtros.includes(p.estado)))
            return;
        }
        setProdutosFiltrados(produtos);        
    }, [filtros, produtos]);

    useEffect(() =>{
        if(tipoOrdenacao == "opcao1"){
            setProdutosFiltrados([...produtosFiltrados.sort(function(produto1, produto2) {
                return produto2.avaliacoes.media - produto1.avaliacoes.media;
            })])
            console.log(produtosFiltrados);

        } else if(tipoOrdenacao == "opcao2"){
            produtosFiltrados.forEach(produto => {
                if(produto.desconto) {
                    produto.valorFinal = produto.preco - (produto.preco * produto.desconto / 100);
                } else {
                    produto.valorFinal = produto.preco;
                }            
            });
    
            setProdutosFiltrados([...produtosFiltrados.sort(function(produto1, produto2) {
                return produto1.valorFinal - produto2.valorFinal;
            })])
            console.log(produtosFiltrados);
        }
    }, [tipoOrdenacao, produtosFiltrados]);

    return (
        <ProdutosContainer>
            <div className="ordenacao">
                <h6>Resultados para "Tênis" <p>= {produtosFiltrados.length} produtos</p>
                </h6>
                <div className="ordenar">
                    <label htmlFor="">Ordenar por:</label>
                    <select name="opcoes" id="opcoes" onChange={(event) => setTipoOrdenacao(event.target.value)}>                        
                        <option value="opcao1">mais relevantes</option>
                        <option value="opcao2">mais baratos</option>
                    </select>
                </div>

            </div>
            <div className="filtros">
                <h6>Filtrar por</h6>
                <hr />
                <h6>Marcas</h6>
                <ul>
                    {

                        marcas && marcas.map(marca => (
                            <li key={`m${marca.id}`}>
                                <label htmlFor={`m${marca.id}`}>
                                    <input
                                        type="checkbox"
                                        id={`m${marca.id}`}
                                        onClick={() => selecionarFiltro(marca.nome)}
                                    />
                                    {marca.nome}
                                </label>
                            </li>
                        ))
                    }
                </ul>

                <h6>Categorias</h6>
                <ul>
                    {
                        categorias && categorias.map(categoria => (
                            <li key={`c${categoria.id}`}>
                                <label htmlFor={`c${categoria.id}`}>
                                    <input
                                        type="checkbox"
                                        id={`c${categoria.id}`}
                                        onClick={() => selecionarFiltro(categoria.nome)}
                                    />
                                    {categoria.nome}
                                </label>
                            </li>
                        ))
                    }
                </ul>

                <h6>Gênero</h6>
                <ul>
                    {
                        generos && generos.map(genero => (
                            <li key={`g${genero.id}`}>
                                <label htmlFor={`g${genero.id}`}>
                                    <input
                                        type="checkbox"
                                        id={`g${genero.id}`}
                                        onClick={() => selecionarFiltro(genero.nome)}
                                    />
                                    {genero.nome}
                                </label>
                            </li>
                        ))
                    }
                </ul>

                <h6>Estado</h6>
                <ul>
                    {
                        estados && estados.map(estado => (
                            <li key={`e${estado.id}`}>
                                <label htmlFor={`e${estado.id}`}>
                                    <input
                                        type="checkbox"
                                        id={`e${estado.id}`}
                                        name="estado"
                                        onClick={() => selecionarFiltro(estado.nome)}
                                    />
                                    {estado.nome}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="produtos">
                {
                    produtosFiltrados && produtosFiltrados.map(produto => (
                        <Produto
                            key={`p${produto.id}`}
                            nome={produto.nome}
                            categoria={produto.categoria.nome}
                            imagem={produto.imagem}
                            preco={produto.preco}
                            desconto={produto.desconto} />
                    ))
                }
            </div>
        </ProdutosContainer>
    );
}

export default Produtos;