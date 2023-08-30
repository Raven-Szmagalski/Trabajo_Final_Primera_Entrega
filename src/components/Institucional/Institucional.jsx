import React, { useState } from "react";
import Back from "../Header_Footer/Back";
import Heading from "../Header_Footer/Heading";
import img from "../images/Institucional.jpg";
import "./Institucional.css";

const Institucional = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="about">
        <Back title="Institucional" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Nuestra Historia"
              subtitle="Primera creación y cierre del Curso de Contadores de Concordia: 1923-1931"
            />
            <p>
              La Facultad de Ciencias de la Administración (FCAD) de la
              Universidad Nacional de Entre Ríos (UNER) tiene origen en el Curso
              de Contadores de Concordia (CCC) creado por Decreto del 15 de
              febrero de 1928 firmado por el Presidente Dr. Marcelo T. de
              Alvear.
            </p>
            <p>
              Fue una de las dieciséis universidades creadas entre mayo de 1971
              y mayo de 1973 por el entonces Gobierno de Facto del Gral Lanusse,
              que asumió las ideas del Plan Taquini. En la conciencia de los
              actores institucionales, la creación de la Universidad Nacional de
              Entre Ríos ocurrió como resultado de una demanda histórica y
              reivindicativa de la población de la provincia, dado los numerosos
              antecedentes e iniciativas impulsadas previamente para la
              cristalización de este objetivo.
            </p>

            {showMore && (
              <p>
                <p>
                  En el breve período democrático sucedido desde el 1973, se
                  designa al Dr. Marsiglia como Rector Normalizador (noviembre
                  del 73). En su gestión se tomaron las definiciones que dieron
                  inicio al funcionamiento de la Universidad como tal: la
                  localización del Rectorado y la incorporación formal de las
                  unidades académicas provenientes de la UNL, Facultad de
                  Ciencias de la Educación, la Facultad de Ciencias
                  Agropecuarias, Escuela de Técnicos en Alimentos y Escuela de
                  Ciencias de la Administración. En 1976 se incorporan a la
                  UNER, la Facultad de Ciencias Económicas y la Facultad de
                  Ingeniería, dependientes ambas de la Universidad Católica
                  Argentina y la Escuela Superior de Bromatología. frente del
                  antiguo rectorado con gente en la vereda
                </p>
                <p>
                  Los Rectores que se sucedieron desde el 1973 y entre los
                  gobiernos dictatoriales, inicialmente se dedicaron
                  mayoritariamente a cuestiones administrativas. Con el golpe
                  militar de 1976 se profundiza la política universitaria
                  iniciada por la llamada "Misión Ivanissevich", en referencia
                  al Ministro de Educación del Gobierno de Perón, de viraje
                  hacia el desmantelamiento del pensamiento científico crítico,
                  contemporánea con las primeras formas de terrorismo de estado.
                  El clima represivo que dominará la vida de las casas de altos
                  estudios hasta 1983. Se sanciona la ley Nº 21276 que
                  significó, en el caso de las universidades nacionales, la
                  intervención directa del gobierno militar a través de los
                  rectores interventores, el estricto control ideológico,
                  político, educativo y cultural que ya se había iniciado en
                  1974. Durante este período se procedió a reemplazar el
                  logotipo que hasta ese entonces identificaba a la Universidad
                  Nacional de Entre Ríos por otro que sintetizaba gráficamente
                  los criterios básicos que orientaron su gestión: desprecio por
                  la democracia, ejercicio del control ideológico y de la
                  represión, fuertes vínculos con los sectores integristas del
                  catolicismo, desconexión de la investigación científica o
                  tecnológica. Durante este dramático período de la historia
                  argentina se persiguieron, reprimieron, desaparecieron y se
                  cesantearon docentes y estudiantes. También se produjo una
                  reducción súbita del financiamiento universitario, no se
                  crearon nuevas carreras ni universidades y se desvinculó la
                  política científica de este ámbito.
                </p>{" "}
              </p>
            )}
            <button className="btn2 seguir-leyendo" onClick={toggleShowMore}>
              Seguir leyendo
            </button>
          </div>
          <div className="right row">
            <img src="./Universidad.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Institucional;
