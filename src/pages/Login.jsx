import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    //VARIÁVEIS PARA O ALERTA 
    const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
    const [alertaMensagem, setAlertaMensagem] = useState();

    return (
        <Container style={{display: 'flex', flexDirection: "column", justifyContent: "center", height: "80vh"}}>
            <span class="material-symbols-outlined" style={{ fontSize: "100px" }}>login</span>
            <form>
                {/* Caixinha do Email */}
                <FloatingLabel controlId="floatingInputEmail" label="Email" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </FloatingLabel>

                {/* Caixinha da Senha */}
                <FloatingLabel controlId="floatingPassword" label="Senha" className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
                </FloatingLabel>

                { }
                <Alert key="danger" variant="danger" className={alertaClass}>{alertaMensagem}</Alert>
                <Button variant="primary">Cadastrar</Button>
            </form>
            <p style={{display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px"}}>Não tem Cadastro?<Nav.Link href='/cadastro'>Cadastrar-se</Nav.Link></p>
        </Container>
  )
}

export default Login;