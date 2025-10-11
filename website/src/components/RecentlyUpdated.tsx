import React from 'react';
import Link from '@docusaurus/Link';
import recentDocsData from '@site/src/data/recentDocs.json';
import styles from './RecentlyUpdated.module.css';

interface DocItem {
  id: string;
  title: string;
  description: string;
  path: string;
  lastUpdatedAt: number;
}

export default function RecentlyUpdated(): React.JSX.Element {
  const recentDocs: DocItem[] = recentDocsData;
  
  const formatDate = (timestamp: number) => {
    if (!timestamp) return 'Unknown';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  return (
    <section className={styles.recentlyUpdated}>
      <h2>Recently Updated</h2>
      <div className={styles.grid}>
        {recentDocs.map((doc) => (
          <Link key={doc.id} to={doc.path} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{doc.title}</h3>
              <p className={styles.cardDescription}>{doc.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.lastUpdated}>{formatDate(doc.lastUpdatedAt)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
