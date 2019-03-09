import React from 'react'
import Nav from './Nav'

export default class Headers extends React.Component {
    
    render () {
        return (
                <div className = 'header'>
                    <p className="text-muted">Project name</p>
                    <Nav/>                    
                </div>
        )        
    }
}