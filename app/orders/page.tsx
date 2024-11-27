"use client";
import React from "react";
import PageTitle from "../components/PageTitle";
import { DataTable } from "../components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { cn } from "@/lib/utils";

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export type Payment = {
  order: string;
  status: string;
  method: string;
  lastOrder: string;
};
const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed",
            "bg-red-200": row.getValue("status") === "Pending",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
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
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-02-20",
    method: "PayPal",
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2023-03-10",
    method: "Stripe",
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2023-04-05",
    method: "Venmo",
  },
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-02-20",
    method: "PayPal",
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2023-03-10",
    method: "Stripe",
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2023-04-05",
    method: "Venmo",
  },
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-02-20",
    method: "PayPal",
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2023-03-10",
    method: "Stripe",
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2023-04-05",
    method: "Venmo",
  },
];
