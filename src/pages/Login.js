import React, { useEffect } from 'react'
import { usePost } from '../utils/rest'

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwvVUdjlHJoVPk9oBkv2zl9ETaAwgXSgc'



const Login = () => {
    const [postData, signin] = usePost(url)
    useEffect(() => {
        if(Object.keys(postData.data).length > 0){
            localStorage.setItem('token', postData.data.idToken )
        }
    }, [postData])
    const login = async() => {
        const token = signin({
            email: 'gustavohenriquemiele@live.com',
            password: 'abc1123',
            returnSecureToken: true
        })
        console.log('token >>>>>', token)
    }
    return(
        <div>
            <h1>Login</h1>
            {JSON.stringify(postData)}
            <button onClick={login}>Login</button>
        </div>
    )
}
export default Login