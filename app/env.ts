// if (!process.env.CAT_API_KEY) {
//     throw new Error("環境変数 CAT_API_KEY が設定されていません");
// }
// 環境変数が設定されていない場合はundefinedを返す（APIキーなしでも利用可能）

export const CAT_API_KEY = process.env.CAT_API_KEY;
