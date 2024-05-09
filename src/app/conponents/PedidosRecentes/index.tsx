"use client";

import { Session } from "inspector";
import { use, useState } from "react"

export function PedidosRecentes() {
    const [pedidos, setPedidos] = useState([
        { id: '1', nome: 'felipe freitas', qtd: '', prato: 'REFRIGERANTE', horario: '14>30', status: 'finalizado' },
        { id: '2', nome: 'felipe freitas', qtd: '', prato: 'REFRIGERANTE', horario: '14>30', status: 'finalizado' },
        { id: '3', nome: 'felipe freitas', qtd: '', prato: 'REFRIGERANTE', horario: '14>30', status: 'finalizado' }
    ])

    return (
        <section>
      <h2 className="text-xl font-semibold">
        Pedido Recencentes
      </h2>
      {pedidos.map((pedido)=> (
<article key={pedido.id} className="m-7 border rouded-2xl p-3">
    <div className="flex flex-rowbjustify-between ml-4 mr-4">
        <h3>{pedido.nome}</h3>
        <p className="font-bold">{pedido.horario}PM</p>
    </div>
    <div className="m-7 bolder rounder-2xl p-3">
        <h3>{pedido.qtd}</h3>
        <p>
            {pedido.status}
        </p>
    </div>
</article>
      ))}
        </section>

    )
}