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
    const pageIndex = prev[groupIndex].pages.findIndex((page) => page.pageName === current.pageName);
    if (pageIndex !== -1) return prev;
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
        <h1 className={styles.center}>
          <div>Revised (v.3.5) System Reference Document</div>
        </h1>
        <p>
          System Reference Document는 Dungeons &amp; Dragons의 d20 System 버전 및 Wizards of the Coast의 다양한 롤플레잉
          게임과 호환되는 규칙, 종족, 직업, 특기, 스킬, 다양한 시스템, 주문, 마법 아이템 및 몬스터로 구성된 포괄적인
          도구 상자입니다. 귀하는 이 자료를 Open Game License에 의거해 Open Game Content로 간주하고 이를 사용, 수정 및
          배포할 수 있습니다.
        </p>
        <p>
          Github: <a href="https://github.com/olimot/srd-v3.5-ko">https://github.com/olimot/srd-v3.5-ko</a>
          <br />
          원본 문서:{' '}
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
