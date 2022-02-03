import { Routes, Route } from "react-router-dom";
import FriendsDetails from "../pages/FriendsDetails";
import Home from "../pages/Home";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:userId" element={<FriendsDetails />} />
    </Routes>
  );
};
export default AppRoutes;
