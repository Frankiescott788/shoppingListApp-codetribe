import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import useCrud from "../../hooks/usecrud.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { update_item } from "../../reducers/crudSlice.js";

const HomeDashboard = () => {
  const { get_lists, delete_items } = useCrud();
  const [cookies] = useCookies(["auth_token"]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("opaque");

  const [updateInputIsOpen, setupdateisopen] = useState(false);
  const [openedItem, setOpenendItem] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    get_lists();
  }, []);

  const { lists } = useSelector((state) => state.crudSliceReducer);

  const current_user_data = lists.filter(
    (list) => list._id === cookies.auth_token
  );

  const filteredData = current_user_data
    .filter((data) => data.name.toLowerCase().includes(search.toLowerCase()))
    .filter((data) => (filterCategory ? data.tag === filterCategory : true));

  const sortData = (data) => {
    return [...data].sort((a, b) => {
      let valueA = a[sortBy];
      let valueB = b[sortBy];

      if (typeof valueA === "string") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }
    });
  };

  const sortedData = sortData(filteredData);

  return (
    <div>
      <div className="mt-[6rem] lg:mt-[5rem] py-2 px-2 lg:px-[3rem] lg:flex justify-between">
        <Input
          type="search"
          className="w-full lg:w-[20rem] mb-5 lg:mb-0"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded p-2"
          >
            <option value="name">Sort by Name</option>
            <option value="itemQuantity">Sort by Quantity</option>
            <option value="tag">Sort by Category</option>
          </select>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded p-2"
          >
            <option value="">Filter by Category</option>
            <option value="food">Food</option>
            <option value="beverages">Beverages</option>
            <option value="electronics">Electronics</option>
          </select>

          <Button
            className="bg-[#ffafcc] text-white px-[3rem]"
            onClick={() => navigate("/dashboard/create")}
          >
            New
          </Button>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        {current_user_data.length === 0 ? (
          <div className="flex justify-center mt-[30dvh]">
            <div>
              <p className="text-2xl">No shopping Lists Added.</p>
              <div className="text-center">
                <Button
                  className="px-[5rem] my-2 bg-[#ffafcc] shadowed-btn text-white"
                  onClick={() => {
                    navigate("/dashboard/create");
                  }}
                >
                  New List
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:w-[80dvw] w-full ms-[1rem] lg:ms-0">
            <Table
              selectionMode="multiple"
              aria-label="Example static collection table"
              className="overflow-x-scroll"
            >
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>QUANTITY</TableColumn>
                <TableColumn>CATEGORY</TableColumn>
                <TableColumn></TableColumn>
              </TableHeader>
              <TableBody>
                {sortedData.map((list) => (
                  <TableRow key={list.id}>
                    <TableCell>{list.name}</TableCell>
                    <TableCell>{list.itemQuantity}</TableCell>
                    <TableCell className="hidden lg:block">
                      {list.tag}
                    </TableCell>
                    <TableCell>
                      <Button
                        className="bg-[#ffafcc] text-white px-[3rem] lg:block hidden"
                        onPress={() => {
                          onOpen();
                          setOpenendItem(list);
                        }}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#ffafcc] text-white lg:hidden"
                        onPress={() => {
                          onOpen();
                          setOpenendItem(list);
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div
              className={`fixed top-0 right-0 left-0 bottom-0 deleting ${
                isDeleting ? "flex" : "hidden"
              } place-items-center justify-center`}
            >
              <div>
                <Spinner color="danger" label="Deleting..." />
              </div>
            </div>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      {openedItem.name}
                    </ModalHeader>
                    <ModalBody>
                      <div>Tag : {openedItem.tag}</div>
                      <div>Quantity : {openedItem.itemQuantity}</div>
                      <div>Optional Notes : {openedItem.optional_notes}</div>
                    </ModalBody>
                    <ModalFooter>
                      <button
                        className="bg-transparent"
                        onClick={() => {
                          navigate("/dashboard/" + openedItem.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-transparent flex gap-2 mt-2"
                        onClick={() => {
                          navigator.share({
                            title: openedItem.name,
                            text: openedItem.optional_notes,
                            url: "https://www.google.com",
                          });
                        }}
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            color={"#9b9b9b"}
                            fill={"none"}
                          >
                            <path
                              d="M11.922 4.79004C16.6963 3.16245 19.0834 2.34866 20.3674 3.63261C21.6513 4.91656 20.8375 7.30371 19.21 12.078L18.1016 15.3292C16.8517 18.9958 16.2267 20.8291 15.1964 20.9808C14.9195 21.0216 14.6328 20.9971 14.3587 20.9091C13.3395 20.5819 12.8007 18.6489 11.7231 14.783C11.4841 13.9255 11.3646 13.4967 11.0924 13.1692C11.0134 13.0742 10.9258 12.9866 10.8308 12.9076C10.5033 12.6354 10.0745 12.5159 9.21705 12.2769C5.35111 11.1993 3.41814 10.6605 3.0909 9.64127C3.00292 9.36724 2.97837 9.08053 3.01916 8.80355C3.17088 7.77332 5.00419 7.14834 8.6708 5.89838L11.922 4.79004Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-default-400">Share</p>
                        </div>
                      </button>
                      <Button
                        color="danger"
                        variant="light"
                        onClick={() => {
                          delete_items(openedItem.id);
                          onClose();
                          setIsDeleting(true);
                          setTimeout(() => window.location.reload(), 1000);
                        }}
                      >
                        Delete
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeDashboard;
