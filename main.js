
// コンマ(,)区切りで同じファイルに定義されたモジュールを複数読み込む
import { variable, object } from "./sub.js";
// モジュール名 as 別名でモジュールを別名で読み込む
import { testClass as mainTestClass } from "./sub.js";
// モジュール名 as 別名でモジュールを別名で読み込む
import * as main from "./sub.js";



console.log(main);
console.log(main.variable);
console.log(variable);
console.log(object);
new mainTestClass().testMethod();

