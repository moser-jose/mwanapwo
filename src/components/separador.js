import React from 'react'

const separador = ({icon, titulo, descricao}) => {
  return (
    <div className='separador'>
            {icon}
            <div>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
    </div>
  )
}

export default separador;