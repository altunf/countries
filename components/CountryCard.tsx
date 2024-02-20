"use client";
import { useSearchContext } from "@/context/searchContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CountryCard = ({ country, id }: any) => {
  const {
    data,
    paginate,
    selectedItem,
    setSelectedItem,
    colorChange,
    setColorChange,
    result,
  }: any = useSearchContext();
  const [count, setCount] = useState(0);
  let bgClr =
    selectedItem === id && count != 1
      ? colorChange === true
        ? "bg-orange"
        : "bg-violet"
      : "";
  const imgSrc = `https://flagpedia.net/data/flags/h120/${country?.code.toLowerCase()}.png`;

  useEffect(() => {
    setSelectedItem(result?.length - 1);
  }, [paginate, data]);

  const handleClick = () => {
    setColorChange(!colorChange);
    selectedItem === id && setCount(count + 1);
    console.log(count);

    if (count == 1) {
      setCount(0);
    }
    setSelectedItem(id);
  };

  return (
    <div>
      <Card
        className={`${bgClr} cursor-pointer max-w-64 min-w-64  h-96 max-h-96 min-h-96`}
        onClick={handleClick}
      >
        <CardHeader>
          <CardTitle className="flex m-2 h-36">
            <Image src={imgSrc} width={224} height={100} alt={country?.name} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="break-all  	">
            <i>Name : </i> {country?.name}
          </p>
        </CardContent>
        <CardContent>
          <p className="break-all  ">
            {" "}
            <i>Continent : </i> {country?.continent?.name}
          </p>
        </CardContent>
        <CardFooter>
          <p className="break-all  ">
            <i>Language : </i> {country?.languages[0]?.name}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
