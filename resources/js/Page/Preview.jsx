const Preview = (data) => {
    const {pageTitle, colorset, sections} = data;
    return (
        <div className="preview">
            <nav className="preview__nav">
                {sections&&sections.map ((section, i)=> (
                <a className={i===0?"preview__anchor--selected":className="preview__anchor"} href="">{section}</a>
                ))}
            </nav>
            <header className="preview__header"><h1 className="preview__h1">{pageTitle&&pageTitle}</h1></header>
            <div className="preview__body"><h2 className="preview__h2">{sections&&sections[0]}</h2>
                <h3 className="preview__h3">Article header</h3>
                <p className="preview__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic aliquam perferendis sint ullam vitae, iste atque assumenda, explicabo cumque inventore illum expedita doloremque, sequi accusantium architecto quisquam voluptas ipsam!</p>
            </div>
        </div>
    )
}

export default Preview