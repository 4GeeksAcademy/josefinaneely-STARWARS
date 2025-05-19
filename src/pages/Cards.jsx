
import { Tarjetapersonajes } from "../components/Tarjetapersonajes"
import { Tarjetaplanetas } from "../components/Tarjetaplanetas"
import { Tarjetavehiculos } from "../components/Tarjetavehiculos";

export const Cards  = () => {

return (
<div>
<h1 className="text-left text-2xl font-bold color-red text-danger p-3">Characters</h1>
<Tarjetapersonajes/>


<h1 className="text-left text-2xl font-bold text-danger mb-3 p-3">Planets</h1>
<Tarjetaplanetas/>

<h1 className="text-left text-2xl font-bold text-danger mb-3 p-3">Vehicles</h1>
<Tarjetavehiculos/>


</div>


);

};