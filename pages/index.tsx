import Head from 'next/head'
import Image from 'next/image'
import data from 'data.json'
export default function Home() {
    return (
      <div className="flex flex-col mx-auto w-full items-center mt-16 px-16 ">
        <Image 
        className='rounded-full'
        alt={data.name}
        src={data.avatar}
        width={100}
        height={100}
        />
        <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </div>
  )
}


const LinkCard = ({href, title}: {href:string; title:string}) => {
  return (
    <a href={href} className='flex w-full p-4 rounded-md 
    hover:scale-105 transition-all bg-white mb-3 '>
      <div className="flex text-center w-full">
        <div className='w-8 h-8'></div>
        <h2 className='font-semibold text-grey-700'>{title}</h2>
      </div>
    </a>
  )
}

