import React from 'react'

export const StatisticLine = (props) => <p>{props.text} {typeof props.value === 'function' ? props.value() : props.value}</p>
