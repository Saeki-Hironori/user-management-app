import { FC, memo } from "react";

export const Home: FC = memo(() => {
  console.log("Homeページだよ");
  return <p>Homeページです</p>;
});
