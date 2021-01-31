



function Button(props) {
    let width = "200px";
    if (props.width) {
        width = props.width;
    }

    let name = "Button Name";
    if (props.name) {
        name = props.name;
    }

    return (
    
        <div style={{ 
            width: width,
            backgroundColor: "grey",
            borderRadius: "6px",
         }}>{name}</div>
    )
}
export default Button;