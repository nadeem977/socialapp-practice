
import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
 
export default App;
