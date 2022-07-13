import {useEffect, useState} from 'react';
import axios from 'axios';
import Preview from './Preview';

const CreationForm = ({pageTitle = null, colorset = null}) => {
    const [values, setValues] = useState({
        colorset: '',
        pageTitle: '',
        sections: [],
        fb_uid: ''
    });
    const [checked, setChecked] = useState([]);
    const [customInput, setCustomInput] = useState("");
    const handleCustom = (e) => {
        setCustomInput(e.target.value)
    }
    const [customSections, setCustomSections] = useState([]);
    const addSection = () => {
       setCustomSections(arr=>[...arr,customInput])
    }

    
    const handleCheck = (e) => {
        var updatedList = [...checked];
            if (e.target.checked) {
                updatedList = [...checked, e.target.value];
            } else {
                updatedList.splice(checked.indexOf(e.target.value), 1);
            }
        setChecked(updatedList);
  };

    const handleChange = (e) => {

    setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
                sections: checked,
            };
        });
    };
    const [showFB, setShowFB] = useState(false)
    const showFBInput = () => {
        setShowFB(!showFB)
    }


    // useEffect(() => {

    //     if (pageTitle && colorset) {

    //         setValues({ ...values, pageTitle, colorset })

    //     }

    // }, [pageTitle, colorset])
    console.log(customSections)

    console.log(values)

    return (
        <>
        <form action="" method="post">
            <label>Name of your page: </label>
            <input type="text" name="pageTitle" value={values.pageTitle} onChange={handleChange}/>  
            <br/>
            <br/>
            <div className='colorset--selection'>
                <label>Colorset</label>
                <br/>
                <label>A</label>
                <input type="radio" name="colorset" value="A" checked={values.colorset === "A"} onChange={(e)=> handleChange(e)} />
                <br/>
                <label>B</label>
                <input type="radio" name="colorset" value="B" checked={values.colorset === "B"} onChange={(e)=> handleChange(e)} />
                <br/>
                <label>C</label>
                <input type="radio" name="colorset" value="C" checked={values.colorset === "C"} onChange={(e)=> handleChange(e)} />
            </div>
            <br/>
            <div className='sections--selection'>
                <label>Choose sections</label>
                <br/>
                <label>Home</label>
                <input type="checkbox" value="Home" onChange={handleCheck}/>
                <label>Categories</label>
                <input type="checkbox" value="Categories" onChange={handleCheck}/>
                <label>About</label>
                <input type="checkbox" value="About" onChange={handleCheck}/>
                <label>Contact</label>
                <input type="checkbox" value="Contact" onChange={handleCheck}/>
                {customSections && customSections.map((section, i)=> (
                    <div className='selections--selector' key={i}>
                        <label>{section}</label>
                        <input type="checkbox" value={section} onChange={handleCheck}/>
                    </div>                   
                ))}
                <br/>
                <label>Add your own section: </label>
                <input type="text" value={customInput} onChange={handleCustom} />
                <button type="button" onClick={addSection} className="btn">Add</button>
            </div>
            <br/>
                <button type="button" onClick={showFBInput} className="btn facebook">Enable Facebook comments</button>
            {showFB &&(
            <div className='fb_uid'>
                <p><em>If you want to use Facebook comments under selected articles, you need to provide user id to be able to manage them. You can find your own <a target="_blank" href='https://lookup-id.com'>here</a>.</em></p>
                <label>Facebook User ID</label>
                <input type="text" value={values.fb_uid} onChange={handleChange}/>
            </div>)}
            <br/>
            <br/>
            <button className="btn">Create</button>            
        </form>
        <Preview data={values}/>
        </>
    )
}
export default CreationForm