"use client";
import React from "react";
import PageTitle from "../components/PageTitle";
import { DataTable } from "../components/DataTable";
import { ColumnDef } from "@tanstack/react-table";

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export type Payment = {
  name: string;
  lastOrder: string;
  method: string;
  email: string;
};
const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            width={50}
            height={50}
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];
const data: Payment[] = [
  {
    name: "John deo",
    lastOrder: "2024-09-02",
    method: "PayPal",
    email: "john@test.com",
  },
  {
    name: "Leo Max",
    lastOrder: "2024-10-02",
    method: "Credit Card",
    email: "max@test.com",
  },
  {
    name: "Dua Lipa",
    lastOrder: "2024-10-02",
    method: "Gpay",
    email: "dua@test.com",
  },
  {
    name: "Max Dua",
    lastOrder: "2024-10-02",
    method: "Credit Card",
    email: "maxdua@test.com",
  },
  {
    name: "John deo",
    lastOrder: "2024-09-02",
    method: "PayPal",
    email: "john@test.com",
  },
  {
    name: "Leo Max",
    lastOrder: "2024-10-02",
    method: "Credit Card",
    email: "max@test.com",
  },
  {
    name: "Dua Lipa",
    lastOrder: "2024-10-02",
    method: "Gpay",
    email: "dua@test.com",
  },
  {
    name: "Max Dua",
    lastOrder: "2024-10-02",
    method: "Credit Card",
    email: "maxdua@test.com",
  },
  {
    name: "John deo",
    lastOrder: "2024-09-02",
    method: "PayPal",
    email: "john@test.com",
  },
  {
    name: "Leo Max",
    lastOrder: "2024-10-02",
    method: "Credit Card",
    email: "max@test.com",
  },
  {
    name: "Dua Lipa",
    lastOrder: "2024-10-02",
    method: "Gpay",
    email: "dua@test.com",
  },
  {
    name: "Max Dua",
    lastOrder: "2024-10-02",
    method: "Credit Card",
    email: "maxdua@test.com",
  },
  {
    name: "John deo",
    lastOrder: "2024-09-02",
    method: "PayPal",
    email: "john@test.com",
  },
  {
    name: "Leo Max",
    lastOrder: "2024-10-02",
    method: "Credit Card",
    email: "max@test.com",
  },
  {
    name: "Dua Lipa",
    lastOrder: "2024-10-02",
    method: "Gpay",
    email: "dua@test.com",
  },
  {
    name: "Max Dua",
    lastOrder: "2024-10-02",
    method: "Credit Card",
    email: "maxdua@test.com",
  },
];
