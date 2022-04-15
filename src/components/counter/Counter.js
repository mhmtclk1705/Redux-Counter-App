import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "../../redux/actions/counterActions";

//! örnek projemiz bi counter projesi olduğu için components içerisinde counter oluşturuyoruz

//! Actionstan kullanacağımız fonsiyonları import ediyoruz

//! Redux ın useSelector ve useDispatch fonksiyonlarını import ediyoruz



const Counter = () => {
  //! use selector ı  kullanarak state içerisindeki counterReducer ı alıyoruz
  const { counter } = useSelector((state) => state.counterReducer);
  //! use dispatch ı kullanarak actionları dispatch ediyoruz
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1
        className={
          counter > 0
            ? "counter-pos"
            : counter < 0
            ? "counter-neg"
            : "counter-zero"
        }
      >
        {counter}
      </h1>
      <div>
        {/* import ettiğimiz increase decrease ve reset leri onclick e atıyoruz  */}
        <button className="counter-button positive" onClick={() => dispatch(increase())}>incease</button>
        <button className="counter-button zero" onClick={() => dispatch(reset())}>reset</button>
        <button className="counter-button negative" onClick={() => dispatch(decrease())}>decrease</button>
      </div>
    </div>
  );
};

export default Counter;
