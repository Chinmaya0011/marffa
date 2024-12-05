import React from 'react'
import HomePage from './page/HomePage'
import { AppContextProvider } from './context/AppContexts'
import Approutes from './routes/Approutes'
const App = () => {
  return (
    <div>
      <AppContextProvider>
     <Approutes/>
      </AppContextProvider>
    </div>
  )
}

export default App