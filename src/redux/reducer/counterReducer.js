//! counteReducer aksiyonun döndüğü kısım

const initialState = {
    counter: 0
}

//! proje özelinde bi initialstate kullanıyoruz ve counter a 0 veriyoruz   


//* hiç değer gelmezse varsayılan olarak tanımladığımız initialState değerini alsın istiyoruz

const counterReducer = (state = initialState , action) => {
    //! if else de kullanabiliriz ama switch case daha kullanışlı
    switch (action.type) {
        //! action typelara göre basılan butonlarda yapılacak işlemleri case lerde tanımlıyoruz...
        case 'INCREASE_COUNTER':
            return {...state, counter: state.counter + 1}
            
        case 'DECREASE_COUNTER':
            return {...state, counter: state.counter - 1}
        
        case 'RESET_COUNTER':
            return {...state, counter: 0}
        //! en sonda default yazmamızın sebebi action.type ı boş gelme ihtimaline karşın 
        //! state i döndürmek istiyoruz
        default:
            return state;
    }
}
export default counterReducer;