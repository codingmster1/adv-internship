import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BookObject } from "@/bookObject";
import { useState, useEffect } from "react";
import SearchBook from "./ui/SearchBook";
import Skeleton from "./ui/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";

export default function SearchBar() {
    const [input, setInput] = useState<any>("");
    const [data, setData] = useState<BookObject[]>();
    const [skelLoad, setSkelLoad] = useState<boolean>(false);

    const dispatch = useDispatch();

    function handleDelete() {
        if (input.length !== 0) {
            setInput("");
        }
    }

    useEffect(() => {
        setSkelLoad(true)
        if (!input) {
            return;
        } else {
            setTimeout(() => {
                const fetchData = async () => {
                    const response = await fetch(
                        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${input}`
                    );
                    const json = await response.json();
                    setData(json);
                };
                fetchData();
                setSkelLoad(false);
            }, 300);
        }
    }, [input]);
    return (
        <div className="border-b h-20 z-10 border-[#e1e7ea]">
            <div
                className="relative flex items-center justify-between px-8 max-w-[1100px] 
            mx-auto h-full"
            >
                <figure>
                    <img src="logo" alt="" />
                </figure>

                <div className="flex items-center gap-6 max-w-[340px] w-full">
                    <div className="flex items-center w-full">
                        <div className="relative gap-2 flex items-center w-full">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type="text"
                                placeholder="Search for books"

                                className="h-10 w-full p-4 outline-none bg-[#f1f6f4]
                    text-[#042330] border-2 border-[#e1e7ea] rounded-lg"
                            />
                            <div
                                className="flex items-center absolute h-full right-2 justify-end 
                    border-l-2 border-[#e1e7ea] pl-2 icon--scaled cursor-pointer"
                                onClick={handleDelete}
                            >
                                {input.length ? <FiX /> : <BiSearch />}
                            </div>
                        </div>
                    </div>

                    <div
                        className="hidden items-center justify-center cursor-pointer 
              max-[768px]:flex"

                    >
                        <AiOutlineMenu size={24} />
                    </div>
                </div>
                {input &&
                    (!skelLoad ? (
                        data?.length !== 0 ? (
                            <div className="search__books--wrapper max-[768px]:max-w-[unset] max-[768px]:right-0 z-50">
                                {data?.map((data) => (
                                    <SearchBook
                                        key={data.id}
                                        subscriptionRequired={data.subscriptionRequired}
                                        id={data.id}
                                        title={data.title}
                                        author={data.author}
                                        subTitle={data.subTitle}
                                        averageRating={data.averageRating}
                                        imageLink={data.imageLink}
                                        audioLink={data.audioLink}
                                        totalRating={data.totalRating}
                                        keyIdeas={data.keyIdeas}
                                        type={""}
                                        status={""}
                                        summary={""}
                                        tags={[]}
                                        bookDescription={""}
                                        authorDescription={""}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="search__books--wrapper">No books found</div>
                        )
                    ) : (
                        <div className="search__books--wrapper">
                            {new Array(4).fill(0).map((_, index) => (
                                <div className="p-[2px]" key={index}>
                                    <Skeleton width="100%" height={120} />
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );

}