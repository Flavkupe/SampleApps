
import React from 'react';

function MyComponent() {
    return (
        <div>
            {myValue}
            <div 
            onClick={onClick} 
            style={{color: "red"}}>
                Some text
            </div>
            
        </div>
    );
}

export default MyComponent;
