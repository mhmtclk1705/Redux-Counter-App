import { DECREASE_COUNTER, INCREASE_COUNTER, RESET_COUNTER } from "../types/counterTypes"

//! Tanıttığımız type ları import ediyoruz ve onclicklerde tanımlamak üzere fonksiyon oluşturuyoruz.
//! Actions da tanımlanan fonksiyonları onClicklere tanımlayıp dispatch etmek için kullanıcaz...


//* gelen fonksiyonu istediğimiz type ile return edip işleme sokmak için kullandık bu fonksiyonları
//* yine types gibi actions kısmı da bu proje için gerekli değildi ama redux karışık ve büyük projelerde 
//* kullanıldığı için types ve actions olarak ayrı dosyalar kullanılıyor...



export const increase = () => {
    return {
        type: INCREASE_COUNTER,
    };
    };


export const decrease = () => {
    return {
        type: DECREASE_COUNTER,
    };
    }

export const reset = () => {
    return {
        type: RESET_COUNTER,
    };
    }
