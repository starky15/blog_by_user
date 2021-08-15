
const user = (state=[], action) => {
    switch(action.type){
        case 'FETCH_USER':
            console.log('prideodnsvlnsk')
            return [...state ,action.payload];
        default:
            alert(action.type)
            return state;
    }
}

export default user;