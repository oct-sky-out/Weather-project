import React, { useState, useCallback, useRef } from "react";
import { VscMenu, VscDiffAdded, VscHome } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./AddCity.scss";

function AddCity({ menuActive, menuStyle, setMenuActive, setOtherCity }) {
  const [cityName, setCityName] = useState("");
  const nextId = useRef(1);

  const menuOpen = useCallback(() => {
    if (!menuActive) {
      setMenuActive((tf) => !tf);
      menuStyle.current.style.left = "0";
    }
  }, [menuActive, menuStyle, setMenuActive]);

  const onChange = useCallback((e) => {
    setCityName(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      setOtherCity((citys) =>
        citys.concat({ id: nextId.current, cityName: cityName })
      );
      setCityName("");
      nextId.current += 1;
      alert("도시가 추가되었습니다. 메뉴창에서 확인하세요!");
      e.preventDefault();
    },
    [cityName, setOtherCity, nextId]
  );

  return (
    <div className="AddCity">
      <div className="menu-open-ico" onClick={menuOpen}>
        <VscMenu />
      </div>
      <form className="add-city-form" onSubmit={onSubmit}>
        <input
          className="add-city-input"
          value={cityName}
          onChange={onChange}
          placeholder="도시이름을 영어로 입력해주세요!"
        />
        <button className="add-city-btn" type="submit">
          <VscDiffAdded />
        </button>
      </form>
      <div className="go-home-btn">
        <Link className="home-link" to="/">
          <VscHome />
        </Link>
      </div>
    </div>
  );
}
export default React.memo(AddCity);
