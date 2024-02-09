import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarP from "./Components/NavbarP";
import Sidebar from './Components/Sidebar';
import Accordions from './Pages/Accordions';
import Avatars from './Pages/Avatars';
import Buttons from './Pages/Buttons';
import Cards from './Pages/Cards';
import Checkbox from './Pages/Checkbox';
import Chips from './Pages/Chips';
import Dividers from './Pages/Dividers';
import Images from './Pages/Images';
import Inputs from './Pages/Inputs';
import Modals from './Pages/Modals';
import Links from './Pages/Links';
import Selects from './Pages/Selects';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <NavbarP 
          link1="Contact" 
          link2="Blog"
        />
        <div className="w-full h-full bg-zinc-900 object-cover flex ">
          <Sidebar/>
            <Routes>
              <Route path="/accordions" element={<Accordions />} />
              <Route path="/avatars" element={<Avatars />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/checkbox" element={<Checkbox />} />
              <Route path="/chips" element={<Chips />} />
              <Route path="/dividers" element={<Dividers />} />
              <Route path="/images" element={<Images />} />
              <Route path="/inputs" element={<Inputs />} />
              <Route path="/links" element={<Links />} />
              <Route path="/modals" element={<Modals />} />
              <Route path="/selects" element={<Selects />} />
            </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}
