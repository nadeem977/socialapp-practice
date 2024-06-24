

import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {




  return (
    <>
     <main className="bg-white dark:bg-black">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
     </main>
    </>
  );
};
 
export default App;
