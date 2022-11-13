import React from 'react'
import { MdDeleteForever } from "react-icons/md";

function listaMotoristas({data}) {
  return (
    <div className='lista-motoristas'>
      <table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>

          {data.map((el, key)=>(
              <tr key={key}>
              <td>{el.firstName + " " + el.lastName}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
              <td><span className='delete' title='Eliminar Motorista'><MdDeleteForever size={26}  /></span></td>
            </tr>
            )
          )}

        </tbody>
      </table>
        
    </div>
  )
}

export default listaMotoristas