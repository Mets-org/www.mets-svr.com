import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
    return (
        <Layout title="Hello" description="Hello React Page">
            <div className="desktop">
                <div className="div">
                    <div className="text-wrapper-5">Mets サーバー とは</div>
                    <div className="text-wrapper-4">
                        日夜問わず稼働するサバイバルマイクラマルチサーバーへようこそ。Java版と統合版のクロスプレイに対応し、皆で楽しむことができます。荒らし対策は万全に整備済み。安心してプレイできる環境を提供しています。ゲーム内での不正行為や荒らし行為には厳しい対処を行い、プレイヤー同士の健全なコミュニティを築いています。
                    </div>
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="group">
                        <div className="overlap-group">
                            <div className="text-wrapper-2">建築</div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-2">ミニゲーム</div>
                        </div>
                        <div className="overlap-group-2">
                            <div className="text-wrapper-3">サバイバル</div>
                        </div>
                    </div>
                    <div className="discord">
                        Discord コミュニティ
                        <br />
                        に参加しましょう
                    </div>
                    <a href='https://discord.gg/jG332tPs2D'>
                        <div className="overlap">
                            <img className="discord-mark-white" alt="Discord mark white" src="img/discord-mark-white-1.svg" />
                            <div className="text-wrapper">招待リンク</div>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    );
}