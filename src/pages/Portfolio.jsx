import Project from "../components/Project";

import socialMediaImage from "../assets/images/social-media-marketing.jpg";
import moviesCocktailsImage from "../assets/images/movies-cocktails-combo.png";
import culinaryConnectImage from "../assets/images/culinary-connect.png";
import logGameImage from "../assets/images/log-game.png";
import noteTakerImage from "../assets/images/note-taker.png";
import textEditorImage from "../assets/images/text-editor.png";
import skillMagnet from "../assets/images/skill-magnet.png";


export default function Portfolio() {
    return (
      <div className="d-flex flex-column align-items-start">
        <h1>Porfolio</h1>
        <div className="d-flex flex-row flex-wrap justify-content-around">
            <Project
              name="Full Stack Service App"
              imagePath={skillMagnet}
              technologies="React, Javascript, MongoDB, Node.js, Git, Netlify"
              link="https://full-stack-service-app.onrender.com/"  
              description="Full Stack Service App"
              gitHubLink="https://github.com/quin-tech/full-stack-service-app"
            />
            <Project
              name="Culinary Connect"
              imagePath={culinaryConnectImage}
              technologies="Javascript, Node.js, bootstrap"
              link="https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"  
              description="Recipe sharing"
              gitHubLink="https://github.com/quar-tech/mvc-recipe-sharing"
            />
            <Project
              name="Movies & Cocktail"
              imagePath={moviesCocktailsImage}
              technologies="HTML, CSS, Git, Javascript, Bulma, JQuery"
              link="https://ucb-allstars-project-1.github.io/movie-cocktail-combo/"  
              description="Movies & Cocktail"
              gitHubLink="https://github.com/ucb-allstars-project-1/movie-cocktail-combo"
            />
            <Project
              name="Digital marketing website"
              imagePath={socialMediaImage}
              technologies="HTML, CSS, Git"
              link="https://solangeindaco.github.io/horiseon-html-css-refactor-h1/"  
              description="Digital marketing website"
              gitHubLink="https://github.com/solangeindaco/horiseon-html-css-refactor-h1"
            />
            <Project
              name="Text Editor"
              imagePath={textEditorImage}
              technologies="Javascript, Git, Webpack, PWA"
              link="https://pwa-text-editor-dhr3.onrender.com"  
              description="Text Editor"
              gitHubLink="https://github.com/solangeindaco/pwa-text-editor"
            />
            <Project
              name="Note Taker"
              imagePath={noteTakerImage}
              technologies="Javascript, Express, Git, Heroku"
              link="https://exs-note-taker-1e8b2846d5cf.herokuapp.com/"  
              description="Note Taker"
              gitHubLink="https://github.com/solangeindaco/express-note-taker"
            /> 
            <Project
              name="Android Game"
              imagePath={logGameImage}
              technologies="Android, Java, Git, Android Studio"
              link="https://play.google.com/store/apps/details?id=com.solange.pipedreamer.full"  
              description="Android Game"
            />
            
        </div>
      </div>
    );
  }