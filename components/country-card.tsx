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

export const CountryCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <Image src="/example.webp" height={100} width={100} alt="example" />
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
