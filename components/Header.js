import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className="h-20 bg-white top-0 left-0 right-0 flex items-center justify-center">
      <div className="flex justify-between w-screen px-6">
        <p
          className="text-black font-bold text-[25px] cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </p>
        <p className="text-black font-bold text-[25px]">Header</p>
        <div />
      </div>
    </div>
  );
}
