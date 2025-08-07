// "use client";
// import React from 'react'
// import { useEffect, useState } from 'react';
// import NavBar from '@/components/navbar';
// import Footer from '@/components/footer';
// import Link from 'next/link';

// export default function Insights() {
//   type Post = {
//     id: number;
//     slug: string;
//     title: { rendered: string };
//     excerpt: { rendered: string };
//     link: string;
//     date: string;
//     featured_media?: number;
//     _embedded?: {
//       'wp:featuredmedia'?: Array<{
//         source_url: string;
//         alt_text?: string;
//       }>;
//     };
//   };

//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch('https://blogs.emergertech.com/wp-json/wp/v2/posts?_embed')
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch(() => setPosts([]))
//       .finally(() => setLoading(false));
//   }, []);

//   // Temporary mapping from slug to external URL
//   const slugToUrl: Record<string, string> = {
//     'q2-2025-news-letter': 'https://blogs.emergertech.com/q2-2025-news-letter/',
//     'whitepaper-the-journey-from-legacy-data-models-to-modern-proactive-and-predictive-data-models': 'https://blogs.emergertech.com/whitepaper-the-journey-from-legacy-data-models-to-modern-proactive-and-predictive-data-models/',
//     'q1-2025-news-letter': 'https://blogs.emergertech.com/q1-2025-news-letter/',
//     'how-emergere-technologies-is-reshaping-construction-supply-chain-management': 'https://blogs.emergertech.com/how-emergere-technologies-is-reshaping-construction-supply-chain-management/',
//   };

//   if (loading) {
//     return (
//       <>
//         <NavBar />
//         <div className="w-full min-h-screen flex items-center justify-center bg-white">
//           <span className="text-lg text-gray-500">Loading...</span>
//           {/* You can replace the above with a spinner if you have one */}
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <NavBar />
//       <div className="max-w-full mx-auto py-8 bg-white px-4 mt-[-120px]">
//         {/* Banner Section */}
//         <div
//           className="max-w-full flex items-center my-20 relative overflow-hidden"
//           style={{ minHeight: '200px', background: 'url(/Blogs-Bg.jpg) left center no-repeat, #f9f9fb', backgroundSize: 'contain' }}
//         >
//           <div className="flex-1 flex items-center h-full pl-[330px]">
//             <h1 className="text-5xl font-bold text-blue-900 mb-0">Blog</h1>
//           </div>
//           <div className="flex items-start h-full pr-[160px]">
//             <img
//               src="/Blogs-Bg-Icon.svg"
//               alt="Blog Illustration"
//               className="h-40 w-auto object-contain"
//               style={{ minWidth: 260 }}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col px-4 max-w-5xl mx-auto gap-10">
//           {posts.map((post) => {
//             let featuredImg = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
//             const altText = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || 'Blog image';
//             const fallbackImg = 'https://blogs.emergertech.com';
//             // Prepend domain if image URL is relative
//             if (featuredImg && !/^https?:\/\//i.test(featuredImg)) {
//               featuredImg = `https://blogs.emergertech.com${featuredImg.startsWith('/') ? '' : '/'}${featuredImg}`;
//             }
//             // Get the mapped URL for this post's slug
//             const externalUrl = slugToUrl[post.slug];
//             return (
//               <div
//                 key={post.id}
//                 className="bg-white rounded-2xl flex flex-col md:flex-row items-stretch md:items-center w-full p-0 md:p-0"
//                 style={{ minHeight: 220 }}
//               >
//                 {featuredImg && (
//                   <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[340px] h-[220px] md:h-[220px] bg-white rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
//                     <img
//                       src={featuredImg}
//                       alt={altText}
//                       className="w-[320px] h-[200px] object-contain rounded-2xl md:rounded-l-2xl md:rounded-tr-none transition-transform duration-300 ease-in-out hover:scale-[1.07] hover:z-10"
//                       onError={e => {
//                         const target = e.target as HTMLImageElement;
//                         if (target.src !== fallbackImg) target.src = fallbackImg;
//                       }}
//                     />
//                   </div>
//                 )}
//                 <div className="flex flex-col justify-center flex-1 min-w-0 px-8 py-8">
//                   {/* Temporarily redirect header click to external URL */}
//                   {/* <Link href={`/insights/${post.slug}`}> */}
//                   <h2
//                     className="text-2xl font-bold text-blue-900 mb-2 cursor-pointer"
//                     style={{ textDecoration: 'none' }}
//                     dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//                     onClick={() => { if (externalUrl) window.location.href = externalUrl; }}
//                   />
//                   {/* Date removed as per request */}
//                   <div className="text-gray-700 mb-4 line-clamp-3" style={{display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis'}} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//                   {/* Temporarily redirect Read More click to external URL */}
//                   {/* <Link href={`/insights/${post.slug}`} className="inline-block w-fit px-6 py-2 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-colors duration-200">Read More</Link> */}
//                   <button
//                     className="inline-block w-fit px-6 py-2 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
//                     style={{ cursor: externalUrl ? 'pointer' : 'not-allowed' }}
//                     onClick={() => { if (externalUrl) window.location.href = externalUrl; }}
//                     disabled={!externalUrl}
//                   >
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

"use client";
import React from 'react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <iframe
        src="https://blogs.emergertech.com"
        title="Emerger Tech Blog"
        className="w-full h-[90vh] rounded-lg border border-gray-300 shadow-md"
        allowFullScreen
      />
    </div>
  );}

