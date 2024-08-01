import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import CourseList from "./pages/CourseList";
import Branches from "./pages/BranchList";
import AddStudent from "./pages/AddStudent";
import AdmissionStudents from "./pages/AdmissionStudents";
import AddVip from "./pages/AddVip";
import VipRefered from "./pages/VipRefered";
import Status from "./pages/Status";
import AddFranchise from "./pages/AddFranchise";
import FranchiseRefered from "./pages/FranchiseRefered";
import MyRevenue from "./pages/MyRevenue";
import Crm from "./pages/Crm";
import MediaUpdates from "./pages/MediaUpdates";
import MarketingUpdates from "./pages/MarketingUpdates";
import Message from "./pages/Message";
import ReferedStudent from "./pages/ReferedStudent";
import PincodeRevenue from "./pages/PinCodeRevenue";
import PinCodeReference from "./pages/PinCodeReference";
import StudentsCompleted from "./pages/StudentsCompleted";
import BranchStaff from "./pages/BranchStaff";
import CertificationPhase from "./pages/CertificationPhase";
import Practice from "./pages/practiceupdtate";
import Marketing from "./pages/Media";
// import Profile from './pages/profile';
import Vippage from "./pages/vipprofile";
import CourseDetails from "./pages/CourseDetails";
import ConceptDetails from "./pages/ConceptDetails";
import BranchDetails from "./pages/BranchDetails";
import HosDetails from "./pages/HosDetails";
import VipDetails from "./pages/VipDetails";
import VipFranchiseDetails from "./pages/VipFranchiseDetails";
import FranchiseDetails from "./pages/FranchiseDetails";
import StudentsDetails from "./pages/StudentsDetails";
import Accounts from "./pages/Accounts";
import MediaUploads from "./pages/MediaUploads";
import GlobalProvider, {
  useGlobalContext,
} from "./assets/contex/GlobalContext";
import AutoVipLoginPortal from "./pages/AutoVipLoginPortal";
import VipVideoPortal from "./pages/VipVideoPortal";
import VipDetailsUpdatePortal from "./pages/VipDetailsUpdatePortal";
import { VipFullProfile } from "./pages/PageComponents/AllUserProfile";
import TiaBrain from "./pages/PageComponents/miniComponents/HomePage/TiaBrain/Tiabrain.jsx";
import TiaEdge from "./pages/PageComponents/miniComponents/HomePage/TiaEdge/Tiaedge.jsx";
import TiaEnt from "./pages/PageComponents/miniComponents/HomePage/TiaEnt/Tiaent.jsx";
import TiaLive from "./pages/PageComponents/miniComponents/HomePage/TiaLive/Tialive.jsx";
import TiaMedia from "./pages/PageComponents/miniComponents/HomePage/TiaMedia/Tiamedia.jsx";
import TiaMock from "./pages/PageComponents/miniComponents/HomePage/TiaMock/Tiamock.jsx";
import TiaPlay from "./pages/PageComponents/miniComponents/HomePage/TiaPlay/Tiaplay.jsx";
import TiaShewin from "./pages/PageComponents/miniComponents/HomePage/TiaShewin/Tiashewin.jsx";
import TiaTest from "./pages/PageComponents/miniComponents/HomePage/TiaTest/Tiatest.jsx";
import About from './pages/PageComponents/miniComponents/HomePage/MainPage/AboutTheCompany/AboutTheCompany';
import Gallery from './pages/PageComponents/miniComponents/HomePage/MainPage/Gallery/GalleryCompany';



function App() {
  //for login user type
  const { userRole, userToken, updateUser } = useGlobalContext();
  const [newVipData,setNewVipData]=useState([]);
  if (userRole == null) {
    return (
      <div className="App">
        <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/tiabrain" element={<TiaBrain />} />
           <Route path="/tiaedge" element={<TiaEdge />} />
           <Route path="/tiaent" element={<TiaEnt />} />
           <Route path="/tialive" element={<TiaLive />} />
           <Route path="/tiamedia" element={<TiaMedia />} />
           <Route path="/tiamock" element={<TiaMock />} />
           <Route path="/tiaplay" element={<TiaPlay />} />
           <Route path="/tiashewin" element={<TiaShewin />} />
           <Route path="/tiatest" element={<TiaTest />} />
           <Route path="/about" element={<About />} />
           <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/welcome"
            element={<AutoVipLoginPortal setNewVipData={setNewVipData} />}
          />
          <Route path="/videoportal" element={<VipVideoPortal />} />
          <Route
            path="/vipupdatedetail"
            element={<VipDetailsUpdatePortal newVipData={newVipData} />}
          />
        </Routes>
      </div>
    );
  } else {
    if (userRole == "admin") {
      return (
        <div className="App">
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tiabrain" element={<TiaBrain />} />
           <Route path="/tiaedge" element={<TiaEdge />} />
           <Route path="/tiaent" element={<TiaEnt />} />
           <Route path="/tialive" element={<TiaLive />} /> 
           <Route path="/tiamedia" element={<TiaMedia />} />
           <Route path="/tiamock" element={<TiaMock />} />
           <Route path="/tiaplay" element={<TiaPlay />} />
           <Route path="/tiashewin" element={<TiaShewin />} />
           <Route path="/tiatest" element={<TiaTest />} />
           <Route path="/about" element={<About />} />
           <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
            <Route path="/conceptdetails" element={<ConceptDetails />} />
            <Route
              path="/coursedetails"
              element={<CourseList selected={"coursedetails"} />}
            />
            <Route
              path="/branchdetails"
              element={<Branches selected={"branchdetails"} />}
            />
            <Route path="/hosstaff" element={<HosDetails />} />
            <Route path="/vipdetails" element={<VipDetails />} />
            <Route
              path="/vipfranchisedetails"
              element={<VipFranchiseDetails />}
            />
            <Route path="/franchisedetails" element={<FranchiseDetails />} />
            <Route path="/studentsdetails" element={<StudentsDetails />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/media" element={<MediaUploads />} />
            <Route path="/viewvipprofile" element={<VipFullProfile/>}/>
          </Routes>
        </div>
      );
    } else if (userRole == "hos") {
      return (
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
            <Route
              path="/courselist"
              element={<CourseList selected={"courselist"} />}
            />
            <Route
              path="/branches"
              element={<Branches selected={"branches"} />}
            />
            <Route path="/vipdetails" element={<VipDetails />} />
            <Route
              path="/vipfranchisedetails"
              element={<VipFranchiseDetails />}
            />
            <Route path="/franchisedetails" element={<FranchiseDetails />} />
            <Route path="/studentsdetails" element={<StudentsDetails />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/media" element={<MediaUploads />} />
          </Routes>
        </div>
      );
    } else if (userRole == "vip") {
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/courselist"
              element={<CourseList selected={"courselist"} />}
            />
            <Route path="*" element={<Dashboard />} />
            <Route
              path="/branches"
              element={<Branches selected={"branches"} />}
            />
            <Route path="/studentsdetails" element={<StudentsDetails />} />
            <Route path="/vipdetails" element={<VipDetails />} />
            <Route path="/franchisedetails" element={<FranchiseDetails />} />
            <Route path="/mediaupdates" element={<MediaUpdates />} />
            <Route path="/marketingupdates" element={<MarketingUpdates />} />
            <Route path="/myrevenue" element={<MyRevenue />} />
          </Routes>
        </div>
      );
    } else if (userRole == "vipFranchise") {
      return (
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
            <Route
              path="/courselist"
              element={<CourseList selected={"courselist"} />}
            />
            <Route
              path="/branches"
              element={<Branches selected={"branches"} />}
            />
            <Route path="/pincodereferrals" element={<PinCodeReference />} />
            <Route path="/pincoderevenue" element={<PincodeRevenue />} />
            <Route path="/mediaupdates" element={<MediaUpdates />} />
            <Route path="/marketingupdates" element={<MarketingUpdates />} />
            <Route path="/message" element={<Message />} />
          </Routes>
        </div>
      );
    } else if (userRole == "francise") {
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/courselist"
              element={<CourseList selected={"courselist"} />}
            />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      );
    } else if (userRole == "branchstaff") {
       return (
         <div className="App">
           <Routes>
             <Route path="/" element={<Login />} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route
               path="/courselist"
               element={<CourseList selected={"courselist"} />}
             />
             <Route path="*" element={<Dashboard />} />
           </Routes>
         </div>
       );
    }
    
  }
}

export default App;
