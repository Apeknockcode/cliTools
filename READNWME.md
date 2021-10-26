第一步： npm init  创建package.jso
第二步： touch README.md  创建文档文件
第三部： mkdir bin 创建bin文件夹
第四部： 在bin文件夹里创建 touch cli.js 文件 需要写入 
        在配置文件中 写入指令 "bin":{'tao':"./bin/cli.js"}
第五步：  npm link || npm link --force
第六步：
<!-- “#!/usr/bin/env node” 这个必须加 否则报错 -->
报错内容：
    /Users/***/.nvm/versions/node/v14.17.4/bin/tao: line 1: syntax error near unexpected token `"12313"'
    /Users/***/.nvm/versions/node/v14.17.4/bin/tao: line 1: `console.log("12313")'

安装依赖
$ npm install commander --save
$ npm install inquirer --save
$ npm install fs-extra --save
$ npm install axios --save
$ npm install download-git-repo --save
$ npm install figlet --save
$ npm i chalk --save





