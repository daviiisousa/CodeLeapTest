import React, { useEffect } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { getCareers, postCareers } from "../services/careers";
import type { Careers } from "../types/global";
import { getMinutesFromNow } from "../utils/getMinutesFromNow";

export function Home() {
    const [content, setContent] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [careers, setCareers] = React.useState<Careers[]>([])

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        postCareers({ username: "user", content, title })
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
                        careers.map((career, index) => (
                            <div
                                className="my-6"
                                key={index}
                            >
                                <h2
                                    className="text-title font-bold text-white bg-primary p-6 
                                    rounded-t-2xl "
                                >
                                    {career.title}
                                </h2>
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