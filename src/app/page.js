import Image from "next/image";
import { Modak, Space_Grotesk } from "@next/font/google";
import styles from "./page.module.css";
import { MealToday } from "./components/MealToday";

const modak = Modak({ subsets: ["latin"], weight: ["400"] });
const groteks = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
async function fetchRandomMeal() {
  const res = await fetch(
    "https://api.unsplash.com/search/photos/?page=1&query=kuş&client_id=SKUo7MPw2xgZCQsNsxNO1HXb1jpB1ceKmAH2CwOfxgQ",
    {
      next: { revalidate: 100000 },
    }
  );
  return await res.json();
}
export default async function Home() {
  const data = fetchRandomMeal();
  console.log("ali");
  return (
    <main style={{ height: "90vh" }} className={groteks.className}>
      <section className="grid grid-cols-2 px-4 py-4 max-w-7xl mx-auto h-full w-full">
        <section className=" h-full p-4">
          <h1
            className={`text-9xl leading text-blue ${modak.className} relative`}
          >
            FOOD RECIPES
            <Image
              className="absolute top-0 right-6 -z-10"
              width={154}
              height={154}
              src="/star.png"
            ></Image>
          </h1>
          <MealToday result={data} />
        </section>
        <section className="flex flex-col  h-full">
          <article className="h-full w-full bg-black-500">1</article>
          <article className="bg-orange-500 h-full w-full ">2</article>
        </section>
      </section>
    </main>
  );
}
