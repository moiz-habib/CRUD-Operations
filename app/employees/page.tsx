import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Employee = () => {
  return (
    <div className="flex flex-col gap-4  w-screen justify-center items-center h-screen">
      <div className="text-4xl font-bold text-center">
        CRUD operations using NextJs 14, Prisma, Postgre1SQL
      </div>
      <Button asChild>
        <Link href="/employees/create">Create</Link>
      </Button>
    </div>
  );
};

export default Employee;
