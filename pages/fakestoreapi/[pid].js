import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";

export default function Home({ item }) {
  const router = useRouter();
  return (
    <div className="flex flex-col pt-12 pb-20 items-center bg-black">
      <div key={item?.id}>
        <Image
          src={item?.image}
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-2">
        <p className="text-white font-medium text-lg m-3">{item?.title}</p>
        <p className="text-white font-medium text-base m-3">
          Rs {item?.price} /-
        </p>

        <p className="text-white font-medium text-base capitalize m-3">
          {item?.category}
        </p>
      </div>
      <div className="flex flex-row items-center mb-3 bg-white p-2 rounded-md">
        <p className="text-bold font-bold text-base mr-3">Users rating : </p>
        <ReactStars
          count={5}
          value={item?.rating?.rate}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          edit={false}
        />
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { pid } = context.params;
//   const res = await fetch(`https://fakestoreapi.com/products/${pid}`);
//   const json = await res.json();

//   return {
//     props: {
//       item: json,
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  const paths = json.map((item) => ({
    params: {
      pid: `${item.id}`,
    },
  }));

  return {
    paths: paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.pid}`
  );
  const json = await res.json();

  return {
    props: {
      item: json,
    },
    revalidate: 10,
  };
}
