module.exports = {
    title: 'XieCat',
    description: '一群想为信息安全做点微末贡献的理想主义者',
    base:"/",
    themeConfig: {
        repo: 'xiecat/xiecat.github.io',
        repoLabel: 'GitHub',
        docsRepo: 'xiecat/xiecat.github.io',
        docsDir: 'docs',
        docsBranch: 'dev',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助改进页面内容!',
        nav:[ // 导航栏配置
            { text: '主页', link: '/' },
        ],
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        // nextLinks: false,
        // // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        // prevLinks: false,
        lastUpdated: 'Last Updated', //
        // sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 4, // 侧边栏显示4级
        sidebar:{
        }
    }
}
