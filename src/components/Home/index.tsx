import Head from 'next/head'
import { useEffect, useState } from 'react'
import { uuid, emojid as id } from '@midnight-city/emojid'
import { Button } from '@/components/Button'

const leftID = id(2);
const rightID = id(2);
const websiteURL = process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000/';
const apiEndpoints = [
    `${websiteURL}api/uuid`,
    `${websiteURL}api/id`,
];

export const Home = () => {
    const [currentID, setCurrentID] = useState<string>(uuid())
    const [copied, setCopied] = useState<boolean>(false)

    const generateUUID = () => setCurrentID(uuid())
    const generateID = () => setCurrentID(id(8))

    const copyToClipboard = () => {
        setCopied(true)
        navigator.clipboard.writeText(currentID)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCopied(false)
        }, 2000)
        return () => clearInterval(interval)
    }, [copied])

    return (
        <>
            <Head>
                <title>😂👌 Emojid Generator 🔥😏</title>
                <meta name="description" content="Generate cool and useless IDs using this tool" />
                <meta property="og:image" content="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/06/22/5fa433b8178fc.jpeg" />
                <meta property="og:image:secure_url" content="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/06/22/5fa433b8178fc.jpeg" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="449" />
                <meta property="og:image:height" content="449" />
                <meta property="og:image:alt" content="Cool emoji face" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'crossorigin'} />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&display=swap" rel="stylesheet"></link>
            </Head>

            <main className="bg-gray-50 flex flex-col flex-1 p-4">
                <h1 className='text-rose-700 sm:text-3xl text-lg font-bold text-center'>{leftID} Emojid Generator {rightID}</h1>
                <div className="flex flex-col items-center justify-center flex-1 h-full space-y-4">
                    <section className='flex space-x-12'>
                        <Button onClick={generateUUID}>
                            Generate UUID
                        </Button>
                        <Button onClick={generateID}>
                            Generate ID
                        </Button>
                    </section>
                    <section className='md:text-xl rounded-xl bg-rose-100 border-rose-300 flex items-center justify-center p-2 text-xs border'>
                        <button onClick={copyToClipboard}>
                            {currentID}
                        </button>
                    </section>
                    <section>
                        <span className={` transition ${copied ? 'opacity-100' : 'opacity-0'}  inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800`}>
                            Copied!
                        </span>
                    </section>

                    <section className='w-full space-y-2'>
                        <span>
                            You can also use the API!
                        </span>
                        <div className='bg-rose-100 rounded-xl border-rose-300 p-2 space-y-2 border'>
                            {apiEndpoints.map(endpoint => (<a key={endpoint} target='_blank' rel="noreferrer" href={endpoint} className='flex underline'><code className='block text-xs'>{endpoint.replace('https://', '')}</code></a>))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className='bg-rose-400 py-1 text-center'>
                <a href="https://github.com/AlexMayol">
                    Made with 💜 byAlex
                </a>
            </footer>
        </>
    )
}
