import CreationForm from "./CreationForm";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        const response = await axios.get("/api/page-creation/data");
        setData(response.data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <CreationForm data={data} />
        </div>
    );
};

export default App;
