import React, { useEffect, useState } from "react";

import Link from "next/link";

const read_token = process.env.NEXT_PUBLIC_API_KEY;

export default function Blog({ posts }) {

console.log(posts);

    return (
        <>
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                David Adeneye
                </Link>
            </div>

            <Link href="/blog" className="blog-menu">
                My Blog
            </Link>
            <a href="" className="cta-btn">Subscribe</a>
        </div>

        <div className="blogpost-container">
            {posts.data.map((post, index) => (
            <div className="blogpost-box" key={index}>
                
                <div className="blogpost-img">
                    <img src={post.featured_image} alt="Blog" width={300} height={300}/>
                </div>

                
                <div className="blogpost-text">
                    <span className="blogpost-tag">{post.tags[0].name}</span>
                    <a href={`/posts/${post.slug}`} className="blogpost-title">{post.title}</a>
                    <p>{post.summary}</p>
                </div>

                <div className="blogpost-footer">
                    <div>
                        <img src={post.author.profile_image} alt="avatar" />
                        <p className="blogpost-name">{
                          post.author.first_name + " " + post.author.last_name
                        }</p>
                    </div>

                    <Link href={`/posts/${post.slug}`} className="blogpost-link">
                        Read More
                    </Link>
                </div>

            </div>    
           
        ))}
        </div>

        </>
    );
}


// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch(`https://api.buttercms.com/v2/posts?auth_token=${read_token}`)
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }