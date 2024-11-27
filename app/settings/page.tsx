"use client";
import React from "react";
import PageTitle from "../components/PageTitle";
import { DataTable } from "../components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { Settings } from "http2";

type Props = {};

export default function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export type Setting = {
  category: string;
  value: string | number | boolean;
};
export const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];
export const data: Setting[] = [
  {
    category: "Account",
    value: "true",
  },
  {
    category: "Notifications",
    value: "false",
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];