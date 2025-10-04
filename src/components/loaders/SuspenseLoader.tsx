

export default function SuspenseLoader() {


    return (


        <div className="flex items-center justify-center h-screen bg-white">

            <img
                src="/Logo-dark.png"
                alt="Company Logo"
                loading="lazy"
                className="w-40 h-auto animate-pulse scale-110 transition-transform duration-700 ease-in-out"
            />

        </div>


    )


}
