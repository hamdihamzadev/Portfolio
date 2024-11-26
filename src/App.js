import myimg from './assets/store.png'

function App() {
  return (
    <div className="App">
      <header className="bg-black text-white">
        <div  className="container mx-auto px-4" >
          <div className="columns-2 py-3" >
            <h1 className="text-2xl font-bold" >Mon Portfolio Web</h1>
            <h1 className="text-right text-2xl font-bold" >Hamdi hamza</h1>
          </div>
        </div>
      </header>

      {/* list projects */}
      <div className="container mx-auto px-4 mt-8" > 
        <p className="text-xl font-bold" >Mes Projets</p>
        <div>
          <div  >

            <img src={myimg}  className="w-32" ></img>
   
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
