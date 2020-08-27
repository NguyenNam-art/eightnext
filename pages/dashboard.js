import Head from 'next/head'
import Product from './Product'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import Link from 'next/link'
import { useRouter } from 'next/router'
function dashboard({ users }) {
    const elmUsers = users.map((user) => {
        return (
            <Product
            key={user.id}
            user = {user}
            ></Product>
        );
        });
        // useEffect (() =>{
        //     if(isLogin){
        //         router.push('./dashboard')
        //     }
        //     else
        //     router.replace('./')
        // },[isLogin])
        
    return (
    <div>
        <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">Logout</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Thu</th>
                        <th scope="col">Chi</th>
                        <th scope="col">Tổng</th>
                    </tr>
                </thead>
                <tbody>
                    {elmUsers}
                </tbody>
            </table>
        </main>
    </div>
      
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://5f3255faec833000161370c4.mockapi.io/api/products')
    const users = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        users,
      },
    }
  }
  
  export default dashboard