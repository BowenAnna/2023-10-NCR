import React from 'react'

export default function ConditionalRendering(props){

    const IsEven = number => {
        if (number % 2 === 0) {
          return <h1> It is even </h1>
        } else {
          return <h1>It is odd</h1>
        }
      }

      const IsEvenTwo = props => {
        let result
      
        if (props.number % 2 === 0) {
          result = <h1> It is even </h1>
        } else {
          result = <h1>It is odd</h1>
        }
        return result
      }

      const IsEvenTernary= props => {
        return props.number % 2 === 0 ? <h1> it is even </h1> : <h1> it is odd </h1>
      }

      const IsEvenTernVar = props => {
        const condition = props.number % 2 === 0
      
        const ifTrue = () => <h1> it is even </h1>
      
        const ifFalse = () => <h1> it is odd </h1>
      
        return condition ? ifTrue() : ifFalse()
      }

      return(
        <div>Conditional Rendering
            {(IsEven(props.number))}
            {(IsEven(13))}
            {(IsEvenTwo(12))}
            {(IsEvenTernary(112456))}
            {(IsEvenTernary(props.number))}
            {(IsEvenTernVar(props.number))}
            
        </div>
      )
}
