export const HeaderHome = ({ onViewProfile }) => {
  return (
    <section className="header-home">
      <div className="hader-user">
        <span class="header-user-name" onClick={onViewProfile}>
          Jhefferson
        </span>
        <span className="header-user-category color-orange">Chasky Balck</span>
      </div>

      <div className="header-logo">
        <span className="header-logo-name color-orange">Chaskys</span>
        <span className="header-logo-subname">Delivery app</span>
      </div>
    </section>
  );
};
