import { Container, Nav } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const url = "http://localhost:5000/usuarios"

const Cadastro = () => {
    const navigate = useNavigate()

    //VARIÁVEIS PARA O ALERTA 
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confirmaSenha, setConfirmaSenha] = useState();
    
    //VARIÁVEIS PARA O ALERTA 
    const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
    const [alertaMensagem, setAlertaMensagem] = useState();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!nome == '') {
            if (!email == '') {
                if (!senha == '') {
                    if (!confirmaSenha == '') {
                        if (senha === confirmaSenha) {
                            console.log("Logado")
                            const user = {nome, email, senha}
                            const res = await fetch(url, {
                                method: 'POST',
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify(user)
                            })
                            alert("Usuário cadastrado com sucesso")
                            setNome("")
                            setEmail("")
                            setSenha("")
                            setConfirmaSenha("")
                            navigate("/login")
                        } else {
                            setAlertaClass("mb-3")
                            setAlertaMensagem("Os campos de Senha e Confirme a senha não são iguais")
                        }
                    } else {
                        setAlertaClass("mb-3")
                        setAlertaMensagem("O campo Confirme a senha não pode ser vazio")
                    }
                } else {
                    setAlertaClass("mb-3")
                    setAlertaMensagem("O campo Senha não pode ser vazio")
                }
            } else {
                setAlertaClass("mb-3")
                setAlertaMensagem("O campo Email não pode ser vazio")
            }
        } else {
            setAlertaClass("mb-3")
            setAlertaMensagem("O campo Nome não pode ser vazio")
        }
    }
    
    return (
        <Container style={{display: 'flex', flexDirection: "column", justifyContent: "center", height: "80vh"}}>
            <span class="material-symbols-outlined" style={{ fontSize: "100px" }}>person_add</span>
            <form onSubmit={handleSubmit}>
                {/* Caixinha do Nome */}
                <FloatingLabel controlId="floatingInputName" label="Nome" className="mb-3">
                    <Form.Control type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => { setNome(e.target.value) }} />
                </FloatingLabel>

                {/* Caixinha do Email */}
                <FloatingLabel controlId="floatingInputEmail" label="Email" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </FloatingLabel>

                {/* Caixinha da Senha */}
                <FloatingLabel controlId="floatingPassword" label="Senha" className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
                </FloatingLabel>

                {/* Caixinha de Confirmação da Senha */}
                <FloatingLabel controlId="floatingConfirmPassword" label="Confirme a senha" className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={confirmaSenha} onChange={(e) => { setConfirmaSenha(e.target.value) }} />
                </FloatingLabel>
                
                <Alert key="danger" variant="danger" className={alertaClass}>{alertaMensagem}</Alert>
                <Button type='submit' variant="primary">Cadastrar</Button>
            </form>
            <p style={{display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px"}}>Já tem Cadastro?<Nav.Link href='/login'>Login</Nav.Link></p>
        </Container>
    )
}

export default Cadastro;