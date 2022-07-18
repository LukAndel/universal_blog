import CreationForm from "./CreationForm";

const App = (data) => {
    return (
        <div>
            {typeof data != "undefined" ? (
                <CreationForm data={data} />
            ) : (
                <CreationForm />
            )}
        </div>
    );
};

export default App;
