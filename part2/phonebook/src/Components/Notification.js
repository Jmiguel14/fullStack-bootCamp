import React from 'react'

export const Notification = ({message, color}) => {
    if(message===null) return null

    return (
        <div style={{color: color}}>
            {message}
        </div>
    )
}
