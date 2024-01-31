import { Header } from "../../components/Header"
import {Container,Column,Tittle,TittleHighlight} from './styles'

import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
          <Column flex={3}>
            <Tittle>Feed</Tittle>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Column>
          <Column flex={1}>
            <TittleHighlight># RANKING TOP 5 DA SEMANA</TittleHighlight>
            <UserInfo name="Favaro" image="https://avatars.githubusercontent.com/u/106363360?v=4" percentual={100} />
            <UserInfo name="Favaro" image="https://avatars.githubusercontent.com/u/106363360?v=4" percentual={80} />
            <UserInfo name="Favaro" image="https://avatars.githubusercontent.com/u/106363360?v=4" percentual={70} />
            <UserInfo name="Favaro" image="https://avatars.githubusercontent.com/u/106363360?v=4" percentual={68} />
            <UserInfo name="Favaro" image="https://avatars.githubusercontent.com/u/106363360?v=4" percentual={40} />
          </Column>
        </Container>
    </>)
}

export { Feed }