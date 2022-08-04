import Image from "next/image";
import { useRouter } from "next/router";

export default function Home({ items }) {
  const router = useRouter();
  return (
    <>
      <p className="text-black font-bold text-[25px] bg-gray-300 pt-6 px-4">
        Dummy Json Api
      </p>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 bg-gray-300 p-5">
        {items.products?.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              router.push(`/dummyjson/${item.id}`);
            }}
            className="flex flex-col w-60 h-65 rounded-lg bg-black transition-all ease-in-out delay-150 hover:translate-y-0 hover:scale-110"
          >
            <Image
              src={item.thumbnail}
              alt="Picture of the author"
              width={200}
              height={200}
              className="rounded-t-md"
            />
            <div className="flex flex-col justify-center items-center p-2">
              <p className="text-white font-medium text-lg">{item.title}</p>
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
  const res = await fetch("https://dummyjson.com/products");
  const json = await res.json();

  return {
    props: {
      items: json,
    },
    revalidate: 10,
  };
}
