import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import button from "./images/icon-dice.svg"
import separator from './images/pattern-divider-desktop.svg'

const baseUrl = "https://sv443.net/jokeapi/v2/joke/Programming?type=single"

function App() {
  const [id, setId] = useState("")
  const [joke, setJoke] = useState("")


  const getAdvice = () => {
    const request = axios.get(baseUrl)
    console.log('request', request);
    return request.then(response => response.data)
  }
  

  
  const jokeAPI = async () =>{
    let arrayOfJokes = []
    try{
      const data = await axios.get(baseUrl)
      console.log(data);
      arrayOfJokes = data.data
    } catch (error){
      console.log(error);
    }

    try {
      setId(arrayOfJokes.id)
      setJoke(arrayOfJokes.joke)
      console.log('test', arrayOfJokes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getAdvice()
    //   .then(initialAdvice => {
    //     setId(initialAdvice.id)
    //     setJoke(initialAdvice.joke)
    //   })
    jokeAPI()
  }, [])

  // // axiosApi();
  // // console.log(advice);
  // getAdvice()
  // console.log(advice, id);

  return (
    <div className="App">
      <div className="container">
        <h3>Joke #{id}</h3>
        <p>"{joke}"</p>
        <div className="separator">
          <img src={separator} alt="" />
        </div>
          <div className="button-container">
            <button onClick={jokeAPI}><img src={button} alt="button" /></button>
          </div>
      </div>
    </div>
  );
}

export default App;


  
// const rootElement = document.getElementById("root");
  
// // Create a functional component
// const App = () => {
//     // Declare a state variable
//     const [Joke, setJoke] = React.useState("");
  
//     const fetchApi = () => {
//         // Fetching data from the API
//             fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
//             .then((res) => res.json())
//             .then((data) => setJoke(data.joke));
//       };
  
//     return (
//         // Return the Button Component with a conditional statement
//         <div>{Joke === "" ? <Button callApi={fetchApi} /> : 
// <p>{Joke}</p>
// }</div>
//       );
// }
  
// // Rendering the App Component.
// ReactDOM.render(
//     <App />,
//   rootElement
// );
// export default App