import React from 'react';

function OtherPage() {

    const [dataState, setDataState] = React.useState("loading...");

    fetch("/api/getdata").catch((err) => {
        console.error(err);
    }).then(async (a) => {
        const data = await a.json();
        
        console.log("data", data);
        setDataState(data.theData);
    });

    return (
        <div>
            This is the other page.
            <div>Here is some data: {dataState}</div>
        </div>
    )
}

export default OtherPage;
