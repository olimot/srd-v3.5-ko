import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import anchors from '../../anchors.json';
import styles from './App.module.scss';

const documentGroups = anchors
  .filter((a) => a.level === 1)
  .reduce((prev, current) => {
    const groupIndex = prev.findIndex((group) => group.groupName === current.groupName);
    if (groupIndex === -1) return [...prev, { groupName: current.groupName, pages: [current] }];
    return [
      ...prev.slice(0, groupIndex),
      { ...prev[groupIndex], pages: [...prev[groupIndex].pages, current] },
      ...prev.slice(groupIndex + 1),
    ];
  }, [] as { groupName: string; pages: typeof anchors }[]);

const App = () => {
  return (
    <div className={classNames(styles.app, 'layout')}>
      <div className={classNames(styles.appwrap, 'layout__wrap')}>
        <h1 className={styles.center}>개정판 (v.3.5) 시스템 참조 문서</h1>
        <p>
          개정판 (v.3.5) 시스템 참조 문서는 Revised (v.3.5) System Reference Document를 한국어로 번역하고 GitHub을
          이용하여 관리하고 있는 문서입니다.
        </p>
        <p>
          Github: <a href="https://github.com/olimot/srd-v3.5-ko">https://github.com/olimot/srd-v3.5-ko</a>
        </p>
        <p>
          원본:{' '}
          <a href="http://www.wizards.com/default.asp?x=d20/article/srd35">
            http://www.wizards.com/default.asp?x=d20/article/srd35
          </a>
          <br /> (아카이브: <a href="https://archive.org/details/dnd35srd">https://archive.org/details/dnd35srd</a>)
        </p>
        <div className={styles.tableOfContents}>
          {documentGroups.map((group) => {
            return (
              <div key={group.groupName}>
                <h3>{group.groupName}</h3>
                <ul>
                  {group.pages.map((page) => (
                    <li key={page.basename}>
                      <Link href={`/docs/${page.basename}`} prefetch={false}>
                        {page.pageName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
