import React, {Component} from 'react'

const messages = [
    {id:1,title:'mse01',content:'abababbbaba'},
    {id:2,title:'mse02',content:'bnbnbbnbnbnb'},
];


export default function MessageDetail(props) {

    const {id} = props.match.params;
    console.log(props.match.params);
    debugger;
    const message = messages.find((m) => m.id == id*1); //匹配第一个未true的数组元素

        return (
            <ul>
                <li>ID:{message.id}</li>
                <li>TITLE:{message.title} </li>
                <li>CONTENT:{message.content} </li>
            </ul>
        )

}
