import "./fotoConEpigrafe.css";
const FotoConEpigrafe = (props) => {

  return (
    <div className="foto-container">
      <figure>
        <img className="foto-portfolio" alt={props.epigrafe} src={props.src} />
        <figcaption className="foto-figcaption">
          <div className="foto-epigrafe">{props.epigrafe}</div>
        </figcaption>
      </figure>
    </div>
  );
};

export default FotoConEpigrafe;