import React from 'react'

export default class Subheading extends React.Component {   
    render(){
        let marketing = this.props.news.map((news)=>{
            return <div className='marketing'>
                <h3>{news.head}</h3>
                <p>{news.value}</p>
            </div>
        })

        return <div>
                {marketing}
               </div>;
    }
}