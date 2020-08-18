import React, { useState, useEffect } from 'react';
import Header from './components/shared/Header/Header'
import Main from './screens/Main'
import Footer from './components/shared/Footer/Footer'
import { verifyUser } from './services/auth';


function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    handleVerify()
  }, [])
  
  const handleVerify = async () => {
    const userData = await verifyUser()
    setCurrentUser(userData)
  }

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Main
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} />
      <Footer />
    </div>
  )
}

export default App;
