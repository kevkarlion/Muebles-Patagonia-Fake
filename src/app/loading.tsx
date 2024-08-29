import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
            width={60}
            height={60}
            alt="spinner"
            src='loader/reload.svg'
      />
    </div>
  );
}

 