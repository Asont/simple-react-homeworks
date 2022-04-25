import React from 'react'
import s from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (

        <div className={s.grid}>
            <div><img className={s.im} src={props.avatar} alt="1"/></div>
            <div className={s.tr}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
