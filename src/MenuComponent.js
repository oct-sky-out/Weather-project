import React, { useCallback } from "react";
import { VscChromeClose } from "react-icons/vsc";
import OtherCity from "./OtherCity";
import "./MenuComponent.scss";

function MenuComponent({
  menuStyle,
  otherCity,
  menuActive,
  setMenuActive,
  setOtherCity,
}) {
  const menuClose = useCallback(() => {
    if (menuActive) {
      setMenuActive((tf) => !tf);
      menuStyle.current.style.left = "-100%";
    }
  }, [menuActive, menuStyle, setMenuActive]);

  const onRemove = useCallback(
    (id) => {
      setOtherCity((citys) => citys.filter((city) => city.id !== id));
    },
    [setOtherCity]
  );

  return (
    <div className="Menu">
      <div className="menu-close-ico">
        <VscChromeClose className="menu-close-btn" onClick={menuClose} />
      </div>
      <div className="other-citys">
        {otherCity.map((city) => {
          console.log(city);
          return (
            <OtherCity
              className="other-city-item"
              city={city}
              key={city.id}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(MenuComponent);
