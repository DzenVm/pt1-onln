import { NextResponse } from "next/server";
import { casinos } from "@/lib/casinos";

// Rota de "saída" para o operador. Como as marcas são fictícias, reenviamos
// o utilizador para a ficha na página inicial. Numa implementação real, aqui
// colocaria o link de afiliado do operador.
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const exists = casinos.some((c) => c.id === id);
  const target = exists ? `/#casinos` : `/`;
  return NextResponse.redirect(new URL(target, _req.url));
}
