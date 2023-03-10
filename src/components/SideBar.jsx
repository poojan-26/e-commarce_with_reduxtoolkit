// START IMPORT //
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { menuStatus, changeMenuStatus } from "../features/menuStatusSlice";
// END IMPORT //

export default function SideBar() {
  // START CONST //
  const menuActiveStatus = useSelector(menuStatus);
  const dispatch = useDispatch();
  // END CONST //

  // START FUNCTIONS //
  const onCloseClick = (e) => {
    dispatch(changeMenuStatus(false));
  };
  // END FUNCTIONS //

  // START RENDER //
  return (
    <div
      className={menuActiveStatus ? "sidebar-overlay show" : "sidebar-overlay"}
    >
      <aside className="sidebar">
        {/* close */}
        <button className="sidebar-close" onClick={onCloseClick}>
          <i className="fas fa-times"></i>
        </button>
        {/* links */}
        <ul className="sidebar-links">
          <li>
            <Link to="/" className="sidebar-link" onClick={onCloseClick}>
              <i className="fas fa-home fa-fw"></i>
              home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="sidebar-link"
              onClick={onCloseClick}
            >
              <i className="fas fa-couch fa-fw"></i>
              products
            </Link>
          </li>
          <li>
            <Link to="/about" className="sidebar-link" onClick={onCloseClick}>
              <i className="fas fa-book fa-fw"></i>
              about
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
  // END RENDER //
}
