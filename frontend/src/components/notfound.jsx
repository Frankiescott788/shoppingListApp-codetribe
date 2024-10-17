import { Button, Image } from "@nextui-org/react"
import not_found from '../assets/Pictures/3d-rendering-universe-icon_23-2151182334-removebg-preview.png'
import { useNavigate } from "react-router-dom"

const Notfound = () => {
    const redirect = useNavigate()
    return (
        <section className="flex justify-center place-items-center pt-[10dvh]">
            <div>
                <Image 
                    src={not_found}
                />
                <div className="text-center">
                <Button onClick={() => redirect('/')} color="danger">Back to Home page</Button>

                </div>
            </div>
        </section>
    )
}

export default Notfound