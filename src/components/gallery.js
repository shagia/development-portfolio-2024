import * as React from "react"
import { Link } from "gatsby"
import "./galleryLayout.css"

const Gallery = ({ posts }) => {
	console.log(posts)
	return (
		<>
			<div className="lightbox-container">
				{
					posts.map((post, key) => {
						console.log(post.frontmatter.slug)
						console.log(post.frontmatter.featuredImage)
						return (
							<div key={key} className="post">
								<div className="post-overlay-container">
								<Link to={`/${post.frontmatter.slug}`}>
									<div className="post-image-container">
										<img alt={post.frontmatter.imageAlt[0]} src={post.frontmatter.featuredImage.publicURL} />
									</div>
								</Link>
								</div>
							</div>
						)
					})
				}
			</div>
		</>
	)
}

export default Gallery