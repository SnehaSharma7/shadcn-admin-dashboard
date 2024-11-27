import PageTitle from "./components/PageTitle";
import Card, { CardContent, CardProps } from "./components/Card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import BarChart from "./components/BarChart";
import SalesCard, { SalesProps } from "./components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    icon: DollarSign,
    amount: "$25000.34",
    description: "+18% from last month",
  },
  {
    label: "Subscriptions",
    icon: Users,
    amount: "$1500",
    description: "+180% from last month",
  },
  {
    label: "Sales",
    icon: CreditCard,
    amount: "$35758",
    description: "+14% from last month",
  },
  {
    label: "Active Now",
    icon: Activity,
    amount: "+439",
    description: "+342 from last month",
  },
];
const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col w-full gap-5 ">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            label={d.label}
            icon={d.icon}
            amount={d.amount}
            description={d.description}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 transition-all gap-4">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>

        <CardContent className="flex justify-between gap-3">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 340 customers this month
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              name={d.name}
              email={d.email}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
