import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>메인</Link>
      <Link to={"/about"}>어바웃</Link>
    </div>
  );
};

export default Header;
