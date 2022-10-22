import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import {sanityClient , urlFor} from '../sanity'
import {Post} from '../typings'

interface Props{
  posts:[Post];
}

function Home ({posts}:Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium - where good idea find you</title>
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Header />
      <HeroSection />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-5 md:p-6'>
        {posts.map(post=>(
          <Link href={`/post/${post.slug.current}`} key={post._id}>
              <div className='border rounded-lg group cursor-pointer overflow-hidden' >
                <img src={urlFor(post.mainImage).url()!}  alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
                <div className='flex justify-between p-5 bg-white'>
                  <div>
                    <p className='text-lg font-bold'>{post.title}</p>
                    <p className='text-xs'>{post.description} by {post.author.name}</p>
                  </div>
                  <img src={urlFor(post.author.image).url()!} alt="" className='h-12 w-12 rounded-full' />
                </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Home

export const getServerSideProps = async () => {

  const query = `*[_type == "post"] {
    _id,
    title,
    author-> {
    name,
    image
    },
    description,
    mainImage,
    slug
  }`;
  const posts = await sanityClient.fetch(query);
  return{
    props: {
      posts,
    }
  }

}