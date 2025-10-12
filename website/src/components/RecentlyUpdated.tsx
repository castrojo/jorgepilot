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

/**
 * Parse markdown links in text and convert them to React elements
 * Converts [text](url) to clickable links
 */
function parseMarkdownLinks(text: string): React.ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the link as an anchor element with click event prevention from bubbling
    parts.push(
      <a
        key={key++}
        href={match[2]}
        className={styles.descriptionLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        {match[1]}
      </a>,
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export default function RecentlyUpdated(): React.JSX.Element {
  const recentDocs: DocItem[] = recentDocsData;

  const formatDate = (timestamp: number) => {
    if (!timestamp) return 'Unknown';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className={styles.recentlyUpdated}>
      <h2>Recently Updated</h2>
      <div className={styles.grid}>
        {recentDocs.map((doc) => (
          <div key={doc.id} className={styles.card}>
            <div className={styles.cardContent}>
              <Link to={doc.path} className={styles.cardTitleLink}>
                <h3 className={styles.cardTitle}>{doc.title}</h3>
              </Link>
              <p className={styles.cardDescription}>{parseMarkdownLinks(doc.description)}</p>
              <div className={styles.cardFooter}>
                <span className={styles.lastUpdated}>{formatDate(doc.lastUpdatedAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
