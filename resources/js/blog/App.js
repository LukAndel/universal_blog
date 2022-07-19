// import 'js/navbar';
// import 'css/blog-lukas.css';

import Articles from "./Articles";

const App = () => {
    return (

        <>
        {/* <BrowserRouter> */}
        <header>
        <nav role="navigation" id="access">
            <a className="skip-link icon-reorder" title="Accéder au menu" href="#menu">Menu</a>
            <ul id="menu">
                <li className="active"><a class="icon-home" href="#accueil">Home</a></li>
                <li><a className="icon-group" href="#quisommesnous">Categories</a></li>
                <li><a className="icon-leaf" href="#services">Services</a></li>
                <li><a className="icon-picture" href="#portfolio">Portfolio</a></li>
                <li><a className="icon-envelope-alt" href="#contact">Contact</a></li>
            </ul>
        </nav>
        </header>
        
        <div className="main">
        
            <div className="articles">
            <Articles />
                <div className="article">
                    <h2 className="article__title">Destinace 2019</h2>
                    <p className="article__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis nesciunt atque, accusamus eligendi necessitatibus? Voluptatibus id laudantium ad aliquid rem, error itaque sit architecto, dolorem, quidem enim perspiciatis deleniti!</p>
                </div>
                <div className="article">
                    <h2 className="article__title">Relax v centru Prahy</h2>
                    <p className="article__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis nesciunt atque, accusamus eligendi necessitatibus? Voluptatibus id laudantium ad aliquid rem, error itaque sit architecto, dolorem, quidem enim perspiciatis deleniti!</p>
                </div>
                <div className="article">
                    <h2 className="article__title">Tipy na vánoční dárky</h2>
                    <p className="article__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis nesciunt atque, accusamus eligendi necessitatibus? Voluptatibus id laudantium ad aliquid rem, error itaque sit architecto, dolorem, quidem enim perspiciatis deleniti!</p>
                </div>
                <div className="article">
                    <h2 className="article__title">Když ti jeden pád na zadek změní život.. č. IV</h2>
                    <p className="article__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis nesciunt atque, accusamus eligendi necessitatibus? Voluptatibus id laudantium ad aliquid rem, error itaque sit architecto, dolorem, quidem enim perspiciatis deleniti!</p>
                </div>
                <div className="article">
                    <h2 className="article__title">Když ti jeden pád na zadek změní život.. č. III</h2>
                    <p className="article__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis nesciunt atque, accusamus eligendi necessitatibus? Voluptatibus id laudantium ad aliquid rem, error itaque sit architecto, dolorem, quidem enim perspiciatis deleniti!</p>
                </div>                
            </div>
            <footer>
                <div className="footer"></div>
            </footer>
        </div>
        {/* </BrowserRouter> */}
        </>
    );
};

export default App;
