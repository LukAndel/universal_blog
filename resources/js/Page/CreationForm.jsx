import {useEffect, useState} from 'react';
import axios from 'axios';
import Preview from './Preview';

const CreationForm = () => {

    const [formValues, setFormValues] = useState({
        colorset: '',
        pageTitle: '',
        sections: [],
        fb_uid: ''
    });
    
    const fetchData = async () => {
        const response = await axios.get("/api/page-creation/data");
            console.log(response.data.data)   
        setFormValues(response.data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);


    
    
    
    // if (data !== null) {
    // const {colorset, pageTitle, sections, fb_uid} = data}


    const [customInput, setCustomInput] = useState("");
    const handleCustom = (e) => {
        setCustomInput(e.target.value)
    }
    const [customSections, setCustomSections] = useState([]);
    const addSection = () => {
       setCustomSections(arr=>[...arr, customInput])
    }

    
    const handleCheck = (e) => {

            if (e.target.checked) {
                const dataString = e.target.value;
                const id = dataString.split('||')[0]
                const name = dataString.split('||')[1]
                const newRecord = {
                    id: id,
                    name: name
                }
                console.log(newRecord)  


                // const updatedList = [...formValues.sections, e.target.value];

                // setFormValues({ ...formValues, sections: updatedList });
            } else {
                const updatedList = formValues.sections?.filter((element) => element !== e.target.value);

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
        // console.log(response_data);
        // }
        // catch(error) {
        // console.log(error); // information about the error
        // console.log(error.response); // the response object from the failed request
        // }
        
    };

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
                    <br/>
                    <label>A</label>
                    <input type="radio" name="colorset" value="1" checked={formValues.colorset == "1"} onChange={(e)=> handleChange(e)} />
                    <br/>
                    <label>B</label>
                    <input type="radio" name="colorset" value="2" checked={formValues.colorset == "2"} onChange={(e)=> handleChange(e)} />
                    <br/>
                    <label>C</label>
                    <input type="radio" name="colorset" value="3" checked={formValues.colorset == "3"} onChange={(e)=> handleChange(e)} />
                </div>
                <br/>
                <div className='sections--selection'>
                    <label>Choose sections</label>
                    <br/>
                    <label>Home</label>
                    <input type="checkbox" value="1||Home" onChange={handleCheck}/>
                    <label>Categories</label>
                    <input type="checkbox" value="2||Categories" onChange={handleCheck}/>
                    <label>About</label>
                    <input type="checkbox" value="3||About" onChange={handleCheck}/>
                    <label>Contact</label>
                    <input type="checkbox" value="4||Contact" onChange={handleCheck}/>
                    {
                        customSections && customSections.map((section, i)=> (
                            <div className='selections--selector' key={i}>
                                <label>{section}</label>
                                <input type="checkbox" value={section} onChange={handleCheck}/>
                            </div>                   
                        ))
                    }
                    <br/>
                    <label>Add your own section: </label>
                    <input type="text" value={customInput} onChange={handleCustom} />
                    <button type="button" onClick={addSection} className="btn">Add</button>
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
            {/* <Preview data={formValues}/> */}
        </div>
    )
}
export default CreationForm
