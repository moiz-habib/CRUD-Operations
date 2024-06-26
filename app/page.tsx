import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-4  w-screen justify-center items-center h-screen">
      <Button asChild>
        <Link href="/employees">Create Employees</Link>
      </Button>
    </div>
  );
};

export default Home;
