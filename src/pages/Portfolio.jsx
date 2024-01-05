import Project from "../components/Project";

export default function Portfolio() {
    return (
      <div>
        <h1>Porfolio</h1>
        <div className="d-flex flex-row flex-wrap justify-content-around">
            <Project
              name="Digital marketing website"
              imagePath="./src/assets/images/social-media-marketing.jpg"
              technologies="HTML, CSS, Git"
              link="https://solangeindaco.github.io/horiseon-html-css-refactor-h1/"  
              description="Digital marketing website"
              gitHubLink="https://github.com/solangeindaco/horiseon-html-css-refactor-h1"
            />
            <Project
              name="Movies & Cocktail"
              imagePath="./src/assets/images/movies-cocktails-combo.png"
              technologies="HTML, CSS, Git, Javascript, Bulma, JQuery"
              link="https://ucb-allstars-project-1.github.io/movie-cocktail-combo/"  
              description="Movies & Cocktail"
              gitHubLink="https://github.com/ucb-allstars-project-1/movie-cocktail-combo"
            />
            <Project
              name="Culinary Connect"
              imagePath="./src/assets/images/culinary-connect.png"
              technologies="Javascript, Node.js, bootstrap"
              link="https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"  
              description="Recipe sharing"
              gitHubLink="https://github.com/quar-tech/mvc-recipe-sharing"
            />
            <Project
              name="Android Game"
              imagePath="./src/assets/images/log-game.png"
              technologies="Android, Java, Git, Android Studio"
              link="https://play.google.com/store/apps/details?id=com.solange.pipedreamer.full"  
              description="Android Game"
            />
          
        </div>
      </div>
    );
  }