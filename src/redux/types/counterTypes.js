//! best practice olarak redux kullanımı eğer switch case yapısı kullanılıyorsa action içindeki type ları
//! tanıtmak için dosyanın içerisinde CounterTypes dosyası oluşturduk.
// ! burada gelecek olan Type ları tanımladık bu proje için böyle bişey yapmamıza gerek yoktu ama redux çok
// ! kapsamlı projelerde kullanılıyor.Bu yüzden bu şekilde tanımlamak tüm karmaşıklığı çözmede yardımcı oluyor...

export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";