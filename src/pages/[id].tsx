import { useRouter } from "next/router"
import { Component, useState, useEffect } from "react";
import { Header, Footer, Loading } from "../components";
import { Botao, Imagem, Pagina } from "../styles";
import { apiSerie } from "../api/data"
import { ISerie } from "../interfaces/Serie.interface";
import { toast } from "react-toastify";

export default function Id() {


    const [isLoading, setIsLoading] = useState(true)
    const [series, setSeries] = useState<ISerie[]>([])
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiSerie.show(router.query.id as string);
                if (response.data.length === 0) {
                    toast.error("Não existe série neste genero!");
                }
                setSeries(response.data);
            } catch (error) {
                toast.error("Ocorreu um erro na chamada do servidor!");
            } finally {
                setIsLoading(false);
            }
        };
        if (router.query.id) {
            fetchData();
        }
    }, [router.query.id]);

    return (
        <>
            {isLoading ? <Loading /> : <>
                <Header />

                <section >
                    <Pagina>Séries</Pagina>
                    <div className="section">
                        <div className="menu center row">
                            {
                                series && series.map((item) => (
                                    <div className="texto-central col-12">
                                        <h3>{item.nome}</h3>
                                        <p>{item.descricao}</p>
                                        <div className="align-esq">Numero de Temporadas: {item.temporadas} </div>
                                        <div className="align-esq"> Disponivel: {item.plataforma} </div>
                                        <div className="align-esq"> Elenco: {item.elenco} </div>
                                    </div>
                                ))
                            }

                        </div>
                        <Botao type="button">
                            <a href="generos"><Imagem src="/img/voltar.png" alt="icone de lupa" size="md" /></a>
                        </Botao>
                    </div>
                </section>

                <Footer />
            </>}
        </>
    )
}
