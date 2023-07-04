import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import Header from "./Header";

const Item = () => {
    let {id} = useParams();
    id = +id.slice(1); 
    const data = useSelector(state => state.data);
    const product = data.filter((product) => product.id === +id)[0];
    console.log(product);
    return (
        <>
        <Header>
        <Link to="/">Home</Link>
        </Header>
        
 
     <div id="itemDetails">
        
        <div className="item">
        <h1>Details page for post with ID: {product.id}</h1>
        <img style={{borderRadius: "20px"}} src={`https://picsum.photos/200?random=${product.id}`} alt="i"/>
      
        <h1>User ID: {product.id}</h1>
        <h3>Title: <span style={{fontSize: "18px", fontWeight: "200"}}>{product.title}</span></h3>
        <h3>Body: <span style={{fontSize: "18px", fontWeight: "200"}}>{product.body}</span></h3>
    </div>
    </div>  
    </>
    )
}

export default Item;