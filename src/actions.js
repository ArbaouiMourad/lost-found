import axios from 'axios'

//get
export const getinfos = () => dispatch => {
    axios.get("/info").then(res =>
      dispatch({
        type: "GET_INFOS",
        payload: res.data
      })
    );
  };
//

 //
 export const searchinfos = (payload) => dispatch => {
    dispatch({
      type: "SEARCH_INFOS",
      payload
    })
  
};
//
export const addmail = (payload) => dispatch => {
  dispatch({
    type: "ADDMAIL",
    payload
  })

};
  //add
  export const addinfos = info => dispatch => {
    console.log(info)
    axios.post("/info", info).then(res => dispatch(getinfos()));
  };

 // delete
  export const deleteinfos = id => dispatch => {
    axios.delete(`/info/${id}`).then(res => dispatch(getinfos()));
  };
// update
  export const updateinfos = (id, info) => dispatch => {
    axios
      .put(`/info/${id}`, info)
      .then(res => dispatch(getinfos()));
  };
  