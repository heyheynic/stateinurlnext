"use client";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const colors = ["beige", "chestnut", "cream"];
  const sizes = ["xs", "s", "m", "l", "xl"];
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="grid h-screen grid-cols-[1fr,1fr] place-items-center px-6">
      <Image
        src="https://images.unsplash.com/photo-1598934475001-9dc696358f83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxjbG90aGluZyUyMHN0b3JlfGVufDB8fDB8fHww"
        alt="Clothing Store"
        width={400}
        height={400}
        className="min-w-[200px]"
      />
      <div className="selection__area grid gap-10 [&>*>h2]:pb-2">
        <div className="size__selection">
          <h2 className="font-bold text-lg">Choose your size:</h2>
          <ul className="flex gap-2 ">
            {sizes.map((size, index) => (
              <li key={index}>
                <Link
                  href={`?${createQueryString("size", size)}`}
                  className={`${
                    searchParams.get("size") == size &&
                    "bg-black text-white outline-2"
                  } py-1 px-2 rounded-md border border-black hover:outline-2 hover:outline transition-all duration-200 ease-in-out`}
                >
                  {size}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="color__selection ">
          <h2 className="font-bold text-lg">Choose your color:</h2>
          <ul className="flex gap-2 ">
            {colors.map((color, index) => (
              <li key={index}>
                <Link
                  href={`?${createQueryString("color", color)}`}
                  className={`${
                    searchParams.get("color") == color &&
                    "bg-black text-white outline outline-2"
                  } py-1 px-2 rounded-md border border-black hover:outline-2 hover:outline transition-all duration-200 ease-in-out`}
                >
                  {color}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/payment/?${searchParams}`}
          className=" w-fit border bg-black py-2 px-4 text-white rounded-lg hover:bg-white hover:text-black hover:outline hover:outline-1"
        >
          Go to payment
        </Link>
      </div>
    </div>
  );
}
