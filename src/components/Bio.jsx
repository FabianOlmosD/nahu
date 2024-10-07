import React, { useEffect } from 'react';
import '../bio.css'; // Enlazamos con el archivo CSS adaptado
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const Bio = () => {
  useEffect(() => {
    // Cambiar el color de fondo y permitir el scroll solo para la sección Bio
    document.body.style.backgroundColor = 'black';
    document.body.style.overflowY = 'auto'; // Permitir scroll vertical

    return () => {
      // Revertir el color de fondo y el scroll cuando se salga de la sección Bio
      document.body.style.backgroundColor = '';
      document.body.style.overflowY = 'hidden'; // Restablecer el scroll a como estaba antes
    };
  }, []);

  const bioData = [
    { year: 2024, description: "Participación en el TC Pista Pick Up, logrando 1 podio y 1 triunfo en el Sport Prototipo Argentino.", img: "./2024.png" },
    { year: 2023, description: "Compitiendo en el TC Pista Mouras con el equipo Impiombato a bordo de un Falcón.", img: "./2023.png" },
    { year: 2022, description: "Debut en la ACTC en el TC Pista Mouras con el equipo Impiombato, alcanzando 1 podio.", img: "./2022.png" },
    { year: 2021, description: "Compitiendo en el Sport Prototipo Argentino, logrando 1 triunfo, 1 pole y 4 podios.", img: "./2021.png" },
    { year: 2017, description: "Participación en una fecha de TN Clase 2, alcanzando el 3º puesto.", img: "./2017.png" },
    { year: 2016, description: "Logró 1 triunfo, 1 pole y finalizó 7º en el campeonato de TN Clase 2.", img: "./2016.png" },
    { year: 2015, description: "Competencias en el Turismo Nacional Clase 2, obteniendo 1 pole position y buenos resultados.", img: "./2015.png" },
    { year: 2014, description: "Primer triunfo en Fórmula 4 Nueva Generación y debut en Turismo Nacional Clase 2.", img: "./2014.png" },
    { year: 2013, description: "Participación en toda la temporada de Fórmula 4 Nueva Generación.", img: "./2013.png" },
    { year: 2012, description: "Competencias en el Regional de Karting con varios podios y debut en la F4 Nueva Generación.", img: "./2012.png" },
    { year: 2011, description: "Consagración como campeón del Regional de Karting, con 1 triunfo y 7 podios.", img: "./2011.png" },
    { year: 2010, description: "Año difícil, con pocas fechas y sin grandes resultados deportivos.", img: "./2010.png" },
    { year: 2009, description: "Inicio en el karting con el equipo Kart Time, logrando 1 triunfo y 2 podios.", img: "./2009.png" }
];


  return (
    <div className="curriculum-container">
      <h1 className="curriculum-title">BIO de NAHUEL CORDONE</h1>
      <div className="row">
        {bioData.sort((a, b) => b.year - a.year).map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-white bg-dark h-100">
              <div className="card-header text-center">
                <h2>{item.year}</h2>
              </div>
              <div className="card-body">
                <img src={item.img} alt={`Año ${item.year}`} className="img-fluid" />
                <p className="card-text">{item.description}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bio;

