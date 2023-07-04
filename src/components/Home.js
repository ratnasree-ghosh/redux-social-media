

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../redux/actions/actionCreators';
import Loader from './Loader';
import Header from './Header';
import { Link } from "react-router-dom"

const Home = () => {
    const dispatch = useDispatch();
    const {loading, data, error} = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchData()); 
    },[dispatch])

    if(loading) {
        return <Loader/>;
    }

    if(error) {
        return <h2>{error}</h2>
    }  

    return (
        <>
        <Header/>
        <div className='container'>
            
            
                {
                    data.map((item,index)=>(
                    <Link to={"/item/:" + item.id} style={{color: "white", textDecoration: "none" }}>
                        <div key={index} className='data-box'>
                            <img src={`https://picsum.photos/200?random=${item.id}`} alt="random" />
                            <div className='test'>
                            <h3>User Id: {item.id}</h3>
                            <h4>Title: <span style={{fontSize: "18px", fontWeight: "200"}}>{item.title.slice(0, 20)} </span> <span style={{color: "rgb(218, 175, 58)", fontWeight:"200", fontSize: "18px"}}>...Read more</span> </h4>
                            <h4>Body: <span style={{fontSize: "18px", fontWeight: "200"}}>{item.body.slice(0, 55)}</span> <span style={{color: "rgb(218, 175, 58)", fontWeight:"200", fontSize: "18px"}}>...Read more</span></h4>
                            </div>
                           
                        </div>
                    </Link>
                    ))
                }
           
        </div>
        </>
    );
}

export default Home;