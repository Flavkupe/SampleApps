import React from 'react';

function OtherPage() {

    const [dataState, setDataState] = React.useState("loading...");

    React.useEffect(() => {
        fetch("/api/getdata").catch((err) => {
            console.error(err);
        }).then((response) => {
            response.json().then((result) => {
                console.log("data", result);
                setDataState(result.theData);
            })
        });
    }, []);


    function whenButtonIsClicked() {
        const element = document.getElementById("myinput");
        const value = element.value;
        console.log("Button was clicked: ", value);

        const data = { mydata: value };

        fetch("/api/senddata", {
            method: "POST", // this one is optional for now
            headers: {
                'Content-Type': 'application/json'// this one is optional for now
            },
            body: JSON.stringify(data), // this one is required
        });
        // fetch("/api/senddata");
    }

    return (
        <div>
            This is the other page.
            <div>Here is some data: 
                <div className={"data-text"}>
                    {dataState}
                </div>
            </div>
            <input id={"myinput"}></input>
            <button onClick={() =>  { whenButtonIsClicked() } }>
                Send data
            </button>
        </div>
    )
}

export default OtherPage;
