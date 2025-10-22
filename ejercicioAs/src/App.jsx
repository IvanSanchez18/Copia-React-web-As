import './App.css';
import Header from './components/header/header.jsx';
import CardNews from './components/CardNews/cardNews.jsx';
import CardNewsAlt from './components/CardNewsAlt/cardNewsAlt.jsx';
import Opinion from "./components/Opinion/opinion.jsx";
import Lateral from "./components/Lateral/lateral.jsx";

function App() {
  const sampleImage = 'https://img.asmedia.epimg.net/resizer/v2/J7T6HTF6WFCVHKJTVAE7LXJEYI.png?auth=76ab975e8b56b2ee73a2f3230cca1a6baa37f1352ade52af16e370edc7cf5991&width=240&height=135&smart=true';
  const opinionImage = 'https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fas01.epimg.net%2Fimg%2Fcomunes%2Ffotos%2Fautores%2Fpng%2Fsantiago_segurola_basanez.png?auth=6ba3dc282172a4dc9530ed38ab2331baee0cafd112d6f987896b638a40a55466&width=200&height=84&smart=true';

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row">

                <CardNews
                  cols="col-12"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />

                <CardNewsAlt
                  col="col-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <Lateral txt="hola" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <CardNewsAlt
              col="col-12 col-md-4"
              image={sampleImage}
              category="sociedad"
              title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
              footer="AS ACTUALIDAD"
            />
            <CardNewsAlt
              col="col-12 col-md-4"
              image={sampleImage}
              category="sociedad"
              title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
              footer="AS ACTUALIDAD"
            />
            <CardNewsAlt
              col="col-12 col-md-4"
              image={sampleImage}
              category="sociedad"
              title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
              footer="AS ACTUALIDAD"
            />

            <CardNewsAlt
              col="col-12 col-md-3"
              image={sampleImage}
              category="sociedad"
              title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
              footer="AS ACTUALIDAD"
            />
            <CardNewsAlt
              col="col-12 col-md-3"
              image={sampleImage}
              category="sociedad"
              title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
              footer="AS ACTUALIDAD"
            />
            <CardNewsAlt
              col="col-12 col-md-3"
              image={sampleImage}
              category="sociedad"
              title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
              footer="AS ACTUALIDAD"
            />
            <CardNewsAlt
              col="col-12 col-md-3"
              image={sampleImage}
              category="sociedad"
              title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
              footer="AS ACTUALIDAD"
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <Opinion
              title="Ingenuo Huijsen, pletórico Militao"
              author="Santiago Segurola"
              image={opinionImage}
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row">
                <CardNewsAlt
                  col="col-12 col-md-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-12 col-md-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-12 col-md-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
                <CardNewsAlt
                  col="col-12 col-md-6"
                  image={sampleImage}
                  category="sociedad"
                  title="Alfonso Muñoz, funcionario de la Seguridad Social, señala los años necesarios para cobrar la pensión íntegra en 2026: “Será el 100%”"
                  footer="AS ACTUALIDAD"
                />
              </div>
            </div>

            <div className="col-12 col-md-4">
              ola ke ace
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
