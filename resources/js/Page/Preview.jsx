import { useEffect } from "react";
import { render } from "react-dom";

const Preview = (data) => {
    const {pageTitle, colorset, sections} = data.data;
    // console.log(data)
    return (
        <div className="preview">
                <header className="preview__header"><h1 className="preview__h1">{pageTitle&&pageTitle}</h1></header>
            <nav className="preview__nav">
                {sections&&sections.map ((section, i)=> (
                <a key={i} className={i===0?"preview__anchor--selected":"preview__anchor"} href="">{section.name}</a>
                ))}
            </nav>
            <div className="preview__body"><h2 className="preview__h2">{sections&&sections[0['name']]}</h2>
                <h3 className="preview__h3">Article header</h3>
                <p className="preview__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic aliquam perferendis sint ullam vitae, iste atque assumenda, explicabo cumque inventore illum expedita doloremque, sequi accusantium architecto quisquam voluptas ipsam!</p>
            </div>
        </div>
    )
}

export default Preview