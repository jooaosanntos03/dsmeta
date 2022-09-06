import Header from "./components/Header"
import NotificationButton from "./components/NotificationButton"
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <>
      <Header/>
      <main>
        <section id="dsmeta-vendas">
            <div className="dsmeta-card-container">
              <SalesCard/>
            </div>
        </section>
      </main>
      {/* <NotificationButton/> */}
    </>
  )
}

export default App
