import React, { useRef } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Ativ01 from "./Ativ01";
import Ativ02 from "./Ativ02";
import Ativ03 from "./Ativ03";
import Ativ04 from "./Ativ04";
import Ativ05 from "./Ativ05";

export default function MinhasRotas() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ativ01" element={<Ativ01 />} />
            <Route path="/ativ02" element={<Ativ02 />} />
            <Route path="/ativ03" element={<Ativ03 />} />
            <Route path="/ativ04" element={<Ativ04 />} />
            <Route path="/ativ05" element={<Ativ05 />} />

        </Routes>
        </BrowserRouter>
    );
}