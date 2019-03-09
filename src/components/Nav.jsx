import React from 'react'

export default class Nav extends React.Component {
    
    render () {
        return (
                <ul className='nav'>  
                    <li className='active'><a href="#">Home</a></li>
                    <li className='active'><a href="#">About</a></li>
                    <li className='active'><a href="#">Contact</a></li>                    
                </ul>                
        )        
    }
}