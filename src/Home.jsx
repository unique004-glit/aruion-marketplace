import Logo from "./aruionj.png"

export default function Home() { 

    return (
        <>
            <section className="flex justify-center items-center  p-4">
                <div className="flex gap-3 p-4">
                    <img src={Logo} alt="Logo" />
                    <span className="text-md font-bold">A Better Way To Connect</span>
                </div>
            </section>

        </>
    )
}