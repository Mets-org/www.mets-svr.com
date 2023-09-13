import React from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title='ページが見つかりません'
      />
      <Layout>
        <main className="container margin-vert--xl">
          <BrowserView>
            <img align="right" src="https://media.tenor.com/ampW8g8v-vMAAAAd/hack-khaby.gif" style={{ maxWidth: "60%" }} />
          </BrowserView>
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                道に迷われましたかな？
              </h1>
              <MobileView>
                <img src="https://media.tenor.com/ampW8g8v-vMAAAAd/hack-khaby.gif" style={{ padding: "1em" }} />
              </MobileView>
              <p>
                ちょっとあなた！正しいURLを入力してもらえませんか？ただ正しいURLを入力する、簡単な事でしょう？
              </p>
              <p>
                あなたがどうしても正しいURLにたどりつけないなら下の内容を詳しい人に伝えるといいかもしれませんね。
                <BrowserOnly>
                  {
                    () => <CodeBlock language='yml'>
                      url: {document.URL}<br />
                      referrer: {document.referrer != '' ? document.referrer : 'undefined'}
                    </CodeBlock>
                  }
                </BrowserOnly>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
