import Search from './components/Search'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Search defaultData={'Barranquilla'}/>
      <Footer />
    </div>
  )
}

export default App
