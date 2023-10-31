import React from "react";
import type { Props } from "@theme/NotFound/Content";
import { BrowserView, MobileView } from "react-device-detect";
import CodeBlock from "@theme/CodeBlock";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className="container margin-vert--xl">
      <BrowserView>
        <img
          src="https://media.tenor.com/ampW8g8v-vMAAAAd/hack-khaby.gif"
          style={{
            maxWidth: "60%",
            verticalAlign: "text-top",
            float: "right"
          }}
        />
      </BrowserView>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <h1 className="hero__title">道に迷われましたかな？</h1>
          <MobileView>
            <img
              src="https://media.tenor.com/ampW8g8v-vMAAAAd/hack-khaby.gif"
              style={{ padding: "1em" }}
            />
          </MobileView>
          <p>
            ちょっとあなた！正しいURLを入力してもらえませんか？ただ正しいURLを入力する、簡単な事でしょう？
          </p>
          <p>
            あなたがどうしても正しいURLにたどりつけないなら下の内容を詳しい人に伝えるといいかもしれませんね。
          </p>
          <BrowserOnly>
            {() => {
              let content:string = `url: ${document.URL}\nreferrer: ${document.referrer != "" ? document.referrer : "undefined"}`
              return (
              <>
                <CodeBlock language="yml" title="404-info">
                  {content}
                </CodeBlock>
              </>
            )}}
          </BrowserOnly>
        </div>
      </div>
    </main>
  );
}
