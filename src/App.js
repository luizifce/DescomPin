import { Homepage } from "./pages/Home/HomePage";
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderPartial />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/minhas-pastas"
                        element={<MinhasPastasPage />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
