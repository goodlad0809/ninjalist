import Ninjas from ".";
import ReactMarkdown from "react-markdown";
export const getStaticPaths = async () =>{
    const res =  await fetch("https://haunted-mummy-29854.herokuapp.com/reviews");
    const data = await res.json();

    const paths = data.map( review =>{
        return {
            params: {id: review.id.toString()}
        }
    })
    return {
        paths:paths, fallback: false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res =  await fetch("https://haunted-mummy-29854.herokuapp.com/reviews/"+id);
    const data = await res.json();

    return{
        props: {review: data}
    }
}

const Details = ({review}) => {
    return ( 
        <div>
            <h1>Details Page - {review.title}</h1>
            <h2>{review.rating}</h2>
            <ReactMarkdown>{review.body}</ReactMarkdown>
        </div>
     );
}
 
export default Details;