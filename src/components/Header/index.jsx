import React from "react";
import logo from '../../assets/logo-dio.svg'


import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

import {Button} from '../Button'
import { useNavigate } from "react-router-dom";

const Header = ({autenticado}) => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }
    const handleClickSignUp = () => {
        navigate('/sign-up')
    }

    
    return (
        <Wrapper >
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" height='30px'/>
                    {autenticado ? (<>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}
                </Row>
                <Row>
                    {autenticado ? (<>
                        <UserPicture src="https://avatars.githubusercontent.com/u/106363360?v=4"/>
                    </>):
                    (<>
                        <MenuRight href="/" variant="menuright">Home</MenuRight>
                        <Button tittle="Entrar" onClick={handleClickSignIn} />
                        <Button tittle="Cadastrar" onClick={handleClickSignUp}/>
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };