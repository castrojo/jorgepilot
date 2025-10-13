import React from 'react';
import Link from '@docusaurus/Link';
import styles from './SectionIndex.module.css';

interface SectionItem {
  title: string;
  path: string;
  description?: string;
}

interface SectionIndexProps {
  sections: SectionItem[];
}

export default function SectionIndex({ sections }: SectionIndexProps): React.JSX.Element {
  if (sections.length === 0) {
    return <></>;
  }

  return (
    <div className={styles.sectionIndex}>
      <hr className={styles.panelLine} />
      {sections.map((section, index) => (
        <div key={index} className={styles.entry}>
          <h5>
            <Link to={section.path}>{section.title}</Link>
          </h5>
          {section.description && <p>{section.description}</p>}
        </div>
      ))}
    </div>
  );
}
