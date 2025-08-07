"use client";
import React, { useEffect, useState, use } from 'react';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { useRouter } from 'next/navigation';

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}



interface Props {
  params: { slug: string };
}

const Page: React.FC<Props> = ({ params }) => {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  const slug = params.slug;

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`https://blogs.emergertech.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`);
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPost(data[0]);
        } else {
          setPost(null);
        }
      } catch (e) {
        setPost(null);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/default-blog-image.png';
    e.currentTarget.alt = 'Default blog image';
  };

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="w-full min-h-screen flex items-center justify-center bg-white">
          <span className="text-lg text-gray-500">Loading...</span>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    // If not found, redirect to 404
    if (typeof window !== 'undefined') {
      router.replace('/404');
    }
    return null;
  }

  // Helper to prepend domain to all image src in HTML
  function prependDomainToImages(html: string) {
    if (!html) return { __html: '' };
    const domain = 'https://blogs.emergertech.com';
    // Replace src="/ or src='/' or src=without domain
    const updated = html.replace(/(<img[^>]+src=["'])(?!https?:\/\/)([^"'>]+)/gi, (match, p1, p2) => {
      const url = p2.startsWith('/') ? p2 : '/' + p2;
      return `${p1}${domain}${url}`;
    });
    return { __html: updated };
  }

  let featuredImg = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const altText = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || 'Blog image';
  if (featuredImg && !/^https?:\/\//i.test(featuredImg)) {
    featuredImg = `https://blogs.emergertech.com${featuredImg.startsWith('/') ? '' : '/'}${featuredImg}`;
  }
  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen py-8 px-4 bg-white flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-900" style={{ wordBreak: 'break-word' }} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p className="text-gray-500 text-base mb-4">{new Date(post.date).toLocaleDateString()}</p>
          {featuredImg && (
            <img src={featuredImg} alt={altText} className="w-full max-h-96 object-contain rounded-md mb-6 bg-gray-100" onError={handleImgError} />
          )}
          {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered}} /> */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={prependDomainToImages(post.content.rendered)} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
