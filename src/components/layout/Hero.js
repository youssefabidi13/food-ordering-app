import Image from "next/image";
import Right from "./icons/Right";
export default function Hero() {
  return (
    <section className="hero ">
      <div className="py-8">
        <h1 className="text-4xl font-semibold ">
          Everything <br />
          is better <br />
          with a&nbsp;<span className="text-primary">Pizza</span>
        </h1>
        <p className="my-4 text-grey-500 text-sm">
          Pizza is the missing piece that makes every day complete , a simple
          yet delicious joy in life
        </p>
        <div className="flex gap-4  text-sm ">
          <button className="bg-primary items-center uppercase flex gap-2 rounded-full text-white px-4 py-2 ">
            Order now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
