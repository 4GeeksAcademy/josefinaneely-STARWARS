import { useState, useEffect } from "react";
import { Tarjetapersonajes } from "../components/Tarjetapersonajes";
import { Tarjetaplanetas } from "../components/Tarjetaplanetas";
import { Tarjetavehiculos } from "../components/Tarjetavehiculos";

export const Cards = () => {
    const [personajes, setPersonajes] = useState([]);
    const [planetas, setPlanetas] = useState([]);
    const [vehiculos, setVehiculos] = useState([]);


    useEffect(() => {
        fetch("https://www.swapi.tech/api/people")
            .then(res => res.json())
            .then(async data => {
                const detalles = await Promise.all(
                    data.results.map(async (item) => {
                        const res = await fetch(item.url);
                        const detalle = await res.json();
                        return { ...item, ...detalle.result.properties };
                    })
                );
                setPersonajes(detalles);
            })
            .catch(err => console.error(err));
    }, []);


    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets")
            .then(res => res.json())
            .then(async data => {
                const detalles = await Promise.all(
                    data.results.map(async (item) => {
                        const res = await fetch(item.url);
                        const detalle = await res.json();
                        return { ...item, ...detalle.result.properties };
                    })
                );
                setPlanetas(detalles);
            })
            .catch(err => console.error(err));
    }, []);


    useEffect(() => {
        fetch("https://www.swapi.tech/api/vehicles")
            .then(res => res.json())
            .then(async data => {
                const detalles = await Promise.all(
                    data.results.map(async (item) => {
                        const res = await fetch(item.url);
                        const detalle = await res.json();
                        return { ...item, ...detalle.result.properties };
                    })
                );
                setVehiculos(detalles);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1
                className="text-left text-2xl font-bold color-red text-danger p-3"
                style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
            >
                Characters
            </h1>
            <div className="d-flex flex-wrap">
                {personajes.map((personaje) => (
                    <Tarjetapersonajes
                        key={personaje.uid}
                        name={personaje.name}
                        birthyear={personaje.birth_year}
                        haircolor={personaje.hair_color}
                        eyecolor={personaje.eye_color}
                        id={personaje.uid}
                    />
                ))}
            </div>

            <h1
                className="text-left text-2xl font-bold color-red text-danger p-3"
                style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
            >
                Planets
            </h1>
            <div className="d-flex flex-wrap">
                {planetas.map((planeta) => (
                    <Tarjetaplanetas
                        key={planeta.uid}
                        name={planeta.name}
                        population={planeta.population}
                        terrain={planeta.terrain}
                        id={planeta.uid}
                    />
                ))}
            </div>

           <h1
                className="text-left text-2xl font-bold color-red text-danger p-3"
                style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
            >
                Vehicles
            </h1>
            <div className="d-flex flex-wrap">
                {vehiculos.map((vehiculo) => (
                    <Tarjetavehiculos
                        key={vehiculo.uid}
                        name={vehiculo.name}
                        speed={vehiculo.max_atmosphering_speed}
                        material={vehiculo.material}
                        id={vehiculo.uid}
                    />
                ))}
            </div>
        </div>
    );
};