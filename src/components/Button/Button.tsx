const Button = () => {
    return (
        <button onClick={() => console.log("is clicked")} style={{color: "black", backgroundColor:"red"}}>
            Click here
        </button>
    )
}

export default Button;