import React from 'react'
import SignUpTiday from './SignUpTiday'

export default class Heading extends React.Component {
    render(){
        return <div className='jumbotron'>
                    <h1>{this.props.mainText}</h1>
                    {this.props.text}  
                    <SignUpTiday/>
               </div>;
    }
}