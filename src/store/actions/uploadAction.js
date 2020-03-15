import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const UPLOADING_FILE_SUCCESS = "UPLOADING_FILE_SUCCESS";
export const UPLOADING_FILE_FAIL = "UPLOADING_FILE_FAIL";

// UPLOADING
export function uploadAction(userid, data, setUploadSuccess) {
  return dispatch => {
    axiosWithAuth()
        // this is insantiated when a file is added to input
        .post(`/${userid}/uploading`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        dispatch({ type: UPLOADING_FILE_SUCCESS, payload: res.data });
        setUploadSuccess(true)
      })
      .catch(err => {
        console.log("ERROR: ", err);
        dispatch({
          type: UPLOADING_FILE_FAIL,
          payload: err
        });
      });
  };
}
