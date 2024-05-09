
import Image from "next/image";
import { PedidosRecentes } from "./conponents/PedidosRecentes";

export default function Home() {
  return (
   <main>
    <div className="bg-white m-5">
    <PedidosRecentes/>
    </div>
   </main>
  );
}
