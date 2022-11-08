import React from 'react'

function listaMotoristas({data}) {
  return (
    <div className='lista-motoristas'>
      <table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>E-mail</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>

          {data.map((el, key)=>(
              <tr key={key}>
              <td>{el.firstName + " " + el.lastName}</td>
              <td>{el.email}</td>
              <td>{el.phone}</td>
            </tr>
            )
          )}

        </tbody>
      </table>
        
    </div>
  )
}

export default listaMotoristas