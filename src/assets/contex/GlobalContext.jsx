import React, { createContext, useContext, useEffect, useState } from "react";
import { imageURL } from "../../Api";

// Create context
const GlobalContext = createContext();

// Create provider
export const GlobalProvider = ({ children }) => {
  // State to store user role and token
  const [userRole, setUserRole] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [conceptData,setConceptData]=useState(null);
  const [courseData,setCourseData]=useState(null);
  const [branchDataAll,setBranchData]=useState(null);
  const [profileImage,setProfileImage]=useState("")
  const [profileData,setProfileData]=useState("")
  const [profileViewData,setProfileViewData]=useState({})
  useEffect(()=>{
    try {
      let data = JSON.parse(localStorage.getItem("data"));
      
      if (data !== null) {
        setProfileData(data);
        const { profileData } = JSON.parse(localStorage.getItem("data"));
        let img=imageURL(profileData.imageACCESSKEY);
        updateUser(data.role, data.access_token, img);
      }
    } catch (error) {
      
    }
    
  },[])
  // Function to update user role and token
  const updateUser = (role, token,img) => {
    setUserRole(role);
    setUserToken(token);
    setProfileImage(img);
  };
function generateRandomPassword(length = 8) {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const allCharacters =
    upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;

  let password = "";

  // Ensure password includes at least one character from each character set
  password +=
    upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  password +=
    lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  // Fill the rest of the password length with random characters
  for (let i = password.length; i < length; i++) {
    const randomCharacter =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    password += randomCharacter;
  }

  // Shuffle the password to ensure randomness
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}
  return (
    <GlobalContext.Provider
      value={{
        userRole,
        userToken,
        conceptData,
        setConceptData,
        courseData,
        setCourseData,
        branchDataAll,
        setBranchData,
        generateRandomPassword,
        profileImage,
        profileData,
        profileViewData,
        setProfileViewData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to consume context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
