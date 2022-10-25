import HeaderItem from "./HeaderItem";

function HeaderLinks({ HeaderItems }) {
  return (
    <ul className="col-4 col-lg-auto col-sm-12 justify-content-center mb-2 mb-md-0 me-lg-auto nav">
      {HeaderItems.map((item) => (
        <HeaderItem Item={item} />
      ))}
    </ul>
  );
}

export default HeaderLinks;
