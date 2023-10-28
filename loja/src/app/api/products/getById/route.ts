import data from "@/data/data";
import { NextResponse } from "../../../../../node_modules/next/server";

export async function PUT(request: Request) {
  // Pega o Body
  const body: { id: number } = await request.json();

  //Verifica se o body possue um id
  if (body.id === undefined)
    //se nao retornar Bad Request
    return NextResponse.json("Bad Request", { status: 403 });

  //retorna o produtos pelo id definido
  return NextResponse.json(data.find((product) => product.id === +body.id));
}
