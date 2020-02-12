import React, { useState } from 'react'

const AdicionarMovimentacao = props => {
    
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const onChangeDescricao = evt => {
        setDescricao(evt.target.value)
    }
    const onChangeValor = evt => {
        setValor(evt.target.value)
}
    const salvarMovimentacao = async() => {
        console.log(valor, descricao)
    }
    return(
        <tr>
            <td>
                <input type='text' value={descricao} onChange={onChangeDescricao}/>
            </td>
            <td>
                <input type='text' value={valor} onChange={onChangeValor}/> 
                <button className='btn btn-success' onClick={salvarMovimentacao}>+</button>                 
            </td>
    </tr>
    )
}

export default AdicionarMovimentacao