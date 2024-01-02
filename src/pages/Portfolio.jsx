import Project from "../components/Project";

export default function Portfolio() {
    return (
      <div>
        <h1>Porfolio</h1>
        <ul>
          <li>
            <Project
              name="Digital marketing website"
              imagePath="./src/assets/images/social-media-marketing.jpg"
              technologies="HTML, CSS, Git"
              link="https://solangeindaco.github.io/horiseon-html-css-refactor-h1/"  
              description="Digital marketing website"
            />
          </li>
          <li>
            <Project
              name="Movies & Cocktail"
              imagePath="./src/assets/images/movies-cocktails-combo.png"
              technologies="HTML, CSS, Git, Javascript, Bulma, JQuery"
              link="https://ucb-allstars-project-1.github.io/movie-cocktail-combo/"  
              description="Movies & Cocktail"
            />
          </li>
          <li>
            <Project
              name="Culinary Connect"
              imagePath="./src/assets/images/culinary-connect.png"
              technologies="Javascript, Node.js, bootstrap"
              link="https://mvc-culinary-connect-e00ad0e3e10d.herokuapp.com/"  
              description="Recipe sharing"
            />
          </li>
          <li>
            <Project
              name="Android Game"
              imagePath="./src/assets/images/log-game.png"
              technologies="Android, Java, Git, Android Studio"
              link="https://play.google.com/store/apps/details?id=com.solange.pipedreamer.full"  
              description="Android Game"
            />
          </li>
          
        </ul>
      </div>
    );
  }