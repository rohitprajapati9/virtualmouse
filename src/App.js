import React from 'react';




import Navbar from './components/Navbar'
import About from './components/About'
import Darkmode from './components/Darkmode'







function App(){
 
    return (

      <>


<div className="App">
      <header className="App-header"/>
        <Darkmode />
     
        <div className="sections">
       <Navbar/>
       <About/>
    



       
     </div>
      </div>


      </>


    );
  }

  export default App;

