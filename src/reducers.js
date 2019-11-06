const initialState = {
    info: [],inputSearch:""
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "GET_INFOS":
        return {
          ...state,
          info: action.payload
        };   
        case "SEARCH_INFOS":
          return {
            ...state,
            inputSearch: action.payload
          }; 
          case 'ADDMAIL':
            return {...state,email:action.payload}
    
      default:
        return state;
    }
  } 

 