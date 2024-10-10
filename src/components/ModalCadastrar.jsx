import React from 'react'
import { useState } from 'react';
import { Button, Modal, FloatingLabel, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:5000/usuarios"

const ModalCadastrar = (props) => {


    const [tipo, setTipo] = useState("Administrador");
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    

    const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
    const [alertaMensagem, setAlertaMensagem] = useState();

    const handleCadastrar = async () => {
        
        if (!nome == '') {
            if (!email == '') {
                if (!senha == '') {
                    console.log("Logado")
                    const user = {nome, email, senha, tipo}
                    const res = await fetch(url, {
                        method: 'POST',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(user)
                    })
                    alert("Usuário cadastrado com sucesso")
                    setNome("")
                    setEmail("")
                    setSenha("")
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
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Cadastrar Funcionário
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId='formGridTipo' className='mb-3'>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Select value={tipo} onChange={(e) => {setTipo(e.target.value)}}>
                            <option>Administrador</option>
                            <option>Gerente</option>
                            <option>Funcionário</option>
                        </Form.Select>
                    </Form.Group>

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

                    <Alert key="danger" variant="danger" className={alertaClass}>{alertaMensagem}</Alert>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleCadastrar()}>Cadastrar</Button>
                    <Button variant='danger' onClick={props.onHide}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalCadastrar;