# next-app-boilerplate

## はじめに

事前に以下をインストールしておいてください。
- Node.js
- Docker Desktop
- VSCode

Node.jsは以下のバージョンで動作を確認しています。

```sh
$ node -v
v16.13.2
$ npm -v
8.1.2
```

フロントの開発には VSCode を使用します。
以下の拡張をインストールしておいてください。

- [apollographql.vscode-apollo](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
- [editorconfig.editorconfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)
- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [orta.vscode-jest](https://marketplace.visualstudio.com/items?itemName=orta.vscode-jest)
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [mskelton.react-emotion-snippets](https://marketplace.visualstudio.com/items?itemName=mskelton.react-emotion-snippets)
- [visualstudioexptteam.vscodeintellicode](https://marketplace.visualstudio.com/items?itemName=visualstudioexptteam.vscodeintellicode)
- [styled-components.vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)


## インストール

git clone したらプロジェクトのルートディレクトリで必要なモジュールをインストールを行ってください。

```sh
$ npm install
```

## Dockerコンテナ

以下のコマンドでコンテナを起動してください。

```sh
$ docker-compose up -d
```

以下のコンテナはブラウザからアクセスして利用できます。

| Name | URL |
| ---- | --- |
| Hasura Console   | http://localhost:8080/ |
| Swagger Editor   | http://localhost:8001/ |
| Swagger UI       | http://localhost:8002/ |
| Swagger API mock | http://localhost:8003/users |

## 開発用ビルド

```sh
$ npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて動作を確認してください。
ソースコードが変更されると自動でリビルドされ、ホットリロードされます。

## 商用ビルド

`out` ディレクトリにすべての静的資材が出力されますので S3 等で静的ホスティングが可能です。

```sh
$ npm run build
```

ローカル環境で商用ビルドをして動作を確認したい場合は以下のコマンドを実行してください。

```sh
$ npm run start
```

## コードの自動生成

GraphQL のドキュメントから型定義とカスタムフック関数を自動生成することができます。

```sh
$ npm run graphql-codegen
```

OpenAPIの定義を元に型定義とカスタムフック関数を自動生成することができます。

```sh
$ npm run orval
```

両方まとめて生成したい場合は以下のコマンドを実行してください。

```sh
$ npm run generate
```

## Lint

開発時は VSCode 上でエラーや警告が表示されます。
CLI で実行する場合は以下のコマンドを実行してください。

```sh
$ npm run lint
```

また、VSCode でソースを保存するとオートフォーマットがかかりますので基本はそれに従ってください。CLI でオートフォーマットを利用したい場合は以下のコマンドを実行してください。

```sh
$ npm run lint -- --fix
```

## 型チェック

TypeScript の型検査を行いたい場合は以下を実行してください。

```sh
$ npm run typecheck
```

## Test

CLI で実行する場合は以下のコマンドを実行してください。

```sh
$ npm run test
```

開発時にテストを書く場合は `--watch` オプションを付けると、テストコードやプロダクトコードが更新された時に自動で再実行しますので活用してください。

```sh
$ npm run test -- --watch
```

## CI

以下のコマンドで上記の Lint、型チェック、Testをすべて実行できます。

```sh
$ npm run ci
```
