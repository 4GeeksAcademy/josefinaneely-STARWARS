export const Detalles  = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title xl-2">Luke Skywalker</h5>
                        <img src="https://via.placeholder.com/800x600" className="img-fluid" alt="Imagen de Luke Skywalker" />
                        <p className="card-text mt-3">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.
                        </p>
                    </div>
                </div>

                <table className="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth Year</th>
                            <th>Gender</th>
                            <th>Height</th>
                            <th>Skin Color</th>
                            <th>Eye Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luke Skywalker</td>
                            <td>19BBY</td>
                            <td>male</td>
                            <td>172</td>
                            <td>fair</td>
                            <td>blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};