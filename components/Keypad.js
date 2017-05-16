import React from 'react'

function Keypad() {
  function input() {
    console.log('Entering password...')
  }

  return (
    <div>
      <input type="password" onKeyUp={input}/>
    </div>
  )
}
//
// class Keypad extends React.Component {
//   constructor() {
//     super()
//   }
//
//   input() {
//     console.log('Entering password...')
//   }
//
//   render() {
//     return (
//       <div>
//         <input type="password" onKeyUp={this.input}/>
//       </div>
//     )
//   }
// }

export default Keypad
