import React from 'react';
import OriginalLayout from '@theme-original/DocItem/Layout';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import ReadingTools from '../../../components/ReadingTools';
import type {Props} from '@theme/DocItem/Layout';

export default function DocItemLayout(props: Props) {
  const {metadata} = useDoc();
  const {i18n} = useDocusaurusContext();
  const {pathname} = useLocation();
  return <div className="reading-layout">
    <ReadingTools key={`${i18n.currentLocale}:${pathname}`} locale={i18n.currentLocale} path={pathname} title={metadata.title}/>
    <OriginalLayout {...props}/>
  </div>;
}
