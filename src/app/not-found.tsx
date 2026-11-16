"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen bg-primary/10 flex justify-center items-center text-center">
      <div className="space-y-3">
        <div>
          <Image
            src="/404.png"
            alt="photo"
            width={500}
            height={500}
            className="w-75"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Oops</h2>
          <p className="text-gray-600">page not found</p>
        </div>

        <Button
          onClick={() => router.back()}
          className="cursor-pointer w-full rounded-sm bg-primary  text-white h-11"
        >
          Go back
        </Button>
      </div>
    </div>
  );
}
