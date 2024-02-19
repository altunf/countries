"use client";
import { useSearchContext } from "@/context/searchContext";
import { useEffect } from "react";
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

  const clr1 = "bg-slate-500";
  const clr2 = "bg-red-500";
  const bgClr = selectedItem === id ? (colorChange === true ? clr1 : clr2) : "";
  const imgSrc = `https://flagpedia.net/data/flags/h120/${country?.code.toLowerCase()}.png`;

  useEffect(() => {
    setSelectedItem(result?.length - 1);
  }, [paginate, data]);

  const handleClick = () => {
    setColorChange(!colorChange);
    setSelectedItem(id);
  };

  return (
    <div>
      <Card className={`${bgClr} cursor-pointer`} onClick={handleClick}>
        <CardHeader>
          <CardTitle className="flex m-2 h-36">
            <Image src={imgSrc} width={224} height={100} alt={country?.name} />
          </CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
