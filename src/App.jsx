import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Models from './components/Models'
import Cart from './components/Cart'
import ModelCard from './components/ModelCard'
import Footer from './components/Footer'
import Body from './components/Body'
import { Suspense, useState } from "react";
import { ToastContainer } from 'react-toastify'

const getModels=async()=>{

  const res = await fetch("/assets/models.json")
  return res.json();
}

const modelPromise=getModels();
function App() {


   const [activeTab,setActiveTab]=useState("modals")
    const[carts,setCarts]=useState([])
    console.log(activeTab )
     console.log(carts)
  return (
    <>
      <NavBar />
      <Banner />

      <div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" 
  name="my_tabs_1" 
  className="tab rounded-full w-40" 
  aria-label="Modals" 
  onClick={()=>setActiveTab("modals")} defaultChecked />

  <input type="radio"
   name="my_tabs_1" 
   className="tab rounded-full w-40"  
  aria-label={`Cart (${carts.length})`}
   
   onClick={()=>setActiveTab("cart")}/>
  
</div>
<Suspense>

{activeTab==="modals" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}
{activeTab==="cart" &&<Cart  carts={carts} setCarts={setCarts}></Cart>}
</Suspense>

      <Body />
      <ToastContainer/>
      <Footer />
    </>
  )
}

export default App