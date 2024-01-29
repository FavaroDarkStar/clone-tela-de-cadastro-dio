import React from 'react'
import { Header } from '../../components/Header'
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Container, Tittle, TextContent, Wrapper, Text} from './styles'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { api } from "../../services/api"
import { Column } from '../login/styles'

const schema = yup.object({
    name: yup.string().min(2,'No minimo 2 caracteres').required('Campo obrigatório'),
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
})


const SignUp = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',//quando é feita a validação
        defaultValues: {
            name: "",
            email: "",
            password: ""
          },
    });

    const onSubmit = async formData => {
        try{
            const getUserEmail = await api.get(`users?email=${formData.email}`);
            if(getUserEmail.data.length > 0) throw new Error("Email já cadastrado");
            const { data } = await api.post('users', {
                "name": formData.name,
                "email": formData.email,
                "password": formData.password
            })
            if(data){
                alert('Conta criada com sucesso!')
                navigate('/feed')
            }else{
                alert('Não foi possível realizar o cadastro, aguarde e tente novamente...')
            }
            }catch(e){
            alert(`Houve um erro, tente novamente!\n ${e}`)
        }
    }



  return (
    <>
    <Header/>
    <Container>
        <Column>
            <Tittle>
                A plataforma para você aprender com experts,
                dominar as principais tecnologias e entrar 
                mais rápido nas empresas mais desejadas.
            </Tittle>
        </Column>
        <Column>
            <Wrapper>
                <Tittle>
                    Começe agora grátis
                </Tittle>
                <TextContent>
                    Crie sua conta e make the change...
                </TextContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message}  control={control} placeholder="Nome completo" leftIcon={<MdPerson/>}/>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message}  control={control} placeholder="Password" type="password" leftIcon={<MdLock/>}/>
                            <Button tittle="Criar minha conta grátis" variant="secondary"  type="submit"/>
                </form>
                <TextContent>
                    Ao clicar em "criar minha conta grátis", 
                    declaro que aceito as Políticas de Privacidade 
                    e os Termos de Uso da DIO.
                </TextContent>
                <Text>
                    Já tenho conta. <strong><a href='/login'>Fazer Login</a></strong>
                </Text>
            </Wrapper>
        </Column>
    </Container>
    </>
  )
}

export { SignUp }