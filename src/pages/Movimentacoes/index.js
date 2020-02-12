import React from 'react'
import { Redirect} from 'react-router-dom'
import { useState } from 'react'
import { useMovimentacaoApi} from '../../api'
import InfoMes from './InfoMes'
import AdicionarMovimentacao from './AdicionarMovimentacao'

const Movimentacoes = ({ match }) => {
    
    const { movimentacoes, salvarNovaMovimentacao , removerMovimentacao } = useMovimentacaoApi()

    //gestao form



    const salvarMovimentacao = async()  => {
        // if (!isNaN(valor) && valor.search(/^[-]?\d+(\.)?\d+?$/) >= 0) {
        //     await salvarNovaMovimentacao({
        //         descricao,
        //         valor: parseFloat(valor)
        //     })
        //     setDescricao('')
        //     setValor(0)
        //     movimentacoes.refetch()
        //     await sleep(5000)
        //   //  infoMes.refetch()       
        // }
    }
    const sleep = time => new Promise(resolve => setTimeout(resolve, time))
    const removerMovimentacaoClick = async(id) => {
        await removerMovimentacao(`movimentacoes/${match.params.data}/${id}`)
        movimentacoes.refetch()
        await sleep(5000)
        //infoMes.refetch()
    }
   
   if(movimentacoes.error === 'Permission denied'){
       return <Redirect to='/login'></Redirect>
   }

    return(
        <div className='container'>
            <h1>Movimentações</h1>
            <InfoMes data={match.params.data} />
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    { movimentacoes.data &&
                        Object.keys(movimentacoes.data)
                        .map(movimentacao => {
                            return (
                                <tr key={movimentacao}>
                                    <td>{movimentacoes.data[movimentacao].descricao}</td>
                                    <td className='text-right'>
                                        {movimentacoes.data[movimentacao].valor}{' '}
                                        <button className='btn btn-danger' onClick={() => removerMovimentacaoClick(movimentacao)}>-</button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                   <AdicionarMovimentacao />
                </tbody>
            </table>

        </div>
    ) 
}

export default Movimentacoes