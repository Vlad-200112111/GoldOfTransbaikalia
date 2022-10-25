import DropDownItem from "./DropDownItem";

function DropDownMenu({ OuterElement, MenuList }) {
  return (
    <div className="dropdown text-end">
      <a
        href="#"
        className="d-block dropdown-toggle link-dark text-decoration-none"
        id="dropdownUser"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {OuterElement}
      </a>
      <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser">
        {MenuList.map((item) => (
          <DropDownItem MenuItem={item} />
        ))}
      </ul>
    </div>
  );
}

export default DropDownMenu;
