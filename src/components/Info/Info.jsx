// import Contact from "../Contact/Contact";
//* COMPONENT FORM
import Form from "../Form/Form";

import image from "/src/image/LogoInfo/InfoLogo.png";

//* STYLES
import css from "./Info.module.css";

function Info() {
  return (
    <div className={`${css.infoContainer} ${css.container}`}>
      <div className={css.infoSection}>
        <img src={image} alt="" width={307} />
        <p className={css.infoDescription}>
          We made it our mission to create community everyday and grow
          meaningful, lasting relationships with our staff, our suppliers and of
          course you, our customers.
        </p>
        <h3 className={css.locationTitle}>Store Locations</h3>
        <p className={css.locationDescription}>
          Find your nearest Alowishus store with opening hours, location and
          contact details.
        </p>
      </div>
      {/* <Contact /> */}
      <Form />
    </div>
  );
}
export default Info;
