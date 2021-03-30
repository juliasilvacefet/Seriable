import {Cabecalho,Titulo,Entrada} from "./styles";
import {Imagem,Botao} from "../../styles"

const Header = () => {

    return (
        <>
            <link href= "https://fonts.googleapis.com/css2?family=Rum+Raisin&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
            <Cabecalho>
                <Titulo href="/">Seriable</Titulo>
                <nav>
                    <div className="flex">
                        <Entrada type="text" name="pesquisar" required placeholder="Pesquisar"/>
                        <Botao type="submit"><Imagem src="/img/pesquisar.png" alt="icone de lupa" size="sm"/></Botao>
                    </div>
                </nav>
        </Cabecalho>
        </>
    );
};

export default Header;