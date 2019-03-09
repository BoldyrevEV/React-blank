import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Heading from './Heading'
import Marketing from './Marketing'
import Footer from './Footer'
import css from '../style/style.css'

const app = document.getElementById('app');

ReactDOM.render (
                <div className = 'container'>
                    <Header/>
                    <hr/>
                    <Heading 
                        mainText={'Heading'}
                        text={
                            <p className='lead'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed <br/>
                                facilis ea placeat vero eos, facere excepturi quidem consequatur <br/> 
                                aut! Sapiente esse eligendi laudantium mollitia culpa quod.
                            </p>
                        }
                         />
                    <Marketing/>      
                    <Footer/>
                </div>
                , app); 