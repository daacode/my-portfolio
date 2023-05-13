import React, { useEffect, useState } from "react";

const read_token = process.env.NEXT_PUBLIC_API_KEY;


export default function Post({ post }) {
  
	console.log(post.data.title)

  return(
      <>
        <div className="blog-container">
        	<span className="blog-goBack"><a href="/blog">Go back</a></span>
			<div className="blog-wrap">
				<header>
					<p className="blog-date">Published {post.data.created}</p>
					<h1>{post.data.title}</h1>
					<div className="blog-tag">
						<div></div>
					</div>
				</header>
				<img src={post.data.featured_image} alt="cover" />
				<div className="blog-content" dangerouslySetInnerHTML={{__html: post.data.body }}></div>
			</div>
  		</div>
      </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`https://api.buttercms.com/v2/posts?auth_token=${read_token}`)
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.data.map((post) => ({
      params: { id: post.slug },
    }))

  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  // This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://api.buttercms.com/v2/posts/${params.id}?auth_token=${read_token}`)
    const post = await res.json()

   
  
    // Pass post data to the page via props
    return { props: { post } }
  }