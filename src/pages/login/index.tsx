import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import {Column,Container,CreateACTText,ForgetPSWText,Row,SubtittleLogin,Tittle,TittleLogin,Wrapper} from './styles'
import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { api } from "../../services/api"
import { IFormData } from "./types"

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
})



const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }} = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',//quando é feita a validação
        defaultValues: {
            email: "",
            password: ""
          },
    });

    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`/users?email=${formData.email}&password=${formData.password}`)
            data.length === 1 ? navigate('/feed') : alert('Email ou senha inválido')
        }catch(e){
            alert(`Houve um erro, tente novamente!\n ${e}`)
        }
    }

    return (<>
        <Header/>
        <Container>
            <Column>
                <Tittle>
                    A plataforma para você aprender com experts, dominar as principais tecnologias,
                    e entrar mais rápido nas empresas mais desejadas.
                </Tittle>
            </Column>
            <Column>
                <Wrapper>
                    <TittleLogin>Faça seu cadastro</TittleLogin>
                    <SubtittleLogin> Faça seu login e make the change.</SubtittleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message}  control={control} placeholder="Password" type="password" leftIcon={<MdLock/>}/>
                        <Button tittle="Entrar" variant="secondary"  type="submit"/>
                    </form>
                    <Row>
                        <ForgetPSWText>Esqueci minha senha</ForgetPSWText>
                        <CreateACTText><a href="/sign-up">Criar conta</a></CreateACTText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }