import * as React from "react"
import { useState } from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import FsLightbox from "fslightbox-react";

import Header from "../components/header"
import "../components/layout.css"

const shortcodes = { Link } // Provide common components here

export default function PostLayout({ data, children }) {
	console.log(data.mdx.frontmatter)
	const [toggler] = useState(false)
	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: `var(--size-content)`,
					padding: `var(--size-gutter)`,
				}}
			>
				<h1>{data.mdx.frontmatter.title}</h1>
				<h4>{data.mdx.frontmatter.tech}</h4>
				<h4>{data.mdx.frontmatter.platform ? data.mdx.frontmatter.platform : ''}</h4>
				<MDXProvider components={shortcodes}>
					{children}
				</MDXProvider>
				<div className="lightbox-container">
					{
						data.mdx.frontmatter.images.map((img, key) => {
							return (
								<div className="image-container">
									<img src={img.publicURL} alt={data.mdx.frontmatter.imageAlt[key]} />
									<div className="alt-text">
										{data.mdx.frontmatter.imageAlt[key]}
									</div>
								</div>
							)
						})
					}
				</div>
				<footer
					style={{
						marginTop: `var(--space-5)`,
						fontSize: `var(--font-sm)`,
					}}
				>
					© {new Date().getFullYear()} &middot; Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</footer>
			</div>
		</>
	)
}
export const query = graphql`
  query($id: String!) {
	  mdx(id: { eq: $id }) {
		frontmatter {
		  title
		  client
		  project
		  platform
		  tech
		  date
		  imageAlt
		  images {
			  relativeDirectory
			  publicURL
		  }
		}
		body
	  }
	  allFile(filter: {id: { eq: $id }}) {
		  edges {
			node {
			  id
			  publicURL
			  relativeDirectory
			}
		  }
		}
	  site {
		  siteMetadata {
			title
		  }
		}
	}
`
