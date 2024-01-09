
// for removing code duplicacy, props is used as generalization instead of 3 concept class.
function Concept(props){
    return(

<li className="concept">
          <img src={props.image} alt={props.title} />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          
        </li>
    )
}
export default Concept;

