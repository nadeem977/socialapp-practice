import Feed from "./pages/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import WelcomPage from "./auth/WelcomPage";
import WelcomScreen from "./auth/WelcomScreen";
import Profile from "./pages/Profile";  
import BlogPost from "./pages/BlogPost";
import Notifications from "./pages/Notifications"; 
import ChatRoom from "./pages/ChatRoom";



const App = () => {




  return (
    <>
     <main>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/welcome" element={<WelcomPage />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/messages" element={<ChatRoom />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/Welcom-Screen" element={<WelcomScreen />} />
        </Routes>
      </BrowserRouter>
     </main>
    </>
  );
};
 
export default App;
