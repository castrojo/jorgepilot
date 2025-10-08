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
    title: 'Helm Project Health Check',
    path: '/helm-health-check',
    description: 'CNCF Graduated project health assessment - October 2025',
    lastUpdated: 'Oct 8, 2025',
  },
  {
    title: 'CNCF Health Checks Report',
    path: '/cncf-health-checks-report',
    description: '2024 project health reviews - effort, duration, and trends',
    lastUpdated: 'Jan 9, 2025',
  },
  {
    title: 'CNCF Project Moving Levels Status',
    path: '/cncf-project-moving-levels-status',
    description: 'Status report of projects graduating and moving to incubation',
    lastUpdated: 'Oct 8, 2025',
  },
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
];

export default function RecentlyUpdated(): React.JSX.Element {
  // Always show 9 cards - fill remaining with placeholders
  const totalCards = 9;
  const filledCards = [...recentDocuments];
  const placeholderCount = totalCards - filledCards.length;
  
  return (
    <section className={styles.recentlyUpdated}>
      <h2>Recently Updated</h2>
      <div className={styles.grid}>
        {filledCards.map((doc) => (
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
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <div key={`placeholder-${index}`} className={styles.placeholderCard} />
        ))}
      </div>
    </section>
  );
}
