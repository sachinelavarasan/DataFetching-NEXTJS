import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-300 p-5">
      <p
        className="text-black cursor-pointer"
        onClick={() => {
          router.push("dummyjson");
        }}
      >
        Dummy Json Api
      </p>
      <p
        className="text-black cursor-pointer mt-5"
        onClick={() => {
          router.push("fakestoreapi");
        }}
      >
        Fake Store Api
      </p>
    </div>
  );
}
