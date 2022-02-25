import mealsImage from "./../../assets/meals.jpg";
import style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="A table full of delecious food!" />
      </div>
    </>
  );
};
export default Header;
