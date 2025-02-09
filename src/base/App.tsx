import { Route, Routes, BrowserRouter } from "react-router-dom";
import Jobs from "../pages/Jobs"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
