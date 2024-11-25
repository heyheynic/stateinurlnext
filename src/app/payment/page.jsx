import Image from "next/image";
const Page = async ({ searchParams }) => {
  const { color, size } = await searchParams;
  return (
    <main className="grid h-screen place-content-center">
      <div className="payment__items flex gap-4 outline-1 outline outline-black py-6 px-6 rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1598934475001-9dc696358f83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxjbG90aGluZyUyMHN0b3JlfGVufDB8fDB8fHww"
          alt="Clothing Store"
          width={200}
          height={200}
          className="min-w-[100px]"
        />
        <div className="">
          <p>{color}</p>
          <p>{size}</p>
        </div>
      </div>
    </main>
  );
};

export default Page;
