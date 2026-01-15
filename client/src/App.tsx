import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Generate from "./pages/generate"; // Check if it's 'Generate' or 'generate'
import MyGeneration from "./pages/MyGeneration";
import YtPreview from "./pages/YtPreview";
import Login from "./components/login"; 

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                
                {/* Both routes for Generate page */}
                <Route path="/generate" element={<Generate />} />
                <Route path="/generate/:id" element={<Generate />} />
                
                <Route path="/my-generation" element={<MyGeneration />} />
                <Route path="/preview" element={<YtPreview />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
}