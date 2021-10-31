import styles from "../../styles/Ninjas.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://haunted-mummy-29854.herokuapp.com/reviews");
  const data = await res.json();

  return {
    props: { reviews: data },
  };
};
const Ninjas = ({ reviews }) => {
  return (
    <div>
      <h1>default ninjas</h1>
      {reviews.map((review) => (
        <Link href={`/ninjas/${review.id}`} key={review.id}>
          <a className={styles.single}>
            <h3>{review.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
