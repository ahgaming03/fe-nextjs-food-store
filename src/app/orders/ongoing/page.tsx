import React from "react";
import CardBill from "@/app/ui/dashboard/orders/cardBill";

export default function Page() {
  return (
    <>
      <div className="space-y-2">
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
        <CardBill />
      </div>
    </>
  );
}
