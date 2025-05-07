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
            <h1 className="text-title flex items-center text-white font-bold md:h-[10%]
             bg-primary p-[27px]">
                CodeLeap Network
            </h1>
            <div className="bg-white p-6 sm:h-auto md:h-[90%]">
                <form
                    className="border xl:mt-4 md:mt-2.5 md:h-[45%] md:p-4 border-line rounded-2xl xl:p-6 flex flex-col sm:h-auto sm:p-6 lg:h-[45%]"
                    onSubmit={handleSubmit}
                >
                    <h1 className="font-bold text-title 2xl:mb-6 md:mb-2.5 sm:mb-4">What’s on your mind?</h1>
                    <Input
                        label="Title"
                        id="title"
                        placeholder="Hello world"
                        type="text"
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                        className="2xl:mb-6 md:mb-2.5 sm:mb-4"
                    />
                    <Input
                        label="Content"
                        id="content"
                        placeholder="Content here"
                        type="text"
                        value={content}
                        onChange={({ target }) => setContent(target.value)}
                        className="2xl:pt-[7px] 2xl:pb-[51px] 2xl:pl-2.5 2xl:mb-6  md:p-2 md:mb-2.5 sm:mb-4 lg:mb-1.5"
                    />
                    <Button
                        className="w-[120px] self-end"
                        type="submit"
                        disabled={title.trim() === "" || content.trim() === ""}
                    >
                        Create
                    </Button>
                </form>
                <div className="sm:h-auto md:h-[45%] md:my-6 md:overflow-hidden md:overflow-y-auto md:scrollbar-hide">
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