import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'
import { Redirect , useHistory} from 'react-router-dom'
export default function Home() {
    const [username, setUsername] = useState();
    const [password,setPassword] = useState();
    const [isLogin,setIslogin] = useState(false);
    const [cookies, setCookie] = useCookies(['name']);
    const router = useRouter();
    const onsubmit = (e) =>{
        e.preventDefault();
        console.log(username,password);
        if(cookies.user===username && cookies.pass===password){
            setIslogin(true)
        }
        console.log(isLogin)
    }
    useEffect (() =>{
        setCookie('user', 'admin');
        setCookie('pass','admin');
        console.log(cookies)
        if(isLogin){
            router.push('./dashboard')
        }
       
    },[isLogin])
    
    return (
        <div className={styles.container}>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                {/* <img src="https://vercel.wpengine.com/wp-content/uploads/2020/05/cover5.jpg" class="shadow-small"/> */}
                <form className={styles.form} onSubmit={onsubmit}>
                    <div className="form-group">    
                        <div className={styles.input}>
                            <input value={username} name="username" onChange={e => setUsername(e.target.value)} type="text"className="form-control"  id="username"/>
                        </div>
                        <div className={styles.input}>
                            <input value={password} name="password" onChange={e => setPassword(e.target.value)} type="password"className="form-control"  id="password"/>
                        </div>
                        <div className={styles.button}>
                            <button  type="submit" className="btn btn-outline-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}
