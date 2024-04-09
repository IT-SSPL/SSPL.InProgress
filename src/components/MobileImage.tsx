import mobileImage from "../assets/xs.jpg";

export const MobileImage = () => {
  return (
    <section className="xs-bg d-md-none d-lg-none">
      <img src={mobileImage} alt="img" className="img-fluid w-100" />
    </section>
  );
};
