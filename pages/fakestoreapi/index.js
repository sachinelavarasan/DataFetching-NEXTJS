import Image from "next/image";
import { useRouter } from "next/router";

export default function Home({ items }) {
  const router = useRouter();
  return (
    <>
      <p className="text-black font-bold text-[25px] bg-gray-300 pt-6 px-4">
        Fake Store Api
      </p>
      <div className="items-center justify-center w-full grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 bg-gray-300 p-5">
        {items?.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              router.push(`/fakestoreapi/${item.id}`);
            }}
            className="flex flex-col w-60 h-65 rounded-lg bg-black "
          >
            <Image
              src={item.image}
              alt="Picture of the author"
              width={200}
              height={200}
              className="rounded-t-md"
            />
            <div className="flex flex-col justify-center items-center p-2">
              <p className="text-white font-medium text-lg text-ellipsis">
                {item.title}
              </p>
              <p className="text-white font-medium text-base">
                Rs {item.price} /-
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();

  return {
    props: {
      items: json,
    },
    revalidate: 10,
  };
}
