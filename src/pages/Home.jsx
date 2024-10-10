import React from 'react'
import { Container, Button, Table, ButtonGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import ModalCadastrar from '../components/ModalCadastrar';

const url = "http://localhost:5000/usuarios"

const Home = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [modalCadastrar, setModalCadastrar] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
          const res = await fetch(url)
          const users = await res.json()
          setUsuarios(users)
      } catch(error) {
          console.log(error.message)
      }
    }
    fetchData();
  }, []);

  return (
    <div>
        <Container>
          <h1>Lista de Algo</h1>
          <div className='d-grid col-2 gap-2'>
            <Button variant='primary' size='lg' className='mb-3 d-inline-flex justify-content-center' onClick={() => setModalCadastrar(true)}>
              <span className='material-symbols-outlined flex' style={{ fontSize: "30px", paddingRight: "8px" }}>add_circle</span>
              Cadastrar
            </Button>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Tipo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.tipo}</td>
                  <td>
                  <ButtonGroup size='sm'>
                    <Button variant="info">Editar</Button>

                    <Button variant="danger" onClick={async () => {
                      const res = await fetch(url + `/${usuario.id}`, {
                        method: 'DELETE',
                        headers: {"Content-Type": "application/json"}});
                        const funcionarioRemovido = await res.json()
                        //alert(`Usuário ${funcionarioRemovido.nome} foi excluído.`)
                    }}>Excluir</Button>

                  </ButtonGroup>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </Table>

          <ModalCadastrar show={modalCadastrar} onHide={() => setModalCadastrar(false)}/>

        </Container>
    </div>
  )
}

export default Home;