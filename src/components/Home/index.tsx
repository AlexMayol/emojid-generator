import Head from 'next/head'
import { useState } from 'react'
import { uuid, emojid as id } from '@midnight-city/emojid'
import { Button } from '@/components/Button'

const titleIDs = [id(1), id(1), id(1), id(1), id(1), id(1)]

export const Home = () => {
    const [currentID, setCurrentID] = useState<string>(uuid())
    const [idLen, setIdLen] = useState<number>(8)

    const generateUUID = () => setCurrentID(uuid())
    const generateID = () => setCurrentID(id(idLen))

    const copyToClipboard = () => navigator.clipboard.writeText(currentID)

    return (
        <>
            <Head>
                <title>😂👌Emojid Generator 🔥😏</title>
                <meta name="description" content="Generate cool and useless IDs using this tool" />
                <meta property="og:image" content="https://i.pinimg.com/736x/25/2e/4c/252e4c91304826da1ab9c5e41a13d83d.jpg" />
                <meta property="og:image:secure_url" content="https://i.pinimg.com/736x/25/2e/4c/252e4c91304826da1ab9c5e41a13d83d.jpg" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="720" />
                <meta property="og:image:alt" content="It's hot in here" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'crossorigin'} />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap" rel="stylesheet"></link>
            </Head>

            <main className="flex flex-col flex-1 p-4 bg-amber-100">
                <h1 className='mb-8 text-2xl font-bold text-center'>{titleIDs[0]}{titleIDs[1]}{titleIDs[2]} Emojid Generator {titleIDs[3]}{titleIDs[4]}{titleIDs[5]}</h1>
                <div className="flex flex-col items-center justify-center flex-1 h-full space-y-8">
                    <section className='block space-x-12'>
                        <Button onClick={generateUUID}>
                            Generate UUID
                        </Button>
                        <Button onClick={generateID}>
                            Generate ID
                        </Button>
                    </section>
                    <section className='flex items-center justify-center p-2 text-xl text-white rounded-xl bg-zinc-700'>
                        {currentID}
                        <button className='px-1 ml-8 leading-snug bg-gray-400 rounded-lg' onClick={copyToClipboard}>
                            Copy
                        </button>
                    </section>
                </div>
            </main>
            <footer className='py-1 text-center bg-amber-500'>
                Made with 💜 by <a href="https://github.com/AlexMayol">Alex</a>
            </footer>
        </>
    )
}
