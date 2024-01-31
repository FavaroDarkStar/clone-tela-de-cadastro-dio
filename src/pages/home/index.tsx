import { useNavigate } from 'react-router-dom'

import {Container,TextContent,Tittle,TittleHighlight} from './styles'
import banner from '../../assets/banner.png'

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

const Home = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header/>
        <Container>
            <div>
                <Tittle>
                    <TittleHighlight>
                        Implemente
                        <br/>
                    </TittleHighlight>
                    o seu futuro global agora!
                </Tittle>

                <TextContent>
                    Domine as tecnologias usadas pelas empresas mais inovadoras do mundo
                    e encare seu novo desafio profissional, evoluindo em comunidade com 
                    os melhores experts.
                </TextContent>
                <Button tittle="Começar agora" variant="secondary" onClick={handleClickSignIn}/>

            </div>
            <div>
                <img src={banner} alt="Imagem principal"/> 
            </div>
        </Container>
    </>)
}

export { Home }