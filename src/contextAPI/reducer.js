export const initialState = {
    nominees: localStorage.getItem("nominatedMovies") ? JSON.parse(localStorage.getItem("nominatedMovies")) : [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "NOMINATE":
            return {
                ...state,
                nominees: [...state.nominees, action.movie],
            };
        case "REMOVE":
            return {
                ...state,
                nominees: state.nominees.filter(nominee => nominee.imdbID !== action.imdbID),  
            };
        default:
            return state;
    }
};

export default reducer;