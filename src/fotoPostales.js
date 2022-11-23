import "./fotoPostales.css";
const FotoPostales = (props) => {

  return (
    <div className="foto-container">
       
        
        <img className="foto-portfolio" alt={props.epigrafe} src={props.src} />
      
    </div>
  );
};

export default FotoPostales;