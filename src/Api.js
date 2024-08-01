import axios from "axios";
import { enqueueSnackbar } from "notistack";
import AWS from 'aws-sdk';
import {
  REGION,
  ACCESS_KEY,
  SECRET_KEY,
  BUCKET_NAME,
} from "../src/assets/mocData/config";

AWS.config.update({
  region: REGION,
  credentials: new AWS.Credentials(ACCESS_KEY, SECRET_KEY),
});

const s3 = new AWS.S3();

export const refreshFileList = () => {
  
  s3.listObjectsV2(
    {
      Bucket: BUCKET_NAME,
    },
    (err, data) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log(data);

        data.Contents?.forEach((element) => {
          let url = s3.getSignedUrl("getObject", {
            Bucket: BUCKET_NAME,
            Key: element.Key,
          });
          console.log(url);
         
        });
      }
    }
  );
};
export const imageURL=(key)=>{
  let url = s3.getSignedUrl("getObject", {
    Bucket: BUCKET_NAME,
    Key: key,
  });
  return url;
}
export const deleteImage = async (fileKey) => {
  const params = {
    Bucket: BUCKET_NAME, // Your bucket name
    Key: fileKey, // The key of the file you want to delete
  };
  try {
    s3.deleteObject(params,(err,data)=>{
      if(err){
        enqueueSnackbar("Cannot delete Image",{variant:'error'})
      }else{
        console.log('image deleted successfully');
        console.log(data);
      }
    })
    
  } catch (error) {
    console.error("Error deleting file:", error);
    alert("Error deleting file");
  }
};

export const handleImageSubmit = async(file,setData,data) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: file.name,
    Body: file,
    // Removed ACL parameter
  };

  try {
    s3.upload(params, (err, d) => {  
      setData({
        ...data,
        imageACCESSKEY: d["Key"],
      });
    });
  } catch (err) {
    console.error("Upload error:", err);
    if (err.$response) {
      console.log("Response status:", err.$response.status);
      console.log("Response headers:", err.$response.headers);
      console.log("Response data:", err.$response.data);
    }
  }
};

export async function fetchData(url, headers) {
  
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${headers.userToken}`,
        role: headers.userRole,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function deleteData(url, headers) {
  if (window.confirm("Sure if you want to delete")) {
    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${headers.userToken}`,
          role: headers.userRole,
        },
      });
      //window.location.reload();
      enqueueSnackbar(`${response.data}`, {
        variant: "success",
        autoHideDuration: 100,
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      enqueueSnackbar(`${error.message}`,{variant:'error',autoHideDuration:1000})
      throw error;
    }
  }
}

export async function putData(url, newData, headers) {
  try {
    const response = await axios.put(url, newData, {
      headers: {
        Authorization: `Bearer ${headers.userToken}`,
        role: headers.userRole,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

export async function postData(url, newData, headers) {
  try {
    const response = await axios.post(url, newData, {
      headers: {
        Authorization: `Bearer ${headers.userToken}`,
        role: headers.userRole,
      },
    });
    enqueueSnackbar("added successfully",{variant:'success'})
    return response.data;
  } catch (error) {
    console.log(error);
    //enqueueSnackbar(error.response.data.message,{variant:'error'});
    console.error("Error creating data:", error);
    throw error;
  }
}

