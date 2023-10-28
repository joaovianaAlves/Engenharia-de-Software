"use client";

import { Product } from "@/data/data";
import { useEffect, useState } from "react";

export default function Product({ params }: { params: { id: number } }) {
  const [product, setProduct] = useState<Product>({
    id: 2,
    name: "joao",
    price: 199,
  });

  useEffect(() => {
    fetch("/api/products/getById", {
      method: "PUT",
      mode: "cors",
      cache: "default",
      body: JSON.stringify({
        id: params.id,
      }),
    }).then(async (res) => setProduct(await res.json()));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black">
            <th className="border border-black">
              <th className="min-w-[100px]">{product.name}</th>
            </th>
            <th className="border border-black">
              <th className="min-w-[100px]">{product.id}</th>
            </th>
            <th className="border border-black">
              <th className="min-w-[100px]">{product.price}</th>
            </th>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
