import { Card, Input, Textarea, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { get_single_item, update_item } from "../../reducers/crudSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateForm() {
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.crudSliceReducer);
  const { id } = useParams();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tags, setTags] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (item.status === "idle") {
      dispatch(get_single_item(id));
    }
  }, [dispatch, id, item.status]);

  useEffect(() => {
    if (item.value) {
      setName(item.value.name || "");
      setQuantity(item.value.itemQuantity || "");
      setTags(item.value.tag || "");
      setNotes(item.value.optional_notes || "");
    }
  }, [item]);

  function update() {
    const updatedItem = {
      id,
      name,
      itemQuantity: quantity,
      tag: tags,
      optional_notes: notes,
    };
    console.log("Updated Item:", updatedItem);
    dispatch(update_item(updatedItem));
  }

  return (
    <section>
      <div className="flex justify-center mt-[12rem]">
        <Card className="p-4 w-[30rem]">
          <p className="pb-5 text-center text-2xl">
            Item to update <span className="text-[#ffafcc]"> {name} </span>
          </p>
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="my-2"
          />
          <Input
            label="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mb-2"
          />
          <Textarea
            label="Optional notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="mt-4 flex justify-center">
            <Button
              onClick={update}
              className="bg-[#ffafcc] shadowed-btn text-white px-[5rem]"
            >
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
