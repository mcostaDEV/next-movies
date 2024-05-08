import { ClipLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="w-full h-full absolute top-0 left-0 brand-blue-dark flex justify-center items-center">
            <ClipLoader
                color="#ffffff"
                loading
                speedMultiplier={0}
            />
        </div>

    )
}

