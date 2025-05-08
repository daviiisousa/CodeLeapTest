import React, { useEffect } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { deleteCareers, getCareers, postCareers } from "../services/careers";
import type { Career } from "../types/global";
import { getMinutesFromNow } from "../utils/getMinutesFromNow";
import trash from "../assets/trash.svg"
import edit from "../assets/edit.svg"
import { Modal } from "../components/Modal";
import { AnimatePresence } from "framer-motion";

export function Home() {
    const [content, setContent] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [careers, setCareers] = React.useState<Career[]>([])
    const [modalDelete, setmodalDelete] = React.useState(false)
    const [modalEdit, setModalEdit] = React.useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        postCareers({ username: "user", content, title })
        setContent("")
        setTitle("")
    }

    async function handleDelete(id: number) {
        deleteCareers(id)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCareers()
            setCareers(data.results)
        }

        fetchData()
    }, [])


    return (
        <section className="max-w-[800px] m-auto h-full">
            <h1 className="text-title flex items-center text-white font-bold h-[10%]
             bg-primary p-[27px]">
                CodeLeap Network
            </h1>
            <div className="bg-white p-6 h-[90%]">
                <form
                    className="border border-line rounded-2xl flex flex-col p-6 mt-6 "
                    onSubmit={handleSubmit}
                >
                    <h1 className="font-bold text-title mb-6">What’s on your mind?</h1>
                    <Input
                        label="Title"
                        id="title"
                        placeholder="Hello world"
                        type="text"
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                        className="mb-6"
                    />
                    <Input
                        label="Content"
                        id="content"
                        placeholder="Content here"
                        type="text"
                        value={content}
                        onChange={({ target }) => setContent(target.value)}
                        className="pt-[7px] pb-[51px] pl-2.5 mb-6"
                    />
                    <Button
                        className="w-[120px] self-end"
                        type="submit"
                        disabled={title.trim() === "" || content.trim() === ""}
                    >
                        Create
                    </Button>
                </form>

                <div className="my-6">
                    {careers.length > 0 ?
                        careers.map((career) => (
                            <div
                                className="my-6"
                                key={career.id}
                            >
                                <div className="bg-primary p-6 rounded-t-2xl flex justify-between items-center">
                                    <h2
                                        className="text-title font-bold text-white "
                                    >
                                        {career.title}
                                    </h2>
                                    <div className="flex items-center gap-6">
                                        <button
                                            className="cursor-pointer"
                                            onClick={() => setmodalDelete(!modalDelete)}
                                        >
                                            <img src={trash} alt="trash" />
                                        </button>
                                        <button
                                            className="cursor-pointer"
                                            onClick={() => setModalEdit(!modalEdit)}
                                        >
                                            <img src={edit} alt="edit" />
                                        </button>
                                    </div>
                                </div>
                                <div className="border border-line p-6 rounded-b-xl">
                                    <div className="flex justify-between">
                                        <p className="font-bold text-xl text-secondary">
                                            @{career.username}
                                        </p>
                                        <p className="text-xl text-secondary">
                                            {getMinutesFromNow(career.created_datetime)} minutes ago
                                        </p>
                                    </div>
                                    <p className="text-xl mt-4 ">
                                        {career.content}
                                    </p>
                                </div>
                                <AnimatePresence>
                                    {modalDelete &&
                                        <Modal>
                                            <h2 className="text-title font-bold mb-10">
                                                Are you sure you want to delete this item?
                                            </h2>
                                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-end ">
                                                <button
                                                    type="reset"
                                                    className="text-black border border-line px-7 py-1.5 rounded-lg font-bold cursor-pointer w-full sm:w-auto hover:bg-secondary hover:text-white transition"
                                                    onClick={() => setmodalDelete(!modalDelete)}

                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    className="bg-delete px-7 py-1.5 text-white font-bold rounded-lg cursor-pointer hover:bg-delete/80 w-full sm:w-auto transition"
                                                    onClick={() => handleDelete(career.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </Modal>
                                    }
                                </AnimatePresence>
                                <AnimatePresence>
                                    {modalEdit &&
                                        <Modal>
                                            <h2
                                                className="text-title font-bold mb-6"
                                            >
                                                Edit item
                                            </h2>
                                            <form
                                                className="flex flex-col "
                                            >
                                                <Input
                                                    label="Title"
                                                    type="text"
                                                    id="Title"
                                                    placeholder="Hello world"
                                                    value={title}
                                                    className="mb-6"
                                                />
                                                <Input
                                                    label="Content"
                                                    id="content"
                                                    placeholder="Content here"
                                                    type="text"
                                                    value={content}
                                                    className="pt-[7px] pb-[51px] pl-2.5 mb-6"
                                                />
                                                <div 
                                                    className="flex flex-col sm:flex-row items-center gap-4 justify-end"
                                                >
                                                    <button
                                                        type="reset"
                                                        className="text-black border border-line px-7 py-1.5 rounded-lg font-bold cursor-pointer w-full sm:w-auto hover:bg-secondary hover:text-white transition"
                                                        onClick={() => setModalEdit(!modalEdit)}

                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                    className="bg-save px-7 py-1.5 text-white font-bold rounded-lg cursor-pointer hover:bg-save/80 w-full sm:w-auto transition"
                                                    
                                                >
                                                    Delete
                                                </button>
                                                </div>
                                            </form>
                                        </Modal>
                                    }
                                </AnimatePresence>
                            </div>

                        )) : (
                            <h1>vazio</h1>
                        )
                    }
                </div>
            </div>
        </section>
    )
}