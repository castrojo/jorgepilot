import React from 'react';
import Link from '@docusaurus/Link';
import styles from './RecentlyUpdated.module.css';

interface Document {
  title: string;
  path: string;
  description: string;
  lastUpdated: string;
}

const recentDocuments: Document[] = [
  {
    title: 'CNCF Rust Analysis',
    path: '/cncf-rust-analysis',
    description: 'Analysis of Rust projects in CNCF',
    lastUpdated: 'Oct 8, 2025',
  },
  {
    title: 'COPR Analysis',
    path: '/copr-analysis',
    description: 'COPR usage analysis for ublue-os',
    lastUpdated: 'Oct 7, 2025',
  },
  {
    title: 'Introduction',
    path: '/',
    description: 'Getting started with Jorgepilot',
    lastUpdated: 'Oct 8, 2025',
  },
];

export default function RecentlyUpdated(): JSX.Element {
  return (
    <section className={styles.recentlyUpdated}>
      <h2>Recently Updated</h2>
      <div className={styles.grid}>
        {recentDocuments.map((doc) => (
          <Link key={doc.path} to={doc.path} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{doc.title}</h3>
              <p className={styles.cardDescription}>{doc.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.lastUpdated}>{doc.lastUpdated}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
