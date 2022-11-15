
import './App.css';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home/Home';
import Portfolio from './component/portfolio/Portfolio.jsx';
import About from './component/About/About.jsx';
import Contact from "./component/contact/Contact.jsx"
import LayOut from './component/LayOut/LayOut.jsx';

const routers = createBrowserRouter([
  {path:"/",element:<LayOut/>,children:[
    {index:true, element:<Home/>},
    {path:"About",element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"Portfolio",element:<Portfolio/>},

  ]
}
  
])


function App() {
  return <>
  
  <RouterProvider router={routers}></RouterProvider>
 


  </>
}

export default App;
