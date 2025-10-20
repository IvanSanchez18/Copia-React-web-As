import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/header/header.jsx'
import CardNews from './components/CardNews/cardNews.jsx'
import CardNewsAlt from './components/CardNewsAlt/cardNewsAlt.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <main>
        <div class="container">
          <CardNews cols="col-6" image='https://img.asmedia.epimg.net/resizer/v2/J7T6HTF6WFCVHKJTVAE7LXJEYI.png?auth=76ab975e8b56b2ee73a2f3230cca1a6baa37f1352ade52af16e370edc7cf5991&width=240&height=135&smart=true' category = "sociedad" title = "Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”" footer = "AS ACTUALIDAD"/>

          <CardNewsAlt image='https://img.asmedia.epimg.net/resizer/v2/J7T6HTF6WFCVHKJTVAE7LXJEYI.png?auth=76ab975e8b56b2ee73a2f3230cca1a6baa37f1352ade52af16e370edc7cf5991&width=240&height=135&smart=true' category = "sociedad" title = "Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”" footer = "AS ACTUALIDAD"/>
        </div>
      </main>
    </>
  )
}

export default App
