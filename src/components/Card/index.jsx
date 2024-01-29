import React from 'react'
import {CardContainer,
        Content,
        HasInfo,
        ImageBackground,
        PostInfo,
        UserInfo,
        UserPicture
} from './styles'

import { FiThumbsUp } from 'react-icons/fi'


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://www.shutterstock.com/image-vector/abstract-digital-technology-futuristic-circuit-600nw-2273490275.jpg"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/106363360?v=4"/>
                <div>
                    <h4>Favaro</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React JS</h4>
                <p>Projeto feito no curso de html e css na Formação Front React...<strong>Saiba Mais</strong> </p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JS #REACT</h4>
                <p>
                    <FiThumbsUp /> 18
                </p>
            </HasInfo>
        </Content>

    </CardContainer>
  )
}

export { Card }
