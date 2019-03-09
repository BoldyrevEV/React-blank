import React from 'react'
import Subheading from './Subheading'

export default class Marketing extends React.Component {
    render(){
        let news = [
            {
                head: 'Subheading',
                value:'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.'
            },               
            {
                head: 'Subheading',
                value:'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
            },
            {
                head: 'Subheading',
                value:'Maecenas sed diam eget risus varius blandit sit amet non magna.'
            },
            {
                head: 'Subheading',
                value:'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.'
            },               
            {
                head: 'Subheading',
                value:'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.'
            },
            {
                head: 'Subheading',
                value:'Maecenas sed diam eget risus varius blandit sit amet non magna.'
            },            
        ]

        return <Subheading news={news} />
              
    }
}