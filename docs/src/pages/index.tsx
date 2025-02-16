import type { ReactNode } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'

import styles from './index.module.css'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<header className={clsx('hero', styles.heroBanner)}>
			<div className="container">
				<img src='../img/piekit.png' width='50' />
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--primary"
						to="/docs/intro">
						Get started
					</Link>
				</div>
			</div>
		</header>
	)
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext()
	return (
		<Layout
			title={`Hello from ${ siteConfig.title }`}
			description="React components, freshly baked">
			<HomepageHeader />
		</Layout>
	)
}
