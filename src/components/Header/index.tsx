import {Cabecalho,Titulo,Entrada} from "./styles";
import { useRouter } from "next/router";
import {FaUserAlt} from "react-icons/fa"

const Header = () => {
    const router = useRouter();

    return (
        <>
            <link href= "https://fonts.googleapis.com/css2?family=Rum+Raisin&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
            <Cabecalho>
                <Titulo href="/">Seriable</Titulo>
                <nav>
                    <div>
                        <FaUserAlt size={40} onClick={() => router.push("https://seriableadmin.vercel.app/")} />
                    </div>
                </nav>
        </Cabecalho>
        </>
    );
};

export default Header;