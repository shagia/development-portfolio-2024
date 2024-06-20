import * as React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Header from "./header"
import "./layout.css"

const shortcodes = {} // Provide common components here

export default function PostLayout({ children }) {
	const data = graphql`
	  query($id: String!) {
		  mdx(id: { eq: $id }) {
			frontmatter {
			  title
			}
		  }
		}
	`
	console.log(data)
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
				<MDXProvider components={shortcodes}>
					{children}
				</MDXProvider>
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
