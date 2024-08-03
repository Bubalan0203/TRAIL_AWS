import React from "react";
import { ThreeDots} from "react-loader-spinner";
import img from '../../../assets/tia-removebg-preview.png'; // Update this path to where your logo is located

const LoadingPage = () => {
  return (
    <div style={styles.container}>
      <img
        src={img}
        alt="Logo"
        style={styles.logo}
      />
     <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#f00d88"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center', // Centers the logo and loader text
  },
  logo: {
    marginBottom: '20px', // Adjust as needed to create space between the logo and loader
    width: '100px', // Adjust size as needed
    height: 'auto',
  },
  loaderWrapper: {
    // Add any additional styling for the loader wrapper if needed
  },
};

export default LoadingPage;
