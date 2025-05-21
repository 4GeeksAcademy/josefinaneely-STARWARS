import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Detalles = () => {
    const { tipo, id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.swapi.tech/api/${tipo}/${id}`)
            .then(res => res.json())
            .then(result => {
                setData(result.result.properties);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [tipo, id]);

    if (loading) return <div className="container mt-5">Cargando...</div>;
    if (!data) return <div className="container mt-5">No hay datos.</div>;

    return (
        <div>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body text-center">
                    
                                       <img src={`https://placehold.co/600x400/blue/white?text=${data.name}`} className="img-fluid" alt={data.name} />
                        <p className="card-text mt-3">
                  
                        </p>
                    </div>
                </div>

                <table className="table table-bordered mt-4">
                    <tbody>
                        {Object.entries(data).map(([key, value]) => (
                            <tr key={key}>
                                <th>{key}</th>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};