import { Button, Card, Input, Textarea, useSelect } from "@nextui-org/react"
import useCrud from "../../hooks/usecrud.js"; 
import { useSelector } from "react-redux";

const FormList = () => { 
    const { setItemName, setOptionalNotes, setQuantity, setTags, post_list } = useCrud();
   
    return ( 
        <section>
            <div className="flex justify-between">
                <div className="flex place-items-center">
                    <div>
                        <p className="text-3xl text-center my-2">Shop Listing <span className="text-[#ffafcc]">Information</span></p>
                    <Card className="w-[30dvw] p-4 border-2">
                    <Input type="text" label="name" onChange={e => setItemName(e.target.value)}/>
                    <Input type="number" label="Quantity" className="my-4" onChange={e => setQuantity(e.target.value)}/>
                    <Input type="text" label="Tags" className="mb-4" onChange={e => setTags(e.target.value)}/>
                    <Textarea 
                        label="Optional Notes"
                        placeholder="Add your optional notes here..."
                        onChange={e => setOptionalNotes(e.target.value)}
                        
                    />
                    <div className="flex justify-center">
                        <Button className="bg-[#ffafcc] px-[10rem] text-white shadowed-btn my-4" onClick={post_list}>Submit</Button>
                    </div>
                </Card>
                    </div>
                
                </div>
                
                <div className="form-bg-img h-[85dvh] w-[50dvw] rounded-md">
                    <div className="bg-text h-[100%] text-white flex justify-center place-items-center">
                        <div>
                        <p className="text-3xl">Shop Till You Drop (Info, Please!)</p>
                        <p>Spill the beans on your shop so we can make it look fabulous!</p>
                        </div>


                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormList