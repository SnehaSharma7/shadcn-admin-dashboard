import React from "react";

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export default function SalesCard(props: SalesProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="rounded-full h-12 w-12 p-1 bg-gray-100">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${props.name}`}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap w-[120px] sm:w-auto text-gray-400 ">
            {props.email}
          </div>
        </div>
      </section>
      <div>{props.saleAmount}</div>
    </div>
  );
}
