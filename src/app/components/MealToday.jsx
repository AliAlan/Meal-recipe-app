import Image from "next/image";

export const MealToday = ({ data }) => {
  return (
    <div className="flex">
      <Image
        className="border"
        width={290}
        height={290}
        src={data.image}
      ></Image>
      {data.title}
    </div>
  );
};
