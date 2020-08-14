import React, { useState } from 'react';
import Header from './components/shared/Header/Header'
import Main from './components/Main/Main'


function App() {

  const [currentUser, setCurrentUser] = useState(null)


  return (
    <div className="App">
      <Header />
      <Main setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default App;
