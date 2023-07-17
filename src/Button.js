import { Link } from "react-router-dom";

const Button = ({text, route}) =>{
    return (
        <>
            <div className="Verticalycenter">
                <button
                        className="playAI homepageButton"
                        onClick={() => {}}
                    > <Link to={"/" + route}> {text} </Link> </button>
            </div>
        </>
    )
}

export default Button;