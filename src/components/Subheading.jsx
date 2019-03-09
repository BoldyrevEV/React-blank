import React from 'react'

export default class Subheading extends React.Component {
    render(){
        return <div className='marketing'>
                    <h3>{this.props.head}</h3>
                    <p>{this.props.value}</p>
               </div>;
    }
}