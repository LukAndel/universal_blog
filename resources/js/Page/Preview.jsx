import { useEffect } from "react";
import { render } from "react-dom";

const Preview = ({data, colorset}) => {
    const {pageTitle, sections} = data;
    console.log(colorset)

    const element = document.querySelector('.preview')
        document.documentElement.style.setProperty(
            "--primary-color",
            colorset?.color_1    
        );
        document.documentElement.style.setProperty(
            "--secondary-color",
            colorset?.color_2
        );
        document.documentElement.style.setProperty(
            "--tertiary-color",
            colorset?.color_3
        );
        document.documentElement.style.setProperty(
            "--quaternary-color",
            colorset?.color_4
        );
        // element.style.setProperty(
        //     "--ff",
        //     response.data?.styleset?.font.name
        // );

    return (
        <div className="preview">
                {/* <header className="preview__header"><h1 className="preview__h1">{pageTitle&&pageTitle}</h1></header> */}
                <header>
            <nav className="preview__nav">
                {sections&&sections.map ((section, i)=> (
                <a key={i} className={i===0?"preview__anchor preview__anchor--selected":"preview__anchor"} href="#">{section.name}</a>
                ))}
            </nav>
            <h1 className="preview__h1">{pageTitle&&pageTitle}</h1>
            </header>
            <div className="preview__main"><h2 className="preview__h2">{sections&&sections[0]?.name}</h2>
                <div className="preview__article">
                <h3 className="preview__h3">Article #1</h3>
                <p className="preview__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic aliquam perferendis sint ullam vitae, iste atque assumenda, explicabo cumque inventore illum expedita doloremque, sequi accusantium architecto quisquam voluptas ipsam!</p>
                </div>
                <div className="preview__article">
                <h3 className="preview__h3">Article #2</h3>
                <p className="preview__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic aliquam perferendis sint ullam vitae, iste atque assumenda, explicabo cumque inventore illum expedita doloremque, sequi accusantium architecto quisquam voluptas ipsam!</p>
                </div>
            </div>
        </div>
    )
}

export default Preview