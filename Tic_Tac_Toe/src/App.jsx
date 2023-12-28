import './App.css'
import Grid from './Components/Grid/Grid'

function App() {

  return (
    <>
      <h1 className=" text-7xl font-black text-gray-800  text-center underline underline-offset-8">TIC TAC TOE</h1>
      <p className=" text-m text-center text-lg text-gray-600 mt-5 mb-2">Enjoy this classic 2-player game completely hardcoded <br />using React and Tailwind CSS.</p>
      <Grid numberOfCards={9}/>
    </>
  )
}

export default App
