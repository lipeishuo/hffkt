// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 更新内容缓存间隔 单位(秒)；即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  THEME: process.env.NEXT_PUBLIC_THEME || 'next', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  TAG_SORT_BY_COUNT: true, // 标签是否按照文章数量倒序排列，文章多的标签排在前。
  IS_TAG_COLOR_DISTINGUISHED:
    process.env.NEXT_PUBLIC_IS_TAG_COLOR_DISTINGUISHED === 'true' || true, // 对于名称相同的tag是否区分tag的颜色

  // 3.14.1版本后，欢迎语在此配置，英文逗号隔开 ,  即可支持多个欢迎语打字效果。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    '',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false, // 支持Menu 类型，从3.12.0版本起，各主题将逐步支持灵活的二级菜单配置，替代了原来的Page类型，此配置是试验功能、默认关闭。

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '好芳法', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://hffkt.nlink.eu.org', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || '好芳法课堂, 王芳', // 网站关键词 英文逗号隔开

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // 邮箱地址 例如mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || '', // 你的github个人主页 例如 https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的telegram 地址 例如 https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn 首页
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // 您的instagram地址
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', // B站主页
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Youtube主页
  CONTACT_XIAOHONGSHU: process.env.NEXT_PUBLIC_CONTACT_XIAOHONGSHU || '', // 小红书主页
  CONTACT_ZHISHIXINGQIU: process.env.NEXT_PUBLIC_CONTACT_ZHISHIXINGQIU || '', // 知识星球
  CONTACT_WEHCHAT_PUBLIC: process.env.NEXT_PUBLIC_CONTACT_WEHCHAT_PUBLIC || '', // 微信公众号 格式：https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=【xxxxxx】==#wechat_redirect

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion域名，您可以选择用自己的域名进行反向代理，如果不懂得什么是反向代理，请勿修改此项

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png

  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, // 图片压缩宽度默认值，作用于博客封面和文章内容 越小加载图片越快
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, // 文章图片点击放大后的画质宽度，不代表在网页中的实际展示宽度
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', // 随机图片API,如果未配置下面的关键字，主页封面，头像，文章封面图都会被替换为随机图片
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT ||
    'images.unsplash.com', // 触发替换图片的 url 关键字(多个支持用英文逗号分开)，只有图片地址中包含此关键字才会替换为上方随机图片url
  // eg: images.unsplash.com(notion图床的所有图片都会替换),如果你在 notion 里已经添加了一个随机图片 url，恰巧那个服务跑路或者挂掉，想一键切换所有配图可以将该 url 配置在这里
  // 默认下会将你上传到 notion的主页封面图和头像也给替换，建议将主页封面图和头像放在其他图床，在 notion 里配置 link 即可。

  // START ************网站字体*****************
  // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 后面空格隔开的font-light的字体粗细，留空是默认粗细；参考 https://www.tailwindcss.cn/docs/font-weight
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // 无衬线字体 例如'"LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体 例如'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome 字体图标地址; 可选 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************网站字体*****************

  // 路径和组件映射，不同路径分别展示主题的什么组件
  LAYOUT_MAPPINGS: {
    '-1': 'LayoutBase',
    '/': 'LayoutIndex',
    '/archive': 'LayoutArchive',
    '/page/[page]': 'LayoutPostList',
    '/category/[category]': 'LayoutPostList',
    '/category/[category]/page/[page]': 'LayoutPostList',
    '/tag/[tag]': 'LayoutPostList',
    '/tag/[tag]/page/[page]': 'LayoutPostList',
    '/search': 'LayoutSearch',
    '/search/[keyword]': 'LayoutSearch',
    '/search/[keyword]/page/[page]': 'LayoutSearch',
    '/404': 'Layout404',
    '/tag': 'LayoutTagIndex',
    '/category': 'LayoutCategoryIndex',
    '/[prefix]': 'LayoutSlug',
    '/[prefix]/[slug]': 'LayoutSlug',
    '/[prefix]/[slug]/[...suffix]': 'LayoutSlug',
    '/signin': 'LayoutSignIn',
    '/signup': 'LayoutSignUp'
  },

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许，如果设置为false、则全栈禁止复制内容。
  // 自定义右键菜单
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // 自定义右键菜单，覆盖系统菜单
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH ||
    true, // 是否显示切换主题
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE || true, // 是否显示深色模式
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK || true, // 是否显示分享链接
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST || true, // 是否显示随机博客
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY || true, // 是否显示分类
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_TAG:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_TAG || true, // 是否显示标签

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX

  // START********代码相关********
  // PrismJs 代码相关
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER:
    'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // 代码主题 @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // 代码块默认主题
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 是否开启浅色/深色模式代码主题切换； 开启后将显示以下两个主题
  PRISM_THEME_LIGHT_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // 浅色模式主题
  PRISM_THEME_DARK_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // 深色模式主题

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 代码左上角显示mac的红黄绿图标
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // 是否显示行号
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // 是否支持折叠代码框
  CODE_COLLAPSE_EXPAND_DEFAULT:
    process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // 折叠代码默认是展开状态

  // END********代码相关********

  // Mermaid 图表CDN
  MERMAID_CDN:
    process.env.NEXT_PUBLIC_MERMAID_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN:
    process.env.NEXT_PUBLIC_QR_CODE_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 文章分享功能 ，将在底部显示一个分享条
  POSTS_SHARE_SERVICES:
    process.env.NEXT_PUBLIC_POST_SHARE_SERVICES ||
    'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 分享的服務，按顺序显示,逗号隔开
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  // 文章URL前缀
  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX ?? 'article',
  // POST类型文章的默认路径前缀，例如默认POST类型的路径是  /article/[slug]
  // 如果此项配置为 '' 空， 则文章将没有前缀路径
  // 支援類似 WP 可自訂文章連結格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先實作 %year%/%month%/%day%
  // 例：如想連結改成前綴 article + 時間戳記，可變更為： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加载文章预览
  POST_PREVIEW_LINES: process.env.NEXT_PUBLIC_POST_POST_PREVIEW_LINES || 12, // 预览博客行数
  POST_RECOMMEND_COUNT: process.env.NEXT_PUBLIC_POST_RECOMMEND_COUNT || 6, // 推荐文章数量
  POSTS_PER_PAGE: process.env.NEXT_PUBLIC_POST_PER_PAGE || 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 排序方式 'date'按时间,'notion'由notion控制

  POST_WAITING_TIME_FOR_404:
    process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // 文章加载超时时间，单位秒；超时后跳转到404页面

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // 管理后台的KEY，不要暴露在代码中，在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY:
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 客户端搜索用的KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // 在Algolia中创建一个index用作数据库
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // 为true时重新构建索引数据; 默认在build时会构建

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  POST_TITLE_ICON: process.env.NEXT_PUBLIC_POST_TITLE_ICON || true, // 是否显示标题icon
  POST_DISABLE_GALLERY_CLICK:
    process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // 画册视图禁止点击，方便在友链页面的画册插入链接

  //   ********动态特效相关********
  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // 开关
  // 烟花色彩，感谢 https://github.com/Vixcity 提交的色彩
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 鼠标跟随特效
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || false, // 开关
  // 这两个只有在鼠标跟随特效开启时才生效
  // 鼠标类型 1：路劲散点 2：下降散点 3：上升散点 4：边缘向鼠标移动散点 5：跟踪转圈散点 6：路径线条 7：聚集散点 8：聚集网格 9：移动网格 10：上升粒子 11：转圈随机颜色粒子 12：圆锥放射跟随蓝色粒子
  MOUSE_FOLLOW_EFFECT_TYPE: 11, // 1-12
  MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a', // 鼠标点击特效颜色 #xxxxxx 或者 rgba(r,g,b,a)

  // 樱花飘落特效
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // 开关
  // 漂浮线段特效
  NEST: process.env.NEXT_PUBLIC_NEST || false, // 开关
  // 动态彩带特效
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // 开关
  // 静态彩带特效
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // 开关
  // 星空雨特效 黑夜模式才会生效
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false, // 开关

  //   ********挂件组件相关********
  // AI 文章摘要生成 @see https://docs_s.tianli0.top/
  TianliGPT_CSS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_CSS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css',
  TianliGPT_JS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_JS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.js',
  TianliGPT_KEY: process.env.NEXT_PUBLIC_TIANLI_GPT_KEY || '',

  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',
  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || false, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '风を共に舞う気持ち',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover:
        'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover:
        'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  //   ********挂件组件相关********
  // ----> 评论互动 可同时开启多个支持 WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  COMMENT_HIDE_SINGLE_TAB:
    process.env.NEXT_PUBLIC_COMMENT_HIDE_SINGLE_TAB || false, // Whether hide the tab when there's no tabs. 只有一个评论组件时是否隐藏切换组件的标签页

  // artalk 评论插件
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServert后端地址 https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS:
    process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS ||
    'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS:
    process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS ||
    'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO后端地址 腾讯云环境填envId；Vercel环境填域名，教程：https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // 博客列表是否显示评论数
  COMMENT_TWIKOO_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL ||
    'https://cdn.staticfile.net/twikoo/1.6.17/twikoo.min.js', // twikoo客户端cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
    process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 你的代码仓库名， 例如我是 'tangly1024/NotionNext'； 更多文档参考 https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // 你的Github仓库名 e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // 你的Github Repo ID e.g ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_CATEGORY_ID:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // 你的Github Discussions 內的 Category ID ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_MAPPING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 你的Github Discussions 使用哪種方式來標定文章, 預設 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // 你的 Giscus 是否開啟文章表情符號 '1' 開啟 "0" 關閉 預設開啟
  COMMENT_GISCUS_EMIT_METADATA:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // 你的 Giscus 是否提取 Metadata '1' 開啟 '0' 關閉 預設關閉
  COMMENT_GISCUS_INPUT_POSITION:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 你的 Giscus 發表留言位置 'bottom' 尾部 'top' 頂部, 預設 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // 你的 Giscus 語言 e.g 'en', 'zh-TW', 'zh-CN', 預設 'en'
  COMMENT_GISCUS_LOADING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // 你的 Giscus 載入是否漸進式載入, 預設 'lazy'
  COMMENT_GISCUS_CROSSORIGIN:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 你的 Giscus 可以跨網域, 預設 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC || '/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalk评论插件 更多参考 https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // 你的Github仓库名，例如 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // 你的用户名 e.g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // 管理员用户名、一般是自己 e.g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20位ID ， 在gitalk后台获取
  COMMENT_GITALK_CLIENT_SECRET:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40位ID， 在gitalk后台获取
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // 类似facebook的无干扰模式
  COMMENT_GITALK_JS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室 see https://gitter.im/ 不需要则留空
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN:
    process.env.NEXT_PUBLIC_VALINE_CDN ||
    'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // 该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
    process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 可以搭配后台管理评论 https://github.com/DesertsP/Valine-Admin  便于查看评论，以及邮件通知，垃圾评论过滤等功能

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // 请配置完整的Waline评论地址 例如 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 最新评论

  // 此评论系统基于WebMention，细节可参考https://webmention.io
  // 它是一个基于IndieWeb理念的开放式评论系统，下方COMMENT_WEBMENTION包含的属性皆需配置：
  // ENABLE: 是否开启
  // AUTH: Webmention使用的IndieLogin，可使用Twitter或Github个人页面连结
  // HOSTNAME: Webmention绑定之网域，通常即为本站网址
  // TWITTER_USERNAME: 评论显示区域需要的资讯
  // TOKEN: Webmention的API token
  COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
  COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
  COMMENT_WEBMENTION_HOSTNAME:
    process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
  COMMENT_WEBMENTION_TWITTER_USERNAME:
    process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
  COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '',

  // <---- 评论插件

  // ----> 站点统计
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // vercel自带的统计 https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE:
    process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填写百度统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // 谷歌Analytics的id e.g: G-XXXXXXXXXX

  // 51la 站点统计 https://www.51.la/
  ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', // id，在51la后台获取 参阅 https://docs.tangly1024.com/article/notion-next-51-la
  ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', // ck，在51la后台获取

  // Matomo 网站统计
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // Matomo服务器地址，不带斜杠
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomo网站ID
  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // 微软 Clarity 站点分析
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || null, // 只需要复制Clarity脚本中的ID部分，ID是一个十位的英文数字组合

  // <---- 站点统计

  // START---->营收相关

  // 谷歌广告
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdScene>广告>按单元广告>新建文章内嵌广告 粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene>广告>按单元广告>新建原生广告
  ADSENSE_GOOGLE_SLOT_AUTO:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdScene>广告>按单元广告>新建展示广告 （自动广告）

  // 万维广告
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 创建您的万维广告单元ID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // 是否开启WWADS广告屏蔽插件检测,开启后会在广告位上以文字提示 @see https://github.com/bytegravity/whitelist-wwads

  // END<----营收相关

  // 自定义配置notion数据库字段名
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 文章类型，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // 当type文章类型与此值相同时，为博文。
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // 当type文章类型与此值相同时，为单页。
    type_notice:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // 当type文章类型与此值相同时，为公告。
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // 当type文章类型与此值相同时，为菜单。
    type_sub_menu:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // 当type文章类型与此值相同时，为子菜单。
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 文章标题
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // 当status状态值与此相同时为发布，可以为中文
    status_invisible:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // 当status状态值与此相同时为隐藏发布，可以为中文 ， 除此之外其他页面状态不会显示在博客上
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon',
    ext: process.env.NEXT_PUBLIC_NOTION_PROPERTY_EXT || 'ext' // 扩展字段，存放json-string，用于复杂业务
  },

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // 开启mailichimp邮件订阅 客户列表ID ，具体使用方法参阅文档
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // 开启mailichimp邮件订阅 APIkey

  // ANIMATE.css 动画
  ANIMATE_CSS_URL:
    process.env.NEXT_PUBLIC_ANIMATE_CSS_URL ||
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', // 动画CDN

  // 网站图片
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    'data:image/png;base64,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', // 懒加载占位图片地址，支持base64或url
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 此配置已失效，请勿使用；AMAZON方案不再支持，仅支持Notion方案。 ['Notion','AMAZON'] 站点图片前缀 默认 Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 文章图片是否自动添加阴影
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800, // Notion图片压缩宽度

  // 作废配置
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 作者头像，被notion中的ICON覆盖。若无ICON则取public目录下的avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'NotionNext BLOG', // 站点标题 ，被notion中的页面标题覆盖；此处请勿留空白，否则服务器无法编译
  HOME_BANNER_IMAGE:
    process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首页背景大图, 会被notion中的封面图覆盖，若无封面图则会使用代码中的 /public/bg_image.jpg 文件
  DESCRIPTION:
    process.env.NEXT_PUBLIC_DESCRIPTION || '这是一个由NotionNext生成的站点', // 站点描述，被notion中的页面描述覆盖

  // 开发相关
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 是否显示调试按钮
  ENABLE_CACHE:
    process.env.ENABLE_CACHE ||
    process.env.npm_lifecycle_event === 'build' ||
    process.env.npm_lifecycle_event === 'export', // 在打包过程中默认开启缓存，开发或运行时开启此功能意义不大。
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  BUNDLE_ANALYZER: process.env.ANALYZE === 'true' || false, // 是否展示编译依赖内容与大小
  VERSION: process.env.NEXT_PUBLIC_VERSION // 版本号
}

module.exports = BLOG
