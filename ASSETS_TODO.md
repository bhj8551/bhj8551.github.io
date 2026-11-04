# ASSETS_TODO — 画像・動画の一覧と、今後そろえたいもの

## 1. 掲載中の画像・動画

すべて架空のデモデータでツールを実際に動かして作成したものです。

| ファイル | 使用ページ | 内容・作り方 |
|---|---|---|
| `assets/img/chohyo/gui_files.webp` | 帳票 | 操作画面（ファイル選択後）。帳票ツールのリポジトリの `docs/images/gui_files.png` を WebP に変換（Linux・IPAゴシックで撮影されたもの） |
| `assets/img/chohyo/gui_done.webp` | 帳票 | 変換完了の画面。同 `docs/images/gui_done.png` を変換 |
| `assets/img/chohyo/review_invoice.webp` | 帳票 | 確認用.xlsx「請求書」シート。**Noto Sans CJK JP で撮り直し**（下記 2.） |
| `assets/img/chohyo/review_list.webp` | 帳票 | 確認用.xlsx「要確認一覧」シート。同上 |
| `assets/img/chohyo/review_by_party.webp` | 帳票 | 確認用.xlsx「取引先別集計」シート。同上 |
| `assets/img/web-monitor/demo_shop.webp` | Web監視 | 架空のECサイト。リポジトリの `docs/images/demo_shop.png` を変換 |
| `assets/img/web-monitor/excel_changes.webp` | Web監視 | Excel「変更点」シート。`wmrpa demo monitor --reset --rounds 2` の出力を Noto Sans CJK JP で撮影 |
| `assets/img/web-monitor/excel_latest.webp` | Web監視 | Excel「最新一覧」シート。同上 |
| `assets/img/web-monitor/excel_trend.webp` | Web監視 | Excel「価格の推移」シート。`wmrpa demo monitor --detail --reset --rounds 8` の出力を撮影 |
| `assets/img/web-monitor/rpa_error_screenshot.webp` | Web監視 | 管理画面のエラー時に自動保存されるスクリーンショット。リポジトリの `docs/images/` から変換 |
| `assets/img/web-monitor/rpa_demo_poster.webp` | Web監視 | 動画のポスター画像（動画の5秒付近：登録完了の画面） |
| `assets/video/rpa_demo.mp4` | Web監視 | 入力自動化のデモ動画（約17秒・無音・1000×760・H.264・約190KB）。下記 3. |
| `assets/img/og/og-*.png` | 各ページの OGP | 1200×630。HTML テンプレートを Noto Sans CJK JP で描画して作成 |

ページごとの合計（HTML・CSS・画像。動画を除く）は、いずれも約0.3MB以下です。

## 2. Excel 画面の撮り直し方法（メモ）

元の画像は LibreOffice が中国語フォント（WenQuanYi）で表示していたため、日本語の字形に合わせて撮り直しました。

1. `fonts-noto-cjk` をインストール
2. fontconfig の設定で WenQuanYi と Noto Sans CJK の SC/TC/HK/KR を除外し、`lang=ja` を指定
3. LibreOffice のユーザー設定で `DefaultLocale_CJK = ja-JP` を指定
4. 帳票ツールの `scripts/review_book_screenshot.py` と同じ手順（Xvfb 上で LibreOffice Calc を開いて `import` で撮影）を**ツールのリポジトリの外のコピー**で実行し、メニュー・ツールバー部分を切り取って WebP（ロスレス）に変換

## 3. デモ動画の作成方法（メモ）

- web-monitor-rpa を**リポジトリの外のコピー**にセットアップし、`wmrpa demo rpa --reset --headless` を実行
- ブラウザの起動部分だけを差し替えて Playwright の録画機能（`record_video_dir`）を有効化。動きが見えるよう操作の間隔を 0.35 秒にし、ブラウザの表示言語を日本語に、録画用に最後に商品一覧を表示（ログイン・入力・登録・CSV の書き戻しの処理は変更していません）
- `ffmpeg -c:v libx264 -preset veryfast -crf 24 -pix_fmt yuv420p -an -movflags +faststart` で MP4 に変換

## 4. 今後そろえたいもの（未作成）

| 優先度 | 内容 | 掲載先 | 注意 |
|---|---|---|---|
| 高 | AI 受付アシスタントの実際の画面（「ログ」シート、「サンプル結果」シート、メニュー「AI受付」） | `works/ai-inbox/` の「デモ」 | 架空のサンプル（「サンプルで試す」）で撮影。現在は図・通知文・列構成を「イメージ」として表示中 |
| 中 | AI 受付アシスタントの Gmail 返信下書きの画面 | 同上 | 架空のアドレスで。Google のロゴが写らないよう本文部分だけを切り取る |
| 中 | 監視デモの変更検知の動画（動画②：デモサイトの価格が変わる → 通知・Excel に反映） | `works/web-monitor/` | 任意。今回は静止画と実際の通知文で代用 |
| 中 | 帳票ツールの Windows / Mac 上の操作画面 | `works/chohyo/` | 現在は Linux で撮影した画面 |
| 低 | 確認用.xlsx を Microsoft Excel で表示した画面 | `works/chohyo/` | 現在は LibreOffice Calc |
| 低 | Slack・Chatwork・LINE の通知の表示例 | `works/ai-inbox/`・`works/web-monitor/` | **各サービスのロゴ・アイコンが写らないよう**、メッセージ本文だけを切り取る。架空のワークスペース名で |

### 画像を追加するときのルール

- 幅は1600px以下、WebP（文字が多い画面はロスレス）に変換し、`width`・`height`・`loading="lazy"`・`alt` を必ず指定
- 1ページの画像の合計は約1.5MB以内（動画を除く）
- 動画は MP4（H.264・無音・幅1280以下・5MB以内）＋ポスター画像、`<video preload="none" controls muted playsinline>`
- 他社のロゴ画像、人物写真、ストック写真は使わない
- 写っている会社名・人名・連絡先が架空のものであることを確認する
