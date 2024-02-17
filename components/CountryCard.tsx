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

export const CountryCard = ({ country }: any) => {
  let imgSrc = `https://flagpedia.net/data/flags/h120/${country?.code.toLowerCase()}.png`;
  return (
    <div>
      <Card>
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
