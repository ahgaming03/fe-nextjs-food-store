import CardBill from "@/app/ui/dashboard/orders/cardBill";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="space-y-2">
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
      </div>
    </>
  );
}
