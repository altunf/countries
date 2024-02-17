"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CountryCard = ({ country, isSelected }: any) => {
  let imgSrc = `https://flagpedia.net/data/flags/h120/${country?.code.toLowerCase()}.png`;

  let bgClr;

  bgClr = isSelected ? "bg-slate-500" : "";

  return (
    <div>
      <Card className={`${bgClr}`}>
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
