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

    return (
        <div>
            This is the other page.
            <div>Here is some data: 
                <div className={"data-text"}>
                    {dataState}
                </div>
            </div>
        </div>
    )
}

export default OtherPage;
