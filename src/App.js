import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked.")}} id="bar" />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Dog />
      <Dog />
      <Dog />
    </div>
  )
}

const Dog = () => {
  return <div>Bow!</div>
}

export default App;
