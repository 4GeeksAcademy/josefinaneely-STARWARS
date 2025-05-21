


import { useStore } from "../store";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const Home = () => {
    const { state, dispatch } = useStore();

    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!!</h1>
            <p>
                <img src={rigoImageUrl} />
            </p>
        </div>
    );
};