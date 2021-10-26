const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const Generator = require('./Generator')

module.exports = async function (name, options) {
    // 执行创建命令
    // 当前命令行选择的目录
    const cwd = process.cwd();
    // 需要创建的目录地址
    const targetAir = path.join(cwd, name)
    // 目录是否已经存在？
    let { res } = await fs.pathExists(targetAir).then(res => {
        return res
    })
    function createDir(text, url, name) {
        fs.ensureDir(url).then(res => {
            console.log(`\r\n>` + text + `${name}文件夹成功`)
        })
        // 创建项
        const generator = new Generator(name, url)
        generator.create()
    }

    if (res) {
        console.log("文件名称重复")
        // 文件夹存在
        let { action } = await inquirer.prompt([
            {
                name: 'action',
                type: 'list',
                message: 'Target directory already exists Pick an action:',
                choices: [
                    {
                        name: '重新创建',
                        value: 'reCreate'
                    }, {
                        name: '返回',
                        value: false
                    }
                ]
            }
        ])
        if (!action) {
            return;
        } else if (action === 'reCreate') {
            console.log(`\r\n>ReCreating...`)
            const url = cwd + "/new" + name
            createDir("重新创建", url, name)
        }
    } else {
        console.log(`\r\n>Creating...`)
        const url = targetAir
        createDir("创建", url, name)
    }

}