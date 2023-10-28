"use client";

import { Product } from "@/data/data";
import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products/getAll", {
      method: "GET",
      mode: "cors",
      cache: "default",
    }).then(async (res) => setProducts(await res.json()));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table>
        <thead>
          <tr>
            <th className="min-w-[100px]">Id</th>
            <th className="min-w-[100px]">Nome</th>
            <th className="min-w-[100px]">Preço</th>
            <th className="min-w-[100px]"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.id}</td>
              <td>{product.price}</td>
              <td>
                <Link href={`/product/${product.id}`}>Click</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
