import React, { useEffect } from 'react';
import '../Equipo.css'; // Enlazamos con el archivo CSS adaptado
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const Equipo = () => {
  useEffect(() => {
    // Cambiar el color de fondo y permitir el scroll solo para la sección Equipo
    document.body.style.backgroundColor = 'black';
    document.body.style.overflowY = 'auto'; // Permitir scroll vertical

    return () => {
      // Revertir el color de fondo y el scroll cuando se salga de la sección Equipo
      document.body.style.backgroundColor = '';
      document.body.style.overflowY = 'hidden'; // Restablecer el scroll a como estaba antes
    };
  }, []);

  const equipoData = [
    {
      name: "IMPIOMBATO MOTORSPORT",
      description: "Equipo de automovilismo que compite en categorías como el Turismo Carretera y TC Pista Pick Up. Liderado por Nicolás Impiombato, ha logrado destacadas victorias. Su infraestructura avanzada y colaboración con pilotos de renombre lo posicionan como un referente en la preparación y desarrollo de vehículos de competición.",
      img: "/im.png",
      link: "https://www.instagram.com/impiombato.motorsport/"
    },
    {
      name: "PERFORMANCE CENTER",
      description: "Performance Center es una cadena de gomerías especializada en la venta e instalación de neumáticos para autos, camionetas, SUV y utilitarios. Ofrecen servicios como alineación y balanceo, y cuentan con una tienda online con las mejores marcas de neumáticos. Además, brindan envíos a todo el país y una experiencia de compra segura y rápida",
      img: "/pf.png",
      link: "https://www.performancecenter.com.ar"
    },
    {
      name: "FATE",
      description: "Fate es la mayor productora de neumáticos de Argentina, con una fuerte presencia en el mercado nacional e internacional. Con más de 75 años de experiencia, fabrica neumáticos para automóviles, camionetas y transporte pesado. Su planta industrial es una de las más avanzadas tecnológicamente en la región.",
      img: "/fate5.png",
      link: "https://www.fate.com.ar"

    }
  ];

  return (
    <div className="equipo-container">
      <h1 className="equipo-title">Nuestro Equipo</h1>
      <p className="equipo-description">
        En cada carrera, contamos con el apoyo y la dedicación de tres grandes pilares que hacen posible nuestro éxito en la pista.
      </p>

      <div className="row">
        {equipoData.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-white bg-dark h-100">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="card-header text-center">
                  <img src={item.img} alt={item.name} className="img-fluid equipo-banner" />
                </div>
                <div className="card-body">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipo;
