import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css'

function App() {
 

  return (
    <>
    <Header />
    <Content color='blue' text='This is my first React Application!'/>
    <Content color='red' text='Wish me luck...'/>
    <Content color='purple' text="...although I don't think I need it"/>
    <Content color='orange' text='because,'/>
    <Content color='green' text="I've got this, I know!"/>
    <Footer text='Amber Roberts' style={{fontStyle: 'Italic', color: 'hotpink'}} />
      
    </>
  )
}

export default App
