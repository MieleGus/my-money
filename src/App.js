import React from 'react'
import useGet from './useGet'
import usePost from './usePost'
import axios from 'axios'

const url = 'https://mymoney-gus.firebaseio.com/movimentacoes/2020-02.json'


function App() {
  const data = useGet(url)
  const [postData, post] = usePost(url)

  const saveNew = () => {
    post({valor: 10, descricao: 'ola'})
  }

  return (
    <div> 
      <h1>My Money</h1>
      { JSON.stringify(data) }
      { data.loading &&  <p>Loading...</p> }
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
    </div>
  )
}

export default App
