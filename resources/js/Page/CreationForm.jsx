import {useEffect, useState} from 'react';
import axios from 'axios';
import Preview from './Preview';

const CreationForm = () => {
    const [defaultSections, setDefaultSections] = useState([])
    const [defaultColorsets, setDefaultColorsets] = useState([])
    const [formValues, setFormValues] = useState({
        colorset: '',
        pageTitle: '',
        sections: [],
        fb_uid: ''
    });
    
    const fetchData = async () => {
        const response = await axios.get("/api/page-creation/data");
            // console.log(response.data.data)   
        setFormValues(response.data.data);
    };

    const fetchSections = async () => {
        const response = await axios.get("/api/page-creation/sections");
        // console.log(response.data)
        setDefaultSections(response.data)
    }

    const fetchColorsets = async () => {
        const response = await axios.get("/api/page-creation/colorsets");
        // console.log(response.data)
        setDefaultColorsets(response.data)
    }

    useEffect(() => {
        fetchData();
        fetchSections();
        fetchColorsets();
    }, []);



    // const [customInput, setCustomInput] = useState("");
    // const handleCustom = (e) => {
    //     setCustomInput(e.target.value)
    // }
    // const [customSections, setCustomSections] = useState([]);
    // const addSection = () => {
    //    setCustomSections(arr=>[...arr, customInput])
    // }

    
    const handleCheck = (e) => {
            
                // const dataString = e.target.value;
                // const id = Number(dataString.split('||')[0])
                // const name = dataString.split('||')[1]
                const newRecord = {
                    name: e.target.value,
                }
                // console.log(newRecord)
                
            if (e.target.checked) {

                const updatedList = [...formValues.sections, newRecord];

                setFormValues({ ...formValues, sections: updatedList });
            } else {
                const updatedList = formValues.sections?.filter((element) => element['name'] !== newRecord['name']);

                setFormValues({ ...formValues, sections: updatedList });
            }
            
        
    };

    const handleChange = (e) => {

        setFormValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
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
    // console.log(customSections)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try
        // {
        const response = await axios.post("/page-creation", formValues);
        const response_data = response.data;
        console.log(response_data);
        // }
        // catch(error) {
        // console.log(error); // information about the error
        // console.log(error.response); // the response object from the failed request
        // }
        
    };
    // console.log(formValues)  

    // console.log(values)
    return (
        <div className='creation'>
            <form className='form' onSubmit={handleSubmit}>
                <label>Name of your page: </label>
                <input type="text" name="pageTitle" value={formValues.pageTitle} onChange={handleChange}/>  
                <br/>
                <br/>
                <div className='colorset--selection'>
                    <label>Colorset</label>
                    {defaultColorsets.map((colorset, i)=>(
                        <span className='colorsetbox' key={i}><input type="radio" name="colorset" value={i+1} checked={formValues.colorset == i+1} onChange={(e)=> handleChange(e)} />
                        <div className='colorpickbox' style={{backgroundColor:colorset.color_1}}></div>
                        <div className='colorpickbox' style={{backgroundColor:colorset.color_2}}></div>
                        <div className='colorpickbox' style={{backgroundColor:colorset.color_3}}></div>
                        <div className='colorpickbox' style={{backgroundColor:colorset.color_4}}></div>
                        </span>
                    ))}

                    {/* <br/>
                    <label>A</label>
                    <input type="radio" name="colorset" value="1" checked={formValues.colorset == "1"} onChange={(e)=> handleChange(e)} />
                    <br/>
                    <label>B</label>
                    <input type="radio" name="colorset" value="2" checked={formValues.colorset == "2"} onChange={(e)=> handleChange(e)} />
                    <br/>
                    <label>C</label>
                    <input type="radio" name="colorset" value="3" checked={formValues.colorset == "3"} onChange={(e)=> handleChange(e)} /> */}
                </div>
                <br/>
                <div className='sections--selection'>
                    <label>Choose sections</label>
                    <br/>
                    {defaultSections.map((defaultSection, i)=>(
                        <div className='section' key={i}>
                        <label>{defaultSection.name}</label>
                        <input type="checkbox" value={defaultSection.name}
                        checked={!!formValues?.sections?.filter((element) => element.name === defaultSection.name)?.length}
                        onChange={handleCheck}/>
                        </div>
                    ))}

                    


                    {/* <label>Home</label>
                    <input type="checkbox" value="1||Home" onChange={handleCheck}/>
                    <label>Categories</label>
                    <input type="checkbox" value="2||Categories" onChange={handleCheck}/>
                    <label>About</label>
                    <input type="checkbox" value="3||About" onChange={handleCheck}/>
                    <label>Contact</label>
                    <input type="checkbox" value="4||Contact" onChange={handleCheck}/> */}
                    {/* {
                        customSections && customSections.map((section, i)=> (
                            <div className='selections--selector' key={i}>
                                <label>{section}</label>
                                <input type="checkbox" value={section} onChange={handleCheck}/>
                            </div>                   
                        ))
                    } */}
                    {/* <br/>
                    <label>Add your own section: </label>
                    <input type="text" value={customInput} onChange={handleCustom} />
                    <button type="button" onClick={addSection} className="btn">Add</button> */}
                </div>
                <br/>
                    <button type="button" onClick={showFBInput} className="btn facebook">Enable Facebook comments</button>
                {showFB && (
                <div className='fb_uid'>
                    <p><em>If you want to use Facebook comments under selected articles, you need to provide user id to be able to manage them. You can find your own <a target="_blank" href='https://lookup-id.com'>here</a>.</em></p>
                    <label>Facebook User ID</label>
                    <input type="text" value={formValues.fb_uid} onChange={handleChange}/>
                </div>)}
                <br/>
                <br/>
                <button type='submit' className="btn">Create</button>            
            </form>
            <Preview data={formValues}/>
        </div>
    )
}
export default CreationForm
