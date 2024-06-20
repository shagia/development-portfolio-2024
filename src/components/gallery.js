import * as React from "react"
import "./galleryLayout.css"

const Gallery = ({ posts }) => {
	console.log(posts)
	return (
		<>
			<div className="lightbox-container">
			{
				posts.map((post, key) => {
					console.log(post.frontmatter.featuredImage)
					return (
					<div key={key} className="post">
						<div className="post-overlay-container">
							<div className="post-image-container">
							<img alt={post.frontmatter.imageAlt[0]} src={post.frontmatter.featuredImage.publicURL}/>
							</div>
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