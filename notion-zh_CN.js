// ==UserScript==
// @name         Notion-zh_CN notion的汉化脚本
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  notion的100%汉化脚本，欢迎积极贡献一同改进项目，地址：https://github.com/reamd7/notion-zh_CN
// @author       reamd7
// @match        *://www.notion.so/*
// @grant        none
// @run-at       document-start
// @copyright    2021, reamd7
// @license      MIT
// ==/UserScript==
(function () {
  "use strict";

  const script = document.createElement("script");
  script.id = "messages";
  script.type = "application/json";
  script.setAttribute("data-locale", "zh-CN");
  script.text = JSON.stringify({
    "FrontPricingPage.individualSection.header": "个人",
    "FrontPricingPage.teamsAndBusinesses.header": "适用于团队和公司",
    "SidebarTimelineWarning.description":
      "已达到团队计划的时间线使用限制。升级后，您可以无限次使用。",
    "SidebarTimelineWarning.header": "使用无限时间线",
    "SidebarTimelineWarning.upgradeButton": "立即升级",
    "abstractBlock.embeds.button.label": "Abstract嵌入",
    "abstractBlock.embeds.caption": "与启用公共访问的Abstract链接兼容",
    "abstractBlock.placeholder": "Abstract嵌入",
    "accountActions.deletingAccount.loadingMessage": "正在删除用户帐户.",
    "accountActions.deletingAccount.noUserToDeleteMessage":
      "没有要删除的帐户。",
    "action.activate.name": "激活",
    "action.addtoFavorites.name": "添加到收藏夹",
    "action.backgroundColor.blue.name": "蓝色背景",
    "action.backgroundColor.brown.name": "棕色背景",
    "action.backgroundColor.default.fuzzySearchKeyword": "默认黑色白色",
    "action.backgroundColor.default.name": "默认背景",
    "action.backgroundColor.gray.fuzzySearchKeyword": "灰色背景",
    "action.backgroundColor.gray.name": "灰色背景",
    "action.backgroundColor.green.name": "绿色背景",
    "action.backgroundColor.orange.name": "橙色背景",
    "action.backgroundColor.pink.name": "粉红色背景",
    "action.backgroundColor.purple.name": "紫色背景",
    "action.backgroundColor.red.name": "红色背景",
    "action.backgroundColor.yellow.name": "黄色背景",
    "action.backtoNotion.name": "返回到Notion",
    "action.bold.name": "粗细",
    "action.calendarBy.name": "日历依据",
    "action.caption.name": "标题",
    "action.clearDate.name": "清除日期",
    "action.clearSelection.name": "取消选择",
    "action.color.name": "颜色",
    "action.comment.name": "评论",
    "action.commentPage.name": "评论",
    "action.configure.name": "配置",
    "action.connectSlack.title": "连接到Slack",
    "action.contextMenu.name": "上下文菜单",
    "action.copy.name": "复制",
    "action.copyLink.name": "复制链接",
    "action.copyLinkToCurrentPage.snackBarMessage":
      "指向当前页面的链接已复制到剪贴板。",
    "action.copyLinktoView.name": "复制视图链接",
    "action.createEquation.name": "创建数学公式",
    "action.createLink.name": "创建链接",
    "action.customizePage.label": "自定义页面",
    "action.cut.name": "剪切",
    "action.darkMode.name": "黑暗模式",
    "action.databaseLock.fuzzySearchKeywords": "数据库锁定",
    "action.databaseLock.label": "数据库锁定",
    "action.databaseLock.tooltip":
      "锁定数据库属性和视图，防止意外编辑。仍然可以在内部创建和编辑页面。",
    "action.dateOrReminder.description": "在文本中插入日期或提醒符。",
    "action.dateOrReminder.title": "日期或提醒",
    "action.delete.name": "删除",
    "action.download.name": "下载",
    "action.duplicate.name": "克隆",
    "action.duplicatePage.name": "复制页面",
    "action.duplicateTo.name": "复制目标",
    "action.edit.name": "编辑",
    "action.editPage.name": "编辑",
    "action.editProperty.name": "编辑属性",
    "action.enter.name": "输入",
    "action.exitApp.name": "退出应用程序",
    "action.export.caption": "PDF、HTML、Markdown",
    "action.export.name": "导出",
    "action.filter.name": "过滤器",
    "action.followPage.title": "关注页面",
    "action.fontSmallText.fuzzySearchKeywords": "小文本字体",
    "action.fontSmallText.label": "小文本",
    "action.foregroundColor.blue.name": "蓝色",
    "action.foregroundColor.brown.name": "棕色",
    "action.foregroundColor.default.name": "基本",
    "action.foregroundColor.gray.fuzzySearchKeyword": "灰色",
    "action.foregroundColor.gray.name": "灰色",
    "action.foregroundColor.green.name": "绿色",
    "action.foregroundColor.orange.name": "橙色",
    "action.foregroundColor.pink.name": "粉红色",
    "action.foregroundColor.purple.name": "紫色",
    "action.foregroundColor.red.name": "红色",
    "action.foregroundColor.yellow.name": "黄色",
    "action.fullScreen.name": "全屏",
    "action.fullWidth.fuzzySearchKeywords": "总宽度",
    "action.fullWidth.label": "总宽度",
    "action.goBack.name": "向后",
    "action.goForward.name": "向前",
    "action.goUp.name": "安慰",
    "action.group.name": "分组",
    "action.groupBy.name": "分组",
    "action.highlight.name": "亮点",
    "action.import.name": "导入",
    "action.indent.name": "缩进",
    "action.insertBelow.name": "在下方插入",
    "action.insertEmoji.description": "找到要放在文本中的Emoji。",
    "action.insertEmoji.title": "伊莫吉",
    "action.insertInlineEquation.description": "请在文本中加入公式符号。",
    "action.insertInlineEquation.fuzzySearchKeyword": "乳胶内联数学公式$",
    "action.insertInlineEquation.title": "内联数学公式",
    "action.italic.name": "斜体",
    "action.languageMode.abap": "ABAP",
    "action.languageMode.arduino": "Arduino",
    "action.languageMode.bash": "Bash",
    "action.languageMode.basic": "基本版",
    "action.languageMode.c": "C",
    "action.languageMode.clojure": "Clojure",
    "action.languageMode.coffeescript": "CoffeeScript",
    "action.languageMode.cplusplus": "C++",
    "action.languageMode.csharp": "C#",
    "action.languageMode.css": "CSS",
    "action.languageMode.cstyle": "Java/C/C++/C#",
    "action.languageMode.dart": "达特",
    "action.languageMode.diff": "Diff",
    "action.languageMode.docker": "Docker",
    "action.languageMode.elixir": "Elixir",
    "action.languageMode.elm": "Elm",
    "action.languageMode.erlang": "Erlang",
    "action.languageMode.flow": "Flow(流式)",
    "action.languageMode.fortran": "Fortran",
    "action.languageMode.fsharp": "F#",
    "action.languageMode.gherkin": "Gherkin",
    "action.languageMode.glsl": "GLSL",
    "action.languageMode.go": "Go",
    "action.languageMode.graphql": "Graphql",
    "action.languageMode.groovy": "Groovy",
    "action.languageMode.haskell": "Haskell",
    "action.languageMode.html": "HTML",
    "action.languageMode.java": "Java",
    "action.languageMode.javascript": "JavaScript",
    "action.languageMode.json": "JSON",
    "action.languageMode.kotlin": "Kotlin",
    "action.languageMode.latex": "LaTeX",
    "action.languageMode.less": "LESS",
    "action.languageMode.lisp": "Lisp",
    "action.languageMode.livescript": "LiveScript",
    "action.languageMode.lua": "Lua",
    "action.languageMode.makefile": "Makefile",
    "action.languageMode.markdown": "Markdown",
    "action.languageMode.markup": "标记",
    "action.languageMode.matlab": "MATLAB",
    "action.languageMode.mermaid": "Mermaid",
    "action.languageMode.name": "语言设置",
    "action.languageMode.nix": "Nix",
    "action.languageMode.objectiveC": "Objective-C",
    "action.languageMode.ocaml": "OCaml",
    "action.languageMode.pascal": "Pascal",
    "action.languageMode.perl": "Perl",
    "action.languageMode.php": "PHP",
    "action.languageMode.plaintext": "Plain Text",
    "action.languageMode.powershell": "Powershell",
    "action.languageMode.prolog": "Prolog",
    "action.languageMode.python": "Python",
    "action.languageMode.r": "R",
    "action.languageMode.reason": "Reason",
    "action.languageMode.ruby": "Ruby",
    "action.languageMode.rust": "Rust(Rust)",
    "action.languageMode.sass": "Sass",
    "action.languageMode.scala": "Scala",
    "action.languageMode.scheme": "Scheme",
    "action.languageMode.scss": "SCSS",
    "action.languageMode.shell": "Shell",
    "action.languageMode.sql": "SQL(SQL)",
    "action.languageMode.swift": "Swift",
    "action.languageMode.typescript": "TypeScript(类型脚本)",
    "action.languageMode.vbdotnet": "VB.net",
    "action.languageMode.verilog": "Verilog",
    "action.languageMode.vhdl": "VHDL",
    "action.languageMode.visualbasic": "Visual Basic",
    "action.languageMode.webassembly": "WebAssembly",
    "action.languageMode.xml": "XML",
    "action.languageMode.yaml": "YAML",
    "action.lastUsedHighlight.fuzzySearchKeywords": "上次使用的颜色",
    "action.lastUsedHighlight.title": "最近使用",
    "action.leave.name": "出去",
    "action.linkedDatabaseLock.tooltip":
      "锁定数据库属性和视图以防止意外编辑。您仍然可以创建和编辑内部页面。",
    "action.listFormat.letters.default": "默认值",
    "action.listFormat.letters.name": "字",
    "action.listFormat.letters.roman": "罗马数字",
    "action.listFormat.name": "列表格式",
    "action.listFormat.numbers.name": "数字",
    "action.listFormat.sectionName": "列表格式",
    "action.lockPage.name": "锁定页面",
    "action.logIn.name": "登录",
    "action.mentionPage.description": "在文本中介绍页面和地点。",
    "action.mentionPage.title": "管理页面",
    "action.mentionPerson.description": "给某人发信息的话，会通知那个人的。",
    "action.mentionPerson.title": "移植用户",
    "action.mergewithCSV.name": "与CSV合并",
    "action.moveDown.name": "下移",
    "action.moveTo.name": "转移",
    "action.moveUp.name": "上移",
    "action.navigateTo.name": "转至其它页面",
    "action.newPage.name": "新建页面",
    "action.newPageIn.name": "切换到子页面",
    "action.noDate.name": "无日期",
    "action.openAllToggles.name": "打开所有切换",
    "action.openAsPage.name": "打开页面",
    "action.openSettings.name": "打开设置",
    "action.openasPage.name": "打开页面",
    "action.openinAndroidApp.name": "在Android应用程序中打开",
    "action.openinMacApp.name": "在Mac应用程序中打开",
    "action.openinWindowsApp.name": "在Windows应用程序中打开",
    "action.openiniOSApp.name": "在iOS应用程序中打开",
    "action.pageHistory.name": "页面历史记录",
    "action.pageLock.fuzzySearchKeywords": "锁定页面",
    "action.pageLock.label": "锁定页面",
    "action.pageLock.tooltip": "锁定页面，防止意外编辑。",
    "action.paste.name": "粘贴",
    "action.properties.name": "属性",
    "action.propertyVisibility.label": "显示属性切换",
    "action.quickFind.name": "快速搜索",
    "action.quoteSize.default": "基本",
    "action.quoteSize.large": "大",
    "action.quoteSize.name": "引用大小",
    "action.redo.name": "重新运行",
    "action.removefromFavorites.name": "从收藏夹中删除",
    "action.rename.name": "重命名",
    "action.replace.name": "替换",
    "action.reportPage.name": "页面申报",
    "action.resetZoom.name": "初始化放大",
    "action.resyncPage.name": "刷新脱机数据。",
    "action.ruleCount.label": "{ruleCount，plural，other{规则{ruleCount}条}}",
    "action.ruleCountForSorts.label":
      "{ruleCount，plural，other{{ruleCount}规定}}",
    "action.search.name": "搜索",
    "action.search.noResults": "无结果",
    "action.section.actions": "操作",
    "action.section.advancedBlocks": "高级块",
    "action.section.background": "背景",
    "action.section.background.fuzzySearchKeywords": "颜色背景",
    "action.section.basicBlocks": "默认块",
    "action.section.color": "颜色",
    "action.section.database": "数据库",
    "action.section.embeds": "嵌入",
    "action.section.fontStyle": "风格",
    "action.section.inline": "内联",
    "action.section.media": "媒体",
    "action.section.quoteSize": "引用大小",
    "action.section.turnInto": "切换",
    "action.selectAbove.name": "以上选择",
    "action.selectAll.name": "全选",
    "action.selectBelow.name": "选择下方",
    "action.selectLeft.name": "选择左侧",
    "action.selectRight.name": "选择右侧",
    "action.setPageFont.default.caption": "基本",
    "action.setPageFont.default.fuzzySearchKeywords": "默认字体",
    "action.setPageFont.default.tooltip": "基本三叶通用",
    "action.setPageFont.mono.caption": "单声道",
    "action.setPageFont.mono.fuzzySearchKeywords": "字体单声道",
    "action.setPageFont.mono.tooltip": "适合绘图和注释创建",
    "action.setPageFont.serif.caption": "瑟里夫",
    "action.setPageFont.serif.fuzzySearchKeywords": "字体斜纹",
    "action.setPageFont.serif.tooltip": "适合出版的字体",
    "action.shareLink.name": "共享链接",
    "action.showDeletedPages.name": "显示删除页",
    "action.signUpOrlogIn.name": "注册或登录",
    "action.sort.name": "排序",
    "action.startPublicEditDialog.continueLabel": "继续",
    "action.startPublicEditDialog.message":
      "当您开始编辑时，您的姓名、电子邮件和照片将显示在页面所有者中。",
    "action.strikeThrough.name": "取消线",
    "action.switchSpaces.name": "切换区域",
    "action.syncPage.name": "脱机保存",
    "action.tableHeaderCell.addFilter": "添加过滤器",
    "action.tableHeaderCell.configureOptions": "选项",
    "action.tableHeaderCell.configureRollup": "汇总配置",
    "action.tableHeaderCell.delete": "删除",
    "action.tableHeaderCell.duplicate": "克隆",
    "action.tableHeaderCell.editFormula": "编辑公式",
    "action.tableHeaderCell.formatDate": "格式日期",
    "action.tableHeaderCell.formatNumber": "数字格式",
    "action.tableHeaderCell.hide": "隐藏",
    "action.tableHeaderCell.insertLeft": "在左侧插入",
    "action.tableHeaderCell.insertRight": "在右侧插入",
    "action.tableHeaderCell.sortAscending": "升序",
    "action.tableHeaderCell.sortDescending": "降序",
    "action.templates.name": "模板",
    "action.timelineBy.name": "时间轴显示方式",
    "action.toggleSidebar.name": "侧边栏切换",
    "action.turnInto.name": "切换",
    "action.turnintoInline.name": "切换到内联",
    "action.turnintoPage.name": "切换到页面",
    "action.underline.name": "下划线",
    "action.undo.name": "撤消",
    "action.unindent.name": "取消缩进",
    "action.unlockPageName.name": "解锁页面",
    "action.unpin.name": "从侧边栏移除",
    "action.unsyncPage.name": "从脱机中删除",
    "action.unsyncTransclusionContainerName.name": "禁用所有同步",
    "action.unsyncTransclusionReference.name": "取消同步",
    "action.viewOriginal.name": "查看源",
    "action.whatIsNotion.name": "Notion简介",
    "action.wrapCells.name": "封装单元格",
    "action.wrapCode.fuzzySearchKeywords": "包络代码",
    "action.wrapCode.label": "包络代码",
    "action.zoomIn.name": "放大",
    "action.zoomOut.name": "缩小",
    "actionSearch.tableHeaderCell.addFilter": "添加过滤器",
    "actionSearch.tableHeaderCell.configureOptions": "选项",
    "actionSearch.tableHeaderCell.configureRollup": "汇总配置",
    "actionSearch.tableHeaderCell.delete": "删除",
    "actionSearch.tableHeaderCell.duplicate": "克隆",
    "actionSearch.tableHeaderCell.editFormula": "编辑公式",
    "actionSearch.tableHeaderCell.formatDate": "日期格式",
    "actionSearch.tableHeaderCell.formatNumber": "数字格式",
    "actionSearch.tableHeaderCell.hide": "隐藏",
    "actionSearch.tableHeaderCell.insertLeft": "在左侧插入",
    "actionSearch.tableHeaderCell.insertRight": "在右侧插入",
    "actionSearch.tableHeaderCell.sortAscending": "升序",
    "actionSearch.tableHeaderCell.sortDescending": "降序",
    "activateReferral.dialogError.cannotInviteSelf.errorMessage":
      "不能邀请自己。",
    "activateReferral.dialogError.emailNotEligible.errorMessage":
      "此电子邮件地址不适合推荐计划。如果您认为有错误，请联系我们的支持团队。",
    "activateReferral.dialogError.invitationCreditAlreadyApplied.errorMessage":
      "您已经使用了邀请积分。",
    "activateReferral.dialogError.noValidReferral.errorMessage":
      "找不到有效的推荐。",
    "activateReferral.dialogError.referralAlreadyActivated.errorMessage":
      "推荐已经激活。",
    "activateReferral.dialogError.referringUserNotFound.errorMessage":
      "找不到推荐用户。",
    "activateReferral.dialogError.userAlreadySignedUp.errorMessage":
      "用户已经注册。",
    "activity.accessRequested.header":
      "请求访问{numberOfAuthors、plural、other{{authorOrAuthors}{pageName}",
    "activity.actions.unarchiveButton.label": "取消存档",
    "activity.blockEdited.header":
      "您已经编辑了{numberOfAuthors、plural、other{{authorOrAuthors}{pageTitle}页面}",
    "activity.collectionCreated.header":
      "已成功创建{numberOfAuthors、plural、other{{authorOrAuthors}{collectionViewTitle}",
    "activity.collectionPropertyCreated.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{collectionTitle}{collectionPropertyTitle}已创建属性{collectionPropertyTitle}}",
    "activity.collectionPropertyDeleted.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}已从{collectionPropertyTitle}中删除了{collectionPropertyTitle}属性。}",
    "activity.collectionPropertyEdited.header":
      "已在{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}}编辑了{collectionPropertyTitle}属性。}",
    "activity.collectionRowCreated.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{pageTitle}页已创建。}}",
    "activity.collectionRowDeleted.header":
      "已删除{numberOfAuthors、plural、other{{authorOrAuthors}{pageTitle}页面}",
    "activity.collectionViewCreated.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}{collectionViewTitle}已生成{collectionViewTitle}视图。}",
    "activity.collectionViewEdited.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}已在{collectionViewTitle}中编辑了{collectionViewTitle}视图。}",
    "activity.commentActivity.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{blockName}已评论。}}",
    "activity.deletedGroup.placeholder": "已删除的组",
    "activity.emailEdited.header":
      "已将{numberOfAuthors、plural、other{{authorOrAuthors}电子邮件从{oldEmail}更改为{newEmail}",
    "activity.mentionActivity.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{pageName}中我精神抖擞。}}",
    "activity.pageLocked.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{blockTitle}块已锁定。}}",
    "activity.pageUnlocked.header":
      "已解锁{numberOfAuthors、plural、other{{authorOrAuthors}{blockTitle}",
    "activity.permissionGroupTitles.deletedGroup": "已删除的组",
    "activity.permissionGroupTitles.untitledGroup": "无名称组",
    "activity.permissionsActivity.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}{pageOrSpaceName}。}}",
    "activity.refollowPageButton.label": "再次关注此页面",
    "activity.reminderInActivity.header": "{pageTitle}有卸妆器",
    "activity.replyButton.label": "回复",
    "activity.restorePermissionsForActivity.header":
      "已恢复对{numberOfAuthors、plural、other{{authorOrAuthors}{pageOrSpaceName}的访问权限。}}",
    "activity.restrictPermissionsForActivity.header":
      "已限制访问{numberOfAuthors、plural、other{{authorOrAuthors}{pageOrSpaceName}",
    "activity.topLevelBlockPrivateCreated.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{pageTitle}已创建个人主页。}}",
    "activity.topLevelBlockPrivateDeleted.header":
      "已删除{numberOfAuthors、plural、other{{authorOrAuthors}{pageTitle}个人主页。}}",
    "activity.topLevelBlockWorkspaceCreated.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{pageTitle}已创建工作空间页面。}}",
    "activity.topLevelBlockWorkspaceDeleted.header":
      "已删除{numberOfAuthors、plural、other{{authorOrAuthors}{pageTitle}工作空间页面。}}",
    "activity.unarchiveButton.label": "取消存档",
    "activity.unfollowPageButton.label": "取消关注此页面",
    "activity.untitledGroup.placeholder": "无名称组",
    "activity.untitledPlaceholder": "无标题",
    "activity.updatedPermissionGroupCreated.header":
      "{numberOfAuthors，plural，other{创建的组}}",
    "activity.updatedPermissionGroupDeleted.header":
      "{numberOfAuthors，plural，other{已删除组}}",
    "activity.updatedPermissionGroupEdit.header":
      "{numberOfAuthors，plural，other{编辑组}}",
    "activity.updatedPermissionGroupEditedDefault.header":
      "{numberOfAuthors，plural，other{编辑组}}",
    "activity.updatedPermissionsForActivity.header":
      "已更新{numberOfAuthors、plural、other{{authorOrAuthors}{pageOrSpaceName}的权限}}",
    "activity.userInvitedActivityGroupId.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}已将我添加到{groupName}组}}",
    "activity.userInvitedActivityGroupIdByBot.header":
      "已添加到组{groupName}。",
    "activity.userInvitedActivityNavigableBlock.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}邀请我到{blockName}块}",
    "activity.userInvitedActivityNavigableBlockByBot.header":
      "已被邀请加入{blockName}。",
    "activity.userInvitedActivityOtherInvite.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}邀请我加入{spaceName}",
    "activity.userInvitedActivityOtherInviteByBot.header":
      "已被邀请加入{spaceName}。",
    "activity.viewMoreButton.label": "{moreCount}查看更多项目",
    "activitySection.archiveAction.tooltip": "保留此通知",
    "activitySection.authorPhrase.forMoreThanTwoAuthors.label":
      "{numberOfOtherAuthors，plural，other{<b>{firstAuthor}</b>，<b>{secondAuthor}</b>您之外{numberOfOtherAuthors}名称}}",
    "activitySection.authorPhrase.forNoAuthors.label": "没人",
    "activitySection.authorPhrase.forOneAuthor.label": "<b>{author}</b>",
    "activitySection.authorPhrase.forTwoAuthors.label":
      "<b>{firstAuthor}</b>，<b>{secondAuthor}</b>",
    "activitySection.viewVersionForUpdate.tooltip": "查看此更新的版本",
    "activityUpdate.unknownErrorLoadingActivities.message": "出现问题。",
    "activityUpdates.offlineMessage": "在线查看更新。",
    "actorHelpers.anonymousPlaceholder": "匿名",
    "actorHelpers.userFullName": "{firstName}{lastName}",
    "adminAPIRequest.loadingMessage": "正在加载.",
    "adminLoginAsUser.loggingInAs.loadingMessage": "正在用{userEmail}地址登录",
    "allTimeZones.Africa/Abidjan": "非洲/阿比让",
    "allTimeZones.Africa/Accra": "非洲/阿克拉",
    "allTimeZones.Africa/Addis_Ababa": "非洲/亚的斯亚贝巴",
    "allTimeZones.Africa/Algiers": "非洲/阿尔及尔",
    "allTimeZones.Africa/Asmara": "非洲/阿斯马拉",
    "allTimeZones.Africa/Asmera": "非洲/阿斯梅拉",
    "allTimeZones.Africa/Bamako": "非洲/巴马科",
    "allTimeZones.Africa/Bangui": "非洲/邦基",
    "allTimeZones.Africa/Banjul": "非洲/班珠尔",
    "allTimeZones.Africa/Bissau": "非洲/比绍",
    "allTimeZones.Africa/Blantyre": "非洲/布兰太尔",
    "allTimeZones.Africa/Brazzaville": "非洲/布拉柴维尔",
    "allTimeZones.Africa/Bujumbura": "非洲/布琼布拉",
    "allTimeZones.Africa/Cairo": "非洲/开罗",
    "allTimeZones.Africa/Casablanca": "非洲/卡萨布兰卡",
    "allTimeZones.Africa/Ceuta": "非洲/塞乌塔",
    "allTimeZones.Africa/Conakry": "非洲/科纳克里",
    "allTimeZones.Africa/Dakar": "非洲/达喀尔",
    "allTimeZones.Africa/Dar_es_Salaam": "非洲/达累斯萨拉姆",
    "allTimeZones.Africa/Djibouti": "非洲/吉布提",
    "allTimeZones.Africa/Douala": "非洲/杜阿拉",
    "allTimeZones.Africa/El_Aaiun": "非洲/埃尔艾云",
    "allTimeZones.Africa/Freetown": "非洲/弗里敦",
    "allTimeZones.Africa/Gaborone": "非洲/加博罗内",
    "allTimeZones.Africa/Harare": "非洲/哈拉雷",
    "allTimeZones.Africa/Johannesburg": "非洲/约翰内斯堡",
    "allTimeZones.Africa/Juba": "非洲/朱巴",
    "allTimeZones.Africa/Kampala": "非洲/坎帕拉",
    "allTimeZones.Africa/Khartoum": "非洲/喀土穆",
    "allTimeZones.Africa/Kigali": "非洲/基加利",
    "allTimeZones.Africa/Kinshasa": "非洲/金沙萨",
    "allTimeZones.Africa/Lagos": "非洲/拉各斯",
    "allTimeZones.Africa/Libreville": "非洲/利伯维尔",
    "allTimeZones.Africa/Lome": "非洲/洛美",
    "allTimeZones.Africa/Luanda": "非洲/罗安达",
    "allTimeZones.Africa/Lubumbashi": "非洲/卢本巴希",
    "allTimeZones.Africa/Lusaka": "非洲/卢萨卡",
    "allTimeZones.Africa/Malabo": "非洲/马拉博",
    "allTimeZones.Africa/Maputo": "非洲/马普托",
    "allTimeZones.Africa/Maseru": "非洲/马塞鲁",
    "allTimeZones.Africa/Mbabane": "非洲/姆巴瓦内",
    "allTimeZones.Africa/Mogadishu": "非洲/摩加迪沙",
    "allTimeZones.Africa/Monrovia": "非洲/蒙罗维亚",
    "allTimeZones.Africa/Nairobi": "非洲/内罗毕",
    "allTimeZones.Africa/Ndjamena": "非洲/恩贾梅纳",
    "allTimeZones.Africa/Niamey": "非洲/尼亚美",
    "allTimeZones.Africa/Nouakchott": "非洲/努瓦克肖特",
    "allTimeZones.Africa/Ouagadougou": "非洲/瓦加杜古",
    "allTimeZones.Africa/Porto-Novo": "非洲/波托诺沃",
    "allTimeZones.Africa/Sao_Tome": "非洲/圣多美和普林西比",
    "allTimeZones.Africa/Timbuktu": "非洲/组北斗",
    "allTimeZones.Africa/Tripoli": "非洲/的黎波里",
    "allTimeZones.Africa/Tunis": "非洲/突尼斯",
    "allTimeZones.Africa/Windhoek": "非洲/温得和克",
    "allTimeZones.America/Adak": "美国/阿达克",
    "allTimeZones.America/Anchorage": "美国/安克雷奇",
    "allTimeZones.America/Anguilla": "美洲/安圭拉",
    "allTimeZones.America/Antigua": "美洲/安提瓜",
    "allTimeZones.America/Araguaina": "美国/阿拉瓜伊纳",
    "allTimeZones.America/Argentina/Buenos_Aires": "美洲/阿根廷/布宜诺斯艾利斯",
    "allTimeZones.America/Argentina/Catamarca": "美洲/阿根廷/卡塔马尔卡",
    "allTimeZones.America/Argentina/ComodRivadavia":
      "美洲/阿根廷/科莫多罗里瓦达维亚",
    "allTimeZones.America/Argentina/Cordoba": "美洲/阿根廷/科尔多瓦",
    "allTimeZones.America/Argentina/Jujuy": "美洲/阿根廷/胡胡伊",
    "allTimeZones.America/Argentina/La_Rioja": "美洲/阿根廷/拉里奥哈",
    "allTimeZones.America/Argentina/Mendoza": "美洲/阿根廷/门多萨",
    "allTimeZones.America/Argentina/Rio_Gallegos": "美洲/阿根廷/里奥加耶戈斯",
    "allTimeZones.America/Argentina/Salta": "美洲/阿根廷/萨尔塔",
    "allTimeZones.America/Argentina/San_Juan": "美洲/阿根廷/圣胡安",
    "allTimeZones.America/Argentina/San_Luis": "美洲/阿根廷/圣路易斯",
    "allTimeZones.America/Argentina/Tucuman": "美洲/阿根廷/图库曼",
    "allTimeZones.America/Argentina/Ushuaia": "美洲/阿根廷/乌斯怀亚",
    "allTimeZones.America/Aruba": "美洲/阿鲁巴",
    "allTimeZones.America/Asuncion": "美洲/亚松森",
    "allTimeZones.America/Atikokan": "美洲/阿提科坎",
    "allTimeZones.America/Atka": "美洲/阿特卡",
    "allTimeZones.America/Bahia": "美洲/巴伊亚",
    "allTimeZones.America/Bahia_Banderas": "美洲/拜亚班德拉斯",
    "allTimeZones.America/Barbados": "美国/巴巴多斯",
    "allTimeZones.America/Belem": "美国/别伦",
    "allTimeZones.America/Belize": "美国/伯利兹",
    "allTimeZones.America/Blanc-Sablon": "美国/勃朗萨布隆",
    "allTimeZones.America/Boa_Vista": "美洲/波阿维斯塔",
    "allTimeZones.America/Bogota": "美洲/波哥大",
    "allTimeZones.America/Boise": "美国/博伊西",
    "allTimeZones.America/Buenos_Aires": "美国/布宜诺斯艾利斯",
    "allTimeZones.America/Cambridge_Bay": "美国/剑桥湾",
    "allTimeZones.America/Campo_Grande": "美国/坎波格兰德",
    "allTimeZones.America/Cancun": "美洲/坎昆",
    "allTimeZones.America/Caracas": "美洲/加拉加斯",
    "allTimeZones.America/Catamarca": "美洲/卡塔马卡",
    "allTimeZones.America/Cayenne": "美洲/卡延",
    "allTimeZones.America/Cayman": "美洲/开曼",
    "allTimeZones.America/Chicago": "美国/芝加哥",
    "allTimeZones.America/Chihuahua": "美洲/奇瓦",
    "allTimeZones.America/Coral_Harbour": "美国/珊瑚港",
    "allTimeZones.America/Cordoba": "美国/科尔多瓦",
    "allTimeZones.America/Costa_Rica": "美洲/哥斯达黎加",
    "allTimeZones.America/Creston": "美洲/克雷斯顿",
    "allTimeZones.America/Cuiaba": "美国/库亚巴",
    "allTimeZones.America/Curacao": "美洲/库拉索",
    "allTimeZones.America/Danmarkshavn": "美洲/丹麦沙文",
    "allTimeZones.America/Dawson": "美国/道森城",
    "allTimeZones.America/Dawson_Creek": "美国/道森克里克",
    "allTimeZones.America/Denver": "美洲/丹佛",
    "allTimeZones.America/Detroit": "美国/底特律",
    "allTimeZones.America/Dominica": "美洲/多米尼加",
    "allTimeZones.America/Edmonton": "美国/埃德蒙顿",
    "allTimeZones.America/Eirunepe": "美国/埃鲁内佩",
    "allTimeZones.America/El_Salvador": "美洲/萨尔瓦多",
    "allTimeZones.America/Ensenada": "美国/恩塞纳达",
    "allTimeZones.America/Fort_Nelson": "美国/内尔森港",
    "allTimeZones.America/Fort_Wayne": "美国/韦恩港",
    "allTimeZones.America/Fortaleza": "美洲/福塔莱萨",
    "allTimeZones.America/Glace_Bay": "美国/格莱斯湾",
    "allTimeZones.America/Godthab": "美国/哥特霍夫",
    "allTimeZones.America/Goose_Bay": "美洲/鹅湾",
    "allTimeZones.America/Grand_Turk": "美洲/大特克",
    "allTimeZones.America/Grenada": "美洲/格林纳达",
    "allTimeZones.America/Guadeloupe": "美国/瓜德罗普",
    "allTimeZones.America/Guatemala": "美国/危地马拉",
    "allTimeZones.America/Guayaquil": "美国/瓜亚基尔",
    "allTimeZones.America/Guyana": "美洲/圭亚那",
    "allTimeZones.America/Halifax": "美国/哈利法克斯",
    "allTimeZones.America/Havana": "美洲/哈瓦那",
    "allTimeZones.America/Hermosillo": "美国/埃尔莫西约",
    "allTimeZones.America/Indiana/Indianapolis": "美国/印第安纳/印第安纳波利斯",
    "allTimeZones.America/Indiana/Knox": "美国/印第安纳/诺克斯",
    "allTimeZones.America/Indiana/Marengo": "美国/印第安纳/马伦戈",
    "allTimeZones.America/Indiana/Petersburg": "美国/印第安纳/彼得斯堡",
    "allTimeZones.America/Indiana/Tell_City": "美国/印第安纳/特尔城",
    "allTimeZones.America/Indiana/Vevay": "美国/印第安纳/比比",
    "allTimeZones.America/Indiana/Vincennes": "美国/印第安纳/文森纳",
    "allTimeZones.America/Indiana/Winamac": "美国/印第安纳/温纳马克",
    "allTimeZones.America/Indianapolis": "美国/印第安纳波利斯",
    "allTimeZones.America/Inuvik": "美国/伊努维克",
    "allTimeZones.America/Iqaluit": "美洲/伊卡卢伊特",
    "allTimeZones.America/Jamaica": "美洲/牙买加",
    "allTimeZones.America/Jujuy": "美洲/胡胡伊",
    "allTimeZones.America/Juneau": "美洲/朱诺",
    "allTimeZones.America/Kentucky/Louisville": "美洲/肯塔基/路易斯维尔",
    "allTimeZones.America/Kentucky/Monticello": "美洲/肯塔基/蒙蒂切洛",
    "allTimeZones.America/Knox_IN": "美国/印第安纳诺克斯",
    "allTimeZones.America/Kralendijk": "美国/克拉伦代克",
    "allTimeZones.America/La_Paz": "美洲/拉巴斯",
    "allTimeZones.America/Lima": "美洲/利马",
    "allTimeZones.America/Los_Angeles": "美洲/洛杉矶",
    "allTimeZones.America/Louisville": "美国/路易斯维尔",
    "allTimeZones.America/Lower_Princes": "美国/皇家公主",
    "allTimeZones.America/Maceio": "美洲/马塞奥",
    "allTimeZones.America/Managua": "美洲/马那科",
    "allTimeZones.America/Manaus": "美国/马瑙斯",
    "allTimeZones.America/Marigot": "美国/马里戈",
    "allTimeZones.America/Martinique": "美洲/马提尼克",
    "allTimeZones.America/Matamoros": "美洲/马塔莫罗斯",
    "allTimeZones.America/Mazatlan": "美洲/马萨特兰",
    "allTimeZones.America/Mendoza": "美洲/门多萨",
    "allTimeZones.America/Menominee": "美洲/梅诺米尼",
    "allTimeZones.America/Merida": "美洲/美利达",
    "allTimeZones.America/Metlakatla": "美洲/梅特拉卡特拉",
    "allTimeZones.America/Mexico_City": "美国/墨西哥城",
    "allTimeZones.America/Miquelon": "美洲/密克隆",
    "allTimeZones.America/Moncton": "美国/蒙克顿",
    "allTimeZones.America/Monterrey": "美洲/蒙特雷",
    "allTimeZones.America/Montevideo": "美洲/蒙得维的亚",
    "allTimeZones.America/Montreal": "美国/蒙特利尔",
    "allTimeZones.America/Montserrat": "美洲/蒙特塞拉特",
    "allTimeZones.America/Nassau": "美洲/拿骚",
    "allTimeZones.America/New_York": "美国/纽约",
    "allTimeZones.America/Nipigon": "美洲/尼皮贡",
    "allTimeZones.America/Nome": "美国/家伙",
    "allTimeZones.America/Noronha": "美洲/诺罗尼亚",
    "allTimeZones.America/North_Dakota/Beulah": "美洲/北达科他州/穆拉",
    "allTimeZones.America/North_Dakota/Center": "美洲/北达科他/中心",
    "allTimeZones.America/North_Dakota/New_Salem": "美洲/北达科他/新塞勒姆",
    "allTimeZones.America/Ojinaga": "美洲/欧日永",
    "allTimeZones.America/Panama": "美国/巴拿马",
    "allTimeZones.America/Pangnirtung": "美洲/邦尼尔通",
    "allTimeZones.America/Paramaribo": "美洲/帕拉马里博",
    "allTimeZones.America/Phoenix": "美洲/凤凰",
    "allTimeZones.America/Port-au-Prince": "美洲/太子港",
    "allTimeZones.America/Port_of_Spain": "美国/西班牙港",
    "allTimeZones.America/Porto_Acre": "美洲/波图阿克里",
    "allTimeZones.America/Porto_Velho": "美洲/波尔图贝类",
    "allTimeZones.America/Puerto_Rico": "美洲/波多黎各",
    "allTimeZones.America/Punta_Arenas": "美国/蓬塔阿雷纳斯",
    "allTimeZones.America/Rainy_River": "美洲/雷尼利佛",
    "allTimeZones.America/Rankin_Inlet": "美洲/兰金因雷特",
    "allTimeZones.America/Recife": "美洲/赫西腓",
    "allTimeZones.America/Regina": "美洲/雷吉纳",
    "allTimeZones.America/Resolute": "美洲/莱佐卢特",
    "allTimeZones.America/Rio_Branco": "美国/里奥布兰科",
    "allTimeZones.America/Rosario": "美洲/罗萨里奥",
    "allTimeZones.America/Santa_Isabel": "美洲/圣塔伊萨贝尔",
    "allTimeZones.America/Santarem": "美国/圣塔伦",
    "allTimeZones.America/Santiago": "美洲/圣地亚哥",
    "allTimeZones.America/Santo_Domingo": "美国/圣多明各",
    "allTimeZones.America/Sao_Paulo": "美国/圣保罗",
    "allTimeZones.America/Scoresbysund": "美洲/斯科雷斯维松德",
    "allTimeZones.America/Shiprock": "美洲/轻松",
    "allTimeZones.America/Sitka": "美洲/悉卡",
    "allTimeZones.America/St_Barthelemy": "美国/圣巴泰莱米",
    "allTimeZones.America/St_Johns": "美洲/圣约翰斯",
    "allTimeZones.America/St_Kitts": "美国/圣基茨和尼维斯",
    "allTimeZones.America/St_Lucia": "美洲/圣卢西亚",
    "allTimeZones.America/St_Thomas": "美洲/圣托马斯",
    "allTimeZones.America/St_Vincent": "美国/圣文森特",
    "allTimeZones.America/Swift_Current": "美国/斯威夫特卡伦特",
    "allTimeZones.America/Tegucigalpa": "美国/特古西加尔巴",
    "allTimeZones.America/Thule": "美洲/图勒",
    "allTimeZones.America/Thunder_Bay": "美国/桑德湾",
    "allTimeZones.America/Tijuana": "美国/蒂华纳",
    "allTimeZones.America/Toronto": "美洲/多伦多",
    "allTimeZones.America/Tortola": "美洲/托托拉",
    "allTimeZones.America/Vancouver": "美国/温哥华",
    "allTimeZones.America/Virgin": "美国/维珍",
    "allTimeZones.America/Whitehorse": "美国/怀特霍斯",
    "allTimeZones.America/Winnipeg": "美国/温尼伯",
    "allTimeZones.America/Yakutat": "美国/雅库塔特",
    "allTimeZones.America/Yellowknife": "美洲/黄奈夫",
    "allTimeZones.Antarctica/Casey": "南极/凯西",
    "allTimeZones.Antarctica/Davis": "南极/戴维斯",
    "allTimeZones.Antarctica/DumontDUrville": "南极洲/杜蒙杜勒维尔",
    "allTimeZones.Antarctica/Macquarie": "南极/麦格理",
    "allTimeZones.Antarctica/Mawson": "南极/莫森",
    "allTimeZones.Antarctica/McMurdo": "南极/麦克默多",
    "allTimeZones.Antarctica/Palmer": "南极/帕尔默",
    "allTimeZones.Antarctica/Rothera": "南极/罗德拉",
    "allTimeZones.Antarctica/South_Pole": "南极/南极点",
    "allTimeZones.Antarctica/Syowa": "南极/昭和",
    "allTimeZones.Antarctica/Troll": "南极/巨魔",
    "allTimeZones.Antarctica/Vostok": "南极/沃斯托克",
    "allTimeZones.Arctic/Longyearbyen": "北极/长耳比恩",
    "allTimeZones.Asia/Aden": "亚洲/亚丁",
    "allTimeZones.Asia/Almaty": "亚洲/阿拉木图",
    "allTimeZones.Asia/Amman": "亚洲/安曼",
    "allTimeZones.Asia/Anadyr": "亚洲/安纳迪里",
    "allTimeZones.Asia/Aqtau": "亚洲/阿克陶",
    "allTimeZones.Asia/Aqtobe": "亚洲/阿克德贝",
    "allTimeZones.Asia/Ashgabat": "亚洲/阿什加巴特",
    "allTimeZones.Asia/Ashkhabad": "亚洲/阿什哈巴特",
    "allTimeZones.Asia/Atyrau": "亚洲/阿特劳",
    "allTimeZones.Asia/Baghdad": "亚洲/巴格达",
    "allTimeZones.Asia/Bahrain": "亚洲/巴林",
    "allTimeZones.Asia/Baku": "亚洲/巴库",
    "allTimeZones.Asia/Bangkok": "亚洲/曼谷",
    "allTimeZones.Asia/Barnaul": "亚洲/巴尔瑙尔",
    "allTimeZones.Asia/Beirut": "亚洲/贝鲁特",
    "allTimeZones.Asia/Bishkek": "亚洲/比什凯克",
    "allTimeZones.Asia/Brunei": "亚洲/布鲁奈",
    "allTimeZones.Asia/Calcutta": "亚洲/加尔各答",
    "allTimeZones.Asia/Chita": "亚洲/猎豹",
    "allTimeZones.Asia/Choibalsan": "亚洲/蔡发奖",
    "allTimeZones.Asia/Chongqing": "亚洲/重庆",
    "allTimeZones.Asia/Chungking": "亚洲/重庆",
    "allTimeZones.Asia/Colombo": "亚洲/科伦坡",
    "allTimeZones.Asia/Dacca": "亚洲/高(Dacca)",
    "allTimeZones.Asia/Damascus": "亚洲/大马士革",
    "allTimeZones.Asia/Dhaka": "亚洲/高(Dhaka)",
    "allTimeZones.Asia/Dili": "亚洲/迪利",
    "allTimeZones.Asia/Dubai": "亚洲/迪拜",
    "allTimeZones.Asia/Dushanbe": "亚洲/杜尚别",
    "allTimeZones.Asia/Famagusta": "亚洲/帕马古斯塔",
    "allTimeZones.Asia/Gaza": "亚洲/加沙",
    "allTimeZones.Asia/Harbin": "亚洲/哈尔滨",
    "allTimeZones.Asia/Hebron": "亚洲/希伯伦",
    "allTimeZones.Asia/Ho_Chi_Minh": "亚洲/胡志明市",
    "allTimeZones.Asia/Hong_Kong": "亚洲/香港",
    "allTimeZones.Asia/Hovd": "亚洲/霍布德",
    "allTimeZones.Asia/Irkutsk": "亚洲/伊尔库茨克",
    "allTimeZones.Asia/Istanbul": "亚洲/伊斯坦布尔",
    "allTimeZones.Asia/Jakarta": "亚洲/雅加达",
    "allTimeZones.Asia/Jayapura": "亚洲/贾亚普拉",
    "allTimeZones.Asia/Jerusalem": "亚洲/耶路撒冷",
    "allTimeZones.Asia/Kabul": "亚洲/喀布尔",
    "allTimeZones.Asia/Kamchatka": "亚洲/堪察卡",
    "allTimeZones.Asia/Karachi": "亚洲/卡拉奇",
    "allTimeZones.Asia/Kashgar": "亚洲/克什米尔",
    "allTimeZones.Asia/Kathmandu": "亚洲/加德满都",
    "allTimeZones.Asia/Katmandu": "亚洲/加德满都",
    "allTimeZones.Asia/Khandyga": "亚洲/汉迪加",
    "allTimeZones.Asia/Kolkata": "亚洲/加尔各答",
    "allTimeZones.Asia/Krasnoyarsk": "亚洲/克拉斯诺亚尔斯克",
    "allTimeZones.Asia/Kuala_Lumpur": "亚洲/吉隆坡",
    "allTimeZones.Asia/Kuching": "亚洲/曲清",
    "allTimeZones.Asia/Kuwait": "亚洲/科威特",
    "allTimeZones.Asia/Macao": "亚洲/澳门",
    "allTimeZones.Asia/Macau": "亚洲/澳门",
    "allTimeZones.Asia/Magadan": "亚洲/马加丹",
    "allTimeZones.Asia/Makassar": "亚洲/马卡萨",
    "allTimeZones.Asia/Manila": "亚洲/马尼拉",
    "allTimeZones.Asia/Muscat": "亚洲/马斯喀特",
    "allTimeZones.Asia/Nicosia": "亚洲/尼科西亚",
    "allTimeZones.Asia/Novokuznetsk": "亚洲/新库兹涅茨克",
    "allTimeZones.Asia/Novosibirsk": "亚洲/新西伯利亚",
    "allTimeZones.Asia/Omsk": "亚洲/鄂木斯克",
    "allTimeZones.Asia/Oral": "亚洲/奥拉尔",
    "allTimeZones.Asia/Phnom_Penh": "亚洲/金边",
    "allTimeZones.Asia/Pontianak": "亚洲/蓬蒂亚纳克",
    "allTimeZones.Asia/Pyongyang": "亚洲/平壤",
    "allTimeZones.Asia/Qatar": "亚洲/卡塔尔",
    "allTimeZones.Asia/Qostanay": "亚洲/哥斯达黎加",
    "allTimeZones.Asia/Qyzylorda": "亚洲/基吉洛尔",
    "allTimeZones.Asia/Rangoon": "亚洲/仰光",
    "allTimeZones.Asia/Riyadh": "亚洲/利雅得",
    "allTimeZones.Asia/Sakhalin": "亚洲/萨哈林",
    "allTimeZones.Asia/Samarkand": "亚洲/撒马尔罕",
    "allTimeZones.Asia/Seoul": "亚洲/首尔",
    "allTimeZones.Asia/Shanghai": "亚洲/上海",
    "allTimeZones.Asia/Singapore": "亚洲/新加坡",
    "allTimeZones.Asia/Srednekolymsk": "亚洲/斯雷德内科利姆斯克",
    "allTimeZones.Asia/Taipei": "亚洲/台北",
    "allTimeZones.Asia/Tashkent": "亚洲/塔什干",
    "allTimeZones.Asia/Tbilisi": "亚洲/第比利斯",
    "allTimeZones.Asia/Tehran": "亚洲/德黑兰",
    "allTimeZones.Asia/Tel_Aviv": "亚洲/特拉维夫",
    "allTimeZones.Asia/Thimbu": "亚洲/团队",
    "allTimeZones.Asia/Thimphu": "亚洲/蒂姆富",
    "allTimeZones.Asia/Tokyo": "亚洲/东京",
    "allTimeZones.Asia/Tomsk": "亚洲/托木斯克",
    "allTimeZones.Asia/Ujung_Pandang": "亚洲/牛中板糖",
    "allTimeZones.Asia/Ulaanbaatar": "亚洲/乌兰巴托",
    "allTimeZones.Asia/Ulan_Bator": "亚洲/乌兰巴托",
    "allTimeZones.Asia/Urumqi": "亚洲/乌鲁木齐",
    "allTimeZones.Asia/Ust-Nera": "亚洲/乌斯特内拉",
    "allTimeZones.Asia/Vientiane": "亚洲/万象",
    "allTimeZones.Asia/Vladivostok": "亚洲/符拉迪沃斯托克",
    "allTimeZones.Asia/Yakutsk": "亚洲/雅库茨克",
    "allTimeZones.Asia/Yangon": "亚洲/仰光",
    "allTimeZones.Asia/Yekaterinburg": "亚洲/叶卡捷琳堡",
    "allTimeZones.Asia/Yerevan": "亚洲/埃里温",
    "allTimeZones.Atlantic/Azores": "大西洋/亚速尔群岛",
    "allTimeZones.Atlantic/Bermuda": "大西洋/百慕大",
    "allTimeZones.Atlantic/Canary": "大西洋/加那利群岛",
    "allTimeZones.Atlantic/Cape_Verde": "大西洋/佛得角",
    "allTimeZones.Atlantic/Faeroe": "大西洋/法罗群岛",
    "allTimeZones.Atlantic/Faroe": "大西洋/法罗群岛",
    "allTimeZones.Atlantic/Jan_Mayen": "大西洋/缅甸",
    "allTimeZones.Atlantic/Madeira": "大西洋/马德拉群岛",
    "allTimeZones.Atlantic/Reykjavik": "大西洋/雷克雅未克",
    "allTimeZones.Atlantic/South_Georgia": "大西洋/南乔治亚",
    "allTimeZones.Atlantic/St_Helena": "大西洋/圣赫勒拿",
    "allTimeZones.Atlantic/Stanley": "大西洋/斯坦利",
    "allTimeZones.Australia/ACT": "澳大利亚/澳大利亚首都准州(ACT)",
    "allTimeZones.Australia/Adelaide": "澳大利亚/阿德莱德",
    "allTimeZones.Australia/Brisbane": "澳大利亚/布里斯班",
    "allTimeZones.Australia/Broken_Hill": "澳大利亚/布罗卡山",
    "allTimeZones.Australia/Canberra": "澳大利亚/堪培拉",
    "allTimeZones.Australia/Currie": "澳大利亚/克里",
    "allTimeZones.Australia/Darwin": "澳大利亚/达尔文",
    "allTimeZones.Australia/Eucla": "澳大利亚/尤克拉",
    "allTimeZones.Australia/Hobart": "澳大利亚/霍巴特",
    "allTimeZones.Australia/LHI": "澳大利亚/罗德豪岛",
    "allTimeZones.Australia/Lindeman": "澳大利亚/林德曼",
    "allTimeZones.Australia/Lord_Howe": "澳大利亚/罗德豪",
    "allTimeZones.Australia/Melbourne": "澳大利亚/墨尔本",
    "allTimeZones.Australia/NSW": "澳大利亚/新南威尔士",
    "allTimeZones.Australia/North": "澳大利亚/北部",
    "allTimeZones.Australia/Perth": "澳大利亚/珀斯",
    "allTimeZones.Australia/Queensland": "澳大利亚/昆士兰",
    "allTimeZones.Australia/South": "澳大利亚/南部",
    "allTimeZones.Australia/Sydney": "澳大利亚/悉尼",
    "allTimeZones.Australia/Tasmania": "澳大利亚/塔斯马尼亚",
    "allTimeZones.Australia/Victoria": "澳大利亚/维多利亚",
    "allTimeZones.Australia/West": "澳大利亚/西部",
    "allTimeZones.Australia/Yancowinna": "澳大利亚/扬科威纳",
    "allTimeZones.Brazil/Acre": "巴西/阿克里",
    "allTimeZones.Brazil/DeNoronha": "巴西/德诺罗尼亚",
    "allTimeZones.Brazil/East": "巴西/东部",
    "allTimeZones.Brazil/West": "巴西/西部",
    "allTimeZones.CET": "CET(中欧标准时间)",
    "allTimeZones.CST6CDT": "CST6CDT(中部标准时间)",
    "allTimeZones.Canada/Atlantic": "加拿大/大西洋",
    "allTimeZones.Canada/Central": "加拿大/中部",
    "allTimeZones.Canada/Eastern": "加拿大/东部",
    "allTimeZones.Canada/Mountain": "加拿大/山区",
    "allTimeZones.Canada/Newfoundland": "加拿大/纽芬兰",
    "allTimeZones.Canada/Pacific": "加拿大/太平洋",
    "allTimeZones.Canada/Saskatchewan": "加拿大/萨斯喀彻温省",
    "allTimeZones.Canada/Yukon": "加拿大/育空",
    "allTimeZones.Chile/Continental": "智利/大陆",
    "allTimeZones.Chile/EasterIsland": "智利/复活节岛",
    "allTimeZones.Cuba": "古巴",
    "allTimeZones.EET": "EET(东欧标准时间)",
    "allTimeZones.EST": "EST(东部时间)",
    "allTimeZones.EST5EDT": "EST5EDT(东部时间)",
    "allTimeZones.Egypt": "埃及",
    "allTimeZones.Eire": "爱尔兰",
    "allTimeZones.Etc/GMT": "其他/GMT(格林威治平均时间)",
    "allTimeZones.Etc/GMT+0": "其他/GMT(格林威治平均时间)+0",
    "allTimeZones.Etc/GMT+1": "其他/GMT(格林威治平均时间)+1",
    "allTimeZones.Etc/GMT+10": "其他/GMT(格林威治平均时间)+10",
    "allTimeZones.Etc/GMT+11": "其他/GMT(格林威治平均时间)+11",
    "allTimeZones.Etc/GMT+12": "其他/GMT(格林威治平均时间)+12",
    "allTimeZones.Etc/GMT+2": "其他/GMT(格林威治平均时间)+2",
    "allTimeZones.Etc/GMT+3": "其他/GMT(格林威治平均时间)+3",
    "allTimeZones.Etc/GMT+4": "其他/GMT(格林威治平均时间)+4",
    "allTimeZones.Etc/GMT+5": "其他/GMT(格林威治平均时间)+5",
    "allTimeZones.Etc/GMT+6": "其他/GMT(格林威治平均时间)+6",
    "allTimeZones.Etc/GMT+7": "其他/GMT(格林威治平均时间)+7",
    "allTimeZones.Etc/GMT+8": "其他/GMT(格林威治平均时间)+8",
    "allTimeZones.Etc/GMT+9": "其他/GMT(格林威治平均时间)+9",
    "allTimeZones.Etc/GMT-0": "其他/GMT(格林威治平均时间)-0",
    "allTimeZones.Etc/GMT-1": "其他/GMT(格林威治平均时间)-1",
    "allTimeZones.Etc/GMT-10": "其他/GMT(格林威治平均时间)-10",
    "allTimeZones.Etc/GMT-11": "其他/GMT(格林威治平均时间)-11",
    "allTimeZones.Etc/GMT-12": "其他/GMT(格林威治平均时间)-12",
    "allTimeZones.Etc/GMT-13": "其他/GMT(格林威治平均时间)-13",
    "allTimeZones.Etc/GMT-14": "其他/GMT(格林威治平均时间)-14",
    "allTimeZones.Etc/GMT-2": "其他/GMT(格林威治平均时间)-2",
    "allTimeZones.Etc/GMT-3": "其他/GMT(格林威治平均时间)-3",
    "allTimeZones.Etc/GMT-4": "其他/GMT(格林威治平均时间)-4",
    "allTimeZones.Etc/GMT-5": "其他/GMT(格林威治平均时间)-5",
    "allTimeZones.Etc/GMT-6": "其他/GMT(格林威治平均时间)-6",
    "allTimeZones.Etc/GMT-7": "其他/GMT(格林威治平均时间)-7",
    "allTimeZones.Etc/GMT-8": "其他/GMT(格林威治平均时间)-8",
    "allTimeZones.Etc/GMT-9": "其他/GMT(格林威治平均时间)-9",
    "allTimeZones.Etc/GMT0": "其他/GMT(格林威治平均时间)0",
    "allTimeZones.Etc/Greenwich": "其他/格林尼奇",
    "allTimeZones.Etc/UCT": "其他/UCT(协定世界时)",
    "allTimeZones.Etc/UTC": "其他/UTC(协定世界时)",
    "allTimeZones.Etc/Universal": "其他/世界诗",
    "allTimeZones.Europe/Amsterdam": "欧洲/阿姆斯特丹",
    "allTimeZones.Europe/Andorra": "欧洲/安道尔",
    "allTimeZones.Europe/Astrakhan": "欧洲/阿斯特拉罕",
    "allTimeZones.Europe/Athens": "欧洲/雅典",
    "allTimeZones.Europe/Belfast": "欧洲/贝尔法斯特",
    "allTimeZones.Europe/Belgrade": "欧洲/贝尔格莱德",
    "allTimeZones.Europe/Berlin": "欧洲/柏林",
    "allTimeZones.Europe/Bratislava": "欧洲/布拉迪斯拉发",
    "allTimeZones.Europe/Brussels": "欧洲/布鲁塞尔",
    "allTimeZones.Europe/Bucharest": "欧洲/布加勒斯特",
    "allTimeZones.Europe/Budapest": "欧洲/布达佩斯",
    "allTimeZones.Europe/Busingen": "欧洲/威辛根",
    "allTimeZones.Europe/Chisinau": "欧洲/基希讷乌",
    "allTimeZones.Europe/Copenhagen": "欧洲/哥本哈根",
    "allTimeZones.Europe/Dublin": "欧洲/都柏林",
    "allTimeZones.Europe/Gibraltar": "欧洲/直布罗陀",
    "allTimeZones.Europe/Guernsey": "欧洲/旱地",
    "allTimeZones.Europe/Helsinki": "欧洲/赫尔辛基",
    "allTimeZones.Europe/Isle_of_Man": "欧洲/曼岛",
    "allTimeZones.Europe/Istanbul": "欧洲/伊斯坦布尔",
    "allTimeZones.Europe/Jersey": "欧洲/泽西",
    "allTimeZones.Europe/Kaliningrad": "欧洲/加里宁格勒",
    "allTimeZones.Europe/Kiev": "欧洲/基辅",
    "allTimeZones.Europe/Kirov": "欧洲/基洛夫",
    "allTimeZones.Europe/Kyiv": "欧洲/基伊布",
    "allTimeZones.Europe/Lisbon": "欧洲/里斯本",
    "allTimeZones.Europe/Ljubljana": "欧洲/卢布尔雅那",
    "allTimeZones.Europe/London": "欧洲/伦敦",
    "allTimeZones.Europe/Luxembourg": "欧洲/卢森堡",
    "allTimeZones.Europe/Madrid": "欧洲/马德里",
    "allTimeZones.Europe/Malta": "欧洲/马耳他",
    "allTimeZones.Europe/Mariehamn": "欧洲/马里埃罕",
    "allTimeZones.Europe/Minsk": "欧洲/明斯克",
    "allTimeZones.Europe/Monaco": "欧洲/摩纳哥",
    "allTimeZones.Europe/Moscow": "欧洲/莫斯科",
    "allTimeZones.Europe/Nicosia": "欧洲/尼科西亚",
    "allTimeZones.Europe/Oslo": "欧洲/奥斯陆",
    "allTimeZones.Europe/Paris": "欧洲/巴黎",
    "allTimeZones.Europe/Podgorica": "欧洲/察",
    "allTimeZones.Europe/Prague": "欧洲/布拉格",
    "allTimeZones.Europe/Riga": "欧洲/里加",
    "allTimeZones.Europe/Rome": "欧洲/罗马",
    "allTimeZones.Europe/Samara": "欧洲/萨马拉",
    "allTimeZones.Europe/San_Marino": "欧洲/圣马力诺",
    "allTimeZones.Europe/Sarajevo": "欧洲/萨拉热窝",
    "allTimeZones.Europe/Saratov": "欧洲/萨拉托夫",
    "allTimeZones.Europe/Simferopol": "欧洲/辛菲罗波尔",
    "allTimeZones.Europe/Skopje": "欧洲/斯科普里",
    "allTimeZones.Europe/Sofia": "欧洲/索菲亞",
    "allTimeZones.Europe/Stockholm": "欧洲/斯德哥尔摩",
    "allTimeZones.Europe/Tallinn": "欧洲/塔林",
    "allTimeZones.Europe/Tirane": "欧洲/地拉那",
    "allTimeZones.Europe/Tiraspol": "欧洲/蒂拉斯波尔",
    "allTimeZones.Europe/Ulyanovsk": "欧洲/乌利亚涅斯克",
    "allTimeZones.Europe/Uzhgorod": "欧洲/乌兹霍罗德",
    "allTimeZones.Europe/Vaduz": "欧洲/瓦杜兹",
    "allTimeZones.Europe/Vatican": "欧洲/梵蒂冈",
    "allTimeZones.Europe/Vienna": "欧洲/维也纳",
    "allTimeZones.Europe/Vilnius": "欧洲/维尔纽斯",
    "allTimeZones.Europe/Volgograd": "欧洲/伏尔加格勒",
    "allTimeZones.Europe/Warsaw": "欧洲/华沙",
    "allTimeZones.Europe/Zagreb": "欧洲/萨格勒布",
    "allTimeZones.Europe/Zaporozhye": "欧洲/扎波罗热",
    "allTimeZones.Europe/Zurich": "欧洲/苏黎世",
    "allTimeZones.GB": "英国(GB)",
    "allTimeZones.GB-Eire": "英国-爱尔兰(GB-Eire)",
    "allTimeZones.GMT": "GMT(格林威治平均时间)",
    "allTimeZones.GMT+0": "GMT(格林威治平均时间)+0",
    "allTimeZones.GMT-0": "GMT(格林威治平均时间)-0",
    "allTimeZones.GMT0": "GMT(格林威治平均时间)0",
    "allTimeZones.Greenwich": "格林威治",
    "allTimeZones.HST": "HST(夏威夷标准时间)",
    "allTimeZones.Hongkong": "香港",
    "allTimeZones.Iceland": "冰岛",
    "allTimeZones.Indian/Antananarivo": "印度洋/安塔那利佛",
    "allTimeZones.Indian/Chagos": "印度洋/恰戈斯",
    "allTimeZones.Indian/Christmas": "印度洋/圣诞节",
    "allTimeZones.Indian/Cocos": "印度洋/科科斯",
    "allTimeZones.Indian/Comoro": "印度洋/科摩罗",
    "allTimeZones.Indian/Kerguelen": "印度洋/凯盖伦",
    "allTimeZones.Indian/Mahe": "印度洋/前",
    "allTimeZones.Indian/Maldives": "印度洋/马尔代夫",
    "allTimeZones.Indian/Mauritius": "印度洋/毛里求斯",
    "allTimeZones.Indian/Mayotte": "印度洋/马约特",
    "allTimeZones.Indian/Reunion": "印度洋/留尼汪",
    "allTimeZones.Iran": "伊朗",
    "allTimeZones.Israel": "以色列",
    "allTimeZones.Jamaica": "牙买加",
    "allTimeZones.Japan": "日本",
    "allTimeZones.Kwajalein": "夸贾莱恩",
    "allTimeZones.Libya": "利比亚",
    "allTimeZones.MET": "MET(中欧标准时间)",
    "allTimeZones.MST": "MST(山岳标准时间)",
    "allTimeZones.MST7MDT": "MST7MDT(山岳标准时间)",
    "allTimeZones.Mexico/BajaNorte": "墨西哥/巴哈诺特",
    "allTimeZones.Mexico/BajaSur": "墨西哥/巴哈苏尔",
    "allTimeZones.Mexico/General": "墨西哥/综述",
    "allTimeZones.NZ": "新西兰",
    "allTimeZones.NZ-CHAT": "新西兰-查塔姆",
    "allTimeZones.Navajo": "纳瓦霍",
    "allTimeZones.PRC": "中华人民共和国",
    "allTimeZones.PST8PDT": "PST8PDT(太平洋时间)",
    "allTimeZones.Pacific/Apia": "太平洋/阿皮亚",
    "allTimeZones.Pacific/Auckland": "太平洋/奥克兰",
    "allTimeZones.Pacific/Bougainville": "太平洋/布干维尔",
    "allTimeZones.Pacific/Chatham": "太平洋/查塔姆",
    "allTimeZones.Pacific/Chuuk": "太平洋/楚克",
    "allTimeZones.Pacific/Easter": "太平洋/复活节",
    "allTimeZones.Pacific/Efate": "太平洋/埃法特",
    "allTimeZones.Pacific/Enderbury": "太平洋/恩德伯里",
    "allTimeZones.Pacific/Fakaofo": "太平洋/巴考普",
    "allTimeZones.Pacific/Fiji": "太平洋/斐济",
    "allTimeZones.Pacific/Funafuti": "太平洋/普纳普蒂",
    "allTimeZones.Pacific/Galapagos": "太平洋/加拉帕戈斯",
    "allTimeZones.Pacific/Gambier": "太平洋/江比耶",
    "allTimeZones.Pacific/Guadalcanal": "太平洋/瓜达尔卡纳尔",
    "allTimeZones.Pacific/Guam": "太平洋/关岛",
    "allTimeZones.Pacific/Honolulu": "太平洋/檀香山",
    "allTimeZones.Pacific/Johnston": "太平洋/约翰斯顿",
    "allTimeZones.Pacific/Kiritimati": "太平洋/基里蒂马蒂",
    "allTimeZones.Pacific/Kosrae": "太平洋/科斯拉埃",
    "allTimeZones.Pacific/Kwajalein": "太平洋/夸贾莱恩",
    "allTimeZones.Pacific/Majuro": "太平洋/马祖罗",
    "allTimeZones.Pacific/Marquesas": "太平洋/马尔基斯",
    "allTimeZones.Pacific/Midway": "太平洋/中路",
    "allTimeZones.Pacific/Nauru": "太平洋/瑙鲁",
    "allTimeZones.Pacific/Niue": "太平洋/纽埃",
    "allTimeZones.Pacific/Norfolk": "太平洋/诺福克",
    "allTimeZones.Pacific/Noumea": "太平洋/努美阿",
    "allTimeZones.Pacific/Pago_Pago": "太平洋/帕戈帕戈",
    "allTimeZones.Pacific/Palau": "太平洋/帕劳",
    "allTimeZones.Pacific/Pitcairn": "太平洋/菲特凯恩",
    "allTimeZones.Pacific/Pohnpei": "太平洋/庞贝",
    "allTimeZones.Pacific/Ponape": "太平洋/庞贝",
    "allTimeZones.Pacific/Port_Moresby": "太平洋/莫尔兹比港",
    "allTimeZones.Pacific/Rarotonga": "太平洋/拉罗汤加",
    "allTimeZones.Pacific/Saipan": "太平洋/塞班岛",
    "allTimeZones.Pacific/Samoa": "太平洋/萨摩亚",
    "allTimeZones.Pacific/Tahiti": "太平洋/塔希提岛",
    "allTimeZones.Pacific/Tarawa": "太平洋/塔拉瓦",
    "allTimeZones.Pacific/Tongatapu": "太平洋/汤加塔普",
    "allTimeZones.Pacific/Truk": "太平洋/楚克",
    "allTimeZones.Pacific/Wake": "太平洋/威克",
    "allTimeZones.Pacific/Wallis": "太平洋/华莱士",
    "allTimeZones.Pacific/Yap": "太平洋/亚普",
    "allTimeZones.Poland": "波兰",
    "allTimeZones.Portugal": "葡萄牙",
    "allTimeZones.ROC": "中华民国",
    "allTimeZones.ROK": "韩国",
    "allTimeZones.Singapore": "新加坡",
    "allTimeZones.Turkey": "土耳其",
    "allTimeZones.UCT": "UCT(协定世界时)",
    "allTimeZones.US/Alaska": "美国/阿拉斯加",
    "allTimeZones.US/Aleutian": "美国/阿留尚",
    "allTimeZones.US/Arizona": "美国/亚利桑那州",
    "allTimeZones.US/Central": "美国/中部标准时间",
    "allTimeZones.US/East-Indiana": "美国/印第安纳东部",
    "allTimeZones.US/Eastern": "美国/东部时间",
    "allTimeZones.US/Hawaii": "美国/夏威夷",
    "allTimeZones.US/Indiana-Starke": "美国/印第安纳斯塔克",
    "allTimeZones.US/Michigan": "美国/密歇根",
    "allTimeZones.US/Mountain": "美国/山岳标准时间",
    "allTimeZones.US/Pacific": "美国/太平洋标准时间",
    "allTimeZones.US/Pacific-New": "美国/太平洋标准时间",
    "allTimeZones.US/Samoa": "美国/萨摩亚",
    "allTimeZones.UTC": "UTC(协定世界时)",
    "allTimeZones.Universal": "世界诗歌",
    "allTimeZones.W-SU": "W-SU",
    "allTimeZones.WET": "WET(西欧标准时间)",
    "allTimeZones.Zulu": "祖鲁西",
    "apiSettingsPage.bots.addBotbutton": "添加机器人",
    "apiSettingsPage.bots.description":
      "机器人只能访问当前共享在工作空间中的内容。如需访问个人主页，请从“共享”菜单与相应的机器人共享页面。<learnmorelink>了解详情</learnmorelink>",
    "apiSettingsPage.bots.title": "机器人",
    "appUpdateListener.mobileAppNotSupported.android": "安卓系统",
    "appUpdateListener.mobileAppNotSupported.ios": "iOS",
    "appUpdateListener.mobileAppNotSupported.message":
      "此应用程序版本不再支持。{br}<upgradelink>{androidOrIOSApp}请升级应用程序</upgradelink>。",
    "appUpdateListener.mobilePlatformNotSupported.message":
      "此操作系统不再支持。{br}<upgradelink>{supportedPlatformVersion}或更高版本升级</upgradelink>。",
    "appVersionMenuItem.desktopVersion.menuItem":
      "桌面{desktopVersionFormatted}",
    "appVersionMenuItem.downloadingUpdate.message":
      "{version}{percentComplete}正在下载",
    "appVersionMenuItem.lastUpdatedReactNativeVersion.menuItem":
      "移动{reactNativeVersionFormatted}",
    "appVersionMenuItem.lastUpdatedTime.menuItem":
      "上次更新：{lastUpdatedTime}",
    "appVersionMenuItem.mobile.clearCache.message": "清除缓存",
    "appVersionMenuItem.noUpdatesForApp.message": "上次更新：{timeFromNow}",
    "appVersionMenuItem.updateReady.message": "{version}版本可更新",
    "appVersionMenuItem.updateStateForApp.checking.message": "正在检查更新。",
    "appVersionMenuItem.waitingForAppJsUpdate.message": "App.js-等待。",
    "appVersionMenuitem.updateError.message": "更新错误{errorMessage}",
    "appearanceSetting.dark.label": "黑暗模式",
    "appearanceSetting.light.label": "Light模式",
    "appearanceSetting.system.label": "使用系统设置",
    "appearanceSettings.description.message":
      "在我的设备上尽情改变Notion的外观。",
    "appearanceSettings.modal.done": "完成",
    "appearanceSettings.modal.title": "主题",
    "appearanceSettings.title": "主题",
    "appleErrors.api.missingAccessTokenError": "Apple无法批准登录。",
    "appleErrors.api.missingBetaAppReviewSubmission":
      "找不到您输入的betaAppReviewSubmission。",
    "appleErrors.api.missingIdError": "从Apple获取用户信息时出现问题。",
    "appleErrors.api.missingPreReleaseVersion":
      "找不到您输入的preReleaseVersion。",
    "appleErrors.api.statusError": "Apple服务出现问题。",
    "appleErrors.api.tokenError": "Apple在验证身份时遇到问题。",
    "applyCreditToggle.applyCredit.amount": "使用积分{creditAmount}",
    "asanaActions.authenticatingWithAsana.loadingMessage": "正在通过Asana验证.",
    "asanaActions.loginWithAsanaPopupModal.title": "Asana登录",
    "asanaImportOption.actionsMenu.connectAnotherAccount": "连接其他帐户",
    "asanaImportOption.actionsMenu.import": "导入",
    "asanaImportOption.actionsMenu.removeIntegration": "移除",
    "asanaImportOption.search.noResultsPlaceholder": "无项目",
    "asanaImportOption.search.placeholder": "搜索项目",
    "audioBlock.embed.caption": "兼容MP3、.WAV、OGG",
    "audioBlock.embedAudio.button.label": "音频嵌入",
    "audioBlock.placeholder": "添加音频文件",
    "backlink.currentPageTokenLabel": "此页",
    "backlink.originalTokenLabel": "原稿",
    "backlinks.backlinks": "隐藏反向链接",
    "backlinks.learn": "反向链接用法",
    "block.imageCaption.placeholder": "创建标题",
    "block.propertyTypeName.caption": "标题",
    "block.propertyTypeName.checked": "已标记",
    "block.propertyTypeName.date": "日期",
    "block.propertyTypeName.description": "说明",
    "block.propertyTypeName.language": "语言",
    "block.propertyTypeName.link": "链接",
    "block.propertyTypeName.person": "人",
    "block.propertyTypeName.size": "大小",
    "block.propertyTypeName.source": "来源",
    "block.propertyTypeName.title": "标题",
    "block.selectableAddMenu.tooltip":
      "<mediumcolor>要在下面添加块，请单击</mediumcolor>",
    "blockAuthorInfo.label": "{author}最终编辑",
    "blockAuthorInfo.restrictedBadge": "已限制",
    "blockAuthorInfo.restrictedBadge.clickText": "单击以确认访问",
    "blockAuthorInfo.restrictedBadge.infoText": "从父页面受限访问",
    "blockAuthorInfo.tooltip.createdBy": "构造函数<b>{author}</b>",
    "blockAuthorInfo.tooltip.lastEdited": "<b>{author}</b>最终编辑",
    "blockDiscussionMenu.emptyState.noCommentsMessage": "没有评论显示。",
    "blockDiscussionMenu.emptyState.noResolvedCommentsMessage":
      "没有解决的评论。",
    "blockDiscussionMenu.emptyStatte.noResolvedCommentsMessage":
      "没有解决的评论。",
    "blockDiscussionMenu.mobileMenu.title": "讨论",
    "blockDiscussionMenu.openDiscussionsTab.title":
      "未解决({numberOfOpenDiscussions})",
    "blockDiscussionMenu.openDiscussionsTabEmpty.title": "未解决",
    "blockDiscussionMenu.resolvedDiscussionsTab.title":
      "({numberOfResolvedDiscussions})已解决",
    "blockDiscussionMenu.resolvedDiscussionsTabEmpty.title": "已解决",
    "blockHelpers.abstractBlockType": "Abstract",
    "blockHelpers.audioBlockType": "音频",
    "blockHelpers.codepenBlockType": "CodePen",
    "blockHelpers.driveBlockType": "驱动",
    "blockHelpers.embedBlockType": "嵌入",
    "blockHelpers.excalidrawBlockType": "Excalidraw",
    "blockHelpers.figmaBlockType": "Figma",
    "blockHelpers.fileBlockType": "文件",
    "blockHelpers.framerBlockType": "Framer",
    "blockHelpers.gistBlockType": "Gist",
    "blockHelpers.imageBlockType": "图像",
    "blockHelpers.invisionBlockType": "Invision(Invision)",
    "blockHelpers.loomBlockType": "Loom",
    "blockHelpers.mapsBlockType": "地图",
    "blockHelpers.miroBlockType": "米罗",
    "blockHelpers.pdfBlockType": "PDF",
    "blockHelpers.replitBlockType": "剥离",
    "blockHelpers.sketchBlockType": "Sketch",
    "blockHelpers.tweetBlockType": "Tweet",
    "blockHelpers.typeformBlockType": "类型",
    "blockHelpers.videoBlockType": "视频",
    "blockHelpers.whimsicalBlockType": "Whimsical",
    "blockMenu.actionButton.label": "操作",
    "blockMenu.filterForActions.placeholder": "搜索任务",
    "blockMenuRestrictedMessage.adminRestoreAction.label": "还原权限",
    "blockMenuRestrictedMessage.label": "此块受到限制，没有编辑权限。",
    "blockPasteMenu.actions.createTransclusion.title": "粘贴并同步",
    "blockPasteMenu.actions.dismiss.title": "解除",
    "blockPasteMenu.actions.linkToPage.title": "指向页面的链接",
    "blockPermissionsSetings.untitledBotPlaceholder": "无名机器人",
    "blockPermissionsSettings.addGuests.subtitle": "与他人私下协作",
    "blockPermissionsSettings.addGuests.title": "用户邀请",
    "blockPermissionsSettings.addGuestsAndGroups.title": "邀请用户和组",
    "blockPermissionsSettings.botPermission.tooltip": "添加到此工作区的集成。",
    "blockPermissionsSettings.confirmationDialog.private.message":
      "是否确实要将此页面设置为个人主页？<semibold>只有您本人才能访问此页面。</semibold>",
    "blockPermissionsSettings.confirmationDialog.privateButton.label":
      "转到个人主页",
    "blockPermissionsSettings.confirmationDialog.workspace.message":
      "是否确实要将此页面共享给工作区？<semibold>{memberCount}所有成员都将可以访问。</semibold>",
    "blockPermissionsSettings.confirmationDialog.workspaceButton.label":
      "移动到工作区",
    "blockPermissionsSettings.copyLinkButton.label": "复制链接",
    "blockPermissionsSettings.groupPermission.canAdmin":
      "{numberOfGroupMembers、plural、one{{numberOfGroupMembers}名成员}other{{numberOfGroupMembers}名组成员}}可以编辑和共享",
    "blockPermissionsSettings.groupPermission.canComment":
      "{numberOfGroupMembers、plural、one{{numberOfGroupMembers}名成员}other{{numberOfGroupMembers}名组成员}}可以发表评论",
    "blockPermissionsSettings.groupPermission.canEdit":
      "{numberOfGroupMembers、plural、one{{numberOfGroupMembers}个成员}other{{numberOfGroupMembers}个组成员}}可以编辑",
    "blockPermissionsSettings.groupPermission.canRead":
      "{numberOfGroupMembers、plural、one{{numberOfGroupMembers}名成员}other{{numberOfGroupMembers}名组成员}}可见",
    "blockPermissionsSettings.groupPermission.none":
      "{numberOfGroupMembers、plural、other{{numberOfGroupMembers}名组成员}}",
    "blockPermissionsSettings.groupPermission.tooltip":
      "此页面显示在{groupName}组中的所有团队成员在侧栏中的<boldtext>共享</boldtext>部分中。",
    "blockPermissionsSettings.groupPermissionUsers.tooltip":
      "外{countRemainingUsers}名称",
    "blockPermissionsSettings.inheritedPermissions.tooltip":
      "此访问基于{inlineIconAndName}。转到该页面并删除或更改访问。",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.changingLinks":
      "正在更改公共链接。",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.openSettingsCTA":
      "设置",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.setDomainForPublicLinks":
      "设置公共链接的域",
    "blockPermissionsSettings.learnAboutAutogeneratedDomains.transition":
      "了解有关过渡的更多信息",
    "blockPermissionsSettings.learnMore.prompt": "使用共享功能",
    "blockPermissionsSettings.mobileShareMenu.title": "共享",
    "blockPermissionsSettings.offline.prompt": "要发布和分享，请在线访问。",
    "blockPermissionsSettings.permissionItem.groupAccess": "与{groupName}共享",
    "blockPermissionsSettings.permissionItem.linkSharing": "在Web上共享",
    "blockPermissionsSettings.permissionItem.workspaceAccess":
      "与{workspaceName}共享",
    "blockPermissionsSettings.permissionItem.workspaceAccessNew":
      "{workspaceName}的所有用户",
    "blockPermissionsSettings.permissionsForBot.label": "整合",
    "blockPermissionsSettings.permissionsForUserGuest.label": "房客",
    "blockPermissionsSettings.privatePermissions.tooltip":
      "此页面只能由您本人访问。{br}因此，此链接仅对您有效。",
    "blockPermissionsSettings.publicLinkInfo.tooltip":
      "此页具有公共链接访问权限，因此{br}具有此链接的人都可以查看此页面。",
    "blockPermissionsSettings.publicPermission.canComment":
      "任何有此链接的人都可以发表评论。",
    "blockPermissionsSettings.publicPermission.canEdit":
      "任何有此链接的人都可以对其进行编辑和评论。",
    "blockPermissionsSettings.publicPermission.canRead": "允许通过链接读取",
    "blockPermissionsSettings.publicPermission.none":
      "发布到网上，与喜欢的人分享链接",
    "blockPermissionsSettings.publicPermission.tooltip":
      "任何具有此链接的人员都可以访问此页面。",
    "blockPermissionsSettings.restrictedPermissions.tooltip":
      "此访问基于{inlineIconAndName}访问。更改此访问将限制对此页面的权限。",
    "blockPermissionsSettings.sentInvitation.message": "邀请发送完成",
    "blockPermissionsSettings.spacePermission.canAdmin":
      "{numberOfWorkspaceMembers、plural、one{{numberOfWorkspaceMembers}名工作区成员}other{{numberOfWorkspaceMembers}名工作区成员}}可以编辑和共享",
    "blockPermissionsSettings.spacePermission.canComment":
      "{numberOfWorkspaceMembers、plural、one{{numberOfWorkspaceMembers}个工作区成员}other{{numberOfWorkspaceMembers}个工作区成员}}",
    "blockPermissionsSettings.spacePermission.canEdit":
      "{numberOfWorkspaceMembers、plural、one{{numberOfWorkspaceMembers}个工作区成员}other{{numberOfWorkspaceMembers}名工作区成员}}可以编辑",
    "blockPermissionsSettings.spacePermission.canRead":
      "{numberOfWorkspaceMembers、plural、one{{numberOfWorkspaceMembers}名工作空间成员}other{{numberOfWorkspaceMembers}名工作空间成员}}可见",
    "blockPermissionsSettings.spacePermission.none":
      "{numberOfWorkspaceMembers、plural、other{{numberOfWorkspaceMembers}名工作空间成员}}",
    "blockPermissionsSettings.spacePermission.tooltip":
      "在侧栏的<boldtext>工作区</boldtext>部分中，所有参与您工作区的团队成员都可以看到此页面。",
    "blockPermissionsSettings.userPermissions.tooltip":
      "只有您和其他被邀请的成员和来宾才能看到此链接{br}。",
    "blockPermissionsSettings.workspacePermissions.tooltip":
      "此页面具有工作区访问权限。因此，{br}此工作区的所有用户都可以查看此链接。",
    "blockSyncInfo.error.label": "同步错误。手动刷新。",
    "blockSyncInfo.parentOffline.label": "父页面脱机。",
    "blockSyncInfo.synced.label": "上次同步的时间：{time}",
    "blockSyncInfo.syncing.label": "正在同步.",
    "blockTemplates.board.assignPropertyTitle": "分配",
    "blockTemplates.board.card1Title": "卡1",
    "blockTemplates.board.card2Title": "卡2",
    "blockTemplates.board.card3Title": "卡3",
    "blockTemplates.board.namePropertyTitle": "名称",
    "blockTemplates.board.statusPropertyGreenOptionTitle": "完成",
    "blockTemplates.board.statusPropertyRedOptionTitle": "开始前",
    "blockTemplates.board.statusPropertyTitle": "状态",
    "blockTemplates.board.statusPropertyYellowOptionTitle": "正在进行",
    "blockTemplates.board.viewTitle": "查看电路板",
    "blockTemplates.calendar.datePropertyTitle": "日期",
    "blockTemplates.calendar.namePropertyTitle": "名称",
    "blockTemplates.calendar.tagsPropertyTitle": "标签",
    "blockTemplates.calendar.viewTitle": "查看日历",
    "blockTemplates.gallery.createdPropertyTitle": "创建日期",
    "blockTemplates.gallery.namePropertyTitle": "名称",
    "blockTemplates.gallery.page1CompletedTodoTitle": "待办事项",
    "blockTemplates.gallery.page1Title": "页码1",
    "blockTemplates.gallery.page1TodoTitle": "待办事项",
    "blockTemplates.gallery.page2Title": "页码2",
    "blockTemplates.gallery.page3Title": "页码3",
    "blockTemplates.gallery.tagsPropertyTitle": "标签",
    "blockTemplates.gallery.viewTitle": "查看图库",
    "blockTemplates.list.createdPropertyTitle": "创建日期",
    "blockTemplates.list.namePropertyTitle": "名称",
    "blockTemplates.list.page1Title": "页码1",
    "blockTemplates.list.page2Title": "页码2",
    "blockTemplates.list.page3Title": "页码3",
    "blockTemplates.list.tagsPropertyTitle": "标签",
    "blockTemplates.list.viewTitle": "查看列表",
    "blockTemplates.table.namePropertyTitle": "名称",
    "blockTemplates.table.tagsPropertyTitle": "标签",
    "blockTemplates.table.viewTitle": "基本视图",
    "blockTemplates.templateButton.addNewTodoTitle": "添加新待办事项",
    "blockTemplates.timeline.datePropertyTitle": "日期",
    "blockTemplates.timeline.viewTitle": "查看时间轴",
    "blocks.blockMenu.collectionHelpButton": "数据库用法",
    "blocks.hoverBlockMenu.collectionHelpButton": "数据库用法",
    "boardHiddenGroup.searchPlaceholder": "搜索页面",
    "bookmarkBlock.addWebBookmark.placeholder": "添加书签",
    "bookmarkBlock.bookmark.title": "书签",
    "bookmarkBlock.invalidLinkError.message": "请输入有效的链接",
    "bookmarkBlock.loadWhileFetching.message": "导入预览",
    "bookmarkBlock.visualBookmark.create": "创建书签",
    "bookmarkBlock.visualBookmark.prompt": "通过链接生成可视书签",
    "bootupHelpers.iosErrorRequiresReinstall.errorMessage":
      "你好。iOS应用程序检测到问题。删除此应用后，请在App Store中重新安装它。",
    "botActions.deleteBotConfirmationDialog.confirmDeleteBotButton.label": "是",
    "botActions.deleteBotConfirmationDialog.confirmationMessage":
      "是否要取消{integrationName}的访问？",
    "botHelpers.personalBotCaption":
      "此机器人只能由您编辑。该机器人拥有与您所拥有的权限相同的所有权限。",
    "botHelpers.unnamedBot": "无名机器人",
    "botHelpers.workspaceBotCaption":
      "仅在此工作空间内可用。此工作区中的所有管理员可以编辑此机器人。除非被邀请，否则您将无法访问个人主页。",
    "botWithTokenSettings.deleteBot.label": "删除机器人",
    "botWithTokenSettings.revokeTokenModal.acceptButton.label": "撤销API令牌",
    "botWithTokenSettings.revokeTokenModal.message":
      "是否确实要撤销API令牌？所有使用此令牌的API请求都将失败。",
    "botWithTokenSettings.revokeTokenModal.tokenRevoked.message":
      "成功撤销API令牌。您现在可以使用新的代币。",
    "breadcrumb.mobileBreadcrumbMenu.title": "穿行",
    "breakingUpdateDialog.title": "新功能已经推出！",
    "breakingUpdateDialog.updateButtonTitle": "Notion已更新！点击查看新消息。",
    "bulletedListBlock.placeholder.label": "列表",
    "calendarItem.endsTime.message": "结束于{endTime}",
    "calendarSettings.startWeekOnMonday.label": "将一周的开始设置为星期一",
    "calendarSettings.startWeekOnMonday.message":
      "应用中的所有日历外观都将更改。",
    "calendarSettings.title": "日历",
    "calloutBlock.inputPlaceholder": "请输入内容",
    "chargeReminderEmail.billingLink.text":
      "<billinglink><billinglink>点击这里查看帐单设置。</billinglink><b>",
    "chargeReminderEmail.billingType.ACHOrWire.text": "ACH或电汇",
    "chargeReminderEmail.billingType.creditCard.text":
      "<b>{brand}</b>，最后四位数字：<b>{last4Digits}</b>",
    "chargeReminderEmail.closingText": "谢谢。{br}Notion团队",
    "chargeReminderEmail.greeting": "你好！",
    "chargeReminderEmail.reminderBody.text":
      "在下一个Notion计费周期中，您似乎没有足够的信用来支付。通知{dateOfNextCharge}我们将用我们记录中的付款工具({paymentMethod})收取<b>{amountToBeCharged}</b>的金额。",
    "chargeReminderEmail.subjectLine.text": "Notion卸妆机:7天后将收取使用费",
    "churnSurveyMenu.alternatives.airtable": "Airtable",
    "churnSurveyMenu.alternatives.alternativeOtherPlaceholder": "请填写答案。",
    "churnSurveyMenu.alternatives.asana": "Asana",
    "churnSurveyMenu.alternatives.atlassianConfluence":
      "Confluence(Confluence)",
    "churnSurveyMenu.alternatives.atlassianJira": "Jira",
    "churnSurveyMenu.alternatives.coda": "科达",
    "churnSurveyMenu.alternatives.description": "请选择一个或多个。",
    "churnSurveyMenu.alternatives.dropboxPaper": "Dropbox Paper",
    "churnSurveyMenu.alternatives.evernote": "印象笔记",
    "churnSurveyMenu.alternatives.googleDriveDocs": "Google Drive/Docs",
    "churnSurveyMenu.alternatives.microsoftOffice": "Microsoft 365/Office",
    "churnSurveyMenu.alternatives.other": "其他",
    "churnSurveyMenu.alternatives.quip": "Quip",
    "churnSurveyMenu.alternatives.title": "2.您改用什么工具了？",
    "churnSurveyMenu.alternatives.trello": "Trello",
    "churnSurveyMenu.cancelButton.title": "取消",
    "churnSurveyMenu.continueDowngrade.downgradeMessage.personal":
      "即使您现在取消订阅，您的现有收费计划中包含的功能仍可以使用到{periodEnd}。您可以随时重新订阅或使用其他收费计划。{br}{periodEnd}之后，此工作空间将降级为免费个人套餐，并受以下限制：<li>1人工作空间</li><li>限制为每个工作区的5名来宾</li><li>限制文件上传最多5MB</li><li>禁用版本记录</li><li>无法与其他成员共享工作空间</li>",
    "churnSurveyMenu.continueDowngrade.downgradeMessage.team":
      "即使您现在取消订阅，现有收费计划的功能仍然可用至{periodEnd}。如果您愿意，您可以随时重新订阅或更换其他收费计划。{br}{periodEnd}之后，此工作空间将降级为团队计划免费试用期，并具有以下限制：<li>1，000块限制</li><li>文件上传限制为最多5MB</li><li>没有版本历史记录</li><li>无法批量导出</li><li>没有高级权限</li><li>没有权限组</li>",
    "churnSurveyMenu.continueDowngrade.title": "继续降级吗？",
    "churnSurveyMenu.downgradeButton.title": "降级",
    "churnSurveyMenu.goBackButton.title": "返回计划",
    "churnSurveyMenu.header.covidMessage":
      "§如果您因为电晕19而遇到困难，请告知我们<contactuslink>我们</contactuslink>我们将为您提供帮助。",
    "churnSurveyMenu.header.description":
      "Notion在不断发展。如果在降级之前给予意见，则有助于更好地为所有人发展Notion。感谢您的反馈。",
    "churnSurveyMenu.header.personal.title": "降级至个人套餐",
    "churnSurveyMenu.header.team.title": "降级到团队计划试用期",
    "churnSurveyMenu.other.otherFeedbackPlaceholder":
      "我们团队将审查反馈，以进一步改进Notion。",
    "churnSurveyMenu.otherFeedback.title": "3.您对我们有什么反馈吗？",
    "churnSurveyMenu.reasons.companyShuttingDown": "公司停业或降低成本",
    "churnSurveyMenu.reasons.description": "请选择一个或多个。",
    "churnSurveyMenu.reasons.missingFeatures": "缺少的功能",
    "churnSurveyMenu.reasons.missingFeaturesPlaceholder":
      "请告诉我缺少什么功能。",
    "churnSurveyMenu.reasons.notUsingEnough": "不够使用",
    "churnSurveyMenu.reasons.other": "其他",
    "churnSurveyMenu.reasons.reasonOtherPlaceholder": "请填写答案。",
    "churnSurveyMenu.reasons.securityComplianceRequirements":
      "安全性或合规性要求",
    "churnSurveyMenu.reasons.title": "1.为什么降级？",
    "churnSurveyMenu.reasons.toDifficult": "使用太困难了",
    "churnSurveyMenu.reasons.tooExpensive": "太贵了",
    "churnSurveyMenu.reasons.trialOver": "试用期结束",
    "churnSurveyMenu.reasons.upgradedByMistake": "意外升级",
    "churnSurveyMenu.reasons.usingAlternative": "使用其他替代方案",
    "clipboardActions.offlineError.message": "要复制这个块，请在线连接。",
    "clipboardActions.pasteFileIntoCommentError.message":
      "很抱歉。无法将文件粘贴到评论中。",
    "clipboardInputRenderer.copyLink.message": "单击鼠标右键复制上面的链接",
    "codeBlock.caption.button": "标题",
    "codeBlock.copyToClipboard.button": "复制",
    "codeBlock.mobileLanguageMenu.doneButton.label": "完成",
    "codeBlock.mobileLanguageMenu.title": "语言",
    "codeBlock.searchPrompt": "搜索语言",
    "codepenBlock.embed.caption": "兼容所有公共CodePen链接",
    "codepenBlock.placeholder": "CodePen嵌入",
    "collection.boardView.hiddenColumns.label": "隐藏列",
    "collection.boardView.selectProperty.defaultName": "状态",
    "collection.numberFormat.baht": "泰铢",
    "collection.numberFormat.brl": "雷亚尔",
    "collection.numberFormat.canadianDollar": "加元",
    "collection.numberFormat.chileanPeso": "智利比索",
    "collection.numberFormat.colombianPeso": "哥伦比亚比索",
    "collection.numberFormat.danishKrone": "丹麦克朗",
    "collection.numberFormat.dirham": "迪拉姆",
    "collection.numberFormat.euro": "欧元",
    "collection.numberFormat.forint": "福林特",
    "collection.numberFormat.franc": "法郎",
    "collection.numberFormat.hongKongDollar": "港元",
    "collection.numberFormat.idr": "卢比亚",
    "collection.numberFormat.koruna": "科鲁纳",
    "collection.numberFormat.krona": "克朗",
    "collection.numberFormat.leu": "雷乌",
    "collection.numberFormat.mexicanPeso": "墨西哥比索",
    "collection.numberFormat.newZealandDollar": "新西兰元",
    "collection.numberFormat.norwegianKrone": "挪威克朗",
    "collection.numberFormat.number": "数字",
    "collection.numberFormat.numberWithCommas": "包含逗号的数字",
    "collection.numberFormat.percent": "%",
    "collection.numberFormat.philippinePeso": "菲律宾比索",
    "collection.numberFormat.pound": "磅",
    "collection.numberFormat.rand": "大地",
    "collection.numberFormat.ringgit": "林吉特",
    "collection.numberFormat.riyal": "里亚尔",
    "collection.numberFormat.ruble": "卢布",
    "collection.numberFormat.rupee": "卢比",
    "collection.numberFormat.shekel": "谢克尔",
    "collection.numberFormat.try": "里拉",
    "collection.numberFormat.won": "圆",
    "collection.numberFormat.yen": "日元",
    "collection.numberFormat.yuan": "安慰",
    "collection.numberFormat.zloty": "兹罗提",
    "collectionBoardItem.actions.cancel": "取消",
    "collectionBoardItem.actions.reposition": "重新定位",
    "collectionBoardItem.actions.savePosition": "保存位置",
    "collectionBoardItem.itemName.placeholder": "请输入您的姓名。",
    "collectionBoardItem.reposition.tooltip": "重命名、删除、移动等.",
    "collectionBoardItem.untitledBlock": "无标题",
    "collectionEditViewButtonPopup.delete.buttonText": "删除",
    "collectionEditViewButtonPopup.deleteViewConfirm.text":
      "是否确实要删除此视图？",
    "collectionEditViewButtonPopup.duplicate.buttonText": "克隆",
    "collectionEditViewButtonPopup.mobileEditViewModal.doneButtonText": "完成",
    "collectionEditViewButtonPopup.mobileEditViewModal.title": "编辑视图",
    "collectionEditViewButtonPopup.removeButton.text": "移除",
    "collectionEditViewButtonPopup.tooltip": "重命名、删除等.",
    "collectionFilterCombinatorGrid.filterOperator.and": "和",
    "collectionFilterCombinatorGrid.filterOperator.or": "或",
    "collectionFilterMenuFilterOperatorValue.date.exact.order":
      "{exact}{dateValue}",
    "collectionFilterMenuHelpers.checkbox.checked": "已标记",
    "collectionFilterMenuHelpers.checkbox.unchecked": "未选中",
    "collectionFilterMenuHelpers.combinatorOperators.and": "和",
    "collectionFilterMenuHelpers.combinatorOperators.or": "或",
    "collectionFilterMenuHelpers.operator.any": "全部",
    "collectionFilterMenuHelpers.operator.checkboxIs": "与值相同的数据",
    "collectionFilterMenuHelpers.operator.checkboxIsNot": "与值不相等的数据",
    "collectionFilterMenuHelpers.operator.dateIs": "与日期相同的数据",
    "collectionFilterMenuHelpers.operator.dateIsAfter": "~之后(不含当天)",
    "collectionFilterMenuHelpers.operator.dateIsBefore": "~之前(不含当天)",
    "collectionFilterMenuHelpers.operator.dateIsOnOrAfter": "~之后(包括当天)",
    "collectionFilterMenuHelpers.operator.dateIsOnOrBefore": "~之前(包括当天)",
    "collectionFilterMenuHelpers.operator.dateIsWithin": "范围内",
    "collectionFilterMenuHelpers.operator.enumContains": "包含值的数据",
    "collectionFilterMenuHelpers.operator.enumDoesNotContain": "不包含值的数据",
    "collectionFilterMenuHelpers.operator.enumIs": "与值相同的数据",
    "collectionFilterMenuHelpers.operator.enumIsNot": "与值不相等的数据",
    "collectionFilterMenuHelpers.operator.every": "鹰",
    "collectionFilterMenuHelpers.operator.isEmpty": "空值数据",
    "collectionFilterMenuHelpers.operator.isNotEmpty": "非空值数据",
    "collectionFilterMenuHelpers.operator.none": "无",
    "collectionFilterMenuHelpers.operator.numberDoesNotEqual": "呼呼",
    "collectionFilterMenuHelpers.operator.numberEquals": "=",
    "collectionFilterMenuHelpers.operator.numberGreaterThan": ">",
    "collectionFilterMenuHelpers.operator.numberGreaterThanOrEqualTo": "呼呼",
    "collectionFilterMenuHelpers.operator.numberLessThan": "<",
    "collectionFilterMenuHelpers.operator.numberLessThanOrEqualTo": "呼呼",
    "collectionFilterMenuHelpers.operator.personContains": "包含用户的数据",
    "collectionFilterMenuHelpers.operator.personDoesNotContain":
      "不包含用户的数据",
    "collectionFilterMenuHelpers.operator.relationContains": "包含值的数据",
    "collectionFilterMenuHelpers.operator.relationDoesNotContain":
      "不包含值的数据",
    "collectionFilterMenuHelpers.operator.stringContains": "包含值的数据",
    "collectionFilterMenuHelpers.operator.stringDoesNotContain":
      "不包含值的数据",
    "collectionFilterMenuHelpers.operator.stringEndsWith": "以值结尾的数据",
    "collectionFilterMenuHelpers.operator.stringIs": "与值相同的数据",
    "collectionFilterMenuHelpers.operator.stringIsNot": "与值不相等的数据",
    "collectionFilterMenuHelpers.operator.stringStartsWith": "以值开头的数据",
    "collectionFilterMenuHelpers.relativeDates.exactDate": "精确日期",
    "collectionFilterMenuHelpers.relativeDates.oneMonthAgo": "一个月前",
    "collectionFilterMenuHelpers.relativeDates.oneMonthFromNow":
      "从今天开始一个月后",
    "collectionFilterMenuHelpers.relativeDates.oneWeekAgo": "1周前",
    "collectionFilterMenuHelpers.relativeDates.oneWeekFromNow":
      "从现在开始一周后",
    "collectionFilterMenuHelpers.relativeDates.theNextMonth": "下个月",
    "collectionFilterMenuHelpers.relativeDates.theNextWeek": "下周",
    "collectionFilterMenuHelpers.relativeDates.theNextYear": "明年",
    "collectionFilterMenuHelpers.relativeDates.thePastMonth": "上个月",
    "collectionFilterMenuHelpers.relativeDates.thePastWeek": "上周",
    "collectionFilterMenuHelpers.relativeDates.thePastYear": "去年",
    "collectionFilterMenuHelpers.relativeDates.today": "今天",
    "collectionFilterMenuHelpers.relativeDates.tomorrow": "明天",
    "collectionFilterMenuHelpers.relativeDates.yesterday": "昨天",
    "collectionGalleryViewItem.action.cancel": "取消",
    "collectionGalleryViewItem.action.reposition": "重新定位",
    "collectionGalleryViewItem.action.savePosition": "保存位置",
    "collectionGalleryViewItem.itemName.placeholder": "请输入您的姓名。",
    "collectionGalleryViewItem.repositionAction.tooltip":
      "重命名、删除、移动等.",
    "collectionGalleryViewItem.untitledBlock": "无标题",
    "collectionHelpers.board.caption": "坎班板:项目计划和错误跟踪的理想视图",
    "collectionHelpers.board.displayName": "板",
    "collectionHelpers.calendar.caption": "每月查看活动计划和安排",
    "collectionHelpers.calendar.displayName": "日历",
    "collectionHelpers.gallery.caption":
      "卡片网格:适合情调板、索引卡和食谱的视图",
    "collectionHelpers.gallery.displayName": "画廊",
    "collectionHelpers.list.caption": "查看适合书签和注释的简单页面",
    "collectionHelpers.list.displayName": "列表",
    "collectionHelpers.table.caption":
      "按类型列出的表，用于存储和查看所有类型的结构化数据",
    "collectionHelpers.table.displayName": "表",
    "collectionHelpers.timeline.caption":
      "查看与项目时间表和计划相匹配的时间线",
    "collectionHelpers.timline.displayName": "时间轴",
    "collectionHiddenGroupsButton.hiddenGroupsButton.text":
      "{numberOfHiddenGroups，plural，other{隐藏组{numberOfHiddenGroups}个}}",
    "collectionNoDateMenu.addResultToCalendar.prompt": "点击将其添加到日历中。",
    "collectionNoDateMenu.addResultToTimeline.prompt":
      "点击将其添加到时间轴中。",
    "collectionNoDateMenu.loading.message": "正在加载.",
    "collectionNoDateMenu.mobileMenuTitle": "无日期页面",
    "collectionNoDateMenu.noResults.title": "无结果",
    "collectionNoDateMenu.pagesWithNoDateInPrefix":
      "{noDateTotal，plural，other{{noDateTotal}无日期页面}}",
    "collectionNoDateMenu.resultsMenu.errorMessage": "出现问题。",
    "collectionNoDateMenu.searchPlaceholder": "搜索页面",
    "collectionNoDateMenu.view.button.label": "视图",
    "collectionSortMenuRow.sortDirectionSelectMenu.ascending": "升序",
    "collectionSortMenuRow.sortDirectionSelectMenu.descending": "降序",
    "collectionSortMenuRow.sortDirectionSelectMenu.placeholder": "未指定",
    "collectionSortMenuRow.sortDirectionSelectMenu.title": "排序",
    "collectionViewBlock.action.navigateToOriginal.tooltip":
      "点击进入原始数据库。",
    "collections.operatorValueSelect.placeholder": "选择选项",
    "colors.select.blue": "蓝色",
    "colors.select.brown": "棕色",
    "colors.select.default": "默认值",
    "colors.select.gray": "灰色",
    "colors.select.green": "绿色",
    "colors.select.orange": "橙色",
    "colors.select.pink": "粉红色",
    "colors.select.purple": "紫色",
    "colors.select.red": "红色",
    "colors.select.yellow": "黄色",
    "comment.actions.reopenButton.label": "重新打开",
    "comment.actions.resolveButton.label": "已解决",
    "comment.confirmDialog.deleteComment.deleteButton.label": "删除",
    "comment.confirmDialog.deleteComment.prompt": "是否确实要删除此评论？",
    "comment.confirmDialog.discardEdit.discardButton.label": "删除",
    "comment.confirmDialog.discardEdit.prompt": "是否确实要删除此编辑？",
    "comment.deleteComment.button": "删除评论",
    "comment.editComment.button": "编辑评论",
    "comment.editedAtTime.label": "已在{lastEditedTime}中编辑",
    "comment.hide": "隐藏页面评论",
    "comment.reopenDiscussion.button": "重新打开讨论",
    "comment.resolveDiscussion.button": "解决讨论",
    "comments.learn": "评论用法",
    "configureRelationModal.relationProperty.createModal.cancelButton": "取消",
    "configureRelationModal.relationProperty.createModal.confirmButton":
      "创建关系属性",
    "configureRelationModal.relationProperty.createModal.databaseSelect.label":
      "选择数据库",
    "configureRelationModal.relationProperty.createModal.databaseSelect.mobile.caption":
      "选择要连接的数据库。",
    "configureRelationModal.relationProperty.createModal.databaseSelect.mobile.title":
      "要连接的数据库",
    "configureRelationModal.relationProperty.createModal.databaseSelect.placeholder":
      "搜索数据库",
    "configureRelationModal.relationProperty.createModal.description":
      "可以使用关系属性连接不同数据库中的页面。",
    "configureRelationModal.relationProperty.createModal.header":
      "创建关系属性",
    "configureRelationModal.relationProperty.createModal.helpCenterLink":
      "关系用法",
    "configureRelationModal.relationProperty.createModal.helpCenterLinkMobile":
      "关系用法",
    "configureRelationModal.relationProperty.createModal.noResults": "无结果",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt":
      "您选择了相同的数据库。在哪些属性中显示链接的页面？",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.createNewPropertyOption.title":
      "在新属性中显示",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.mobileTitle":
      "同一数据库内的关系属性",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.samePropertyOption.title":
      "在单个属性中显示",
    "configureRelationModal.relationProperty.render.error": "出现问题。",
    "configureRelationModal.relationProperty.render.loading": "正在加载.",
    "confirmationInputDialog.cancelButton.label": "取消",
    "confluenceImportErrors.attachmentNotFound.message":
      "在ZIP文件中找不到附件。",
    "confluenceImportErrors.attachmentUploadFailed.message":
      "文件上传附件失败。",
    "confluenceImportErrors.bufferUploadFailed.message":
      "从缓冲区上载附件失败。",
    "confluenceImportErrors.failedToBuildPage.message": "无法获取页面。",
    "confluenceImportErrors.failedToExtractZip.message": "无法解压缩ZIP文件。",
    "confluenceImportErrors.failedToFindElement.message": "无法解析上载内容。",
    "confluenceImportErrors.foundElementIsIncorrectType.message":
      "无法解析上载内容。",
    "confluenceImportErrors.indexHtmlMissingAvailablePages.message":
      "索引文件无效。找不到可用的页面。",
    "confluenceImportErrors.noConfluenceIdInPageLink.message":
      "无法从文件名中提取页面ID。",
    "confluenceImportErrors.noIndexHtmlFile.message":
      "在ZIP文件中找不到索引文件。",
    "confluenceImportErrors.uploadFileSizeExceeded.message":
      "上载文件的最大大小为{maxSize}。",
    "confluenceImportHelpers.subpageHeader": "子页",
    "confluenceImportHelpers.untitledTableColumn.name": "列",
    "confluenceImportStatus.creatingIndex": "正在创建索引.",
    "confluenceImportStatus.downloadingFile": "正在检查文件.",
    "confluenceImportStatus.finishingUp": "差不多了..。",
    "confluenceImportStatus.importingPage": "正在导入页面.({current}/{total})",
    "confluenceImportStatus.indexingContent": "正在更新搜索.",
    "confluenceImportStatus.savingTransactions": "正在保存更改.",
    "confluenceImportStatus.uploadingAttachments": "正在上载附件.",
    "connectedAppsSettings.asana.caption": "从电路板和列表导入任务",
    "connectedAppsSettings.connectedAppsSection.title": "连接的应用程序",
    "connectedAppsSettings.disconnectGoogleDriveModal.disconnectButton.label":
      "断开连接",
    "connectedAppsSettings.disconnectGoogleDriveModal.message":
      "选择“断开连接”将禁用嵌入到所有工作空间的Google Drive文件的预览。但是，由于嵌入不会从Notion中删除，因此可以随时重新连接。",
    "connectedAppsSettings.evernote.caption": "导入笔记本电脑",
    "connectedAppsSettings.googleDrive.caption": "查找并嵌入文件",
    "connectedAppsSettings.helpButton.caption": "如何在Notion中嵌入内容",
    "connectedAppsSettings.offline.message": "在线管理您的应用连接。",
    "connectedAppsSettings.trello.caption": "导入电路板",
    "connectedAppsSettingsItem.connectAccountLink": "连接",
    "connectedAppsSettingsItem.connectAnotherAccountLink": "连接其他帐户",
    "connectedAppsSettingsItem.disconnectLink": "断开连接",
    "connectionState.errorIndicator.cannotMakeEdits.detailedMessage":
      "不能再编辑。{errorMessage}如果问题仍然存在，请联系支持团队。{usageInfoMessage}",
    "connectionState.errorIndicator.cannotSaveChanges.message": "无法保存更改",
    "connectionState.errorIndicator.lowStorageOnDesktopApp.message":
      "磁盘空间不足",
    "connectionState.errorIndicator.lowStorageOnMobileApp.message":
      "应用程序存储不足",
    "connectionState.errorIndicator.lowStorageOnWebApp.message":
      "浏览器存储不足",
    "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart1":
      "Notion使用装置中可用存储容量的{percentageOfStorageBytesUsed}%({usedNumberOfBytes}/{totalNumberOfBytes})。",
    "connectionState.errorIndicator.possibleLostEdits.detailedMessagePart2":
      "脱机时，更改可能会丢失。关闭并重新打开应用程序，如果问题仍然存在，请联系支持团队。",
    "connectionState.offlineBadge.label": "离线",
    "connectionState.offlineBadge.tooltip":
      "{numberOfEdits，plural，other{有{numberOfEdits}个编辑，将在下次联机时同步。}}",
    "connectionState.savePercentangeIndicator.tooltip": "{percent}%已完成。",
    "connectionState.saving.message": "正在保存.",
    "couponEntryInput.button.apply": "使用",
    "couponEntryInput.error.noPromo": "无效的优惠券代码",
    "couponEntryInput.placeholder": "优惠券代码",
    "createPageMenuItem.title.withoutPageName": "添加新页面",
    "createSubpageMenuItem.title.withPageName": "新的“{filterText}”子页",
    "createSubpageMenuItem.title.withoutPageName": "添加新子页",
    "csatPopup.additionalFeedback.placeholder": "请填写答案。",
    "csatPopup.feedbackPrompt.defaultlabel": "使用Notion，您有多满意？",
    "csatPopup.feedbackPrompt.docNotesLabel":
      "您对使用Notion作为笔记和文档有多满意？",
    "csatPopup.feedbackPrompt.enterpriseDefaultLabel":
      "向朋友推荐Notion的可能性有多大？",
    "csatPopup.feedbackPrompt.projManagementLabel":
      "您对使用Notion管理项目和任务有多满意？",
    "csatPopup.feedbackPrompt.wikiLabel":
      "您对使用Notion作为团队wiki有多满意？",
    "csatPopup.sendButton.label": "发送",
    "csatPopup.stars.1StarLabel": "非常不满意",
    "csatPopup.stars.1StarLabelNps": "非常低",
    "csatPopup.stars.2StarLabel": "不满足",
    "csatPopup.stars.2StarLabelNps": "略低",
    "csatPopup.stars.3StarLabel": "普通",
    "csatPopup.stars.3StarLabelNps": "普通",
    "csatPopup.stars.4StarLabel": "大体满意",
    "csatPopup.stars.4StarLabelNps": "稍高",
    "csatPopup.stars.5StarLabel": "非常满意",
    "csatPopup.stars.5StarLabelNps": "非常高",
    "csatPopup.stars.notSpecifiedLabel": "请选择选项",
    "csatPopup.thanks.description": "您的反馈创建更好的Notion。",
    "csatPopup.thanks.header": "感谢您的反馈！",
    "customizePageMenu.header.label": "查看页面目标",
    "customizePageMenu.lock.label": "重新锁定",
    "customizePageMenu.locked.header": "在父数据库中锁定的设置。",
    "customizePageMenu.mobileHeader.label": "自定义页面",
    "customizePageMenu.pageSections.backlinksTitle": "反向链接",
    "customizePageMenu.pageSections.commentsTitle": "页面评论",
    "customizePageMenu.propertiesSection.header": "属性",
    "customizePageMenu.sectionsSection.header": "部分",
    "customizePageMenu.unlock.label": "解锁",
    "customizePageMenu.unlocked.header": "在父数据库中解锁的设置。",
    "customizePageMenuVisibilitySelect.collapsed.label": "显示为弹出框",
    "customizePageMenuVisibilitySelect.expanded.label": "展开",
    "customizePageMenuVisibilitySelect.hide.label": "始终隐藏",
    "customizePageMenuVisibilitySelect.hideIfEmpty.label": "空时隐藏",
    "customizePageMenuVisibilitySelect.mobile.doneButton.label": "完成",
    "customizePageMenuVisibilitySelect.mobile.title": "选择视图状态",
    "customizePageMenuVisibilitySelect.off.label": "关",
    "customizePageMenuVisibilitySelect.show.label": "始终显示",
    "darkModeMobileButton.darkMode.label": "黑暗模式",
    "darkModeMobileButton.lightMode.label": "灯光模式",
    "database.FirstLoadLimitSelectOption.limitPagesTitle": "{limit}页",
    "database.FirstLoadLimitSelectOption.showAllTitle": "全部",
    "database.actionBar.addViewButton.tooltip":
      "具有查看功能，可通过多种方式查看同一数据库",
    "database.actionBar.addViewButtonTitle": "添加视图",
    "database.actionBar.boardColumnsButton.label": "列分隔标准",
    "database.actionBar.calendarByPropertyMenu.button.label": "区分",
    "database.actionBar.filterButtonTitle": "过滤器",
    "database.actionBar.groupButton.label": "分组依据",
    "database.actionBar.groupByButton.label": "分组",
    "database.actionBar.mobileCalendarByPropertyMenu.title": "日历依据",
    "database.actionBar.mobiletimelineByPropertyMenu.title": "时间轴显示方式",
    "database.actionBar.newButton": "新建",
    "database.actionBar.noDate.tooltip": "无日期显示页面",
    "database.actionBar.noDateButton.noProperty.label":
      "无日期页面({noDateTotal})",
    "database.actionBar.noDateButton.withProperty.label":
      "{propertyString}无({noDateTotal})",
    "database.actionBar.offlineTemplatePicker.message": "在线使用模板。",
    "database.actionBar.openFullscreenPageButton.tooltip": "打开页面",
    "database.actionBar.propertiesButtonTitle": "属性",
    "database.actionBar.searchButtonTitle": "搜索",
    "database.actionBar.searchButtonTooltip": "在线搜索。",
    "database.actionBar.searchInputPlaceholder": "请输入您的搜索词。",
    "database.actionBar.sortButtonTitle": "排序",
    "database.actionBar.timelineByPropertyMenu.button.label": "显示依据",
    "database.actionBar.titlePlaceholder": "无标题",
    "database.actionMenu.fileProperty.delete.title": "删除",
    "database.actionMenu.fileProperty.download.title": "下载",
    "database.actionMenu.fileProperty.fullscreen.title": "全屏",
    "database.actionMenu.fileProperty.rename.title": "重命名",
    "database.actionMenu.fileProperty.viewOriginal.title": "查看源",
    "database.addNewProperty.pageProperty.defaultNamePrefix": "属性",
    "database.addNewProperty.property.defaultNamePrefix": "属性",
    "database.addNewProperty.tableHeaderCell.namePrefix": "属性",
    "database.addNewProperty.tableProperty.namePrefix": "列",
    "database.aggregationDescription.average": "计算数字属性的平均值。",
    "database.aggregationDescription.checked": "计算此属性中选中复选框的页数。",
    "database.aggregationDescription.count": "计算总页数，包括空白页。",
    "database.aggregationDescription.count_values":
      "计算此属性的非空值数。对于可以包含多个值的类型(如多重选择或人员)，计算每个页面上的选定值的数量。",
    "database.aggregationDescription.date_range":
      "计算日期属性的日期范围(最新日期-最早日期)。",
    "database.aggregationDescription.earliest_date":
      "在日期属性时间中查找最早日期。",
    "database.aggregationDescription.empty": "此属性计算空值的页数。",
    "database.aggregationDescription.latest_date": "查找日期属性的最新日期。",
    "database.aggregationDescription.max": "查找数字属性的最大值。",
    "database.aggregationDescription.median": "查找数字属性的中心值。",
    "database.aggregationDescription.min": "查找数字属性的最小值。",
    "database.aggregationDescription.not_empty": "此属性计算非空页数。",
    "database.aggregationDescription.percent_checked":
      "在此属性中，显示选中复选框的页面百分比。",
    "database.aggregationDescription.percent_empty":
      "显示此属性的值为空的页面百分比。",
    "database.aggregationDescription.percent_not_empty":
      "此属性显示选中复选框的页面百分比。",
    "database.aggregationDescription.percent_unchecked":
      "显示此属性中未选中复选框的页面百分比。",
    "database.aggregationDescription.range": "计算数字属性的范围(最大-最小)。",
    "database.aggregationDescription.show_unique":
      "显示此属性的唯一值。对于可以包含多个值的类型(例如“多个选择”或“人”)，计算所有页面的唯一值。",
    "database.aggregationDescription.sum": "计算数字属性的最大值。",
    "database.aggregationDescription.unchecked":
      "计算此属性中具有未选中复选框的页数。",
    "database.aggregationDescription.unique":
      "计算此属性的唯一值数。对于包含多个值的类型(如“多选”或“人员”)，计算跨所有页的唯一值。",
    "database.aggregationFullName.average": "平均",
    "database.aggregationFullName.checked": "已标记",
    "database.aggregationFullName.count": "全部计数",
    "database.aggregationFullName.count_values": "值强度",
    "database.aggregationFullName.date_range": "日期范围",
    "database.aggregationFullName.earliest_date": "最早日期",
    "database.aggregationFullName.empty": "空值强度",
    "database.aggregationFullName.latest_date": "最近日期",
    "database.aggregationFullName.max": "最大",
    "database.aggregationFullName.median": "中值",
    "database.aggregationFullName.min": "最小",
    "database.aggregationFullName.not_empty": "非空值强度",
    "database.aggregationFullName.percent_checked": "已标记的百分比(%)",
    "database.aggregationFullName.percent_empty": "空值强度(%)",
    "database.aggregationFullName.percent_not_empty": "非空值强度(%)",
    "database.aggregationFullName.percent_unchecked": "未选中的百分比",
    "database.aggregationFullName.range": "范围",
    "database.aggregationFullName.sum": "合计",
    "database.aggregationFullName.unchecked": "未选中",
    "database.aggregationFullName.unique": "消除重复全部计数",
    "database.aggregationFullName.unique_values": "显示唯一值",
    "database.aggregationShortName.average": "平均",
    "database.aggregationShortName.checked": "已标记",
    "database.aggregationShortName.count": "计数",
    "database.aggregationShortName.count_values": "值",
    "database.aggregationShortName.date_range": "范围",
    "database.aggregationShortName.earliest_date": "最早日期",
    "database.aggregationShortName.empty": "空",
    "database.aggregationShortName.latest_date": "最近",
    "database.aggregationShortName.max": "最大",
    "database.aggregationShortName.median": "中值",
    "database.aggregationShortName.min": "最小",
    "database.aggregationShortName.not_empty": "非空",
    "database.aggregationShortName.percent_checked": "已标记",
    "database.aggregationShortName.percent_empty": "空",
    "database.aggregationShortName.percent_not_empty": "非空",
    "database.aggregationShortName.percent_unchecked": "未选中",
    "database.aggregationShortName.range": "范围",
    "database.aggregationShortName.showUnique": "显示唯一值",
    "database.aggregationShortName.sum": "合计",
    "database.aggregationShortName.unchecked": "未选中",
    "database.aggregationShortName.unique": "唯一",
    "database.boardAggregation.tooltip": "聚合",
    "database.boardView.actions.addNewPage.tooltip": "创建新页面",
    "database.boardView.addGroupButton.columnAlreadyExistsError.message":
      "此列已经存在。",
    "database.boardView.addGroupButton.groupAlreadyExistsError.message":
      "这个组已经存在。",
    "database.boardView.addGroupButtonTitle": "添加组",
    "database.boardView.addItemButtonTitle": "新建",
    "database.boardView.columnActionMenu.colorSectionTitle": "颜色",
    "database.boardView.columnActionMenu.deleteButtonTitle": "删除",
    "database.boardView.columnActionMenu.deleteDialogMessage":
      "是否确实要删除此列？列中的所有块都将被删除。",
    "database.boardView.columnActionMenu.hideButtonTitle": "隐藏",
    "database.boardView.columnActionMenu.showButtonTitle": "表示",
    "database.boardView.columnActionMenu.title": "操作",
    "database.boardView.multiSelectLabel.placeholder": "新的多重选择",
    "database.boardView.searchResults.noResults.label": "无结果",
    "database.boardView.selectLabel.placeholder": "新选择",
    "database.boardView.uncategorizedColumnTitle": "{name}无",
    "database.calendarView.addItemButtonTooltip": "添加项目",
    "database.calendarView.dateProperty.defaultName": "日期",
    "database.calendarView.todayButton.label": "今天",
    "database.collectionEditViewButtonPopup.dateNameProperty": "日期",
    "database.collectionEditViewButtonPopup.inputPlaceholder": "视图名称",
    "database.collectionEditViewButtonPopup.renameButtonTitle": "重命名",
    "database.collectionEditViewButtonPopup.statusNameProperty": "状态",
    "database.collectionGroupActionMenu.colorSectionTitle": "颜色",
    "database.collectionGroupActionMenu.deleteButtonTitle": "删除",
    "database.collectionGroupActionMenu.deleteDialogMessage":
      "是否确实要删除此组？该组中的所有块都将被删除。",
    "database.collectionGroupActionMenu.hideButtonTitle": "隐藏",
    "database.collectionGroupActionMenu.showButtonTitle": "视图",
    "database.collectionGroupActionMenu.title": "操作",
    "database.collectionGroupAggregation.title": "聚合",
    "database.collectionGroupHeader.actions.addNewPage.tooltip": "创建新页面",
    "database.collectionGroupValue.dateGroup.last7Days": "过去的7天",
    "database.collectionGroupValue.dateGroup.last_30Days": "过去的30天",
    "database.collectionGroupValue.dateGroup.next30Days": "接下来的30天",
    "database.collectionGroupValue.dateGroup.next7Days": "后7天",
    "database.collectionGroupValue.dateGroup.today": "今天",
    "database.collectionGroupValue.dateGroup.tomorrow": "明天",
    "database.collectionGroupValue.dateGroup.yesterday": "昨天",
    "database.collectionView.untitledName.board": "查看电路板",
    "database.collectionView.untitledName.calendar": "查看日历",
    "database.collectionView.untitledName.gallery": "查看图库",
    "database.collectionView.untitledName.list": "查看列表",
    "database.collectionView.untitledName.table": "查看表格",
    "database.collectionView.untitledName.timeline": "查看时间轴",
    "database.collectionViewSelect.addViewButtonTitle": "添加视图",
    "database.collectionViewSelect.viewsFor": "视图",
    "database.columnAlreadyExistsOnRenameError.message": "列已经存在。",
    "database.columnExistsAlreadyError.message": "列已经存在。",
    "database.configureProperty.deleteAction": "删除属性",
    "database.configureProperty.duplicateAction": "复制属性",
    "database.configureProperty.hideAction": "隐藏属性",
    "database.configurePropertySearch.deleteAction": "删除属性",
    "database.configurePropertySearch.duplicateAction": "复制属性",
    "database.configurePropertySearch.hideAction": "隐藏属性",
    "database.configurePropertyType.date": "设置日期格式",
    "database.configurePropertyType.formula": "编辑公式",
    "database.configurePropertyType.number": "数字格式",
    "database.configurePropertyType.rollup": "汇总配置",
    "database.configurePropertyType.select": "选项",
    "database.confirmDialog.templatePickerItem.deleteButton.label": "删除",
    "database.confirmDialog.templatePickerItem.deleteMessage":
      "是否确实要删除此模板？",
    "database.createNewView.createButton": "创建",
    "database.createNewView.learnMorePrompt": "使用数据库视图",
    "database.createNewView.mobileMenuTitle": "创建视图",
    "database.createNewViewMobileView.menuItem": "创建",
    "database.deleteProperty.modal.confirmButton": "删除",
    "database.deleteProperty.modal.prompt": "是否确实要删除此属性？",
    "database.editProperty.databaseLocked.tooltipPart1": "页面属性已锁定。",
    "database.editProperty.databaseLocked.tooltipPart2":
      "去{recordIconAndTitle}解锁。",
    "database.editProperty.errorDialog.duplicateSelectValue.message":
      "此选项已经存在。",
    "database.editProperty.errorDialog.missingSelectValue.message":
      "请输入一个值。",
    "database.editProperty.mobile.title": "编辑属性",
    "database.editProperty.name.tooltip":
      "“名称”列用作数据库中的每个页面标题，无法更改。",
    "database.editProperty.rename.buttonLabel": "重命名",
    "database.editProperty.rename.placeholder": "属性名称",
    "database.editProperty.select.mobileLabel": "重命名",
    "database.editPropertyButtonPopup.extensionMenuSectionTitleAdvanced":
      "高级",
    "database.editPropertyButtonPopup.extensionMenuSectionTitleBasic": "基本",
    "database.editPropertyButtonPopup.propertyTypeSectionTitle": "属性类型",
    "database.emptyTemplatesList.info": "使用此数据库内的页面格式作为模板。",
    "database.fileProperty.focusedLabel": "添加文件或图像",
    "database.fileProperty.mobileMenu.title": "文件属性",
    "database.filterAndSort.datePropertyValue.placeholder": "日期",
    "database.filterAndSort.firstPersonPropertyValue.title": "我",
    "database.filterAndSort.mobileEditButton.label": "编辑",
    "database.filterAndSort.mobileModal.personPropertyValue.title": "人",
    "database.filterAndSort.propertyValueInput.placeholder": "值",
    "database.filterAndSort.searchPersonPropertyMenuItem.errorMessage":
      "出现问题。",
    "database.filterAndSort.selectPropertyValue.noResults.message": "无结果",
    "database.filterAndSort.selectPropertyValue.prompt": "选择选项",
    "database.filterAndSort.selectPropertyValue.searchPlaceholder": "搜索选项",
    "database.filterAndSortMenu.propertyButton.label": "属性",
    "database.filterMenu.addFilterButtonTitle": "添加过滤器",
    "database.filterMenu.addFilterGroupButtonCaption": "用于嵌套更多滤镜的组",
    "database.filterMenu.addFilterGroupButtonTitle": "添加过滤器组",
    "database.filterMenu.comparatorMenuDropdownButton.label": "比较运算符",
    "database.filterMenu.dateSelectMenu.emptyPlaceholder": "空",
    "database.filterMenu.duplicateFilterGroupMenuTitle": "克隆",
    "database.filterMenu.duplicateFilterMenuTitle": "克隆",
    "database.filterMenu.emptyState1.v2": "使用过滤器的示例：",
    "database.filterMenu.emptyState2.v2": "仅显示指派给我的任务",
    "database.filterMenu.emptyState3.v2": "仅显示带有特定标记的注释",
    "database.filterMenu.emptyState4.v2": "隐藏已完成的项目",
    "database.filterMenu.filterGroupIndex": "筛选器组{index}",
    "database.filterMenu.filterIndex": "筛选器{index}",
    "database.filterMenu.filterOperatorMenu.title": "运算符",
    "database.filterMenu.filtersFor": "正在使用的过滤器",
    "database.filterMenu.mobileComparatorValueMenu.title": "比较运算符",
    "database.filterMenu.mobileDateSelectMenu.title": "日期",
    "database.filterMenu.mobileMenuTitle": "过滤器",
    "database.filterMenu.operatorPlaceholder": "运算符",
    "database.filterMenu.removeFilterGroupMenuTitle": "移除",
    "database.filterMenu.removeFilterMenuTitle": "移除",
    "database.filterMenu.rollupPropertyValue.mobileMenu.title": "过滤器设置",
    "database.filterMenu.turnIntoFilterMenuTitle": "切换到过滤器",
    "database.filterMenu.turnIntoGroupMenuTitle": "切换到组",
    "database.filterMenu.unwrapGroupMenuTitle": "解散集团",
    "database.filterMenu.where": "位置",
    "database.filterMenu.wrapInGroupMenuCaption": "在此周围创建筛选器组",
    "database.filterMenu.wrapInGroupMenuTitle": "包装组",
    "database.filterOperators.and": "和",
    "database.filterOperators.andCaption": "所有过滤器必须匹配。",
    "database.filterOperators.any": "全部",
    "database.filterOperators.every": "鹰",
    "database.filterOperators.none": "不适用",
    "database.filterOperators.or": "或",
    "database.filterOperators.orCaption": "至少一个过滤器必须匹配。",
    "database.firstLoadLimitSelectMenu.firstLoadLimitSetting":
      "在首次导入中查看",
    "database.formula.acceptFormulaInput.tooltip": "保存",
    "database.formula.category.constants": "常数",
    "database.formula.category.functions": "函数",
    "database.formula.category.operators": "运算符",
    "database.formula.category.properties": "属性",
    "database.formula.constant.e.description": "自然对数的底部。",
    "database.formula.constant.pi.description": "圆周率。",
    "database.formula.doneButton.label": "完成",
    "database.formula.examplesSection.title": "例子",
    "database.formula.function.abs.description": "返回数字的节值。",
    "database.formula.function.cbrt.description": "返回数字的平方根。",
    "database.formula.function.ceil.description":
      "返回大于或等于数字的最小整数。",
    "database.formula.function.concat.description": "连接参数并返回结果。",
    "database.formula.function.contains.description":
      "如果第一个参数有第二个参数，则返回true。",
    "database.formula.function.date.description":
      "返回与指定日期的天数对应的整数(1到31)。",
    "database.formula.function.day.description":
      "返回一个整数，该整数对应于指定日期的星期几。0是星期日，1是星期一，2是星期二，其余数字也按顺序对应每个星期。",
    "database.formula.function.empty.description": "测试值是否为空。",
    "database.formula.function.end.description": "返回日期范围的结束。",
    "database.formula.function.exp.description":
      "返回E^x。其中x是参数，E是自然对数的底Euler常量(2.718.)中所述方法的备选方法。",
    "database.formula.function.floor.description":
      "返回小于或等于数字的最大整数。",
    "database.formula.function.format.description": "将参数格式化为字符串。",
    "database.formula.function.formatDate.description":
      "使用Moment标准时间格式字符串设置日期格式。",
    "database.formula.function.fromTimestamp.description":
      "返回由Unix毫秒时间戳组成的日期，该时间戳对应于自1970年1月1日以来的毫秒数。",
    "database.formula.function.hour.description":
      "返回与指定日期的时间相对应的整数(0到23)。",
    "database.formula.function.join.description":
      "在其余之间插入第一个参数并返回其连接。",
    "database.formula.function.length.description": "返回字符串的长度。",
    "database.formula.function.ln.description": "返回数字的自然对数。",
    "database.formula.function.log10.description": "返回数字的底数为10的对数。",
    "database.formula.function.log2.description": "返回数字的底数为2的对数。",
    "database.formula.function.max.description":
      "返回0个或更多数字中的最大数字。",
    "database.formula.function.min.description":
      "返回0个或更多数字中最小的数字。",
    "database.formula.function.minute.description":
      "返回一个整数(0到59)，该整数对应于指定日期的分钟数。",
    "database.formula.function.month.description":
      "根据本地时间，返回与指定日期的月份相对应的整数(0到11)。0代表1月，1代表2月，其余数字也按顺序对应每个月。",
    "database.formula.function.now.description": "返回当前日期和时间。",
    "database.formula.function.replace.description":
      "用新值替换正则表达式中的第一个匹配项。",
    "database.formula.function.replaceAll.description":
      "用新值替换正则表达式中的所有匹配项。",
    "database.formula.function.round.description":
      "返回舍入到最接近整数的数值。",
    "database.formula.function.sign.description":
      "返回x的符号，指示x是正的、负的还是零的。",
    "database.formula.function.slice.description":
      "从起始索引(包括)到结束索引(可选，排除)从字符串中提取子字符串。",
    "database.formula.function.sqrt.description": "返回数字的正平方根。",
    "database.formula.function.start.description": "返回日期范围的开始。",
    "database.formula.function.test.description":
      "测试字符串是否与正则表达式匹配。",
    "database.formula.function.timestamp.description":
      "从Unix毫秒时间戳返回整数，该时间戳对应于自1970年1月1日以来的毫秒数。",
    "database.formula.function.toNumber.description": "解析文本中的数字。",
    "database.formula.function.year.description":
      "返回与指定日期的年份相对应的数字。",
    "database.formula.keyboardShortcutHint":
      "要保存并关闭，请按{commandEnter}。",
    "database.formula.mobileNoErrors.message": "无错误。",
    "database.formula.operator.add.description":
      "将两个数字相加并返回一个和，或连接两个字符串。",
    "database.formula.operator.and.description": "返回两个参数的逻辑AND。",
    "database.formula.operator.divide.description": "除以两个数字并返回份额。",
    "database.formula.operator.equal.description":
      "如果参数相同，则为true；否则为false。",
    "database.formula.operator.if.description":
      "基于其他值在两个选项之间切换。",
    "database.formula.operator.larger.description":
      "如果第一个参数大于第二个参数，则返回true。",
    "database.formula.operator.largerEq.description":
      "如果第一个参数大于或等于第二个参数，则返回true。",
    "database.formula.operator.mod.description": "除以两个数字并返回余数。",
    "database.formula.operator.multiply.description":
      "将两个数字相乘并返回乘积。",
    "database.formula.operator.not.description": "返回两个参数的逻辑NOT。",
    "database.formula.operator.or.description": "返回两个参数的逻辑OR。",
    "database.formula.operator.pow.description":
      "返回幂的底数，即baseexponent。",
    "database.formula.operator.smaller.description":
      "如果第一个参数小于第二个参数，则返回true。",
    "database.formula.operator.smallerEq.description":
      "如果第一个参数小于或等于第二个参数，则返回true。",
    "database.formula.operator.subtract.description": "减去两个数字返回车。",
    "database.formula.operator.unaryMinus.description": "使数字无效。",
    "database.formula.operator.unaryPlus.description": "将参数转换为数字。",
    "database.formula.operator.unequal.description":
      "如果参数相同，则返回false；否则为true。",
    "database.formula.placeholder": "输入公式",
    "database.formula.property.description":
      "返回每个条目的{propertyName}属性。",
    "database.formula.syntaxSection.title": "句法",
    "database.formulaPropertyEntryMenuItem.title": "定义",
    "database.galleryView.addItemButtonTitle": "新建",
    "database.genericColumn.name": "{columnNumber}列",
    "database.groupExistsAlreadyError.message": "组已经存在。",
    "database.groupMenu.clear": "清除",
    "database.groupMenu.columnsBy": "列分隔标准",
    "database.groupMenu.dateGroupBy.day": "每日",
    "database.groupMenu.dateGroupBy.month": "每月",
    "database.groupMenu.dateGroupBy.week": "每周",
    "database.groupMenu.dateGroupBy.year": "每年",
    "database.groupMenu.groupBy": "分组依据",
    "database.groupMenu.hiddenGroups": "隐藏组",
    "database.groupMenu.loadMoreButton.text":
      "{loadMoreAmount，plural，other{{loadMoreAmount}载入更多组}}",
    "database.groupMenu.noGroupingSetMessage": "禁用",
    "database.groupMenu.noneGroup": "无",
    "database.groupMenu.sort": "排序",
    "database.groupMenu.visibleGroups": "显示的组",
    "database.groups.loadMoreButton.text":
      "{loadMoreAmount，plural，other{{loadMoreAmount}载入更多组}}",
    "database.listView.addItemButtonTitle": "新建",
    "database.loadMoreButtonTitle": "<regular>{count}加载更多</regular>",
    "database.mobileBoardAggregationMenu.title": "聚合",
    "database.mobileFilterAndSort.selectMobileModal.title": "选择",
    "database.mobileFilterAndSortMenu.property.buttonMenuItem.label": "属性",
    "database.mobileFormulaModal.saveButton.label": "保存",
    "database.mobileFormulaModal.title": "公式",
    "database.mobilePropertyAggregationMenu.title": "表聚合",
    "database.mobileSearch.placeholder": "请输入搜索词。",
    "database.mobileSelectViewMenu.title": "选择视图",
    "database.mobileTemplatesMenu.title": "数据库模板",
    "database.mobileViewPropertiesMenu.title": "属性",
    "database.navigateButton.callTooltip": "货币",
    "database.navigateButton.openAsPageTitle": "打开",
    "database.navigateButton.openAsPageTooltip": "打开页面",
    "database.navigateButton.openLinkTooltip": "打开链接",
    "database.navigateButton.sendEmailTooltip": "发送电子邮件",
    "database.noPersonSearchResults.message": "无结果",
    "database.noRelationSearchResults.message": "无结果",
    "database.pageProperties.addPropertyButtonTitle": "添加属性",
    "database.pageProperties.hidePropertyTitle":
      "{num，plural，other{隐藏属性{num}个}}",
    "database.pageProperties.showMorePropertyTitle":
      "{num，plural，other{{num}显示更多属性}}",
    "database.pageProperty.emptyTitle": "空",
    "database.personPropertyMenu.noSearchResults.message": "无结果",
    "database.personPropertyMenu.searchErrorMessage": "出现问题。",
    "database.personPropertyValue.searchPlaceholder": "搜索用户",
    "database.personPropertyValue.selectPerson.searchPlaceholder": "选择用户",
    "database.propertiesMenu.addPropertyButtonTitle": "添加属性",
    "database.propertiesMenu.confirmActionDialog.deleteProperty.message":
      "是否确实要删除此属性？",
    "database.propertiesMenu.confirmActionDialog.deletePropertyButton.label":
      "删除",
    "database.propertiesMenu.hiddenProperties": "隐藏属性",
    "database.propertiesMenu.propertiesFor": "属性",
    "database.propertiesMenu.showInTableTitle": "从表查看",
    "database.propertiesMenu.showInTimelineTitle": "在时间轴中查看",
    "database.propertiesMenu.visibleProperties": "显示属性",
    "database.propertiesMenuActions.deleteMenuItem.label": "删除",
    "database.propertiesMenuActions.deleteSearchText.label": "删除",
    "database.propertiesMenuActions.duplicateMenuItem.label": "克隆",
    "database.propertiesMenuActions.duplicateSearchText.label": "克隆",
    "database.propertiesMenuActions.hideMenuItem.label": "隐藏",
    "database.propertiesMenuActions.hideSearchText.label": "隐藏",
    "database.propertiesMenuActions.showMenuItem.label": "表示",
    "database.propertiesMenuActions.showSearchText.label": "表示",
    "database.propertyAggregationMenu.noneText": "不适用",
    "database.propertyTypeDescription.checkbox": "使用单个复选框跟踪状态。",
    "database.propertyTypeDescription.created_by": "引用创建页面的人。",
    "database.propertyTypeDescription.created_time":
      "引用创建页面的日期和时间。",
    "database.propertyTypeDescription.date": "具有格式选项的日期(包括时间)。",
    "database.propertyTypeDescription.email": "请参阅电子邮件地址。",
    "database.propertyTypeDescription.file": "上载文件和图像。",
    "database.propertyTypeDescription.formula":
      "使用页面上的其他属性计算公式。",
    "database.propertyTypeDescription.last_edited_by": "参考页面的最终编辑者。",
    "database.propertyTypeDescription.last_edited_time":
      "引用页面上次编辑的日期和时间。",
    "database.propertyTypeDescription.multi_select": "标记选项列表中的值。",
    "database.propertyTypeDescription.number":
      "具有格式选项的数字，如货币、%等。",
    "database.propertyTypeDescription.person": "参照同一团队成员。",
    "database.propertyTypeDescription.phone_number": "参考电话号码。",
    "database.propertyTypeDescription.relation":
      "允许从其他页面引用此数据库中的页面。",
    "database.propertyTypeDescription.rollup": "显示和汇总从关系中获取的数据。",
    "database.propertyTypeDescription.select": "从选项列表中选择。",
    "database.propertyTypeDescription.text": "一行文本",
    "database.propertyTypeDescription.url": "指向Web上页面的链接。",
    "database.propertyTypeName.checkbox": "复选框",
    "database.propertyTypeName.created_by": "创建者",
    "database.propertyTypeName.created_time": "创建日期",
    "database.propertyTypeName.date": "日期",
    "database.propertyTypeName.email": "电子邮件",
    "database.propertyTypeName.file": "文件和媒体",
    "database.propertyTypeName.formula": "公式",
    "database.propertyTypeName.last_edited_by": "最终编辑",
    "database.propertyTypeName.last_edited_time": "上次编辑时间",
    "database.propertyTypeName.multi_select": "多个选择",
    "database.propertyTypeName.number": "数字",
    "database.propertyTypeName.person": "人",
    "database.propertyTypeName.phone_number": "电话号码",
    "database.propertyTypeName.relation": "关系型",
    "database.propertyTypeName.rollup": "卷起",
    "database.propertyTypeName.select": "选择",
    "database.propertyTypeName.text": "文本",
    "database.propertyTypeName.title": "标题",
    "database.propertyTypeName.url": "网址",
    "database.propertyValues.mobileFormulaMenu.title": "公式",
    "database.relationProperty.createModal.cancelButton": "取消",
    "database.relationProperty.createModal.confirmButton": "创建关系",
    "database.relationProperty.createModal.databaseSelect.label": "选择数据库",
    "database.relationProperty.createModal.databaseSelect.mobile.caption":
      "要链接的数据库",
    "database.relationProperty.createModal.databaseSelect.mobile.title":
      "数据库来源",
    "database.relationProperty.createModal.databaseSelect.placeholder":
      "搜索数据库",
    "database.relationProperty.createModal.description":
      "关系允许连接不同数据库中的页面。",
    "database.relationProperty.createModal.header":
      "创建连接到其他数据库的关系属性",
    "database.relationProperty.createModal.helpCenterLink": "关系用法",
    "database.relationProperty.createModal.helpCenterLinkMobile": "关系用法",
    "database.relationProperty.createModal.noResults": "无结果",
    "database.relationProperty.createModal.selfRelationPrompt":
      "您选择了相同的数据库。应该将链接页面显示在哪些属性中？",
    "database.relationProperty.createModal.selfRelationPrompt.createNewPropertyOption.title":
      "创建新属性",
    "database.relationProperty.createModal.selfRelationPrompt.mobileTitle":
      "自我关系",
    "database.relationProperty.createModal.selfRelationPrompt.samePropertyOption.title":
      "使用相同属性",
    "database.relationProperty.newRelation.createNewPageLabel":
      "<medium>创建新页面</medium>{pageName}<medium>in</medium>{databaseNameWithIcon}",
    "database.relationProperty.newRelation.helpCaption": "关系和累加用法",
    "database.relationProperty.newRelation.searchInitialState":
      "要查找和链接页面，请搜索",
    "database.relationProperty.newRelation.targetDatabase":
      "{databaseWithIcon}<regular>我的搜索</regular>",
    "database.relationPropertyMenu.tooltip.addPage.message":
      "将页面添加到关系中",
    "database.relationPropertyMenu.tooltip.addPage.prompt": "输入",
    "database.relationPropertyValue.moreItems.message":
      "其他{relationMoreItemsCount}个项目",
    "database.rollupProperty.aggregate.showOriginal": "显示源",
    "database.rollupProperty.editAggregate.title": "计算",
    "database.rollupProperty.editAggregate.tooltip":
      "首先选择现有的关系和属性。",
    "database.rollupProperty.editProperty.buttonTitle": "选择要显示的属性",
    "database.rollupProperty.editProperty.title": "属性",
    "database.rollupProperty.editProperty.tooltip": "首先选择现有的关系。",
    "database.rollupProperty.editRelation.buttonTitle": "选择现有的关系",
    "database.rollupProperty.editRelation.title": "关系型",
    "database.searchPerson.placeholder": "搜索用户",
    "database.searchPersonPropertyMenuItem.noResults.message": "无结果",
    "database.searchPersonPropertyMenuItem.title": "选择人员",
    "database.searchRelation.placeholder": "搜索页面",
    "database.selectPerson.menuItem": "选择用户",
    "database.selectPropertyEditMenu.createLabel": "创建",
    "database.selectPropertyEditMenu.noResults": "找不到选项",
    "database.selectPropertyEditMenu.searchPlaceholder": "搜索选项",
    "database.selectPropertyEditMenu.selectOnlyPrompt": "选择选项",
    "database.selectPropertyEditMenu.selectOrCreatePrompt": "选择或创建选项",
    "database.selectPropertyOptionEditMenu.colorsSection": "颜色",
    "database.selectPropertyOptionEditMenu.deleteLabel": "删除",
    "database.selectPropertyOptionEditMenu.deleteModal.confirmButton": "移除",
    "database.selectPropertyOptionEditMenu.deleteModal.prompt":
      "是否确实要删除此选项？",
    "database.sortMenu.addSortButtonTitle": "添加排序",
    "database.sortMenu.deleteButtonTooltip": "删除分类规则",
    "database.sortMenu.emptyState1": "使用排序的示例：",
    "database.sortMenu.emptyState2": "按优先级整理任务",
    "database.sortMenu.emptyState3": "按创建日期显示注释",
    "database.sortMenu.emptyState4": "显示最近联系的客户",
    "database.sortMenu.mobileDeleteButtonTitle": "删除",
    "database.sortMenu.mobileMenuTitle": "排序",
    "database.sortMenu.sortFor": "排序依据",
    "database.tableHeaderCell.deleteProperty.modal.confirmButton": "删除",
    "database.tableHeaderCell.deleteProperty.modal.prompt":
      "是否确实要删除此属性？",
    "database.tableView.addRowButton": "新建",
    "database.tableView.aggregationPlaceholder": "计算",
    "database.templateList.UntitledDatabaseTitle": "无标题",
    "database.templatePicker.emptyPageTitle": "空白页",
    "database.templatePickerItem.actionMenu.delete": "删除",
    "database.templatePickerItem.actionMenu.duplicate": "克隆",
    "database.templatePickerItem.actionMenu.edit": "编辑",
    "database.templatePickerItem.actionMenu.view": "视图",
    "database.templatePickerItem.editTemplate.tooltip": "编辑此模板",
    "database.templateView.newTemplateButton": "新建模板",
    "database.templatesList.templatesFor": "模板",
    "database.timelineByMenu.dateRange": "日期范围",
    "database.timelineByMenu.endDate": "结束日期",
    "database.timelineByMenu.startDate": "开始日期",
    "database.timelineByMenu.title": "时间轴显示方式",
    "database.timelineByMenu.useSeparatePropertiesToggle":
      "使用单独的开始日期和结束日期",
    "database.timelineView.addRowButton": "新建",
    "database.timelineView.controlHeader.showTableButton.title": "查看表格",
    "database.timelineView.controlHeader.todayButton.title": "今天",
    "database.timelineView.dateProperty.defaultName": "日期",
    "database.timelineView.hideTableButton.title": "隐藏表格",
    "database.timelineView.item.addRowButton": "新建",
    "database.timelineView.mobileTimelineZoomPicker.title": "选择放大级别",
    "database.timelineView.pricingBlock.description":
      "在当前计划中，时间表视图最多只能显示{tierLimit}行。想了解更多的话，请升级一下。",
    "database.timelineView.pricingBlock.header": "在时间轴中查看更多内容",
    "database.timelineView.pricingBlock.learnMoreButton": "了解详情",
    "database.timelineView.pricingBlock.upgradeButton": "升级",
    "database.timelineView.zoomLevel.biWeek": "隔周",
    "database.timelineView.zoomLevel.day": "工作",
    "database.timelineView.zoomLevel.hours": "几个小时",
    "database.timelineView.zoomLevel.month": "月",
    "database.timelineView.zoomLevel.quarter": "分支",
    "database.timelineView.zoomLevel.quarters": "分支",
    "database.timelineView.zoomLevel.week": "州",
    "database.timelineView.zoomLevel.year": "年",
    "database.titleColumn.name": "标题",
    "database.viewHelpers.dateProperty.defaultName": "日期",
    "database.viewHelpers.selectProperty.defaultName": "状态",
    "database.viewPropertiesMenu.cardPreviewButtonTitle": "卡预览",
    "database.viewPropertiesMenu.cardSizeButtonTitle": "卡大小",
    "database.viewPropertiesMenu.coverFormat.none": "不适用",
    "database.viewPropertiesMenu.coverFormat.pageContent": "页面内容",
    "database.viewPropertiesMenu.coverFormat.pageCover": "页面封面",
    "database.viewPropertiesMenu.coverSize.large": "大",
    "database.viewPropertiesMenu.coverSize.medium": "中间",
    "database.viewPropertiesMenu.coverSize.small": "小",
    "database.viewPropertiesMenu.firstLoadLimitSetting": "在首次导入中查看",
    "database.viewPropertiesMenu.fitImageButtonTitle": "调整图像",
    "database.viewPropertiesMenu.showPages": "显示页面",
    "database.viewPropertiesMenu.timelineShowTableTitle": "查看表格",
    "databaseActions.removeSortingConfirmationDialog.prompt":
      "是否确实要删除排序？",
    "databaseActions.removeSortingConfirmationDialog.removeSortingButton.label":
      "移除",
    "databaseRelationOperators.errorMessage": "出现问题。",
    "databaseRelationOperators.mobileMenuTitle": "关系型",
    "databaseRelationOperators.noSearchResults": "无结果",
    "databaseRelationOperators.pageSelection.title": "选择页面",
    "databaseRelationOperators.searchPlaceholder": "搜索页面",
    "databaseRelationOperators.selectPlaceholder": "选择页面",
    "databaseTemplatePickerActions.duplicateTemplateFailedError.message":
      "复制模板失败。",
    "databaseViewActions.importFailedError.message": "导入失败。",
    "databaseViewActions.importingCSV.loadingMessage": "正在导入",
    "databaseViewActions.uploadingCSV.loadingMessage": "正在上载",
    "dateFormatHelpers.reminderMenuItems.atTimeOfEvent": "活动整点",
    "dateFormatHelpers.reminderMenuItems.daysBefore":
      "{numberOfDays，plural，other{{numberOfDays}天前{formattedTimeText}",
    "dateFormatHelpers.reminderMenuItems.hoursBefore":
      "{numberOfHours，plural，other{{numberOfHours}小时前}}",
    "dateFormatHelpers.reminderMenuItems.minutesBefore":
      "{numberOfMinutes，plural，other{{numberOfMinutes}分钟前}}",
    "dateFormatHelpers.reminderMenuItems.monthsBefore":
      "{numberOfMonths，plural，other{{numberOfMonths}个月前{formattedTimeText}",
    "dateFormatHelpers.reminderMenuItems.none": "无通知",
    "dateFormatHelpers.reminderMenuItems.onTheDayOfEvent":
      "同一天{formattedTimeText}",
    "dateFormatHelpers.reminderMenuItems.weeksBefore":
      "{numberOfWeeks，plural，other{{numberOfWeeks}一周前{formattedTimeText}",
    "dateFormatHelpers.reminderMenuItems.yearsBefore":
      "{numberOfYears，plural，other{{numberOfYears}年前{formattedTimeText}",
    "dateFormatHelpers.text.lastDayOfTheWeek": "上周{dayOfTheWeek}",
    "dateFormatHelpers.text.nextDayOfTheWeek": "下周{dayOfTheWeek}",
    "dateFormatHelpers.text.today": "今天",
    "dateFormatHelpers.text.tomorrow": "明天",
    "dateFormatHelpers.text.yesterday": "昨天",
    "dateHelpers.12hourTimeFormat": "12小时",
    "dateHelpers.24hourTimeFormat": "24小时",
    "dateHelpers.dateFormat.dayMonthYear": "日/月/年",
    "dateHelpers.dateFormat.explicitMonthDayYear": "月日，年",
    "dateHelpers.dateFormat.fullDate": "完整日期",
    "dateHelpers.dateFormat.monthDayYear": "月/日/年",
    "dateHelpers.dateFormat.relative": "对手",
    "dateHelpers.dateFormat.yearMonthDay": "年/月/日",
    "dateInputError.invalidDateError.tooltip": "无效日期",
    "dateInputError.invalidDateRangeError.tooltip": "无效范围",
    "dateParserHelpers.at": "时间：",
    "dateParserHelpers.day": "工作",
    "dateParserHelpers.last": "过去",
    "dateParserHelpers.me": "我",
    "dateParserHelpers.month": "月",
    "dateParserHelpers.next": "下一个",
    "dateParserHelpers.now": "现在",
    "dateParserHelpers.remind": "提醒符_通知",
    "dateParserHelpers.today": "今天",
    "dateParserHelpers.today.short": "乙",
    "dateParserHelpers.tomorrow": "明天",
    "dateParserHelpers.tomorrow.short": "呼呼",
    "dateParserHelpers.year": "年",
    "dateParserHelpers.yesterday": "昨天",
    "dateParserHelpers.yesterday.short": "呼呼",
    "datePropertyMenu.clearButton.label": "清除",
    "datePropertyMenu.dateFormatDropdownButton.label": "日期格式",
    "datePropertyMenu.formatMenu.emptyButton.label": "空",
    "datePropertyMenu.invalidDateError.tooltip": "无效日期",
    "datePropertyMenu.invalidDateOrTimeRangeError.tooltip": "无效范围",
    "datePropertyMenu.invalidTimeError.tooltip": "无效时间",
    "datePropertyMenu.learnMore.helpButton.label": "卸妆机的用法",
    "datePropertyMenu.menuItem.endDate.label": "结束日期",
    "datePropertyMenu.menuItem.format.label": "日期格式",
    "datePropertyMenu.menuItem.formatAndTimezone.label": "日期格式&时区",
    "datePropertyMenu.menuItem.includeTime.label": "包括时间",
    "datePropertyMenu.menuItem.remind.label": "利玛因德",
    "datePropertyMenu.menuItem.select.title": "选择时区",
    "datePropertyMenu.menuItem.time.label": "时区",
    "datePropertyMenu.menuItem.timeFormat.label": "时间格式",
    "datePropertyMenu.mobileDate.title": "日期",
    "datePropertyMenu.mobileDateFormatModal.title": "日期格式",
    "datePropertyMenu.mobileDoneButton.label": "完成",
    "datePropertyMenu.mobileDoneReminderButton.label": "完成",
    "datePropertyMenu.mobileRemindModal.title": "利玛因德",
    "datePropertyMenu.mobileTimezoneMenu.title": "时区",
    "datePropertyMenu.timeFormatMenu.emptyButton.label": "空",
    "datePropertyMenu.timeFormatMenu.title": "时间格式",
    "datePropertyMenu.timeSearch.placeholder": "搜索时区",
    "datePropertyMenu.timezoneMenu.noResults": "无结果",
    "datePropertyMenu.timezoneMenu.select.placeholder": "选择时区",
    "desktop.rightClickMenu.copyEmailAddress": "复制电子邮件地址",
    "desktop.rightClickMenu.copyImage": "复制图像",
    "desktop.rightClickMenu.copyImageAddress": "复制图像地址",
    "desktop.rightClickMenu.copyLink": "复制链接",
    "desktop.rightClickMenu.openLink": "打开链接",
    "desktop.searchMenuItem.searchWithGoogle.title": "使用Google搜索",
    "desktop.spellcheckMenuItem.disableSpellcheck.title": "禁用拼写检查",
    "desktop.spellcheckMenuItem.enableSpellcheck.title": "启用拼写检查",
    "desktop.textEditingMenuItem.copyAction.title": "复制",
    "desktop.textEditingMenuItem.cutAction.title": "剪切",
    "desktop.textEditingMenuItem.pasteAction.title": "粘贴",
    "desktopAppUpdater.dialog.dismissButton.label": "已确认",
    "desktopAppUpdater.moveNotionToApplicationsFolderDialog.dismissButton.label":
      "已确认",
    "desktopAppUpdater.moveNotionToApplicationsFolderDialog.prompt":
      "将Notion应用移至应用程序文件夹，以运行自动更新。",
    "desktopAppUpdater.restartDialog.message":
      "要安装更新，请退出并重新启动应用程序。",
    "desktopLogin.footer.helpCenterLink": "需要帮助吗？",
    "desktopLogin.footer.privacyAndTermsLink": "隐私和使用条款",
    "desktopLogin.loginOrSignupToSyncMessage": "登录以同步内容。",
    "desktopLogin.upgradeWarning.appOutOfDateMessage.mac":
      "Mac应用程序不是最新的。",
    "desktopLogin.upgradeWarning.appOutOfDateMessage.windows":
      "Windows应用程序不是最新的。",
    "desktopLogin.upgradeWarning.upgradeInstructions.mac":
      "下载并重新安装Mac应用程序。",
    "desktopLogin.upgradeWarning.upgradeInstructions.windows":
      "下载并重新安装Windows应用程序。",
    "desktopLogin.welcomeMessage.mac": "欢迎使用Notion",
    "desktopLogin.welcomeMessage.windows": "欢迎使用Notion",
    "developerIntegration.confirmationModal.cancelLabel": "取消",
    "developerIntegration.confirmationModal.confirmLabel": "继续",
    "developerIntegration.confirmationModal.deleteLabel": "删除",
    "developerIntegrationCard.botTagline.placeholder": "内部集成",
    "developerIntegrationCard.dropdown.delete": "删除此合并",
    "developerIntegrationCard.integrationTagline.placeholder": "公开集成",
    "developerIntegrationCard.placeholderCard.label": "创建新集成",
    "developerIntegrationForm.botToken.label": "用于内部的集成令牌",
    "developerIntegrationForm.botToken.secretName": "代币",
    "developerIntegrationForm.botToken.subtitle":
      "仅在<bold>{spaceName}</bold>工作空间中可用。要更改工作空间，请创建<developertermslink>其他集成</developertermslink>。",
    "developerIntegrationForm.clientSecret.confirmationModal.message":
      "此客户端秘密仅显示一次，并且无法再次查看。请一定在安全的地方另外记录秘密。",
    "developerIntegrationForm.clientSecret.confirmationModal.title":
      "是否显示OAuth客户端秘密？",
    "developerIntegrationForm.email.label": "支持电子邮件",
    "developerIntegrationForm.email.subtitle":
      "用于将集成相关支持电子邮件链接到集成页面和身份验证屏幕。",
    "developerIntegrationForm.icon.label": "标志",
    "developerIntegrationForm.icon.subtitle":
      "建议采用512px x 512px的PNG文件格式。",
    "developerIntegrationForm.integrationClientId.label": "OAuth客户端ID",
    "developerIntegrationForm.integrationSecret.label": "OAuth客户端秘密",
    "developerIntegrationForm.integrationSecret.secretName": "秘密",
    "developerIntegrationForm.name.label": "名称",
    "developerIntegrationForm.name.subtitle": "允许用户标识集成的名称",
    "developerIntegrationForm.privacy_policy_url.label": "隐私政策",
    "developerIntegrationForm.privacy_policy_url.subtitle":
      "用于将集成隐私策略链接到集成页面和身份验证屏幕。",
    "developerIntegrationForm.redirect_uri.label": "重定向URI",
    "developerIntegrationForm.redirect_uri.subtitle":
      "用户继续进行Notion身份验证，然后转到此路径。该路径附加了访问所需的授权码，并且协议必须存在。此路径不能包含URL片段、相对路径或通配符(任意字符符号)，也不能使用公共IP地址。",
    "developerIntegrationForm.redirect_uris.label": "重定向URI",
    "developerIntegrationForm.sectionHeader.basic": "基本信息",
    "developerIntegrationForm.sectionHeader.oauth": "OAuth域和URI",
    "developerIntegrationForm.sectionHeader.secrets": "秘密",
    "developerIntegrationForm.space.label": "要连接的工作空间",
    "developerIntegrationForm.space.subtitle":
      "选择要安装集成的工作空间。稍后，您可以升级集成以使用OAuth。",
    "developerIntegrationForm.submissionType.label": "集成类型",
    "developerIntegrationForm.tagline.label": "介绍",
    "developerIntegrationForm.tagline.subtitle": "输入集成的简单说明。",
    "developerIntegrationForm.terms_of_use_url.label": "条款和条件",
    "developerIntegrationForm.terms_of_use_url.subtitle":
      "用于将集成条款和条件链接到集成页面或身份验证屏幕。",
    "developerIntegrationForm.website_url.label": "网站或主页",
    "developerIntegrationForm.website_url.subtitle":
      "用于将集成相关网站或主页链接到集成页面和认证屏幕。",
    "developerIntegrationFormHandler.create.developerTerms":
      "提交即表示您同意Notion的<developertermslink>开发者条款</developertermslink>。",
    "developerIntegrationFormHandler.createIntegration.confirmationModal.message":
      "您将收到OAuth秘密，您必须实施OAuth以获得权限。有关详细信息，请参阅<oauthdocumentationlink>开发人员文档</oauthdocumentationlink>。",
    "developerIntegrationFormHandler.createIntegration.confirmationModal.title":
      "转为公开整合吗？",
    "developerIntegrationNotFound.subtitle.label": "此集成不存在。",
    "developerIntegrationNotFound.title.label": "未找到",
    "developerIntegrationView.subtitle.label": "查看和编辑集成信息。",
    "developerIntegrationsCreateInternal.error.invalidInput":
      "{fieldName}条目无效。",
    "developerIntegrationsCreateInternal.subtitle.label":
      "输入下面的信息，重新整合。",
    "developerIntegrationsCreateInternal.title.label": "创建新集成",
    "developerIntegrationsForm.clientIdCopied.tooltip": "完成身份复制",
    "developerIntegrationsForm.copiedId.label": "复制完成",
    "developerIntegrationsForm.copyClientId.tooltip": "复制客户端ID",
    "developerIntegrationsForm.copyId.label": "复制",
    "developerIntegrationsForm.error.missingRequired":
      "{fieldName}条目是必需的。",
    "developerIntegrationsForm.error.submission":
      "提交合并时出错。请重试，或者如果问题仍然存在，请联系您的支持团队。",
    "developerIntegrationsForm.redirectUri.typePrompt": "输入重定向URI",
    "developerIntegrationsForm.spacePicker.missingSpacesError":
      "没有工作区担任管理员。<linktonotion>创建新工作区</linktonotion>，或请求所属工作区的管理员更改访问权限。",
    "developerIntegrationsLayout.backButton.label": "我的合并列表",
    "developerIntegrationsLayout.document.title":
      "我的合并列表|Notion Developers",
    "developerIntegrationsList.addNewButton.label": "新集成",
    "developerIntegrationsList.allFilter.label": "查看全部",
    "developerIntegrationsList.internalFilter.label": "内部使用",
    "developerIntegrationsList.publicFilter.label": "公开使用",
    "developerIntegrationsList.subtitle": "创建、审阅和编辑开发信息和凭证。",
    "developerIntegrationsList.title": "我的合并列表",
    "developerIntegrationsList.viewIntegration.buttonText": "查看集成",
    "developerInternalIntegraion.integrationType.bot.caption":
      "仅在作为管理员的工作空间中可用。与这些工作空间的集成是自动安装的，不需要审查。",
    "developerInternalIntegraion.integrationType.bot.title": "内部集成",
    "developerInternalIntegraion.integrationType.integration.caption":
      "任何Notion用户都可以使用。发布到集成库可能需要审阅和验证过程。",
    "developerInternalIntegraion.integrationType.integration.title": "公开集成",
    "developerInternalIntegration.integrationType.bot.caption":
      "仅在作为管理员的工作空间中可用。与这些工作空间的集成是自动安装的，不需要审查。",
    "developerInternalIntegration.integrationType.bot.title": "内部集成",
    "developerInternalIntegration.integrationType.integration.caption":
      "任何Notion用户都可以使用。发布到集成库可能需要审阅和验证过程。",
    "developerInternalIntegration.integrationType.integration.title":
      "公开集成",
    "dialog.closeButton.label": "关闭",
    "dialog.dismissButton.label": "已确认",
    "dialog.genericErrorMessage": "发生意外错误",
    "discussion.confirmDialog.discardReply.prompt": "是否确实要删除此评论？",
    "discussion.confirmDialog.discardReplyButton.label": "删除",
    "discussion.dropZone.dropZoneMediaTitle": "上载文件",
    "discussion.mobileReplyMenu.closeButton.label": "关闭",
    "discussion.mobileReplyMenu.title": "讨论",
    "discussion.reopenDiscussion.button": "重新打开",
    "discussion.resolveDiscussion.button": "已解决",
    "discussion.showMoreCommentsButton.label":
      "{moreCommentsNumber，plural，other{点击查看更老的评论{moreCommentsNumber}条}",
    "discussion.showMoreCommentsSidebarButton.label":
      "{moreCommentsNumber，plural，other{{moreCommentsNumber}查看更多评论}}",
    "discussionInput.commentComment.button": "评论",
    "discussionInput.defaultPlaceholder.addComment": "添加评论",
    "discussionInput.saveComment.button": "保存",
    "discussionInput.sendComment.button": "传输",
    "discussionInput.uploadFile.button.tooltip": "附加文件",
    "discussionInput.uploadFile.tooManyFilesErrorMessage":
      "评论中不能上载超过{maxFiles}个文件。",
    "dragHandleButton.clickPrompt.text": "点击打开<medium>菜单</medium>",
    "dragHandleButton.dragPrompt.text": "拖动<medium>移动</medium>",
    "duplicateActions.offlineError.message": "要复制这个块，请在线连接。",
    "duplicateHelpers.copyOfTextForPageTitle": "{title}的副本",
    "duplicateHelpers.untitledPageToDuplicate": "无标题",
    "duplicatePagePopup.buttonMenuItem.logoutButton.label": "注销({email})",
    "duplicatePagePopup.choooseWorkspaceMobileMenu.title": "选择工作空间",
    "duplicatePagePopup.chooseWorkspace.menuItem.title": "选择工作空间",
    "duplicateRateLimitError.message": "已达到块复制限制。请稍后再试。",
    "edit.blockDeletedEdit.defaultLabel": "已删除",
    "edit.blockDeletedEdit.factoryLabel": "已删除",
    "edit.bookmarkBlockProperty.label": "书签",
    "edit.bookmarkBlockPropertyChanged.label": "书签",
    "edit.bookmarkBlockPropertyDeleted.label": "书签",
    "edit.calloutBlock.label": "注解",
    "edit.calloutBlockChanged.label": "注解",
    "edit.calloutBlockDeleted.label": "注解",
    "edit.codeBlockChanged.label": "代码",
    "edit.codeBlockWithLanguageChanged.label": "代码-{codeLanguage}",
    "edit.collectionBlock.untitled": "无标题",
    "edit.deletedPermissionGroup.label": "已删除的组",
    "edit.descriptionPropertyChanged.label": "说明",
    "edit.descriptionPropertyCreated.label": "说明",
    "edit.equationBlock.label": "数学公式",
    "edit.equationBlockChanged.label": "数学公式",
    "edit.equationBlockDeleted.label": "数学公式",
    "edit.googleDriveFile.label": "Google Drive文件",
    "edit.imageBlockChanged.updatedTitle": "已更新",
    "edit.pageBlock.untitled": "无标题",
    "edit.permissionRole.canEdit.label": "允许编辑",
    "edit.permissionRole.commentOnly.label": "仅限评论",
    "edit.permissionRole.fullAccess.label": "完全允许",
    "edit.permissionRole.none.label": "无法访问",
    "edit.permissionRole.readOnly.label": "只读",
    "edit.publishToWebPermissionTarget.label": "已发布的链接",
    "edit.quoteBlock.label": "引语",
    "edit.quoteBlockChanged.label": "引语",
    "edit.quoteBlockDeleted.label": "引语",
    "edit.templateButtonBlock.label": "“模板”按钮",
    "edit.templateButtonBlockChanged.label": "“模板”按钮",
    "edit.templateButtonBlockDeleted.label": "“模板”按钮",
    "edit.unknownAuthor.label": "作者微商",
    "edit.unknownAuthorCommentDiff.label": "作者微商",
    "edit.unknownSpacePermissionTarget.label": "未知",
    "editFormatDiff.pageIcon.label": "页面图标",
    "editProperty.emptyProperty.label": "空",
    "editProperty.relationEditedProperties.moreCount.label":
      "其他{leftoverCountNumber}根",
    "editPropertyButtonPopup.customizePage.label": "自定义页面",
    "editPropertyButtonPopup.duplicatePropertyNameError":
      "{propertyName}属性已存在于此数据库中。",
    "emailActivity.accessRequested.header":
      "请求访问{numberOfAuthors、plural、other{{authorOrAuthors}{pageName}",
    "emailActivity.blockEdited.header":
      "您已经编辑了{numberOfAuthors、plural、other{{authorOrAuthors}{pageTitle}页面}",
    "emailActivity.collectionCreated.header":
      "已创建{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}",
    "emailActivity.collectionEdited.header":
      "已编辑{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}",
    "emailActivity.collectionPropertyCreated.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{collectionTitle}{collectionPropertyTitle}已创建属性{collectionPropertyTitle}}",
    "emailActivity.collectionPropertyDeleted.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}已从{collectionPropertyTitle}中删除了{collectionPropertyTitle}属性。}",
    "emailActivity.collectionPropertyEdited.header":
      "已在{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}}编辑了{collectionPropertyTitle}属性。}",
    "emailActivity.collectionRowCreated.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{pageTitle}页已创建。}}",
    "emailActivity.collectionRowDeleted.header":
      "已删除{numberOfAuthors、plural、other{{authorOrAuthors}{pageTitle}页面}",
    "emailActivity.collectionViewCreated.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}从{collectionViewTitle}生成了{collectionViewTitle}视图。}",
    "emailActivity.collectionViewDeleted.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}已从{collectionViewTitle}中删除了{collectionViewTitle}视图。}",
    "emailActivity.collectionViewEdited.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}{collectionTitle}已在{collectionViewTitle}中编辑了{collectionViewTitle}视图。}",
    "emailActivity.commentActivity.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{blockName}已评论。}}",
    "emailActivity.emailEdited.header":
      "已将{numberOfAuthors、plural、other{{authorOrAuthors}电子邮件从{oldEmail}更改为{newEmail}",
    "emailActivity.mentionActivity.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{pageName}中我精神抖擞。}}",
    "emailActivity.pageLocked.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{blockTitle}块已锁定。}}",
    "emailActivity.pageUnlocked.header":
      "已解锁{numberOfAuthors、plural、other{{authorOrAuthors}{blockTitle}块。}}",
    "emailActivity.permissionsActivity.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}{pageOrSpaceName}。}}",
    "emailActivity.reminderInActivity.header": "{pageTitle}有卸妆器",
    "emailActivity.restorePermissionsForActivity.header":
      "已恢复对{numberOfAuthors、plural、other{{authorOrAuthors}{pageOrSpaceName}的继承访问权限。}}",
    "emailActivity.restrictPermissionsForActivity.header":
      "已限制访问{numberOfAuthors、plural、other{{authorOrAuthors}{pageOrSpaceName}",
    "emailActivity.topLevelBlockPrivateCreated.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{pageTitle}已创建个人主页。}}",
    "emailActivity.topLevelBlockPrivateDeleted.header":
      "已删除{numberOfAuthors、plural、other{{authorOrAuthors}{pageTitle}个人主页。}}",
    "emailActivity.topLevelBlockWorkspaceCreated.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{pageTitle}已创建工作空间页面。}}",
    "emailActivity.topLevelBlockWorkspaceDeleted.header":
      "已删除{numberOfAuthors、plural、other{{authorOrAuthors}{pageTitle}工作空间页面。}}",
    "emailActivity.untitledDatabase.placeholder": "无标题",
    "emailActivity.updatedPermissionsForActivity.header":
      "已更新{numberOfAuthors、plural、other{{authorOrAuthors}{pageOrSpaceName}的权限}}",
    "emailActivity.userInvitedActivityGroupId.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}已将我添加到{groupName}组}}",
    "emailActivity.userInvitedActivityGroupIdByBot.header":
      "已添加到组{groupName}。",
    "emailActivity.userInvitedActivityNavigableBlock.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}邀请我到{blockName}块}",
    "emailActivity.userInvitedActivityNavigableBlockByBot.header":
      "已被邀请加入{blockName}。",
    "emailActivity.userInvitedActivityOtherInvite.header":
      "{numberOfAuthors、plural、other{{authorOrAuthors}邀请我加入{spaceName}",
    "emailActivity.userInvitedActivityOtherInviteByBot.header":
      "已被邀请加入{spaceName}。",
    "emailActivitySection.authorPhrase.forMoreThanTwoAuthors.label":
      "{numberOfOtherAuthors，plural，other{<b>{firstAuthor}</b>，<b>{secondAuthor}</b>您之外{numberOfOtherAuthors}名称}}",
    "emailActivitySection.authorPhrase.forNoAuthors.label": "没人",
    "emailActivitySection.authorPhrase.forOneAuthor.label": "<b>{author}</b>",
    "emailActivitySection.authorPhrase.forTwoAuthors.label":
      "<b>{firstAuthor}</b>，<b>{secondAuthor}</b>",
    "emailBase.footer.notionDescription":
      "{notionProduct}、任务、wiki、数据库{br}具有使用所需的全部功能的工作空间",
    "emailBase.tooManyNotifications.message":
      "通知太多吗？如果有改进的方法，请告诉我意见。",
    "emailBase.unsubscribeFromEmails.prompt": "取消订阅",
    "emailChangeNotificationEmail.emailChanged.headline":
      "您更改了Notion登录电子邮件。",
    "emailChangeNotificationEmail.emailChanged.message":
      "现在，您可以使用新的{emailAddress}电子邮件地址登录Notion。",
    "emailChangeNotificationEmail.emailChanged.subjectLine":
      "登录电子邮件已更改。",
    "emailChangeNotificationEmail.emailChanged.text":
      "已将Notion登录电子邮件更改为{newEmail}。如果您没有更改，请发送电子邮件至team@makenotion.com。",
    "emailChangeNotificationEmail.unintendedChange.message":
      "如果您没有更改，请发送电子邮件至team@makenotion.com。",
    "emailChangeSettings.downgradeEducationPlan.warning.message":
      "如果更改电子邮件地址，则工作区中的免费培训计划可能会降级为默认免费计划。数据不会丢失，但您需要升级才能再次使用付费功能。对此有任何疑问吗？<sendmessagelink>给我们发信息</sendmessagelink>。",
    "emailChangeVerifyEmail.contentsTitle": "更改电子邮件身份验证",
    "emailChangeVerifyEmail.copyPasteCode.label":
      "复制并粘贴此代码并验证此电子邮件地址。",
    "emailChangeVerifyEmail.didNotChange.message":
      "如果您没有请求更改Notion帐户电子邮件地址，则忽略此电子邮件是安全的。",
    "emailChangeVerifyEmail.subjectLine":
      "您请求的电子邮件更改验证码为{temporaryPassword}。",
    "emailEdit.blockDeletedEdit.defaultLabel": "已删除",
    "emailEdit.blockDeletedEdit.factoryLabel": "已删除",
    "emailEdit.bookmarkBlock.label": "书签",
    "emailEdit.bookmarkBlockChanged.label": "书签",
    "emailEdit.bookmarkBlockDeleted.label": "书签",
    "emailEdit.calloutBlock.label": "注解",
    "emailEdit.calloutBlockChanged.label": "注解",
    "emailEdit.calloutBlockDeleted.label": "注解",
    "emailEdit.codeBlockChanged.label": "代码",
    "emailEdit.codeBlockWithLanguageChanged.label": "代码-{codeLanguage}",
    "emailEdit.collectionBlock.untitled": "无标题",
    "emailEdit.deletedPermissionGroup.label": "已删除的组",
    "emailEdit.descriptionPropertyChanged.label": "说明",
    "emailEdit.descriptionPropertyCreated.label": "说明",
    "emailEdit.equationBlock.label": "数学公式",
    "emailEdit.equationBlockChanged.label": "数学公式",
    "emailEdit.equationBlockDeleted.label": "数学公式",
    "emailEdit.googleDriveFile.label": "Google Drive文件",
    "emailEdit.pageBlock.untitled": "无标题",
    "emailEdit.permissionRole.canEdit.label": "允许编辑",
    "emailEdit.permissionRole.commentOnly.label": "仅限评论",
    "emailEdit.permissionRole.fullAccess.label": "完全允许",
    "emailEdit.permissionRole.none.label": "无法访问",
    "emailEdit.permissionRole.readOnly.label": "只读",
    "emailEdit.publishToWebPermissionTarget.label": "在网络上共享：",
    "emailEdit.quoteBlock.label": "引语",
    "emailEdit.quoteBlockChanged.label": "引语",
    "emailEdit.quoteBlockDeleted.label": "引语",
    "emailEdit.templateButton.label": "“模板”按钮",
    "emailEdit.templateButtonChanged.label": "“模板”按钮",
    "emailEdit.templateButtonDeleted.label": "“模板”按钮",
    "emailEdit.unknownAuthor.label": "作者微商",
    "emailEdit.unknownAuthorCommentDiff.label": "作者微商",
    "emailEdit.unknownSpacePermissionTarget.label": "未知",
    "emailEditFormatDiff.pageIcon.label": "页面图标",
    "emailEditProperty.emptyProperty.label": "空",
    "emailEditProperty.relationEditedProperties.moreCount.label":
      "{leftoverCountNumber}剩下{leftoverCountNumber}",
    "emailErrors.emailUnreachable.message":
      "无法联系您提供的电子邮件地址。再次尝试其他电子邮件。",
    "emailErrors.incorrectPassword.message": "密码无效。",
    "emailErrors.invalidEmailAddress.message": "电子邮件无效。",
    "emailErrors.invalidEmailEntered.message": "请输入有效的电子邮件。",
    "emailErrors.invalidOrExpiredPassword.message":
      "登录代码无效。请再试一次。",
    "emailErrors.noExistingAccountForEmailAddress.message":
      "没有通过此电子邮件注册的帐户。",
    "emailErrors.userAlreadyExists.message": "使用此电子邮件的用户已经存在。",
    "embedBlock.captionForLink.button": "标题",
    "embedBlock.embedAnything.placeholder":
      "嵌入任何内容(PDF、Google Docs、Google Maps、Spotify.)",
    "embedBlock.embedButton.label": "链接嵌入",
    "embedBlock.embedTab.title": "嵌入",
    "embedBlock.invalidLinkError.message": "请输入有效的链接。",
    "embedBlock.linkPrompt.caption":
      "兼容PDF、Google Drive、Google Maps和CodePen等链接。",
    "embedBlock.orginalLink.button": "原稿",
    "embedBlock.originalLink.button": "原稿",
    "embedBlock.pastePrompt": "粘贴URL(https://.)",
    "embedBlock.viewOriginalLink.button.label": "查看源",
    "embedError.audio.notFound": "找不到此音频。",
    "embedError.audio.offline": "请在线查看此音频。",
    "embedError.audio.permissionDenied": "权限被拒绝。",
    "embedError.audio.serverError": "无法加载此音频。",
    "embedError.audio.unknown": "无法加载此音频。",
    "embedError.audio.unsupportedContentType":
      "此音频格式({extension})无法在此设备上播放。",
    "embedError.embed.notFound": "找不到这个嵌入。",
    "embedError.embed.offline": "在线查看此嵌入。",
    "embedError.embed.permissionDenied": "权限被拒绝。",
    "embedError.embed.serverError": "无法加载此嵌入。",
    "embedError.embed.unknown": "无法加载此嵌入。",
    "embedError.embed.unsupportedContentType":
      "此嵌入格式({extension})无法在此设备上播放。",
    "embedError.extension.unknown": "未知",
    "embedError.family.audio": "音频",
    "embedError.family.embed": "包括",
    "embedError.family.file": "文件",
    "embedError.family.image": "图像",
    "embedError.family.video": "视频",
    "embedError.file.notFound": "找不到此文件。",
    "embedError.file.offline": "联机查看此文件。",
    "embedError.file.permissionDenied": "权限被拒绝。",
    "embedError.file.serverError": "无法加载此文件。",
    "embedError.file.unknown": "无法加载此文件。",
    "embedError.file.unsupportedContentType":
      "此文件格式({extension})无法在此设备上播放。",
    "embedError.hostnameAndStatusCode": "{hostname}(错误{statusCode})",
    "embedError.image.notFound": "找不到此图像。",
    "embedError.image.offline": "在线查看此图像。",
    "embedError.image.permissionDenied": "权限被拒绝。",
    "embedError.image.serverError": "无法加载此图像。",
    "embedError.image.unknown": "无法加载此图像。",
    "embedError.image.unsupportedContentType":
      "此图像格式({extension})无法在此设备上播放。",
    "embedError.learnMore": "了解详情",
    "embedError.notFound": "此{family}查找失败。",
    "embedError.offline": "在线连接，执行{family}视图。",
    "embedError.permissionDenied": "权限被拒绝。",
    "embedError.serverError": "{family}加载失败。",
    "embedError.unknown": "{family}加载失败。",
    "embedError.unsupportedContentType":
      "此{family}格式({extension})不能在此设备上播放。",
    "embedError.video.notFound": "找不到这个视频。",
    "embedError.video.offline": "在线观看此视频。",
    "embedError.video.permissionDenied": "权限被拒绝。",
    "embedError.video.serverError": "无法加载此视频。",
    "embedError.video.unknown": "无法加载此视频。",
    "embedError.video.unsupportedContentType":
      "此视频格式({extension})无法在此设备上播放。",
    "embedMenu.action.abstract": "Abstract项目嵌入",
    "embedMenu.action.audio": "音频嵌入",
    "embedMenu.action.codepen": "CodePen嵌入",
    "embedMenu.action.createEmbed": "创建嵌入",
    "embedMenu.action.drive": "Google Drive嵌入",
    "embedMenu.action.excalidraw": "Excalidraw嵌入",
    "embedMenu.action.figma": "Figma嵌入",
    "embedMenu.action.framer": "Framer原型嵌入",
    "embedMenu.action.gist": "GitHub Gist嵌入",
    "embedMenu.action.image": "图像嵌入",
    "embedMenu.action.invision": "Invision项目嵌入",
    "embedMenu.action.loom": "Loom嵌入",
    "embedMenu.action.maps": "Google Map嵌入",
    "embedMenu.action.miro": "Miro板嵌入",
    "embedMenu.action.pdf": "PDF嵌入",
    "embedMenu.action.replit": "Repl嵌入",
    "embedMenu.action.sketch": "嵌入Sketch文档",
    "embedMenu.action.tweet": "Tweet嵌入",
    "embedMenu.action.typeform": "类型嵌入",
    "embedMenu.action.video": "视频嵌入",
    "embedMenu.action.whimsical": "Whimsical板嵌入",
    "embedMenu.actions.createBookmark.title": "创建书签",
    "embedMenu.actions.createLinkedDatabase.title": "创建链接数据库",
    "embedMenu.actions.createTransclusion.title": "粘贴并同步",
    "embedMenu.actions.dismiss.title": "解除",
    "embedMenu.actions.linkToPage.title": "指向页面的链接",
    "embedMenu.actions.mentionPage.title": "页面简介",
    "emojiPicker.noResults.message": "无结果",
    "emojiPicker.section.activity": "活动",
    "emojiPicker.section.animals": "动物和自然",
    "emojiPicker.section.callout": "注解",
    "emojiPicker.section.flags": "国旗",
    "emojiPicker.section.food": "食品和饮料",
    "emojiPicker.section.objects": "事物",
    "emojiPicker.section.people": "人",
    "emojiPicker.section.recent": "最近使用的项目",
    "emojiPicker.section.symbols": "符号",
    "emojiPicker.section.travel": "旅行和地点",
    emptyPageTitle: "无标题",
    "enhancedSidebarFeatureTour.pinPages.actionButton": "了解详情",
    "enhancedSidebarFeatureTour.pinPages.actionText": "了解详情",
    "enhancedSidebarFeatureTour.pinPages.primaryText": "分享页面请在这里整理",
    "enhancedSidebarFeatureTour.pinPages.secondaryText":
      "将经常查看的页面固定在侧边栏",
    "enterpriseContactModal.additionalFeedback.placeholder":
      "想进一步了解什么？",
    "enterpriseContactModal.initial.1000PlusLabel": "超过1，001人",
    "enterpriseContactModal.initial.101_1000Label": "101人~1，000人",
    "enterpriseContactModal.initial.1_100Label": "1人~100人",
    "enterpriseContactModal.initial.caption":
      "我们从一开始就与您合作，帮助您找到最适合您的计划。",
    "enterpriseContactModal.initial.companySizeLabel": "公司规模",
    "enterpriseContactModal.initial.emailLabel": "商务电子邮件",
    "enterpriseContactModal.initial.header": "联系销售团队",
    "enterpriseContactModal.initial.nameLabel": "名称",
    "enterpriseContactModal.initial.questionLabel": "问题解答",
    "enterpriseContactModal.initial.sendLabel": "发送",
    "enterpriseContactModal.selectQuestion.label": "选择查询内容",
    "enterpriseContactModal.thanks.caption":
      "您询问的内容已经收到。我们将通过电子邮件与您联系。",
    "enterpriseContactModal.yourQuestion.title": "问题解答",
    "enterpriseContactModalQuestionSelect.question.live_demo":
      "我想安排现场演示。",
    "enterpriseContactModalQuestionSelect.question.other": "其他",
    "enterpriseContactModalQuestionSelect.question.plan_help":
      "我需要帮忙选择套餐。",
    "enterpriseContactModalQuestionSelect.question.setup_trial":
      "我想体验一下企业计划。",
    "equationBlock.actions.tooltip": "重命名、删除等.",
    "equationBlock.empty.placeholder": "添加TeX数学公式",
    "equationInput.inputError.label": "数学公式无效：",
    "equationInput.inputError.learnMore": "了解详情",
    "equationInput.submitButton.label": "完成",
    "evernoteActions.authenticatingWithEvernote.loadingMessage":
      "正在用Evernote验证.",
    "evernoteActions.loginPopupModal.title": "印象笔记登录",
    "evernoteImportOption.actionsMenu.connectAnotherAccount": "连接其他帐户",
    "evernoteImportOption.actionsMenu.import": "导入",
    "evernoteImportOption.actionsMenu.learnMore": "查看更多",
    "evernoteImportOption.actionsMenu.removeIntegration": "移除",
    "evernoteImportOption.caption.getCredit": "运行导入后，您将获得US$5积分。",
    "evernoteImportOption.search.noResultsPlaceholder": "无笔记本电脑",
    "evernoteImportOption.search.placeholder": "正在搜索笔记本电脑.",
    "excalidrawBlock.embeds.button.label": "Excalidraw嵌入",
    "excalidrawBlock.embeds.caption": "与Excalidraw白板兼容。",
    "excalidrawBlock.placeholder": "Excalidraw嵌入",
    "export.csvHeader.email": "电子邮件",
    "export.csvHeader.firstName": "名称",
    "export.csvHeader.lastName": "城堡",
    "export.csvHeader.permissionGroups": "“权限”组",
    "export.csvHeader.role": "角色",
    "export.linkToPage.untitledPagePlaceholder": "无标题",
    "export.markdown.untitledDatabase.placeholder": "无标题",
    "export.userPermissionsRole.admin.message": "管理员",
    "export.userPermissionsRole.guest.message": "房客",
    "export.userPermissionsRole.member.message": "成员",
    "exportActions.exportFailedError.message": "导出失败。",
    "exportActions.exporting.loadingMessage": "正在进行导出",
    "exportEmail.downloadLinkPrompt":
      "<downloadlink>点击这里下载。</downloadlink>",
    "exportEmail.exportEmailText": "{downloadURL}已准备好导出Notion。",
    "exportEmail.exportReady.text": "Notion导出已准备就绪。",
    "exportEmail.exportSubjectLine": "准备导出Notion",
    "exportHelpers.unknownFilePlaceholderTitle": "未知文件",
    "exportHelpers.untitledPagePlaceholderTitle": "无标题",
    "exportModal.cancelButton.label": "取消",
    "exportModal.closeButton.label": "关闭",
    "exportModal.exportButton.label": "导出",
    "exportModal.exportFormat.description": "导出格式",
    "exportModal.exportFormatButton.html.label": "HTML",
    "exportModal.exportFormatButton.markdownAndCSV.label": "Markdown&CSV",
    "exportModal.exportFormatButton.pdf.label": "PDF",
    "exportModal.includeContentTypes.everything.label": "所有内容",
    "exportModal.includeContentTypes.no_files.label": "排除文件和图像",
    "exportModal.includeContents.description": "要包括的内容",
    "exportModal.includeSubpages.label": "包含子页",
    "exportModal.offlineMessage.description": "在线移动并运行导入。",
    "exportModal.pageFormat.description": "页面格式",
    "exportModal.pageFormatButton.a3.label": "A3",
    "exportModal.pageFormatButton.a4.label": "A4",
    "exportModal.pageFormatButton.legal.label": "Legal纸张",
    "exportModal.pageFormatButton.letter.label": "Letter纸",
    "exportModal.pageFormatButton.tabloid.label": "Tabloid纸张",
    "exportModal.pageScale.description": "大小比例",
    "exportModal.pageScale.invalidScaleError":
      "大小比只能是10到200之间的数字。",
    "exportModal.pdfSubpageUpgradeTooltip.caption":
      "生成以PDF格式包含当前页面的所有子页面的ZIP文件。",
    "exportModal.pdfSubpageUpgradeTooltip.title":
      "升级以在PDF导出中包括子页面。",
    "exportModal.title": "导出",
    "exportModal.workspacePdfUpgradeTooltip.caption":
      "生成ZIP文件，该文件以PDF格式包含工作区中的所有页面。",
    "exportModal.workspacePdfUpgradeTooltip.title":
      "要将工作空间导出为PDF，请升级。",
    "exportPreview.error.message": "错误",
    "exportPreview.loading.message": "正在加载.",
    "exportProgressDialog.closeButton.label": "关闭",
    "exportProgressDialog.emailMessage":
      "我们还会向您发送包含下载链接的电子邮件。",
    "exportProgressDialog.exportStartedMessage": "正在进行导出.",
    "exportProgressDialog.exportedPagesMessage":
      "{pagesExported，plural，other{{pagesExported}导出页面}}",
    "exportRenderer.titleOfBlock.untitled": "无标题",
    "exportRenderer.titleOfDatabase.untitled": "无标题数据库",
    "exportRenderer.titleOfNewProperty.property": "属性",
    "factoryBlock.buttonName.subtitle": "这个按钮的名称是什么？",
    "factoryBlock.buttonName.title": "按钮名称",
    "factoryBlock.configureButton.label": "配置模板按钮",
    "factoryBlock.configureMenu.closeButton.label": "关闭",
    "factoryBlock.configureTemplate.button.label": "配置模板",
    "factoryBlock.emptyTemplate.placeholder": "空。把积木放在这里..。",
    "factoryBlock.moreActions.button.label": "其他操作.",
    "factoryBlock.newItem.button.label": "添加新项",
    "factoryBlock.newItem.button.placeholder": "添加新项",
    "factoryBlock.templateArea.subtitle.":
      "每次点击按钮时，把要复制的块放在这里。",
    "factoryBlock.templateArea.title": "模板",
    "faq.addingAndRemovingMembers.answer":
      "<p>添加或移除成员时，无论是月度套餐还是年度计划，均可能会按月计费。在添加成员时，将根据添加时保留的开单周期的百分比计算计算金额。如果您删除了成员，我们将以同样的方式在结算后获得积分。</p>",
    "faq.addingAndRemovingMembers.question": "添加或删除成员后，费用如何反映？",
    "faq.advancedPermissions.answer":
      "如果您正在使用<p>团队套餐免费试用版，则页面可授予的访问级别包括“全部允许”、“允许阅读”或“允许评论”。其他用户可以访问页面，仅限于授予的访问级别。“全部允许”允许其他用户编辑、分享和评论页面。</p><p>对于付费团队和企业套餐，您可以授予其他用户“允许编辑”权限。该用户可以编辑页面并留下评论，但不能与其他用户共享页面。有助于防止内容泄露到团队之外。</p><p><contactsales>欲了解更多信息，请联系销售团队</contactsales</p>",
    "faq.advancedPermissions.question":
      "为付费团队和企业计划提供哪些高级权限？",
    "faq.alreadyHadFreeAccount.answer":
      "<p>传统的Notion免费套餐有1，000个区块限制。</p><p>还有其他更改。</p><ul><li>与其他用户共享页面更加简单。但是，新的免费套餐没有块限制，您可以添加任意数量的内容！</p><p>其他更改。您只需发送链接，而不是邀请您作为成员或来宾。</li><li>最多可邀请5位来宾加入工作区，共同协作。要邀请更多的房客，您需要升级到个人专业版套餐。</li/><p><pricinglink>notion.so/pricing</pricinglink>，了解有关Notion的套餐的更多信息。</p>",
    "faq.alreadyHadFreeAccount.question": "已经免费使用Notion。有什么变化？",
    "faq.alreadyPayingForPersonal.answer":
      "<p>自动升级至新的个人专业版套餐，无需额外付费！个人套餐除了提供免费个人套餐的功能外，还提供以下功能：</p><ul><li>无限制上传文件(免费套餐:限制5MB)</li><li>无限制添加来宾(免费套餐:限制5位房客)</li><li>访问最近30天的版本记录</li><li>首先客户支持</li></ul><p>可以随时改回免费个人套餐。</p>",
    "faq.alreadyPayingForPersonal.question":
      "如果您使用的是传统的付费个人套餐，会发生什么情况？",
    "faq.alreadyPayingForPersonalAccessToFreeEducation.answer":
      "<p>是的，有关详细的升级说明，请访问<helpcenterlink>客服中心</helpcenterlink>。</p>",
    "faq.alreadyPayingForPersonalAccessToFreeEducation.question":
      "我已经使用个人套餐了。那也可以免费使用吗？",
    "faq.cancelPlan.answer":
      "在取消订阅之前，<p>Notion的收费计划将自动续订。要取消订阅，请在桌面上访问Notion，然后在左侧侧栏中的“设置和成员”中单击“定价”，然后选择“降级”。取消后，您仍然可以使用所有现有的收费计划功能，直到您的计费周期结束。</p><p><billingandpaymentlink>有关索赔和付款的详细信息，请在此处查看</billingandpaymentlink></p></p><billingandpaymentlink></p><",
    "faq.cancelPlan.question": "如何取消收费计划？",
    "faq.changePaymentMethod.answer":
      "<p>您可以随时在账单设置中更改付款方式。</p>",
    "faq.changePaymentMethod.question": "可以变更结算方法吗？",
    "faq.changePlans.answer":
      "<p>定价升级或降级与添加或删除成员类似。根据计划更改时剩余的计费周期的百分比，将收取金额或赚取积分。</p>",
    "faq.changePlans.question": "如果更改计划，会发生什么情况？",
    "faq.confluenceImport.answer":
      "<p>复制整个Confluence工作空间，只需点击几下即可导入Notion！请按照我们的<guidelink>导入指南</guidelink>上的说明。</p>",
    "faq.confluenceImport.question": "如何将Confluence工作空间导入Notion？",
    "faq.confluenceImportSizeLimit.answer":
      "在<p>Confluence中，导入一次限制为2.5GB。如果达到限制，可以使用Confluence的<bold>自定义导出</bold>选项选择要导出的页面，并省略带有大量附件的页面。</p>",
    "faq.confluenceImportSizeLimit.question": "导入有容量限制吗？",
    "faq.confluenceStorageLimit.answer":
      "<p>没有。导入的块不在限制范围内。但是，在导入的页面内，之后生成的块都像往常一样在限制中包含<italic></italic>。</p>",
    "faq.confluenceStorageLimit.question":
      "导入的内容是否包含在团队套餐试用版的存储容量上限内？",
    "faq.deleteBlocks.answer":
      "<p>当然！和手机或电脑的存储空间一样。删除块后，您可以添加相应的新块。</p>",
    "faq.deleteBlocks.question": "我可以删除块来存储吗？",
    "faq.educationPlanGraduation.question": "毕业后会发生什么？",
    "faq.educationplanGraduation.answer":
      "只要<p>Notion帐户与学校电子邮件地址相关联，即可继续使用免费学生帐户。当然，你毕业后也可以更改你的电邮地址，改为收费收费计划。请继续使用Notion↓</p>",
    "faq.eligibleForEducation.answer":
      "<p>资格要求如下：</p><ol><li>如果您是公认的大学或综合学院的学生或教育者</li><li>拥有学校电子邮件地址(目前不通过学生证或其他文件进行确认)</li></ol><p>以下情况下的资格要：不满足案件。</p><ol><li>如果您是K-12学生或教师。但是，您可以免费使用可无限存储空间的个人套餐！欲了解更多信息，请访问<pricinglink>收费页面</pricinglink>。</li><li>Notion帐户与个人电子邮件地址(如gmail.com或outlook.com)关联时</li></ol>",
    "faq.eligibleForEducation.question": "免费使用个人套餐有哪些资格要求？",
    "faq.freePlanForEducation.answer":
      "<p>学生和教育工作者可免费使用新的个人专业套餐(原价为每月$5)！使用传统免费教育计划的用户已经自动升级。个人专业版套餐除了支持所有免费功能外，还支持以下功能：</p><ul><li>向所有页面添加无限来宾</li><li>无限上传文件(免费套餐:5MB限制)</li><li>最近30天版本历史访问</li><li>优先客户支持</li<li><studentslink>notion.so/students</studentslink>或<educatorslink>notion.so/educators</educatorslink</li>了解详情。</ul>",
    "faq.freePlanForEducation.question": "学生和教育工作者的免费套餐是什么？",
    "faq.freeVsPersonalAndTeam.answer":
      "<p>最大的区别是协作方式。</p><p>免费个人套餐设计为个人使用，但最多可以邀请5位来宾。邀请朋友、家人和其他朋友在任意页面上私下工作。您还可以公开共享页面，并允许评论或编辑。在右上角的“共享”菜单中，打开“在网络上共享”，然后打开“允许编辑”。任何有链接的Notion用户都可以编辑页面。</p><p>使用个人专业版计划，您可以无限次邀请房客进行私人协作。例如，如果您是个人运营商，您可以邀请您的客户来反馈您的工作。</p><p>团队计划允许您将成员添加到工作区中，共享相同的内容并协作。此外，它还拥有更多的权限设置和管理员功能，帮助您在安全的环境中与团队成员一起工作。如需了解详情，请参阅我们的计划比较图表。</p>",
    "faq.freeVsPersonalAndTeam.question":
      "免费个人套餐与个人套餐或团队套餐有何不同？",
    "faq.howCanTeamTryForFree.answer":
      "<p>如果您想在加入团队计划之前轻松免费使用Notion，请遵循以下方法。</p><ul><li>创建Notion工作空间并选择团队类型。</li><li>然后您可以免费使用1，000个有块限制的团队计划。达到街区限制后，你可以升级套餐。</li></ul></li></li></li>/ul>",
    "faq.howCanTeamTryForFree.question": "如何免费使用Notion团队套餐？",
    "faq.howToApplyCredit.answer":
      "<p>要应用信用，您必须首先升级到付费套餐。在升级过程中，您可以全部或部分应用“My Accounts(我的帐户)”中的积分。</p>",
    "faq.howToApplyCredit.question": "如何将积分应用于工作区？",
    "faq.howToApplyForStartupCredit.answer":
      "<p><formlink>填写此表单</formlink>即可。容易吧？</p>",
    "faq.howToApplyForStartupCredit.question": "如何申请获得US$1，000积分？",
    "faq.howToEarnCredit.answer":
      "<p>如果您在多个设备上使用Notion并体验新功能，您将获得积分。在“设置与成员”的“赚取信用”选项卡中了解更多信息。</p>",
    "faq.howToEarnCredit.question": "如何获得积分？",
    "faq.importStorageLimit.answer":
      "<p>导入生成的内容不会影响工作区中的存储空间。旨在帮助Notion用户顺利迁移。</p>",
    "faq.importStorageLimit.question":
      "如果您使用的是团队套餐免费试用版，其他应用带来的内容是否会影响区块限制？",
    "faq.mandatoryRefund.answer":
      "<p>如果您居住在欧盟、英国或其他适用强制性退款政策的地区，您甚至可以在72小时后退还您的月度订阅费。例如，欧盟的客户可以在14天内(而不是购买后72小时)全额退还每月订阅费。</p><p>请在应用内查询退款请求，或发送电子邮件至team@makenotion.com。如果您居住在适用强制性退款政策的地区，请告知我们，我们将竭诚为您提供帮助。</p>",
    "faq.mandatoryRefund.question":
      "如果居住在适用强制性退款政策的地区，会发生什么情况？",
    "faq.maximumEarnedCredit.answer":
      "<p>是的，最多可以累积{maximumAmountInDollars}的积分。</p>",
    "faq.maximumEarnedCredit.question": "有可累积的最大积分金额吗？",
    "faq.monthlyAndYearlyBilling.answer":
      "<p>当然！每月付款和年度付款均可！与每月套餐相比，年度套餐便宜20%。例如，对于团队计划，每年结算时每个成员收取1个月US$8，每月结算时每个成员每月收取10美元。</p>",
    "faq.monthlyAndYearlyBilling.question": "有月度和年度付款选项吗？",
    "faq.multipleTeams.answer":
      "<p>当然！您可以使用相同的电子邮件地址创建或参与多个工作区。但是，您需要按工作空间付费，因此升级也必须单独进行。</p>",
    "faq.multipleTeams.question": "Notion可以加入多个团队吗？",
    "faq.overGuestLimitInFreePlan.answer":
      "<p>如果您想添加更多来宾，您可以升级至您的个人专业版计划，并添加无限数量的房客。如果您总是与同一个人协作，请升级到团队计划。您还可以在“设置和成员”中查看和删除非活动来宾。</p>",
    "faq.overGuestLimitInFreePlan.question":
      "如果超出了个人套餐中的房客限制，会发生什么情况？",
    "faq.overStorageLimitInFreePlan.answer":
      "<p>超出块限制时，可以读取、编辑和配置现有内容块，但不能添加新的内容块。</p><p>但删除现有内容块可释放块存储空间。</p>",
    "faq.overStorageLimitInFreePlan.question":
      "如果超出团队套餐免费试用版的区块限制，会发生什么情况？",
    "faq.paymentFailure.answer":
      "<p>如果付款失败，系统会向帐户电子邮件发送提示邮件。下个月可能最多有四次付款重试。如果在重试后付款失败，则降级为免费计划。</p>",
    "faq.paymentFailure.question": "如果因信用卡到期等原因未能支付怎么办？",
    "faq.paymentProcessor.answer":
      "<p>Notion使用Stripe处理付款。Stripe是Twitter、Pinterest和Lyft等公司使用的支付服务提供商。Notion不直接处理用户的信用卡信息。</p>",
    "faq.paymentProcessor.question": "结算怎么处理呢？",
    "faq.personalPricing.answer":
      "如果升级到<p>个人专业版套餐，将收取固定费用(每月US$5或每年US$48)。</p><p>添加来宾是免费的，但需要为每个要添加的页面分别添加。</p>",
    "faq.personalPricing.question": "个人套餐如何定价？",
    "faq.portfolioCompaniesStartupDiscount.answer":
      "<p>等待您的参与！请填写<partnerform>简单表格</partnerform>，我们将为您提供更多信息。Notion总是在寻找主要技术中心以外的合作伙伴。</p>",
    "faq.portfolioCompaniesStartupDiscount.question":
      "我希望我们的投资组合公司也能提供这种折扣。如何成为Notion的合作伙伴？",
    "faq.previouslyHadMultipleMembers.answer":
      "<p>无需删除成员，不用担心！您可以使用相同的Notion，直到1000个区块限制。如果您想添加更多区块，请选择下面的选项之一。</p><ul><li>升级到团队计划</li><li>创建个人工作空间并终身免费使用</li><li>删除成员后，不限制区块享受Notion</li><p><p>注:删除成员之前，告诉该成员将个人主页备份到别处！</p>",
    "faq.previouslyHadMultipleMembers.question":
      "如果免费工作空间中有多个成员，会发生什么情况？",
    "faq.refund.answer":
      "<p>Notion的退款政策很简单。如果您不小心在网上或应用内付款购买了付费套餐，请在应用内与我们联系，或者发送电子邮件至team@makenotion.com。对于月度套餐，在购买后72小时内；对于年度套餐，如果在购买后30天内降级订阅，将退还全额(无扣除日计算金额)。</p><p>如果您对Notion有任何遗憾，请发送电子邮件至team@makenotion.com通知我们。希望通过您的反馈，共同创造适合每一个人的最佳用户体验。</p>",
    "faq.refund.question": "如何退款？",
    "faq.runOutOfCredit.answer":
      "<p>如果您的信用已用完，您将通过您选择的付款方式向您的帐户收费。</p>",
    "faq.runOutOfCredit.question": "如果积分用完了怎么办？",
    "faq.serviceLevelAgreement.answer":
      "<p>Notion不提供标准的SLA。但是，对于超过100名成员的团队，我们可以提供定制的SLA。</p><p><contactsales>请联系销售团队以了解更多信息。</p><contactsales></p><p/p></p><",
    "faq.serviceLevelAgreement.question": "Notion是否提供服务级别协议(SLA)？",
    "faq.startupCreditWorth.answer":
      "<p>Notion的<pricinglink>团队计划</pricinglink>一般按月定价，每个成员每月支付10美元。因此，US$1，000是一个由10人组成的团队，为期10个月，免费使用Notion。如果你是一个5人团队，你可以免费使用Notion20个月。</p>",
    "faq.startupCreditWorth.question": "Notion Credits US$1，000的价值是多少？",
    "faq.startupDiscountEligibility.answer":
      "<p>如果满足以下两个标准，就会提供折扣。</p><p>1)启动工作空间作为Notion为初创公司的团队计划。</p><p>2)与Notion的孵化器和加速器合作伙伴一起工作(完整列表见<formlink>Notion表单</formlink>)。</p><p>前将扩大应用对象，请继续关注。</p>",
    "faq.startupDiscountEligibility.question": "资格要求是什么？",
    "faq.studentDiscount.answer":
      "<p>个人专业套餐对学生和教育工作者免费。通过个人专业版计划，您可以与无限数量的房客协作，并使用页面的版本记录。注册至学校电子邮件地址后，即可立即使用该功能。</p><p>如果您已经在使用个人专业版套餐，请将与您的帐户关联的电子邮件更改为学校电子邮件地址即可免费使用。如果您已经使用免费培训计划，您将自动升级到您的个人专业套餐。</p><p><helpcenterlink>请访问我们的客户中心了解更多信息。</helpcenterlink></p></p><helpcenterlink></p><helpcenterlink></p><helpcenterlink><",
    "faq.studentDiscount.question": "Notion提供学生折扣吗？",
    "faq.suggestStartupPartner.answer":
      "<p>您的投资者不在我们的合作伙伴列表中吗？尝试以下方法之一。</p><p>1)鼓励投资者参与Notion合作伙伴计划。</p><p>2)与投资者一起发送tweet到@NotionHQ与哈希标签#NotionForStartups，我们将继续对话。</p><p>3)<applicationlink>申请信用</applicationlink>时请在表单中输入建议。</p>",
    "faq.suggestStartupPartner.question":
      "如何推荐与Notion一起工作的合作伙伴？",
    "faq.teamAdminTools.answer":
      "对于<p>团队套餐免费试用版，Workspace的所有成员都是管理员。这意味着任何人都可以改变设置，邀请成员进入工作空间。</p><p>如果您只想向某些成员授予管理员权限，我们推荐您升级到付费团队计划。付费团队计划提供管理工具，允许仅将部分成员指定为管理员。工作区的成员不能修改计费信息或安全选项，也不能将内容共享到工作区之外。</p>",
    "faq.teamAdminTools.question": "团队计划可以使用哪些管理工具？",
    "faq.teamPricing.answer":
      "升级至<p>团队套餐将收取每个成员的费用(每月10美元/月或96美元/年)。例如，按月支付5名成员的费用，每月收取US$50。</p><p>添加来宾是免费的。但是，来宾只能访问邀请的页面。换句话说，来宾看不到左侧侧边栏“工作空间”部分下面的页面。</p>",
    "faq.teamPricing.question": "团队套餐如何定价？",
    "faq.teamTrial.answer":
      "注册<p>Notion时，您可以在首选项中选择团队类型，自动体验团队计划。您可以访问付费团队计划提供的大部分功能，并且有1，000个区块限制。如果您想访问更多功能，请升级到付费团队计划。详情请参阅上面。</p>",
    "faq.teamTrial.question": "如何免费使用Notion团队套餐？",
    "faq.useNotionForFree.answer":
      "<p>当然！Notion可以终身免费使用。</p><p>个人套餐完全免费提供给个人用户。在升级到付费团队计划之前，您可以试用免费试用版，该试用版具有1000个区块限制，因此在升级到付费团队计划之前，您可以对其进行充分的评估。</p>",
    "faq.useNotionForFree.question": "能免费使用Notion吗？",
    "faq.whatHappensToFreeGuests.answer":
      "<p>在工作区中最多可以添加5位来宾。如果您已添加超过5位来宾，则现有来宾将保持不变。如果您想取消此访客限制，您需要升级到您的个人专业版计划。</p><p>除了添加来宾之外，您还可以利用Notion的新公共编辑功能，让其他具有页面链接的用户进行编辑或评论。</p>",
    "faq.whatHappensToFreeGuests.question": "在现有的免费套餐中添加哪些房客？",
    "faq.whatIsABlock.answer":
      "<p>块是指可以添加到页面的所有单个内容，包括文本段落、待办事项列表、图像、代码块和嵌入文件。你可以认为这些块堆起来，一页就完成了。</p>",
    "faq.whatIsABlock.question": "什么是区块？",
    "faq.whereStartupCredit.answer":
      "在<p>Notion中，转到“设置和成员”并单击“请求”，您可以在“工作空间余额”中查看当前积分，包括US$1，000积分。此菜单在升级到团队计划后出现。</p>",
    "faq.whereStartupCredit.question": "如何查看我的账户中的积分？",
    "faq.whyBillingInformation.answer":
      "<p>在应用信用后，即使索赔金额为0美元，您也必须输入索赔信息。这是为了在积分用完后向账户收费。</p>",
    "faq.whyBillingInformation.question":
      "支付Notion费用的信用额足够，为什么要输入账单信息？",
    "faq.whyFreeForStudents.answer":
      "<p>Notion是学校使用的理想工具。而支持下一代的思想家、空想家和领导者，也是Notion任务的核心。</p>",
    "faq.whyFreeForStudents.question": "为什么Notion免费提供给学生和老师？",
    "faq.whyStartupDiscount.answer":
      "<p>数千家初创公司在维基、项目管理、文档共享、备忘录等方面成功发展Notion。我们希望帮助更多的公司从早期开始建立坚实的基础。</p>",
    "faq.whyStartupDiscount.question": "为什么Notion为初创公司提供折扣？",
    "faqList.moreQuestionsTextHelpCenter":
      "如有疑问，请参阅<messagelink>客服中心</messagelink>。",
    "faqList.moreQuestionsTextIntercom":
      "还有什么疑问吗?请发送<messagelink>消息。</messagelink>",
    "figmaBlock.caption": "兼容Figma可共享链接",
    "figmaBlock.placeholder": "Figma嵌入",
    "fileBlock.embedButton.label": "链接嵌入",
    "fileBlock.fileTab.title": "文件",
    "fileBlock.linkPrompt.caption":
      "兼容PDF、Google Drive、Google Maps和CodePen等链接。",
    "fileBlock.linkPrompt.placeholder": "粘贴文件链接",
    "fileBlock.uploadOrEmbed.placeholder": "上传或嵌入文件",
    "filePropertyMenu.header": "文件",
    "filePropertyMenu.uploadFileFailedError.message": "上传失败。",
    "fileUploadErrors.freePlanFileSizeExceeded.message":
      "文件已超过免费套餐的5MB限制。",
    "followPageButton.mobileFollowThisPage.button": "关注此页面",
    "followPageButton.mobileImageThumbnailCaption":
      "您将收到侧边栏中的更新，并通过电子邮件收到摘要。",
    "forkPageActions.loadingStateDisplayText":
      "正在将{blockTitle}块复制到{spaceTitle}工作区。",
    "forkPageActions.untitledBlockRecordTitle": "无标题",
    "forkPageActions.untitledSpaceRecordTitle": "无标题",
    "forkPageScreen.chooseWorkspace.message": "选择工作空间",
    "formHandler.submitButton.create.label": "提交",
    "formHandler.submitButton.create.update": "保存更改",
    "formInputIcon.uploadButton.label": "上传图像",
    "formSecretShow.copied.label": "复制完成",
    "formSecretShow.copySecret.label": "复制",
    "formSecretShow.copySecret.tooltip": "{secretName}复制",
    "formSecretShow.refreshSecret.label": "刷新",
    "formSecretShow.secretCopied.tooltip": "{secretName}复制完成",
    "formSecretShow.showSecret.label": "视图",
    "formatMessage.error.undefinedResultType": "未定义的类型",
    "formulaHelpers.error.branchCondition":
      "条件中的每个分支必须是相同的类型{input}。",
    "formulaHelpers.error.circularDependency":
      "{propertySchemaName}属性生成循环依赖关系。",
    "formulaHelpers.error.illegalConstant": "{value}常量无效。",
    "formulaHelpers.error.invalidPropertyReference":
      "{input}输入引用无效属性。",
    "formulaHelpers.error.invalidSyntax": "{input}语法无效。",
    "formulaHelpers.error.noSignatureForFunction":
      "{functionName}函数没有签名。",
    "formulaHelpers.error.propertyNotFound": "找不到prop({input})属性。",
    "formulaHelpers.error.tooFewArguments": "{functionName}函数的参数太少。",
    "formulaHelpers.error.tooFewArgumentsVariadic":
      "{functionName}函数的参数太少。",
    "formulaHelpers.error.tooManyArguments": "{functionName}函数的参数太多。",
    "formulaHelpers.error.tooManyArgumentsInProp": "太多的参数被传递给prop()。",
    "formulaHelpers.error.typeMismatch":
      "{nodeString}类型与{localizedPropertyTypeDisplayName}类型不匹配。",
    "formulaHelpers.error.undefinedConstant": "{constantName}常量未定义。",
    "formulaHelpers.error.undefinedFunction": "未定义{functionName}函数。",
    "formulaHelpers.error.undefinedOperator": "未定义{operator}运算符。",
    "formulaPropertyMenu.learnMore.button.label": "公式用法",
    "frame.importingMessage": "正在进行导入.",
    "framerBlock.embedFramer.button.label": "Framer嵌入",
    "framerBlock.linkInput.caption": "与Framer原型兼容",
    "framerBlock.placeholder": "Framer原型嵌入",
    "fronUseCases.altImage.logosOfReplacedSoftware": "更换的软件徽标",
    "fronUseCases.mobileAltImage.logosOfReplacedSoftware": "更换的软件徽标",
    "frontNewsletterSignupInput.formstackError": "发生错误。请重试订阅。",
    "frontPricingCard.annualBillingFinePrint":
      "显示的费用是每年的费用。{br}月度费用请参阅<pricinglink>定价页面</pricinglink>。",
    "frontPricingCard.comingSoonBadge": "即将发布",
    "frontPricingCard.contactSales.prompt": "联系销售团队{br}→",
    "frontPricingCard.educationPlan.attribute.apiAccess": "API访问",
    "frontPricingCard.educationPlan.attribute.contentApi": "内容API",
    "frontPricingCard.educationPlan.attribute.contentApi.v2": "API",
    "frontPricingCard.educationPlan.attribute.shareWithGuests": "无限来宾",
    "frontPricingCard.educationPlan.attribute.unlimitedFileUploads":
      "上传无限文件",
    "frontPricingCard.educationPlan.attribute.versionHistory": "版本历史记录",
    "frontPricingCard.educationPlan.context.allPersonalPlanFeatures":
      "个人套餐的所有功能+",
    "frontPricingCard.enterprisePlan.attribute.advancedSecurity": "高级安全性",
    "frontPricingCard.enterprisePlan.attribute.customContractInvoicing":
      "定制合同",
    "frontPricingCard.enterprisePlan.attribute.dedicatedManager": "专职经理",
    "frontPricingCard.enterprisePlan.attribute.samlSingleSignOn": "SAML SSO",
    "frontPricingCard.enterprisePlan.attribute.scimApi": "用户配置(SCIM)",
    "frontPricingCard.enterprisePlan.attribute.sso": "SAML单点登录",
    "frontPricingCard.enterprisePlan.context.allTeamPlanFeatures":
      "团队计划的所有功能+",
    "frontPricingCard.enterprisePlan.oneliner":
      "提供公司运营所需的控制和支持。",
    "frontPricingCard.enterprisePlan.title": "企业",
    "frontPricingCard.evernotePremiumComparison.attribute.notes": "笔记",
    "frontPricingCard.evernotePremiumComparison.attribute.reminders":
      "利玛因德",
    "frontPricingCard.evernotePremiumComparison.attribute.tags": "标签",
    "frontPricingCard.evernotePremiumComparison.attribute.twoLevelHierarchy":
      "两级层次结构",
    "frontPricingCard.evernotePremiumComparison.attribute.webClipper":
      "Web Clipper",
    "frontPricingCard.evernotePremiumComparison.oneliner": "默认注释。",
    "frontPricingCard.evernotePremiumComparison.title": "印象笔记高级帐户",
    "frontPricingCard.freePlan.attribute.shareWithGuests": "最多邀请5位来宾",
    "frontPricingCard.freePlan.attribute.syncAcrossDevices": "在所有设备上同步",
    "frontPricingCard.freePlan.attribute.unlimitedBlocks": "无限页面和块",
    "frontPricingCard.freePlan.context.freeForIndividuals":
      "向个人用户免费提供",
    "frontPricingCard.newBadge": "新",
    "frontPricingCard.personalFreePlan.oneliner": "整理日常的一切。",
    "frontPricingCard.personalFreePlan.title": "个人",
    "frontPricingCard.personalPlan.context.allPersonalPlanFeatures":
      "个人套餐的所有功能+",
    "frontPricingCard.personalPlanComparison.attribute.databases": "数据库",
    "frontPricingCard.personalPlanComparison.attribute.infiniteHierarchy":
      "无限的层次结构",
    "frontPricingCard.personalPlanComparison.attribute.markdownSupport":
      "Markdown支持",
    "frontPricingCard.personalPlanComparison.attribute.realTimeCollaboration":
      "实时协作",
    "frontPricingCard.personalPlanComparison.oneliner": "整理日常的一切。",
    "frontPricingCard.personalPlanComparison.title": "Notion个人",
    "frontPricingCard.personalProPlan.oneliner":
      "为想要做更多工作的高级用户准备的套餐。",
    "frontPricingCard.personalProPlan.title": "个人职业",
    "frontPricingCard.planSignUp.getStarted.title": "开始",
    "frontPricingCard.planSignUp.tryItFree.title": "免费评估",
    "frontPricingCard.startupCredit": "US$1，000的创业积分",
    "frontPricingCard.startupPlan.context.allProPlanFeatures":
      "个人套餐的所有功能+",
    "frontPricingCard.teamPlan.attribute.adminTools": "管理工具",
    "frontPricingCard.teamPlan.attribute.advancedPermissions": "高级权限",
    "frontPricingCard.teamPlan.attribute.collaborativeWorkspace": "协作空间",
    "frontPricingCard.teamPlan.attribute.unlimitedMembers": "添加无限组员",
    "frontPricingCard.teamPlan.context.allProPlanFeatures":
      "个人套餐的所有功能+",
    "frontPricingCard.teamPlan.oneliner":
      "所有团队成员都可以在一个工作区中一起工作。",
    "frontPricingCard.teamPlan.title": "团队",
    "frontPricingPage.documentTitle": "套餐",
    "frontPricingPage.faq.title": "问答",
    "frontPricingPage.plansCompare.title": "计划与特性比较",
    "frontPricingPage.pricingTermToggle.payAnnually.label": "年度结算",
    "frontPricingPage.pricingTermToggle.payMonthly.label": "每月付款",
    "frontPricingPage.shortTitle": "套餐",
    "frontPricingPage.title": "整个团队的一个工具。{br}现在免费供个人使用。",
    "frontSignupComponent.emailInput.educationEmailPlaceholder":
      "请输入学校电子邮件。",
    "frontSignupComponent.emailInput.genericEmailPlaceholder":
      "请输入您的电子邮件。",
    "frontSignupComponent.emailInput.teamEmailPlaceholder":
      "请输入业务电子邮件。",
    "frontSignupComponent.submitButton.label": "注册会员",
    "frontTopbar.resourcesMenu.customers": "客户故事",
    "frontTopbar.resourcesMenu.help": "帮助和支持",
    "fullPageError.accessNotAllowed.message":
      "您没有访问{workspaceName}的权限。要添加为团队成员，请与管理员联系。",
    "fullPageError.backToMyContentButton.label": "返回到“我的内容”",
    "fullPageError.canRequestAccess.message":
      "请求获得批准后，即可访问此页面。",
    "fullPageError.canRequestAccess.title": "无法访问此页",
    "fullPageError.cannotRequestAccess.message":
      "此页面不存在，或者您没有访问该页面的权限。",
    "fullPageError.contentDoesNotExist.message":
      "有问题吗?请发送<helplink>消息。</helplink>",
    "fullPageError.contentDoesNotExist.title": "此内容不存在",
    "fullPageError.createOrJoinWorkspaceButton.label":
      "创建新的工作空间或加入工作区。",
    "fullPageError.downloadMobileAppButton.label": "获取移动应用程序",
    "fullPageError.loggedOut.message":
      "欢迎访问Notion的{workspaceName}工作空间。",
    "fullPageError.noAccess.message": "您没有访问此页面的权限。",
    "fullPageError.noAccess.title": "找不到页面",
    "fullPageError.offlineError.message":
      "很抱歉。好像离线了。要查看此页面，请在线查看。",
    "fullPageError.onboardingError.message":
      "您没有访问{workspaceName}的权限。要添加为团队成员，请与管理员联系。",
    "fullPageError.openInMobileAppButton.label": "在移动应用程序中打开",
    "fullPageError.pageIsPrivate.message":
      "这是{workspaceName}工作空间中的个人主页。{hasOwner、select、true{要协作，请向{ownerName}({ownerEmail})请求邀请电子邮件。}other{要协作，请向页面所有者请求邀请。}}",
    "fullPageError.publicDomainInterstitial.title":
      "使用以下链接进入外部网站。",
    "fullPageError.reportAProblem.label": "报告问题",
    "fullPageError.requestAccessButton.label": "访问请求",
    "fullPageError.requestAccessButton.requested": "请求的访问",
    "fullPageError.returnToOnboardingButton.label": "返回到“登录”",
    "fullPageError.sendMessageButton.label": "发送消息",
    "fullPageError.sendMessageForHelp.message":
      "如果您需要帮助，请发送<sendmessagelink>消息。</sendmessagelink>",
    "fullPageError.somethingWrong.label": "出问题了吗？",
    "fullPageError.switchAccount.label": "切换帐户",
    "fullPageError.termsAndPrivacyButton.label": "条款与条件",
    "fullPageError.unsafePageError.message":
      "本页面可能包含垃圾邮件、网络钓鱼、非法或不适当的内容。如果您从未知来源收到此链接，建议您关闭此选项卡。<proceedanywaylink>可怕的进展</proceedanywaylink>",
    "fullPageError.unsafePageError.title": "此页面被归类为不安全",
    "fullPageError.whatIsNotionButton.label": "Notion简介",
    "fullPageError.wrongAccount.message":
      "请用其他电子邮件<loginlink>登录</loginlink>或请求页面所有者访问权限。",
    "fullPageError.wrongAccountRequestAccess.message":
      "您可能需要用其他电子邮件<loginlink>登录</loginlink>。",
    "fullPageError.wrongAccountRequestAccessSwitchAccount.message":
      "<switchlink>可能需要切换帐户，或者用</switchlink>其他电子邮件<loginlink>登录</loginlink>。",
    "fullPageError.wrongLoggedInUserError.message":
      "您当前正在以{currentlyLoggedInUser}身份登录。",
    "fullscreenRenderer.closeButton.label": "关闭",
    "genericDialogModal.cancelButton.label": "取消",
    "genericErrors.genericErrorMessage": "出现问题。",
    "gistBlock.embedButton.label": "Gist嵌入",
    "gistBlock.linkInput.caption": "与GitHub上的Gist兼容",
    "gistBlock.placeholder": "Gist嵌入",
    "githubGistRenderer.errorLoading.message": "gist导入错误",
    "githubGistRenderer.loading.message": "正在导入gist",
    "googleAuthPromptModal.connectToGoogleButton.label": "连接到Google",
    "googleAuthPromptModal.mobileUseDesktopPrompt.errorMessage":
      "要链接到新帐户，请在桌面上使用Notion。",
    "googleAuthPromptModal.noAccessFile.errorMessage":
      "Notion当前无法访问要嵌入的Google Drive文件。",
    "googleAuthPromptModal.seeConnectedAccountsButton.label": "验证关联帐户",
    "googleDriveActions.authenticatingWithGoogle.loadingMessage":
      "正在通过Google验证.",
    "googleDriveActions.loginWithGoogleModal.title": "谷歌登录",
    "googleDriveBlock.embedTab.caption": "与Google Drive中的所有文件兼容",
    "googleDriveBlock.embedTab.embedButton.label": "Google Drive文件嵌入",
    "googleDriveBlock.legacy.placeholder": "Google Drive文件嵌入",
    "googleDriveBlock.legacyLinkInput.caption":
      "Google Docs与Google Sheets兼容.",
    "googleDriveBlock.mediaMenuActions.embedTab.title": "嵌入",
    "googleDriveBlock.mediaPicker.googleDriveTab.title": "浏览Google Drive",
    "googleDriveBlock.pageDeleted.caption": "此文件位于回收站中。",
    "googleDriveBlock.pageDescription":
      "最后修改日期{hasUserName，select，true{作者{userName}}other{}}{hasLastModifiedTime，select，true{{lastModifiedTime}other{}}",
    "googleDriveBlock.placeholder.authenticated":
      "选择要嵌入的Google Drive文件",
    "googleDriveBlock.placeholder.notAuthenticated":
      "将Google Drive连接到Notion并嵌入",
    "googleDriveHelpers.untitledFilePlaceholder": "无标题",
    "googleErrors.googleDriveTokenError": "Google Drive错误：{errorMessage}",
    "googleMapsBlock.embed.caption": "与Google Maps的地点兼容",
    "googleMapsBlock.embedButton.label": "地图嵌入",
    "googleMapsBlock.placeholder": "Google Map嵌入",
    "grantAccessActivityAction.accessGranted.title": "{grantedBy}授权用户",
    "grantAccessActivityAction.alreadyHasAccess.label":
      "{requestingUser}已经可以访问。",
    "grantAccessActivityAction.changePermissionButton.label": "变更",
    "grantAccessActivityAction.grantAccessButton.label": "允许访问",
    "grantAccessActivityAction.ignoreButton.label": "忽略",
    "guestPagesButton.label":
      "{numberOfAccessiblePages，plural，other{{numberOfAccessiblePages}页}}",
    "guestPagesPopup.addAdminPermissionButton.label": "切换到管理员",
    "guestPagesPopup.addAdminPermissionButton.tooltip":
      "此来宾将成为工作区的管理员。",
    "guestPagesPopup.addMemberPermission.updatingMessage": "正在更新.",
    "guestPagesPopup.addMemberPermissionButton.label": "切换到成员",
    "guestPagesPopup.addMemberPermissionButton.tooltip":
      "此来宾将成为工作区的成员。",
    "guestPagesPopup.guestAccessiblePagesCaption": "这些来宾可以搜索这些页面。",
    "guestPagesPopup.permissionsForUserGuest.label": "房客",
    "guestPagesPopup.privatePagePlaceholder": "个人主页",
    "guestPagesPopup.removeGuest.updatingMessage": "正在更新.",
    "guestPagesPopup.removeGuestButton.label": "移除",
    "guestPagesPopup.removeGuestButton.tooltip":
      "此来宾将从此工作区的所有页面中删除。",
    "guestPagesPopup.removeGuestModal.confirmationMessage":
      "是否确实要删除此用户？已删除的用户将失去对所有共享页面的访问。",
    "guestPagesPopup.removeGuestModal.removeButton.label": "移除",
    "header1Block.placeholder": "标题1",
    "helpButton.desktopHelpButton.tooltip": "帮助、反馈和{br}键盘快捷键",
    "helpButton.giveFeedback.menuItem": "发送反馈",
    "helpButton.helpSupportGuide.menuItem": "帮助和支持",
    "helpButton.joinUs.menuItem": "招聘信息",
    "helpButton.keyboardShortcuts.menuItem": "键盘快捷键",
    "helpButton.mobileHelpFeedbackButton.label": "帮助和反馈",
    "helpButton.mobileTwitter.menuItem": "Twitter-@{notionHandle}",
    "helpButton.salesChat.menuItem": "联系销售团队",
    "helpButton.salesChatMessage": "你好？我想了解更多关于企业Notion的信息。",
    "helpButton.sendMessage.menuItem": "发送消息",
    "helpButton.sendUsAMessage.tooltip":
      "Notion使用Intercom发送消息。{br}防止浏览器阻止。",
    "helpButton.twitter.menuItem": "Twitter-@{notionHandle}",
    "helpButton.whatsNew.menuItem": "新消息",
    "highlightSelectionButton.backgroundSection.label": "背景",
    "highlightSelectionButton.colorSection.label": "颜色",
    "highlightSelectionButton.defaultBackground.label": "默认背景",
    "highlightSelectionButton.lastUsedSection.label": "最近使用",
    "highlightSelectionButton.mobileColorIcon.label": "颜色",
    "highlightSelectionButton.mobileTextColor.label": "文本颜色",
    "highlightSelectionButton.textColor.tooltip": "文本颜色",
    "historyModal.confirmDialog.description": "是否确实要恢复此版本？",
    "historyModal.confirmDialog.restoreButton.label": "恢复",
    "historyModal.desktopModal.cancelButton.label": "取消",
    "historyModal.desktopModal.errorMessage": "出现问题。",
    "historyModal.desktopModal.learnMoreButton.label": "如何使用页面记录",
    "historyModal.desktopModal.restoreButton.label": "还原版本",
    "historyModal.desktopModal.sidebar.upgradeMessage.tooltip":
      "升级以恢复快照。",
    "historyModal.errorMessage": "出现问题。",
    "historyModal.mobileHistoryMenu.title": "记录",
    "historyModal.mobileSnapshotMenu.restoreButton.label": "恢复",
    "historyModal.noSnapshotsYet.message":
      "此页上还没有快照。在创建第一个快照之前，最多需要10分钟。",
    "historyModal.snapshotsMenuList.upgrade.tooltip": "升级以查看此快照。",
    "historyModal.unavailableForFreeWorkspaces.messagePart1":
      "免费工作空间不提供版本历史记录。",
    "historyModal.unavailableForFreeWorkspaces.messagePart2":
      "升级到付费计划。",
    "historyModal.upgradeForHistoryButton.label": "升级",
    "historyModal.upgradeToEnterprise.message":
      "要访问30天或更早的版本，请升级到企业计划。",
    "historyModalActions.restoringPreviousVersion.loadingMessage": "正在还原.",
    "imageBlock.embedImage.button.label": "图像嵌入",
    "imageBlock.linkInput.caption": "与Web上的所有图像兼容",
    "imageBlock.linkInput.placeholder": "粘贴图像链接",
    "imageBlock.placeholder": "添加图像",
    "importActions.asanaImportFailedError.message": "Asana导入失败。",
    "importActions.evernoteImportFailedError.message": "印象笔记导入失败。",
    "importActions.importFailedError.message": "导入失败。",
    "importActions.importTitle": "导入{date}",
    "importActions.importingFromAsana.loadingMessage":
      "正在从{importingCount、plural和other{Asana获取{importingCount}个项目}}",
    "importActions.importingFromEvernote.loadingMessage":
      "正在从{importingCount、plural、other{Evernote获取{importingCount}个笔记本电脑}}",
    "importActions.importingFromTrello.loadingMessage":
      "正在从{importingCount、plural、other{Trello获取{importingCount}个主板}",
    "importActions.importingMultipleFilesComplete.loadingMessage":
      "{totalNumberOfFiles}已完成导入{totalNumberOfFiles}个文件",
    "importActions.importingMultipleFilesInProgress.loadingMessage":
      "{totalNumberOfFiles}已完成导入{numberOfImportedFiles}个文件",
    "importActions.importingMultipleFilesNotStarted.loadingMessage":
      "{totalNumberOfFiles}个文件中无导入文件",
    "importActions.importingOneFile.loadingMessage": "正在进行导入.",
    "importActions.trelloImportFailedError.message": "Trello导入失败。",
    "importActions.uploadingMultipleFilesComplete.loadingMessage":
      "{totalNumberOfFiles}已完成上载{totalNumberOfFiles}个文件",
    "importActions.uploadingMultipleFilesInProgress.loadingMessage":
      "{totalNumberOfFiles}已完成上载{numberOfUploadedFiles}个文件",
    "importActions.uploadingMultipleFilesNotStarted.loadingMessage":
      "{totalNumberOfFiles}个中的0个文件已上载",
    "importActions.uploadingOneFile.loadingMessage":
      "正在上载.({percentComplete}%)",
    "importAsana.databaseProperty.assignedPerson": "分配",
    "importAsana.databaseProperty.attachedFiles": "附件",
    "importAsana.databaseProperty.completedCheckbox": "完成",
    "importAsana.databaseProperty.dueDate": "期限",
    "importAsana.databaseProperty.name": "名称",
    "importAsana.databaseProperty.sectionMultiSelect": "部分",
    "importAsana.databaseProperty.tagsMultiSelect": "标签",
    "importErrors.enexFileNotSupported.message": "不支持Evernote.enex导入。",
    "importEvernote.databaseProperty.createdTime": "创建日期",
    "importEvernote.databaseProperty.name": "名称",
    "importEvernote.databaseProperty.reminder": "利玛因德",
    "importEvernote.databaseProperty.tags": "标签",
    "importEvernote.databaseProperty.updatedTime": "已更新",
    "importEvernote.databaseProperty.url": "网址",
    "importEvernote.databaseViews.galleryView.title": "查看图库",
    "importEvernote.databaseViews.listView.title": "查看列表",
    "importEvernote.importTooLarge.textProperty.message":
      "这个项目太大了，无法导入。相反，我们把内容上传到文件。",
    "importModal.helpButton.label": "导入用法",
    "importModal.importButton.label": "导入",
    "importOptions.helpButton.tooltip": "导入用法",
    "importOptions.offlineErrorMessage": "在线移动并运行导入。",
    "importOptions.textMarkdown.title": "Text&Markdown",
    "importPopup.deselectAll": "取消全选",
    "importPopup.selectAll": "全选",
    "importTrello.assignedPersonColumn.propertyName": "分配",
    "importTrello.attachedFilesColumn.propertyName": "附件",
    "importTrello.database.defaultViewTitle": "基本视图",
    "importTrello.dueDateColumn.propertyName": "期限",
    "importTrello.labelColumn.propertyName": "标签",
    "importTrello.nameColumn.propertyName": "名称",
    "importTrello.statusColumn.propertyName": "状态",
    "importTrello.statusProperty.backlog": "积压",
    "importTrello.statusProperty.complete": "完成",
    "importTrello.statusProperty.inProgress": "正在进行",
    "inlineCommentButton.commentLabel": "评论",
    "inlineCommentButton.tooltip": "对所选文本发表评论",
    "inlineCopyButton.copyButtonText": "复制链接",
    "inlineEquationToken.invalidPlaceholder.label": "数学公式无效。",
    "inlineEquationToken.placeholder.label": "新的数学公式",
    "integrationImportPopup.importButton.label": "导入",
    "invalidVATEmail.billingLink.text":
      "<b>请将营业执照号从<billinglink>此链接</billinglink>更改。</b>",
    "invalidVATEmail.body.text":
      "由于增值税(VAT)而输入的营业执照号无效，我们将与您联系。如果您没有注册有效的商业登记号码，则根据相关法规，您将被扣税。",
    "invalidVATEmail.closingText": "谢谢。{br}Notion团队",
    "invalidVATEmail.greetingWithName": "{customerName}先生，您好！",
    "invalidVATEmail.greetingWithoutName": "你好！",
    "invalidVATEmail.subjectLine.text": "请变更Notion账户的营业执照号码",
    "invisionBlock.embeds.button.label": "Invision嵌入",
    "invisionBlock.embeds.caption": "与Invision项目兼容",
    "invisionBlock.placeholder": "Invision项目嵌入",
    "inviteEmail.clickToViewPage.message": "点击这里查看。",
    "inviteEmail.clickToViewWorkspace.message": "点击这里查看。",
    "inviteEmail.pageInviteMessage": "{name}已邀请您加入{pageName}。",
    "inviteEmail.pageTitle.untitledPage": "无标题",
    "inviteEmail.title": "邀请",
    "inviteEmail.workspaceInviteMessage":
      "{name}已邀请您进入工作区{workspaceName}。",
    "inviteEmail.workspaceInviteMessageFromBot":
      "已被邀请加入{workspaceName}工作空间。",
    "inviteEmail.workspaceName.untitledName": "无标题",
    "inviteLinkErrors.inviteLinkDisabled.message":
      "邀请被禁用。联系这个空间的管理员。",
    "inviteUserButton.addGuestsAndGroupsAndIntegrationsLabel":
      "输入用户、电子邮件、组或集成",
    "inviteUserButton.addGuestsAndGroupsLabel": "输入用户、组或电子邮件",
    "inviteUserButton.addMemberLabel": "添加成员",
    "inviteUserButton.invitePersonLabel": "邀请",
    "inviteUserButton.modalTooltip.guestLimitLine1":
      "使用的个人套餐最多只允许5名本地来宾",
    "inviteUserButton.modalTooltip.guestLimitLine2": "升级以无限制使用。",
    "inviteUserButton.tooltip.adminsOnlyMessage": "只有管理员才能添加成员。",
    "inviteUserButton.tooltip.fullAccessOnlyMessage":
      "只有具有完全允许权限的人员才能添加用户。",
    "inviteUserButton.tooltip.upgradeToTeamPlan":
      "要添加成员，请升级到团队计划。",
    "inviteUserModal.addMemberMenu.title": "添加成员",
    "inviteUserModal.helpButton.caption": "如何邀请用户和设置权限",
    "inviteUserModal.inviteButton.label": "邀请",
    "inviteUserModal.inviteButton.upgradeLabel": "升级",
    "inviteUserModal.invitePersonMenu.title": "用户邀请",
    "inviteUserModal.mobile.inviteButton.label": "邀请",
    "inviteUserModal.permissionLevel.title": "权限级别",
    "inviteUserModal.searchDropdown.selectGroupTitle": "选择组",
    "inviteUserModal.searchDropdown.selectPersonTitle": "选择用户",
    "inviteUserModal.searchInput.errorMessage": "出现问题。",
    "inviteUserModal.searchInput.placeholder": "搜索名称或电子邮件",
    "inviteUserModal.searchPersonDropdown.noSearchResultsMessage":
      "输入或粘贴以逗号分隔的电子邮件地址。",
    "inviteUserModal.userAlreadyHasPermissionMessage": "{user}您已经拥有权限。",
    "inviteUserModal.userAlreadyInvitedMessage": "已邀请{user}。",
    "inviteUserModal.userRole.adminBadge.label": "管理员",
    "inviteUserModal.userRole.adminBadge.tooltip": "这是工作区的管理员。",
    "inviteUserModal.userRole.guest.tooltip": "这个人是这个工作区的嘉宾。",
    "inviteUserModal.userRole.guestBadge.label": "房客",
    "inviteUserModal.userRole.memberBadge.label": "成员",
    "inviteUserModal.userRole.memberBadge.tooltip": "此工作区的成员。",
    "invoice.VATID.label": "VAT ID",
    "invoice.amountDue.label": "索赔额",
    "invoice.amountPaid.label": "付款金额",
    "invoice.chargeItem.basicCharge.withMonthlyAmount":
      "{numberOfMembers，plural，other{{productName}(月{planAmount})×成员{numberOfMembers}名称}}",
    "invoice.chargeItem.basicCharge.withYearlyAmount":
      "{numberOfMembers，plural，other{{productName}(年{planAmount})×成员{numberOfMembers}名称}}",
    "invoice.chargeItem.basicCharge.withoutPlanAmount":
      "{numberOfMembers，plural，other{成员{productName}×{numberOfMembers}名称}}",
    "invoice.chargeItem.changedNumberOfMembers.memberChange":
      "({oldTotalMembers}~{newTotalMembers})",
    "invoice.chargeItem.changedNumberOfMembers.membersAdded":
      "{numberOfMembersAdded、plural、other{将成员{numberOfMembersAdded}名称添加到{productName}",
    "invoice.chargeItem.changedNumberOfMembers.membersRemoved":
      "{numberOfMembersRemoved、plural、other{已从{productName}中删除成员{numberOfMembersAdded}名称}}",
    "invoice.chargeItem.creditApplied.label": "信用抵减额",
    "invoice.chargeItem.discountApplied.label": "优惠券",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromMonthlyToYearly":
      "完成从“每月开单”选项到“年度开单”选项的变更",
    "invoice.chargeItem.proratedCharge.switchedBillingInterval.fromYearlyToMonthly":
      "完成从“年度开单”选项到“每月开单”选项的变更",
    "invoice.chargeItem.proratedCharge.switchedProducts":
      "切换到{newProductName}商品(从{oldProductName})",
    "invoice.chargeItem.taxCharge": "税金",
    "invoice.chargeItems.periodicCharges.description":
      "除非有调整事项，否则每次都在计费周期收费。",
    "invoice.chargeItems.periodicCharges.title": "定期费用",
    "invoice.chargeItems.proratedCharges.description":
      "一次性调整项目，取决于旧账单中包含的开单周期中的订阅更改。",
    "invoice.chargeItems.proratedCharges.header": "按比例分配",
    "invoice.chargeItems.subtotal.label": "小计",
    "invoice.chargeItems.summary.label": "摘要",
    "invoice.creditBalance.header": "工作空间信用余额",
    "invoice.date.label": "开单日期",
    "invoice.helpButton.label":
      "查看账单周期、新成员计算费率和帐户积分等信息。",
    "invoice.invoiceID.label": "发票ID",
    "invoice.invoiceID.upcomingInvoicePlaceholder": "预定",
    "invoice.memberCount":
      "{numberOfMembers，plural，other{成员{numberOfMembers}名称}}",
    "invoice.payment.label": "结算金",
    "invoice.pdf.title": "Notion发票{date}",
    "invoice.printOrExportButton.label": "打印/输出到PDF",
    "invoice.productName.enterprise":
      "{billingInterval，select，month{Notion Enterprise每月一次}year{Notion Enterprise每年}other{Notion Enterprise}}",
    "invoice.productName.legacy":
      "{billingInterval，select，month{Notion Legacy每月一次}year{Notion Legacy每年}other{Notion Legacy}}",
    "invoice.productName.personal":
      "{billingInterval，select，month{Notion Personal每月一次}year{Notion Personal每年}other{Notion Personal}}",
    "invoice.productName.personalEducation":
      "{billingInterval，select，month{Notion个人(教育)每月}year{Notion个人(教育)每年}other{Notion个人(教育)}}",
    "invoice.productName.team":
      "{billingInterval，select，month{Notion Team每月一次}year{Notion Team每年}other{Notion Team}}",
    "invoice.recipient.label": "接收",
    "invoice.status.not_paid": "未清偿",
    "invoice.status.paid": "已付款",
    "invoice.status.upcoming": "预定-剩余期限",
    "invoice.title": "Notion发票&收据",
    "invoice.total.label": "合计",
    "invoice.workspaceName.label": "工作空间名称",
    "invoiceErrors.invoiceNotFound.message":
      "要查看，可能需要<loginlink>登录</loginlink>。",
    "invoiceErrors.invoiceNotFound.title": "找不到账单",
    "languagePicker.betaBadge": "测试版",
    "languagePicker.captions.chineseS": "简体中文",
    "languagePicker.captions.chineseT": "繁体中文",
    "languagePicker.captions.englishUS": "英语(美国)",
    "languagePicker.captions.frenchFr": "法语",
    "languagePicker.captions.japaneseJa": "日语",
    "languagePicker.captions.koreanKo": "韩语",
    "languagePicker.captions.portugueseBr": "巴西葡萄牙语",
    "languagePicker.captions.spanishEs": "西班牙语(西班牙)",
    "languagePicker.captions.spanishLatam": "西班牙语(拉丁美洲)",
    "languagePicker.changeLanguage.confirmationMessage":
      "是否确实要将语言设置更改为{language}？",
    "languagePicker.changeLanguage.updateButton.label": "更新",
    "languageRegionSettings.language.label": "语言",
    "languageSettings.formatsSection.title": "形式",
    "languageSettings.languageSection.title": "语言和地区",
    "languageSettings.languageSwitcher.subtitle": "更改Notion使用的语言。",
    "languageSettings.offline.message": "在线管理语言和地区。",
    "linkToCollectionBlock.input.placeholder": "搜索数据库",
    "linkToCollectionBlock.menuItem.noResults.label": "无结果",
    "linkToCollectionBlock.menuItem.noResults.title": "选择数据库",
    "linkToCollectionBlock.menuItem.showResults.title": "选择数据库",
    "linkToPageBlock.noSearchResults": "无结果",
    "linkToPageBlock.searchPlaceholder": "搜索页面",
    "linkToPageBlock.selectPrompt": "选择页面",
    "linkToPageBlock.selectPrompt.withContents": "选择页面",
    "loadingSpinner.label": "正在加载.",
    "localDatabase.erroMessages.noDiskSpaceRemaining": "没有剩余的磁盘空间。",
    "localDatabase.erroMessages.noDiskSpaceRemainingBrowserLimit":
      "没有剩余的磁盘空间。在浏览器设置中，Notion可用的存储空间可能受到限制。",
    "localDatabase.errorFixes.chromeSettingsDamaged":
      "Chrome配置文件可能已损坏。如果您更改了chrome://flags，请重新设置，然后重新启动浏览器。如果问题仍然存在，请尝试创建新的Chrome用户。",
    "localDatabase.errorFixes.firefoxSettingsDamaged":
      "Firefox配置文件可能已损坏。请访问https://firefox-storage-test.glitch.me/进行诊断。",
    "localDatabase.errorFixes.helpAndSupportPrompt":
      "Notion的本地存储可能已损坏。(？)>支持中心>Notion重置。",
    "localDatabase.errorFixes.reloadAllTabs":
      "关闭所有Notion选项卡或窗口，然后重新打开。",
    "localDatabase.errorFixes.reloadThisTab": "请重新载入Notion。",
    "loginActions.dialogError.logoutUnsavedChanges.confirmButton.label":
      "取消编辑并注销",
    "loginActions.dialogError.logoutUnsavedChanges.message":
      "存在未保存的更改。注销将丢失其内容。",
    "loginActions.googleLoginPopupModal.title": "谷歌登录",
    "loginActions.loggingInWithApple.errorMessage": "登录Apple时出现问题。",
    "loginActions.loggingInWithApple.loadingMessage": "正在以Apple登录.",
    "loginActions.loggingInWithGoogle.errorMessage": "登录Google时出现问题。",
    "loginActions.loggingInWithGoogle.loadingMessage": "正在用Google登录.",
    "loginErrors.adminModeUnsupported.message": "管理员模式不支持",
    "loginErrors.generic.message": "登录有问题。",
    "loginErrors.invalidEmail.message": "电子邮件无效。",
    "loginErrors.invalidPassword.message": "密码无效。",
    "loginErrors.tryAgain.message": "请重新登录。",
    "loginForm.continueWithEmailButton.label": "通过电子邮件继续",
    "loginForm.continueWithLoginCodeButton.label": "使用登录代码继续",
    "loginForm.continueWithPasswordButton.label": "使用密码继续",
    "loginForm.continueWithReverifyButton.label": "电子邮件认证",
    "loginForm.continueWithSAMLButton.label": "继续SAML",
    "loginForm.createNewAccountButton.label": "创建新帐户",
    "loginForm.disclaimer":
      "点击上面的“Google/电子邮件/继续SAML”，确认您已经阅读并理解了Notion的<termsandconditionslink>使用条款</termsandconditionslink>和<privacypolicylink>隐私政策</privacypolicylink>。",
    "loginForm.emailInput.label": "电子邮件",
    "loginForm.emailInput.placeholder": "请输入您的电子邮件地址。",
    "loginForm.forgotPasswordLink": "查找密码",
    "loginForm.loginCodeInput.label": "登录代码",
    "loginForm.loginWithAppleButton.label": "继续到Apple",
    "loginForm.loginWithGoogleButton.label": "继续使用Google",
    "loginForm.otherLoginOptions.continueWithEmail":
      "也可以使用<emailloginlink>电子邮件</emailloginlink>继续。",
    "loginForm.otherLoginOptions.continueWithEmailOrSAML":
      "也可以使用<emailloginlink>电子邮件</emailloginlink>或<samlloginlink>SAML SSO</samlloginlink>继续。",
    "loginForm.otherLoginOptions.continueWithSAML":
      "也可以使用<samlloginlink>SAML SSO</samlloginlink>继续。",
    "loginForm.passcodeInput.enterCodePlaceholder": "请输入您的登录代码。",
    "loginForm.passcodeInput.enterPasswordPlaceholder": "请输入您的密码。",
    "loginForm.passcodeInput.enterSignupCodePlaceholder":
      "请输入您的登录代码。",
    "loginForm.passcodeInput.pasteCodePlaceholder": "粘贴登录码",
    "loginForm.passcodeInput.pasteSignupCodePlaceholder": "粘贴登录码",
    "loginForm.passcodeInput.reverifyPlaceholder": "粘贴验证码。",
    "loginForm.passwordInput.label": "密码",
    "loginForm.passwordResetSentMessage": "查看收件箱中的重设密码链接。",
    "loginForm.reverifyPasswordLabel":
      "<emailverifiedtext>电子邮件已验证</emailverifiedtext>。您可以继续使用密码登录。",
    "loginForm.reverifySentMessage":
      "此帐户需要电子邮件验证。检查您的电子邮件收件箱，粘贴验证码。",
    "loginForm.sendResetLink": "发送重置链接",
    "loginForm.signUpCodeInput.label": "注册代码",
    "loginForm.temporaryPasscodeSentMessage":
      "您刚刚发送了一个临时登录代码。{br}请检查您的收件箱。",
    "loginForm.temporaryPasscodeSentMessageNoAccount":
      "您已经向相应的电子邮件发送了临时登录代码。请确认收到的邮箱，然后在下面粘贴登录码。",
    "loginForm.verificationCodeInput.label": "授权码",
    "loginForm.workEmailInput.label": "公司电子邮件",
    "loginMobileNative.descriptionOfNotion.message":
      "Notion是用于<mediumfont>注释</mediumfont>、<mediumfont>操作</mediumfont>和<mediumfont>维基</mediumfont>的协作工具。",
    "loginMobileNative.footer.helpButton.label": "需要帮助吗？",
    "loginMobileNative.footer.privacyAndTermsButton.label": "隐私和条款与条件",
    "loginMobileNative.goBackButton.label": "向后",
    "loginMobileNative.welcomeMessage": "欢迎来到Notion！",
    "loginPage.pageTitle": "登录",
    "loginPage.title": "登录",
    "loginPermissions.googleContactPermissions.checkboxUnchecked.message":
      "不共享Google联系人",
    "loginPermissions.googleContactPermissions.message":
      "请求Google联系人阅读权限，以便当您在Notion中邀请或鼓励他人时，您将获得更好的体验。",
    "loomBlock.embed.caption": "与Loom可共享链接兼容",
    "loomBlock.placeholder": "Loom嵌入",
    "manageActiveSessions.confirmationModal.close": "关闭",
    "manageActiveSessions.confirmationModal.withEmail":
      "{email}已从所有其他活动会话注销。",
    "manageActiveSessions.confirmationModal.withoutEmail":
      "此帐户已从所有其他活动会话注销。",
    "manageActiveSessions.logOutActiveSessions.button": "注销",
    "manageActiveSessions.logOutActiveSessions.label":
      "除当前会话外，所有活动会话都将注销，您必须重新登录。",
    "manageActiveSessions.title": "从所有设备注销",
    "mathParseHelpers.errorPosition.message": "{position}字符",
    "mathParseHelpers.fullError.message": "{errorBody}({postfix})",
    "mathParseHelpers.syntax.error": "{token}的语法错误",
    "mathParseHelpers.tokenExpected.error": "{token}预期",
    "mathParseHelpers.unexpected.error": "意外的{token}",
    "mediaPicker.chooseFile.button.label": "选择文件",
    "mediaPicker.chooseImage.buttonText": "选择图像",
    "mediaPicker.chooseVideo.buttonText": "选择视频",
    "mediaPicker.embedPlaceholder.text": "粘贴URL(https://.)",
    "mediaPicker.embedTab.embedLinkButtonText": "链接嵌入",
    "mediaPicker.emojiFilter.text": "过滤器",
    "mediaPicker.emojiTab.random": "随机",
    "mediaPicker.errorMessage": "天哪！出现问题。",
    "mediaPicker.maximumFileSize.notice": "每个文件的最大大小为{filesize}MB。",
    "mediaPicker.menuItem.choosePagesFromAccount.label": "从{accountName}选择",
    "mediaPicker.menuItem.connectFirstGoogleAccount.caption":
      "浏览并嵌入Google Drive文件。",
    "mediaPicker.menuItem.connectFirstGoogleAccount.label": "连接Google帐户",
    "mediaPicker.menuItem.connectMoreGoogleAccounts.label": "连接其他帐户",
    "mediaPicker.mobileCloseButton.label": "关闭",
    "mediaPicker.mobileRemoveButton.label": "移除",
    "mediaPicker.tabs.browse": "浏览",
    "mediaPicker.tabs.embedLink": "链接嵌入",
    "mediaPicker.tabs.emoji": "伊莫吉",
    "mediaPicker.tabs.gallery": "画廊",
    "mediaPicker.tabs.remove": "移除",
    "mediaPicker.tabs.upload": "上载",
    "mediaPicker.unsplash.byAuthor":
      "作者：<inlinetextlink>{authorName}</inlinetextlink>",
    "mediaPicker.unsplash.noResultsText": "没有结果。",
    "mediaPicker.unsplash.searchText": "搜索以找到更多结果。",
    "mediaPicker.unsplashPlaceholder.text": "搜索图像",
    "memberSettingsButton.goOnline.prompt": "在线管理成员。",
    "memberSettingsButton.mobileMemberSettings.title": "成员",
    "memberSettingsButton.mobileSidebar.label": "成员",
    "memberSettingsButton.rightActionButton.done": "完成",
    "mentionMenu.addPage.prompt2": "输入以添加页面或页面链接。",
    "mentionMenu.botsSection.title": "机器人",
    "mentionMenu.createPageSection.title": "新建页面",
    "mentionMenu.date.autocomplete.nextTuesday": "下周二下午3点",
    "mentionMenu.date.autocomplete.reminder": "明天上午9点利马因德",
    "mentionMenu.date.autocomplete.today": "今天",
    "mentionMenu.date.prompt": "请输入您想要发言的日期。",
    "mentionMenu.date.prompt2": "请输入要声明的日期。",
    "mentionMenu.date.remindAtDateTime": "{dateTime}绑定器",
    "mentionMenu.dateSection.title": "日期",
    "mentionMenu.noSearchResults.title": "无结果",
    "mentionMenu.offlineMessage": "转到在线，讨论特定个人或页面。",
    "mentionMenu.page.prompt": "进入您想要讨论的页面。",
    "mentionMenu.page.prompt2": "输入以添加页面或页面链接。",
    "mentionMenu.pageDate.prompt": "请输入要声明的页面或日期。",
    "mentionMenu.pageDate.prompt2": "请输入要介绍的页面或日期。",
    "mentionMenu.pagesSection.title": "页数",
    "mentionMenu.pagesSection.title2": "指向页面的链接",
    "mentionMenu.peopleSection.title": "人",
    "mentionMenu.person.prompt": "输入您想要发言的用户。",
    "mentionMenu.person.prompt2": "输入您想要声明的用户。",
    "mentionMenu.personDate.prompt": "请输入您想要声明的用户或日期。",
    "mentionMenu.personDate.prompt2": "输入您想要声明的用户或日期。",
    "mentionMenu.personPage.prompt": "输入您想要进行维护的用户或页面。",
    "mentionMenu.personPage.prompt2": "输入您想要声明的用户或页面。",
    "mentionMenu.personPageDate.prompt": "输入您想要声明的用户、页面或日期。",
    "mentionMenu.personPageDate.prompt2": "输入您想要声明的用户、页面或日期。",
    "mentionMenu.showMoreResultsButton.title": "{numberMore}查看更多结果",
    "mermaidRenderer.error.seeMermaidExamples": "Mermaid示例视图",
    "mermaidRenderer.error.unknownError": "未知错误：{error}",
    "miroBlock.embeds.button.label": "Miro嵌入",
    "miroBlock.embeds.caption": "与启用公共访问的Miro链接兼容",
    "miroBlock.placeholder": "Miro嵌入",
    "mobile.dismissKeyboardBar.button.label": "完成",
    "mobile.modal.backButton": "向后",
    "mobile.modal.cancelButton": "取消",
    "mobile.modal.doneButton": "完成",
    "mobileActionBar.blockColor.modalTitle": "块颜色",
    "mobileActionBar.bold.symbol": "B",
    "mobileActionBar.code.symbol": "代码",
    "mobileActionBar.color.buttonTitle": "颜色",
    "mobileActionBar.databaseSection.title": "数据库",
    "mobileActionBar.insertBlock.modalTitle": "插入块",
    "mobileActionBar.italic.symbol": "i",
    "mobileActionBar.link.symbol": "链接",
    "mobileActionBar.more.buttonTitle": "查看更多",
    "mobileActionBar.nativeMenu.textColor.title": "颜色",
    "mobileActionBar.strikeThrough.symbol": "S",
    "mobileActionBar.templates.buttonTitle": "选择模板",
    "mobileActionBar.templates.modalTitle": "模板",
    "mobileActionBar.turnInto.buttonTitle": "切换",
    "mobileActionBar.turnInto.modalTitle": "切换",
    "mobileActionBar.underline.symbol": "U",
    "mobileCalendarDayMenu.newItemButton.label": "新建项目",
    "mobileCalendarDayMenu.noResults.message": "无条目",
    "moveBlockMenu.addFromTemplate.title": "从模板添加",
    "moveBlockMenu.addToPage.title": "添加到页面",
    "moveBlockMenu.addToPrivatePages": "<mediumtext>转到个人主页</mediumtext>",
    "moveBlockMenu.addToSpace.title": "添加到空间",
    "moveBlockMenu.currentPage.pluralAddTitle": "添加到此页面",
    "moveBlockMenu.currentPage.singleAddTitle": "添加到此页面",
    "moveBlockMenu.errorOnMove.label": "出现问题。",
    "moveBlockMenu.mobileAddTo.label": "添加到：",
    "moveBlockMenu.mobileMoveTo.label": "转移",
    "moveBlockMenu.mobileNewPageInj.label": "添加到其他页面",
    "moveBlockMenu.moveToPage.title": "转到页面",
    "moveBlockMenu.moveToPrivatePages": "<mediumtext>转到个人主页</mediumtext>",
    "moveBlockMenu.moveToSpace.title": "移动到空间",
    "moveBlockMenu.moveToTemplate.title": "转至模板",
    "moveBlockMenu.noResults.label": "无结果",
    "moveBlockMenu.recentlyAddedIn.title": "最近添加的页面",
    "moveBlockMenu.recentlyAddedTo.title": "最近添加的地点",
    "moveBlockMenu.recentlyMovedTo.title": "最近移动的地点",
    "moveBlockMenu.rightDoneButton.label": "完成",
    "moveToMenuActions.movingContent.loadingMessage": "正在移动内容.",
    "moveToMenuRenderer.addNewPageIn.label": "搜索要添加的页面",
    "moveToMenuRenderer.addTo.label": "搜索要添加的页面",
    "moveToMenuRenderer.moveTo.label": "搜索要移动的页面",
    "moveToOrCreateMenu.createSubpage.description":
      "在当前块的光标位置创建新的子页面。",
    "moveToOrCreateMenu.newPageIn.description":
      "在现有页面内创建新页面，然后一次创建链接。",
    "moveToOrCreateMenu.turnInto.description":
      "将块切换到现有数据库或页面上的新页面。",
    "newBadge.label": "新",
    "newBlock.abstract.description": "嵌入Abstract项目。",
    "newBlock.abstract.fuzzySearchKeywords": "应用软件",
    "newBlock.abstract.title": "Abstract",
    "newBlock.audio.description": "嵌入SoundCloud、Spotify等。",
    "newBlock.audio.fuzzySearchKeywords": "音响音乐",
    "newBlock.audio.title": "音频",
    "newBlock.bookmark.description": "将链接保存为可视书签。",
    "newBlock.bookmark.fuzzySearchKeywords": "Web链接书签",
    "newBlock.bookmark.title": "书签",
    "newBlock.breadcrumb.description": "显示当前页面的位置。",
    "newBlock.breadcrumb.fuzzySearchKeywords": "穿行页面路径",
    "newBlock.breadcrumb.title": "穿行",
    "newBlock.bulletedList.description": "创建一个简单的项目符号列表。",
    "newBlock.bulletedList.fuzzySearchKeywords": "未排序的项目符号列表",
    "newBlock.bulletedList.title": "项目符号列表",
    "newBlock.callout.description": "写一篇突出的文章。",
    "newBlock.callout.fuzzySearchKeywords": "注解",
    "newBlock.callout.title": "注解",
    "newBlock.code.description": "编写代码片段。",
    "newBlock.code.fuzzySearchKeywords": "代码`",
    "newBlock.code.title": "代码",
    "newBlock.codepen.description": "嵌入CodePen。",
    "newBlock.codepen.fuzzySearchKeywords": "代码笔",
    "newBlock.codepen.title": "CodePen",
    "newBlock.divider.description": "以可视方式划分块。",
    "newBlock.divider.fuzzySearchKeywords": "水平分隔线",
    "newBlock.divider.title": "分隔线",
    "newBlock.drive.description": "嵌入Google Doc、Google Sheet等。",
    "newBlock.drive.fuzzySearchKeywords": "谷歌驱动器",
    "newBlock.drive.title": "Google硬盘",
    "newBlock.embed.description": "嵌入PDF、Google Maps等。",
    "newBlock.embed.fuzzySearchKeywords": "儿童框架嵌入",
    "newBlock.embed.title": "嵌入",
    "newBlock.equation.description": "将数学公式显示为一个块。",
    "newBlock.equation.fuzzySearchKeywords": "乳胶数学公式块$$",
    "newBlock.equation.title": "数学公式块",
    "newBlock.excalidraw.description": "嵌入Excalidraw白板。",
    "newBlock.excalidraw.title": "Excalidraw",
    "newBlock.factory.description": "只需单击一下即可复制块。",
    "newBlock.factory.fuzzySearchKeywords": "“复制模板”按钮",
    "newBlock.factory.title": "“模板”按钮",
    "newBlock.figma.description": "嵌入Figma文件。",
    "newBlock.figma.fuzzySearchKeywords": "血浆",
    "newBlock.figma.title": "Figma",
    "newBlock.file.description": "上传文件或使用链接嵌入文件。",
    "newBlock.file.fuzzySearchKeywords": "文件",
    "newBlock.file.title": "文件",
    "newBlock.framer.description": "嵌入Framer原型。",
    "newBlock.framer.fuzzySearchKeywords": "弗雷默",
    "newBlock.framer.title": "Framer",
    "newBlock.fullPageBoard.description": "将看板创建为您自己的页面。",
    "newBlock.fullPageBoard.fuzzySearchKeywords": "主板-完整页面",
    "newBlock.fullPageBoard.title": "主板-完整页面",
    "newBlock.fullPageCalendar.description": "将日历创建为您自己的页面。",
    "newBlock.fullPageCalendar.fuzzySearchKeywords": "日历-整个页面",
    "newBlock.fullPageCalendar.title": "日历-整个页面",
    "newBlock.fullPageGallery.description": "将您的图库创建为您自己的页面。",
    "newBlock.fullPageGallery.fuzzySearchKeywords": "画廊-整个页面",
    "newBlock.fullPageGallery.title": "画廊-整个页面",
    "newBlock.fullPageList.description": "将列表生成到您自己的页面。",
    "newBlock.fullPageList.fuzzySearchKeywords": "列表-整个页面",
    "newBlock.fullPageList.title": "列表-整个页面",
    "newBlock.fullPageTable.description": "将表创建为您自己的页面。",
    "newBlock.fullPageTable.fuzzySearchKeywords": "表-整个页面",
    "newBlock.fullPageTable.title": "表-整个页面",
    "newBlock.fullPageTimeline.description": "将时间轴创建为您自己的页面。",
    "newBlock.fullPageTimeline.fuzzySearchKeywords": "时间轴-整个页面",
    "newBlock.fullPageTimeline.title": "时间轴-整个页面",
    "newBlock.gist.description": "嵌入GitHub Gist。",
    "newBlock.gist.fuzzySearchKeywords": "吉卜吉斯特",
    "newBlock.gist.title": "GitHub Gist",
    "newBlock.header.description": "节标题(大)",
    "newBlock.header.fuzzySearchKeywords": "标题1#",
    "newBlock.header.title": "标题1",
    "newBlock.image.description": "上传文件或使用链接嵌入文件。",
    "newBlock.image.fuzzySearchKeywords": "图片照片",
    "newBlock.image.title": "图像",
    "newBlock.inlineBoard.description": "在此页面中创建内嵌的坎班板。",
    "newBlock.inlineBoard.fuzzySearchKeywords": "板-内联",
    "newBlock.inlineBoard.title": "板-内联",
    "newBlock.inlineCalendar.description": "在此页面中创建内联日历。",
    "newBlock.inlineCalendar.fuzzySearchKeywords": "日历-内联",
    "newBlock.inlineCalendar.title": "日历-内联",
    "newBlock.inlineGallery.description": "在此页面中创建内嵌库。",
    "newBlock.inlineGallery.fuzzySearchKeywords": "画廊-内联",
    "newBlock.inlineGallery.title": "画廊-内联",
    "newBlock.inlineList.description": "在此页面中创建内嵌列表。",
    "newBlock.inlineList.fuzzySearchKeywords": "列表-内嵌",
    "newBlock.inlineList.title": "列表-内嵌",
    "newBlock.inlineTable.description": "在此页面中创建内嵌表。",
    "newBlock.inlineTable.fuzzySearchKeywords": "表-内联",
    "newBlock.inlineTable.title": "表-内联",
    "newBlock.inlineTimeline.description": "在此页面中创建内嵌时间线。",
    "newBlock.inlineTimeline.fuzzySearchKeywords": "时间轴-内联",
    "newBlock.inlineTimeline.title": "时间轴-内联",
    "newBlock.invision.description": "嵌入Invision项目。",
    "newBlock.invision.fuzzySearchKeywords": "英秘传",
    "newBlock.invision.title": "Invision(Invision)",
    "newBlock.linkToCollection.description": "创建数据库的自定义视图。",
    "newBlock.linkToCollection.fuzzySearchKeywords": "创建链接数据库",
    "newBlock.linkToCollection.title": "创建链接数据库",
    "newBlock.linkToPage.description": "链接到现有页面。",
    "newBlock.linkToPage.fuzzySearchKeywords": "指向页面的链接ltp",
    "newBlock.linkToPage.title": "指向页面的链接",
    "newBlock.loom.description": "嵌入Loom录音。",
    "newBlock.loom.fuzzySearchKeywords": "房间",
    "newBlock.loom.title": "Loom",
    "newBlock.maps.description": "嵌入Google Map。",
    "newBlock.maps.fuzzySearchKeywords": "谷歌地图",
    "newBlock.maps.title": "谷歌地图",
    "newBlock.miro.description": "嵌入Miro板。",
    "newBlock.miro.fuzzySearchKeywords": "迷宫",
    "newBlock.miro.title": "米罗",
    "newBlock.numberedList.description": "创建编号列表。",
    "newBlock.numberedList.fuzzySearchKeywords": "编号和排序列表",
    "newBlock.numberedList.title": "编号列表",
    "newBlock.page.description": "在这个页面上创建一个子页面。",
    "newBlock.page.fuzzySearchKeywords": "页数",
    "newBlock.page.title": "页数",
    "newBlock.pdf.description": "嵌入PDF。",
    "newBlock.pdf.fuzzySearchKeywords": "PDF",
    "newBlock.pdf.title": "PDF",
    "newBlock.quote.description": "写一篇引文。",
    "newBlock.quote.fuzzySearchKeywords": "引语",
    "newBlock.quote.title": "引语",
    "newBlock.replit.description": "嵌入Repl。",
    "newBlock.replit.title": "剥离",
    "newBlock.sketch.description": "嵌入Sketch文档。",
    "newBlock.sketch.fuzzySearchKeywords": "宣传册",
    "newBlock.sketch.title": "Sketch",
    "newBlock.subHeader.description": "节标题(中)",
    "newBlock.subHeader.fuzzySearchKeywords": "子标题2##",
    "newBlock.subHeader.title": "标题2",
    "newBlock.subSubHeader.description": "分项标题(小)",
    "newBlock.subSubHeader.fuzzySearchKeywords": "子标题3#",
    "newBlock.subSubHeader.title": "标题3",
    "newBlock.tableOfContents.description": "显示页面概述。",
    "newBlock.tableOfContents.fuzzySearchKeywords": "TOC目录",
    "newBlock.tableOfContents.title": "目录",
    "newBlock.text.description": "使用纯文本开始写作。",
    "newBlock.text.fuzzySearchKeywords": "纯文本",
    "newBlock.text.title": "文本",
    "newBlock.toDo.description": "用待办事项列表跟踪任务。",
    "newBlock.toDo.fuzzySearchKeywords": "待办事项、待办事项、复选框列表",
    "newBlock.toDo.title": "待办事项列表",
    "newBlock.toggle.description": "切换可隐藏和显示内容。",
    "newBlock.toggle.fuzzySearchKeywords": "切换列表",
    "newBlock.toggle.title": "切换列表",
    "newBlock.transclusionContainer.description": "同步所有页面的内容。",
    "newBlock.transclusionContainer.fuzzySearchKeywords":
      "同步块生成块参考转引传门户块嵌入",
    "newBlock.transclusionContainer.title": "同步块",
    "newBlock.tweet.description": "嵌入Tweet。",
    "newBlock.tweet.fuzzySearchKeywords": "推文",
    "newBlock.tweet.title": "Tweet",
    "newBlock.typeform.description": "嵌入Typeform。",
    "newBlock.typeform.fuzzySearchKeywords": "类型形式",
    "newBlock.typeform.title": "类型",
    "newBlock.video.description": "在YouTube、Vimeo等设备上嵌入。",
    "newBlock.video.fuzzySearchKeywords": "视频",
    "newBlock.video.title": "视频",
    "newBlock.whimsical.description": "嵌入Whimsical板。",
    "newBlock.whimsical.fuzzySearchKeywords": "硬邦邦",
    "newBlock.whimsical.title": "Whimsical",
    "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label":
      "删除",
    "newDiscussionMenu.discardCommentConfirmationDialog.prompt":
      "是否确实要删除评论？",
    "notificationActions.archiveNotificationsError.message": "出现问题。",
    "notificationSettings.desktopNotificationSettings.description":
      "立即通过桌面应用程序获得声明和推送通知。",
    "notificationSettings.desktopNotificationSettings.title": "桌面推送通知",
    "notificationSettings.emailAlwaysNotificationSettings.description":
      "使用app时，请通过电子邮件接收更新信息。",
    "notificationSettings.emailAlwaysNotificationSettings.title":
      "始终发送电子邮件通知",
    "notificationSettings.emailNotificationSettings.description":
      "通过电子邮件接收您关注的所有页面的内容、评论和编辑摘要的更新。",
    "notificationSettings.emailNotificationSettings.title": "电子邮件通知",
    "notificationSettings.helpButton.caption": "如何使用移动和桌面通知",
    "notificationSettings.mobilePushNotificationSettings.description":
      "在移动应用程序中接收关于声明和评论的推送通知。",
    "notificationSettings.mobilePushNotificationSettings.title": "移动推送通知",
    "notificationSettings.notificationSection.title": "通知",
    "notificationSettingsButton.generalSection.title": "一般",
    "notificationSettingsButton.goOnline.prompt": "在线管理您的设置。",
    "notificationSettingsButton.mobileSidebar.label": "通知和设置",
    "notificationSettingsButton.mobileSidebar.title": "通知和设置",
    "notificationSettingsButton.rightActionButton.done": "完成",
    "notificationUpdates.offline.message": "在线查看更新。",
    "notificationUpdates.unknownErrorMessage": "出现问题。",
    "notionAppContainer.dialog.mismatchedOriginURL.okayButton.label": "已确认",
    "notionAppContainer.dialog.notionAppNotInApplications.message":
      "将Notion.app移动到/Applications文件夹以运行自动更新。",
    "numberedListBlock.placeholder.label": "列表",
    "oauthAuthorizationPage.error.cancelButton.label": "取消",
    "oauthAuthorizationPage.error.clientNotFound.body":
      "客户端ID不完整或丢失。有关详细信息，请参阅<inlinetextlink>开发人员文档</inlinetextlink>。",
    "oauthAuthorizationPage.error.genericError.title": "出现问题。",
    "oauthAuthorizationPage.error.integrationAlreadyInstalled.body":
      "可以从设置中查看和删除已添加的集成。",
    "oauthAuthorizationPage.error.integrationAlreadyInstalled.openWorkspaceSettingsButton.label":
      "打开设置",
    "oauthAuthorizationPage.error.integrationAlreadyInstalled.title":
      "已经添加到{workspaceName}的集成。",
    "oauthAuthorizationPage.error.invalidClientId.body":
      "客户端ID不完整或丢失。有关详细信息，请参阅<inlinetextlink>开发人员文档</inlinetextlink>。",
    "oauthAuthorizationPage.error.invalidRedirectUri.body":
      "redirect_uri无效或丢失。有关详细信息，请参阅<inlinetextlink>开发人员文档</inlinetextlink>。",
    "oauthAuthorizationPage.error.invalidResponseType":
      "response_type无效或丢失。有关详细信息，请参阅<inlinetextlink>开发人员文档</inlinetextlink>。",
    "oauthAuthorizationPage.error.notAnAdmin.body":
      "联系管理员获取管理员访问权限或选择其他工作空间。",
    "oauthAuthorizationPage.error.notAnAdmin.switchWorkspaceButton.label":
      "选择另一个工作空间",
    "oauthAuthorizationPage.error.notAnAdmin.title":
      "您没有向{workspaceName}添加集成的权限。",
    "oauthAuthorizationPage.permissionStep.cancelButton.label": "取消",
    "oauthAuthorizationPage.permissionStep.continueButton.label": "选择页面",
    "oauthAuthorizationPage.permissionStep.finishButton.label": "允许访问",
    "oauthAuthorizationPage.permissionStep.intro":
      "<inlinetextlink>{integrationName}</inlinetextlink>集成请求以下权限：",
    "oauthAuthorizationPage.permissionStep.permissionListItem.addNewPages":
      "向{workspaceName}添加新页面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.addNewPages.details":
      "{integrationName}集成将允许您在可访问的页面内添加新页面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewAndEditPages":
      "查看和编辑所选页面",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewAndEditPages.description":
      "{integrationName}集成将允许您查看和编辑我下一步选择的页面。稍后，您也可以通过共享菜单与{integrationName}集成共享页面。",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers":
      "查看姓名和电子邮件",
    "oauthAuthorizationPage.permissionStep.permissionListItem.viewUsers.detail":
      "{integrationName}集成将允许您查看工作区中所有成员和来宾的用户名和电子邮件地址。",
    "oauthAuthorizationPage.permissionStep.title":
      "<inlinetextlink>{integrationName}</inlinetextlink>集成尝试访问{workspaceName}。",
    "oauthAuthorizationPage.permissionStep.warning.body":
      "如果继续，可能会共享敏感信息。Notion不审查第三方集成，例如{integrationName}集成。通过{integrationName}的<privacypolicylink>隐私政策</privacypolicylink>和<termsofservicelink>服务条款</termsofservicelink>查看如何处理用户数据。",
    "oauthAuthorizationPage.permissionStep.warning.title":
      "{integrationName}({redirectUriDomain})验证集成是否可信。",
    "oauthAuthorizationPage.selectPageStep.empty": "无子页",
    "oauthAuthorizationPage.selectPagesStep.backButton.label": "上一步",
    "oauthAuthorizationPage.selectPagesStep.finishButton.label": "允许访问",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.manuallyAddedPagesSection.title":
      "手动添加的页面",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.privateSection.title":
      "个人主页",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.search.placeholder":
      "在{workspaceName}中搜索页面",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.sharedSection.title":
      "共享页面",
    "oauthAuthorizationPage.selectPagesStep.pagePicker.workspaceSection.title":
      "工作空间",
    "oauthAuthorizationPage.selectPagesStep.title":
      "允许{integrationName}访问此页",
    "oauthAuthorizationPage.workspaceSwitcher.disabledWorkspace.tooltip":
      "只有具有管理员访问权限的人员才能添加此集成。",
    "oauthPageSearchResults.disabledResult.byAncestor.message":
      "已通过{ancestorPageName}页面添加",
    "oauthPageSearchResults.disabledResult.bySelf.message": "已添加",
    "oauthPageSearchResults.noResults.placeholder": "无结果",
    "offlineErrors.offlineErrorMessage": "脱机。",
    "onboarding.desktopLogoutOption.text":
      "您当前正在用{userEmail}创建帐户。{br}如果您不想创建新帐户，您可以用<closelink>其他电子邮件登录。</closelink>",
    "onboarding.workspaceCreate.buttonLabel.title": "添加徽标",
    "onboardingActions.closeOnboardingDialog.existingUser.confirmCloseButton.label":
      "返回上一个工作区",
    "onboardingActions.closeOnboardingDialog.existingUser.continueButton.label":
      "继续设置",
    "onboardingActions.closeOnboardingDialog.existingUser.subtitle":
      "您将返回到上一个工作空间页面。",
    "onboardingActions.closeOnboardingDialog.existingUser.title":
      "是否确实要取消新的工作空间设置？",
    "onboardingActions.closeOnboardingDialog.newUser.confirmCloseButton.label":
      "返回主页",
    "onboardingActions.closeOnboardingDialog.newUser.continueButton.label":
      "继续设置",
    "onboardingActions.closeOnboardingDialog.newUser.subtitle":
      "回到Notion主页。",
    "onboardingActions.closeOnboardingDialog.newUser.title":
      "是否要取消新帐户设置？",
    "onboardingActions.onboardingErrorDialog.closeButton.label": "关闭",
    "onboardingActions.onboardingErrorDialog.message": "天哪！出现问题。",
    "onboardingActions.onboardingErrorDialog.startOverButton.label": "重新启动",
    "onboardingGDPR.agreeButton.label": "同意",
    "onboardingGDPR.consentInfo.paragraph1.body":
      "使用Cookie安全地识别您的帐户、保持登录状态并改进我们的服务。",
    "onboardingGDPR.consentInfo.paragraph2.body":
      "我们使用分析工具改进产品并解决客户相关问题。这包括{intercomLink}、{amplitudeLink}、{segmentLink}、{snowflakeLink}、{crashlyticsLink}、{logglyLink}等。分析资料对于我们而言是一个重大信息，因此默认启用。",
    "onboardingGDPR.consentInfo.paragraph3.body":
      "您可以随时向{emailLink}发送电子邮件，撤销对分析材料的同意。",
    "onboardingGDPR.consentInfo.paragraph4.body":
      "我们不时发送产品更新和营销电子邮件。所有电子邮件都包含可立即取消订阅的链接。",
    "onboardingGDPR.consentInfo.paragraph5.body":
      "如需更多信息，请阅读我们的<termslink>隐私政策</termslink>。",
    "onboardingGDPR.disagreeButton.label": "拒绝",
    "onboardingGDPR.mobileAgreeButton.label": "同意",
    "onboardingGDPR.mobileDisagreeButton.label": "拒绝",
    "onboardingGDPR.step.title": "隐私和数据收集",
    "onboardingHelpers.personalWorkspaceName": "{userName}中的Notion",
    "onboardingInvite.addEmail.caption":
      "使用一个或多个电子邮件地址时，请用逗号分隔。",
    "onboardingInvite.addEmail.invitePrompt": "通过电子邮件邀请",
    "onboardingInvite.addEmail.placeholder":
      "直接输入或粘贴电子邮件地址。如果有多个的话，请用逗号隔开。",
    "onboardingInvite.chrome.subtitle": "邀请团队成员充分利用Notion。",
    "onboardingInvite.chrome.title": "邀请团队成员",
    "onboardingInvite.desktopButton.label": "连接到Notion",
    "onboardingInvite.desktopButton.labelWithAction": "邀请后继续",
    "onboardingInvite.email.placeholder": "电子邮件地址",
    "onboardingInvite.emailDomainAutoJoinCheckbox.label":
      "如果电子邮件域为<b>@{emailDomain}</b>，则允许参与此工作空间",
    "onboardingInvite.emails.addAnotherButtonText": "添加其他电子邮件",
    "onboardingInvite.error.invalidEmailFound.message":
      "一个或多个电子邮件无效。",
    "onboardingInvite.invalidEmails.error.message":
      "一些电子邮件似乎无效。再试一下吗？",
    "onboardingInvite.mobile.copyButton.title": "复制邀请链接",
    "onboardingInvite.mobileButton.label": "继续",
    "onboardingInvite.mobileStep.subtitle":
      "Notion是适合任何团队规模的绝佳解决方案。",
    "onboardingInvite.mobileStep.title": "邀请团队成员",
    "onboardingInvite.shareInviteLink.caption":
      "将单击此链接的团队成员自动添加到工作区。",
    "onboardingInvite.shareInviteLink.message": "共享秘密邀请链接",
    "onboardingInvite.sharingButton.copied": "复制完成！",
    "onboardingInvite.sharingButton.copy": "获取可共享链接",
    "onboardingInvite.sharingButton.tooltip.copy": "使用此链接邀请团队成员",
    "onboardingInviteNew.error.invalidEmail.message": "电子邮件无效。",
    "onboardingMobileScroller.continueButton.label": "继续",
    "onboardingMobileTutorial.getStartedButton.label": "开始",
    "onboardingMobileTutorial.nextButton.label": "下一个",
    "onboardingPopup.next": "下一个",
    "onboardingPopup.skip": "跳过剩余内容",
    "onboardingProfile.addProfilePhotoButton.label": "添加照片",
    "onboardingProfile.changeProfilePhotoButton.label": "变更",
    "onboardingProfile.continueButton.label": "继续",
    "onboardingProfile.dialogError.photoUploadFailure.message": "上传失败。",
    "onboardingProfile.fieldUndefinedError.message": "未定义配置文件字段。",
    "onboardingProfile.firstNameInput.label": "名称",
    "onboardingProfile.firstNameInput.placeholder": "吉童",
    "onboardingProfile.lastNameInput.label": "城堡",
    "onboardingProfile.lastNameInput.placeholder": "红",
    "onboardingProfile.mobileFirstNameInput.label": "名称",
    "onboardingProfile.mobileFirstNameInput.placeholder": "吉童",
    "onboardingProfile.mobileLastNameInput.label": "城堡",
    "onboardingProfile.mobileLastNameInput.placeholder": "红",
    "onboardingProfile.mobileNameInput.placeholder": "爱达爱比赛",
    "onboardingProfile.mobileNameQuestion.label": "您要用什么名字？",
    "onboardingProfile.mobileStage.subtitle": "首先，请简要介绍一下本人。",
    "onboardingProfile.mobileStage.title": "欢迎使用Notion",
    "onboardingProfile.nameInput.placeholder": "爱达爱比赛",
    "onboardingProfile.nameQuestion.label": "您要用什么名字？",
    "onboardingProfile.passwordGuidelines":
      "使用至少15个字符或至少10个字符的字符和数字组合作为密码。",
    "onboardingProfile.passwordInput.label": "设置密码",
    "onboardingProfile.passwordInput.placeholder": "新口令",
    "onboardingProfile.stage.subtitle": "首先，请简要介绍一下本人。",
    "onboardingProfile.stage.title": "欢迎使用Notion",
    "onboardingProfile.uploading.text": "正在上载.",
    "onboardingStateActions.creatingWorkspace.loadingMessage": "正在准备.",
    "onboardingStateActions.errorMessage.noActionToPerform":
      "{onboardingRedirectType}没有需要在工作空间或页面上执行的任务。",
    "onboardingStateActions.joiningWorkspace.loadingMessage":
      "正在参与团队..。",
    "onboardingTeamRoleSelect.teamRoleSelect.companyLead": "C级或VP级",
    "onboardingTeamRoleSelect.teamRoleSelect.notLead": "不管理团队",
    "onboardingTeamRoleSelect.teamRoleSelect.orgLead": "部门负责人",
    "onboardingTeamRoleSelect.teamRoleSelect.placeholder": "选择团队角色",
    "onboardingTeamRoleSelect.teamRoleSelect.teamLead": "组长",
    "onboardingTeamRoleSelect.teamTypeMenu.title": "团队类型",
    "onboardingWorkspaceChoose.createSpaceOption.message": "创建新的工作空间",
    "onboardingWorkspaceChoose.joinWorkspaceButton.label":
      "<boldtext>{workspaceName}</boldtext>参与",
    "onboardingWorkspaceChoose.mobileStage.subtitle":
      "{numberOfWorkspaces，plural，other{{br}参加您邀请的<boldtext>{numberOfWorkspaces}个工作空间</boldtext>之一！}}",
    "onboardingWorkspaceChoose.mobileStage.title": "参与工作区",
    "onboardingWorkspaceChoose.stage.subtitle":
      "受邀加入{numberOfWorkspaces、plural、other{{numberOfWorkspaces}工作空间。加入此工作空间或创建新的工作空间。}}",
    "onboardingWorkspaceChoose.stage.title": "加入加入Notion的团队成员。",
    "onboardingWorkspaceCreate.companySizePicker.label": "选择公司规模",
    "onboardingWorkspaceCreate.companySizePicker.placeholder": "公司规模",
    "onboardingWorkspaceCreate.companySizePicker.title": "公司规模",
    "onboardingWorkspaceCreate.fieldUndefinedError.message":
      "未定义工作区创建字段。",
    "onboardingWorkspaceCreate.initialUseCase.docNotesLabel": "注释和文档",
    "onboardingWorkspaceCreate.initialUseCase.projectManagementLabel":
      "项目和操作",
    "onboardingWorkspaceCreate.initialUseCase.wikiLabel": "蒂姆·维基",
    "onboardingWorkspaceCreate.nextButton.labelInvite": "继续",
    "onboardingWorkspaceCreate.roleOnTeam.label": "在团队中的角色",
    "onboardingWorkspaceCreate.rolePicker.label": "我的角色",
    "onboardingWorkspaceCreate.rolePicker.placeholder": "选择角色",
    "onboardingWorkspaceCreate.stage.subtitle": "输入工作空间的详细信息。",
    "onboardingWorkspaceCreate.stage.team.title": "创建团队工作空间",
    "onboardingWorkspaceCreate.teamTypeMenu.title": "团队类型",
    "onboardingWorkspaceCreate.teamTypePicker.label": "团队类型",
    "onboardingWorkspaceCreate.teamTypePicker.placeholder": "选择团队类型",
    "onboardingWorkspaceCreate.useCase.label": "使用Notion的目的",
    "onboardingWorkspaceCreate.workspaceNameInput.hint": "公司或组织名称",
    "onboardingWorkspaceCreate.workspaceNameInput.label": "工作空间名称",
    "onboardingWorkspaceCreate.workspaceNameInput.placeholder": "神田株式会社",
    "onboardingWorkspaceMobileScroller.mobileCancelButton.label": "取消",
    "onboardingWorkspacePlanChoose.continueButton.label": "继续",
    "onboardingWorkspacePlanChoose.goToNotionButton.label": "转到Notion",
    "onboardingWorkspacePlanChoose.mobileStep.subtitle":
      "根据使用目的简化初始设置。",
    "onboardingWorkspacePlanChoose.mobileStep.title": "使用Notion的目的",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.callout":
      "向个人用户免费提供",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.description":
      "写更好的文章。清晰思考，有条不紊地管理。",
    "onboardingWorkspacePlanChoose.personalUseCaseButton.label": "个人",
    "onboardingWorkspacePlanChoose.step.subtitle": "根据使用目的简化初始设置。",
    "onboardingWorkspacePlanChoose.step.title": "你打算用Notion做什么？",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.callout": "免费试用",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.description":
      "与团队成员一起处理文档、项目和维基。",
    "onboardingWorkspacePlanChoose.teamUseCaseButton.label": "团队用",
    "onboardingWorkspaceUseCaseSetup.continueButton.label": "继续",
    "onboardingWorkspaceUseCaseSetup.goToNotionButton.label": "连接到Notion",
    "onboardingWorkspaceUseCaseSetup.mobileStep.title": "使用Notion的目的",
    "onboardingWorkspaceUseCaseSetup.notesUseCaseButton.description":
      "记下你的想法，然后和团队成员分享一下。",
    "onboardingWorkspaceUseCaseSetup.notesUseCaseButton.label": "文档和注释",
    "onboardingWorkspaceUseCaseSetup.notesUseCaseButtonPersonal.label":
      "注释和整理",
    "onboardingWorkspaceUseCaseSetup.notesUseCasePersonal.description":
      "整理笔记、书签、食谱等。",
    "onboardingWorkspaceUseCaseSetup.personalUseCaseButton.callout":
      "导入的地方：",
    "onboardingWorkspaceUseCaseSetup.segmentedButton.personalLabel": "个人",
    "onboardingWorkspaceUseCaseSetup.segmentedButton.teamLabel": "团队用",
    "onboardingWorkspaceUseCaseSetup.selectAllUseCases.label": "全选",
    "onboardingWorkspaceUseCaseSetup.selectUseCases.label": "选择使用案例",
    "onboardingWorkspaceUseCaseSetup.step.title": "你打算用Notion做什么？",
    "onboardingWorkspaceUseCaseSetup.taskUseCaseButton.description":
      "视觉规划。项目联系人和截止日期一览无余。",
    "onboardingWorkspaceUseCaseSetup.taskUseCaseButton.label": "项目和操作",
    "onboardingWorkspaceUseCaseSetup.taskUseCaseButtonPersonal.description":
      "在一个地方跟踪待办事项清单和提醒符。",
    "onboardingWorkspaceUseCaseSetup.taskUseCaseButtonPersonal.label":
      "待办事项和项目",
    "onboardingWorkspaceUseCaseSetup.teamUseCaseButton.callout": "替换",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButton.callout":
      "&nbsp；HTML和Markdown",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButton.description":
      "将团队的所有知识记录在Notion中。",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButton.label": "蒂姆·维基",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButtonPersonal.description":
      "建立您自己的主页或与这个世界共享的网站。",
    "onboardingWorkspaceUseCaseSetup.wikiUseCaseButtonPersonal.label":
      "网站和维基",
    "outliner.NoPagesInside.placeholder": "没有子页面",
    "outlinerToggleButton.popup.buttonText": "已确认",
    "outlinerToggleButton.popup.skipText": "清除模板",
    "outlinerViewAllMenuList.addToSidebar.tooltip": "添加到侧边栏",
    "outlinerViewAllMenuList.removeFromSidebar.tooltip": "从侧边栏移除",
    "outlinerViewAllPopover.menu.header": "共享页面",
    "outlinerViewAllPopover.search.noMatchesPrompt": "无页面",
    "outlinerViewAllPopover.search.placeholder": "搜索共享页面",
    "page.backlinks.label": "链接到此页",
    "page.backlinks.more": "外{count}个",
    "page.backlinks.privatePages": "{count，plural，other{{count}个个人主页}}",
    "page.backlinks.privatePagesTooltip": "无法访问的页面是同步的。",
    "page.blockActionMenu.tooltip": "重命名、删除等.",
    "page.changeIcon.tooltip": "替换图标",
    "page.linkToOriginalPage.tooltip": "原始页面的链接。",
    "pageCover.changeCover.text": "更改选取框",
    "pageCover.embedType.buttonText": "提交",
    "pageCover.embedType.caption": "与Web上的所有图像兼容。",
    "pageCover.embedType.placeholder": "粘贴图像链接",
    "pageCover.embedType.title": "链接",
    "pageCover.errorDialogMessage.uploadFailed": "上载失败",
    "pageCover.fileType.caption": "{idealImageWidth}像素以上的图像是最理想的。",
    "pageCover.formatSelectMenu.noResults.message": "无结果",
    "pageCover.gradientCategory.header": "颜色和渐变色",
    "pageCover.gradients10.title": "渐变10",
    "pageCover.gradients11.title": "渐变11",
    "pageCover.gradients2.title": "渐变2",
    "pageCover.gradients3.title": "渐变3",
    "pageCover.gradients4.title": "渐变4",
    "pageCover.gradients5.title": "渐变5",
    "pageCover.gradients8.title": "渐变8",
    "pageCover.metArnoldBocklin1880.subtitle": "1880，亡者岛",
    "pageCover.metArnoldBocklin1880.title": "阿诺德·杰克林",
    "pageCover.metBruegel1565.subtitle": "1565",
    "pageCover.metBruegel1565.title": "大彼得·布鲁歇",
    "pageCover.metCamillePissarro1896.subtitle": "1896，早晨，阴天，琅琅",
    "pageCover.metCamillePissarro1896.title": "卡米尤·皮萨罗",
    "pageCover.metCanaletto1720.subtitle": "1720年代",
    "pageCover.metCanaletto1720.title": "卡纳莱托",
    "pageCover.metCategory.header": "大都会艺术博物馆",
    "pageCover.metCezanne1890.subtitle": "1890，含苹果和樱桃花的静物",
    "pageCover.metCezanne1890.title": "保罗·塞赞",
    "pageCover.metEdgarDegas1874.subtitle": "1874，芭蕾舞课",
    "pageCover.metEdgarDegas1874.title": "埃德加·德加",
    "pageCover.metEmanuelLeutze.subtitle": "1851，华盛顿穿越特拉华河",
    "pageCover.metEmanuelLeutze.title": "埃曼纽尔·罗伊切",
    "pageCover.metFitzHenryLane.subtitle": "1854，进入纽约港的金州",
    "pageCover.metFitzHenryLane.title": "菲茨·亨利·莱恩",
    "pageCover.metFredericEdwinChurch1871.subtitle": "1871，帕台农",
    "pageCover.metFredericEdwinChurch1871.title": "弗雷德里克·埃德温消灭",
    "pageCover.metGeorgesSeurat1884.subtitle": "1884，大贾特岛的星期日下午",
    "pageCover.metGeorgesSeurat1884.title": "乔治·瑟拉",
    "pageCover.metGerome1890.subtitle": "1890，皮格马里昂和加拉泰亚",
    "pageCover.metGerome1890.title": "让·莱昂·杰罗姆",
    "pageCover.metGoya1789.subtitle": "1787",
    "pageCover.metGoya1789.title": "高野",
    "pageCover.metHenriRousseau1907.subtitle": "1907，狮子餐",
    "pageCover.metHenriRousseau1907.title": "亨利·卢索",
    "pageCover.metHenriTl1892.subtitle": "1892，迪邦·贾波内",
    "pageCover.metHenriTl1892.title": "亨利·德·图卢兹·罗特莱克",
    "pageCover.metHenryLerolle1885.subtitle": "1885，风琴排练",
    "pageCover.metHenryLerolle1885.title": "亨利·勒罗尔",
    "pageCover.metHoracePippin.subtitle": "1945，维多利亚内饰I",
    "pageCover.metHoracePippin.title": "霍蕾斯·皮芬",
    "pageCover.metJeanBeraud.subtitle": "1877，巴黎圣菲利佩-杜鲁尔教堂的星期日",
    "pageCover.metJeanBeraud.title": "让·维罗",
    "pageCover.metJohnSingerSargentMorocco.subtitle": "1879，摩洛哥",
    "pageCover.metJohnSingerSargentMorocco.title": "约翰·辛格·萨泽特",
    "pageCover.metJosephHidley1870.subtitle": "1870，纽约波斯坦基尔风景",
    "pageCover.metJosephHidley1870.title": "约瑟夫·希德利",
    "pageCover.metJulesTavernier1878.subtitle":
      "1878，加州克利尔湖地下轮棚的舞蹈",
    "pageCover.metJulesTavernier1878.title": "朱尔斯·塔伯尼耶",
    "pageCover.metKlimt1912.subtitle": "1912",
    "pageCover.metKlimt1912.title": "古斯塔夫·克里姆特",
    "pageCover.metPatternsCategory.header": "大都会艺术博物馆-图案",
    "pageCover.metPaulSignac.subtitle": "1891，康卡诺，晚餐灸",
    "pageCover.metPaulSignac.title": "保罗·西尼亚克",
    "pageCover.metSilkKashanCarpet.subtitle": "16世纪",
    "pageCover.metSilkKashanCarpet.title": "丝绸卡尚地毯",
    "pageCover.metTerracottaFuneraryPlaque.subtitle": "前520-510年左右",
    "pageCover.metTerracottaFuneraryPlaque.title":
      "兵马俑纪念墓碑雕塑作品(Terracotta funerary plaque)",
    "pageCover.metTheUnicornInCaptivity.subtitle": "1495-1505年左右",
    "pageCover.metTheUnicornInCaptivity.title": "被俘获的独角兽",
    "pageCover.metVincentVanGoghCradle.subtitle": "1889，摇摇篮的女人",
    "pageCover.metVincentVanGoghCradle.title": "文森特·梵高",
    "pageCover.metVincentVanGoghGinoux.subtitle": "1890，乙妇:约瑟夫·吉努夫人",
    "pageCover.metVincentVanGoghGinoux.title": "文森特·梵高",
    "pageCover.metVincentVanGoghIrises.subtitle": "1890，毛笔花",
    "pageCover.metVincentVanGoghIrises.title": "文森特·梵高",
    "pageCover.metVincentVanGoghOleanders.subtitle": "1888，带夹竹刀的静物",
    "pageCover.metVincentVanGoghOleanders.title": "文森特·梵高",
    "pageCover.metWilliamMorris1875.subtitle": "1875，金盏花",
    "pageCover.metWilliamMorris1875.title": "威廉·莫里斯",
    "pageCover.metWilliamMorris1877Willow.subtitle": "1875，柳枝",
    "pageCover.metWilliamMorris1877Willow.title": "威廉·莫里斯",
    "pageCover.metWilliamMorris1878.subtitle": "1878，鸟",
    "pageCover.metWilliamMorris1878.title": "威廉·莫里斯",
    "pageCover.metWilliamTurner1835.subtitle":
      "1835，从麦当娜德拉萨鲁特的门廊眺望威尼斯",
    "pageCover.metWilliamTurner1835.title": "威廉·特纳",
    "pageCover.metWinslowHomerMaineCoast.subtitle": "1896，梅恩海岸",
    "pageCover.metWinslowHomerMaineCoast.title": "温斯洛·荷马",
    "pageCover.metWoodcutsCategory.header": "大都会艺术博物馆-日本印花",
    "pageCover.mobileMenu.title": "页面封面",
    "pageCover.nasaBruceMccandlessSpacewalk.title":
      "布鲁斯·麦克坎德莱斯·Spacework",
    "pageCover.nasaBuzzAldrinOnTheMoon.subtitle": "1969年",
    "pageCover.nasaBuzzAldrinOnTheMoon.title": "伯斯·奥尔德林登月",
    "pageCover.nasaCarinaNebula.title": "龙骨座",
    "pageCover.nasaCategory.header": "NASA Archive(NASA Archive)",
    "pageCover.nasaEagleInLunarOrbit.subtitle": "1969年",
    "pageCover.nasaEagleInLunarOrbit.title": "月球公转轨道的鹰",
    "pageCover.nasaEarthGrid.title": "地球栅格",
    "pageCover.nasaEvaDuringSkylab3.subtitle": "1973年",
    "pageCover.nasaEvaDuringSkylab3.title": "天空实验室3号EVA",
    "pageCover.nasaFingerprintsOfWaterOnTheSand.title": "沙上的水",
    "pageCover.nasaGreatSandyDesertAustralia.subtitle": "2013年",
    "pageCover.nasaGreatSandyDesertAustralia.title": "大沙沙漠，澳大利亚",
    "pageCover.nasaIbmType704.subtitle": "1957",
    "pageCover.nasaIbmType704.title": "IBM Type 704",
    "pageCover.nasaMultiAxisGimbleRig.subtitle": "1959",
    "pageCover.nasaMultiAxisGimbleRig.title": "多轴金布尔装备",
    "pageCover.nasaNewYorkCityGrid.title": "纽约城市网格",
    "pageCover.nasaOrionNebula.subtitle": "1994年",
    "pageCover.nasaOrionNebula.title": "猎户座星云",
    "pageCover.nasaReducedGravityWalkingSimulator.subtitle": "1963",
    "pageCover.nasaReducedGravityWalkingSimulator.title":
      "在减少的重力中行走的模拟器",
    "pageCover.nasaRobertStewartSpacewalk.title": "罗伯特·斯图尔特·太空行走",
    "pageCover.nasaRobertStewartSpacewalk2.title": "罗伯特·斯图尔特·太空行走",
    "pageCover.nasaSpaceShuttleChallenger.subtitle": "1985",
    "pageCover.nasaSpaceShuttleChallenger.title": "太空梭挑战者",
    "pageCover.nasaSpaceShuttleColumbia.subtitle": "1986",
    "pageCover.nasaSpaceShuttleColumbia.title": "太空梭哥伦比亚",
    "pageCover.nasaSpaceShuttleColumbiaAndSunrise.subtitle": "1983",
    "pageCover.nasaSpaceShuttleColumbiaAndSunrise.title":
      "太空梭哥伦比亚和日出",
    "pageCover.nasaTheBlueMarble.subtitle": "1972",
    "pageCover.nasaTheBlueMarble.title": "蓝色漫威",
    "pageCover.nasaTimPeakeSpacewalk.title": "团队峰太空行走",
    "pageCover.nasaTransonicTunnel.subtitle": "1990年",
    "pageCover.nasaTransonicTunnel.title": "特兰索尼克隧道",
    "pageCover.nasaWrightsFirstFlight.subtitle": "1903",
    "pageCover.nasaWrightsFirstFlight.title": "灯光的首飞",
    "pageCover.reposition.cancelText": "取消",
    "pageCover.reposition.text": "重新定位",
    "pageCover.rijksmuseumAvercamp1608.subtitle": "1608，冬季风景，有滑冰的人",
    "pageCover.rijksmuseumAvercamp1608.title": "亨德里克·阿伯坎普",
    "pageCover.rijksmuseumAvercamp1620.subtitle": "1620，在城镇附近滑冰的人",
    "pageCover.rijksmuseumAvercamp1620.title": "亨德里克·阿伯坎普",
    "pageCover.rijksmuseumCategory.header": "阿姆斯特丹国立美术馆",
    "pageCover.rijksmuseumClaesz1628.subtitle":
      "1628，斯皮纳里奥所在的巴尼塔斯静物画",
    "pageCover.rijksmuseumClaesz1628.title": "彼得·克拉斯",
    "pageCover.rijksmuseumJanLievens1627.subtitle": "1627，有书的静物画",
    "pageCover.rijksmuseumJanLievens1627.title": "扬·利文斯",
    "pageCover.rijksmuseumJansz1636.subtitle": "1636，哈莱姆的城堡傻瓜教堂内",
    "pageCover.rijksmuseumJansz1636.title": "彼得·扬斯",
    "pageCover.rijksmuseumJansz1637.subtitle":
      "1637，尤特列希特的马里亚克尔克教堂",
    "pageCover.rijksmuseumJansz1637.title": "彼得·扬斯",
    "pageCover.rijksmuseumJansz1641.subtitle":
      "1637，尤特列希特的马里亚克尔克教堂正殿和圣歌台",
    "pageCover.rijksmuseumJansz1641.title": "彼得·扬斯",
    "pageCover.rijksmuseumJansz1649.subtitle":
      "1649，阿森德尔夫特的城堡奥杜普斯克教堂内",
    "pageCover.rijksmuseumJansz1649.title": "彼得·扬斯",
    "pageCover.rijksmuseumMignons1660.subtitle": "1660，有花和钟的静物",
    "pageCover.rijksmuseumMignons1660.title": "亚伯拉罕·米尼翁",
    "pageCover.rijksmuseumRembrandt1642.subtitle": "1642，夜景",
    "pageCover.rijksmuseumRembrandt1642.title": "伦勃朗·范莱恩",
    "pageCover.rijksmuseumVermeerTheMilkmaid.subtitle": "1660，倒牛奶的女人",
    "pageCover.rijksmuseumVermeerTheMilkmaid.title": "约翰内斯·费梅耶",
    "pageCover.savePosition.text": "保存位置",
    "pageCover.solidBeige.title": "米色",
    "pageCover.solidBlue.title": "蓝色",
    "pageCover.solidRed.title": "红色",
    "pageCover.solidYellow.title": "黄色",
    "pageCover.woodcuts1.subtitle": "1830，神奈川海滩的巨浪下",
    "pageCover.woodcuts1.title": "胜鹿北斋",
    "pageCover.woodcuts10.subtitle": "1840，龟山",
    "pageCover.woodcuts10.title": "胜鹿北斋",
    "pageCover.woodcuts11.subtitle": "1900，燕子和山茶",
    "pageCover.woodcuts11.title": "伊藤佐久中",
    "pageCover.woodcuts13.subtitle": "1858，从备前之国眺望的汤家山",
    "pageCover.woodcuts13.title": "宇田川广重",
    "pageCover.woodcuts14.subtitle": "1830，从犬目路眺望富士山",
    "pageCover.woodcuts14.title": "胜鹿北斋",
    "pageCover.woodcuts15.subtitle": "1842，草津站",
    "pageCover.woodcuts15.title": "葛饰北斋",
    "pageCover.woodcuts16.subtitle": "塞塔的日落",
    "pageCover.woodcuts16.title": "葛饰北斋",
    "pageCover.woodcuts2.subtitle": "1830，富士山下的风暴",
    "pageCover.woodcuts2.title": "胜鹿北斋",
    "pageCover.woodcuts3.subtitle": "1830，南风，晴朗的天空",
    "pageCover.woodcuts3.title": "胜鹿北斋",
    "pageCover.woodcuts4.subtitle": "1842，科伊鲤鱼",
    "pageCover.woodcuts4.title": "京彩爱善",
    "pageCover.woodcuts5.subtitle": "1878，江户郊区的街头冬日傍晚景观",
    "pageCover.woodcuts5.title": "小林清一香",
    "pageCover.woodcuts6.subtitle": "1850，从乌苏这条路眺望浅间山风景",
    "pageCover.woodcuts6.title": "胜鹿北斋",
    "pageCover.woodcuts7.subtitle": "1833，京都，三条大桥",
    "pageCover.woodcuts7.title": "胜鹿北斋",
    "pageCover.woodcuts8.subtitle": "1830，海地区的三岛路",
    "pageCover.woodcuts8.title": "胜鹿北斋",
    "pageCover.woodcuts9.subtitle": "1830，怀地的柏泽",
    "pageCover.woodcuts9.title": "葛饰北斋",
    "pageCover.woodcutsSekka1.subtitle": "1909，旋涡的眼睛(Dwarrelende sneeuw)",
    "pageCover.woodcutsSekka1.title": "上坂濑香",
    "pageCover.woodcutsSekka2.subtitle":
      "1903，烧香工具(Wierook benodigdheden)",
    "pageCover.woodcutsSekka2.title": "上坂濑香",
    "pageCover.woodcutsSekka3.subtitle": "1909，伦特",
    "pageCover.woodcutsSekka3.title": "上坂濑香",
    "pageDescription.emptyPlaceholder": "请添加说明。",
    "pageDescription.lockedTooltip.message":
      "解锁{pageTitleWithIcon}以编辑说明。",
    "pageErrorIndicator.loadingError.message":
      "很抱歉。加载页面时出错。要再试一次，请刷新。",
    "pageLockIndicator.lockedButton.label": "锁定",
    "pageLockIndicator.lockedTooltip":
      "{lockedByPerson}{br}已锁定，以防止意外编辑。{br}<prompttext>单击以解锁。</prompttext>",
    "pageLockIndicator.mobileLockedButton.label": "锁定",
    "pageLockIndicator.mobileRelockButton.label": "重新锁定",
    "pageLockIndicator.relockButton.label": "重新锁定",
    "pageMentionOverlay.openPage": "打开页面",
    "pageMoreButton.wordCount.caption": "字数{count}",
    "pageOfflineIndicator.hasLocalData.message":
      "联机并加载此页面后，即使您处于脱机状态，您仍然可以访问该页面。",
    "pageOfflineIndicator.noLocalData.message":
      "很抱歉。好像离线了。要查看此页面，请在线查看。",
    "pagePermissionItem.allowComments.setting": "允许评论",
    "pagePermissionItem.allowComments.tooltip":
      "所有登录的Notion用户都可以在此页上发表评论。",
    "pagePermissionItem.allowDuplicateTemplate.setting": "允许复制模板",
    "pagePermissionItem.allowDuplicateTemplate.tooltip":
      "如果允许，其他人可以在工作空间中复制公共页面。",
    "pagePermissionItem.allowEdits.setting": "允许编辑",
    "pagePermissionItem.allowEdits.tooltip":
      "所有登录的Notion用户都可以编辑此页面。与信任的人分享秘密链接。",
    "pagePermissionItem.allowSearchEngine.tooltip":
      "如果允许，公共页面可能会出现在搜索引擎中，比如Google。但前提是您或其他人从Web上链接了该页面。",
    "pagePermissionItem.allowSearchEngines.setting": "搜索引擎索引",
    "pagePermissionItem.copiedLinkButton.label": "§复制完成",
    "pagePermissionItem.copyPageLinkButton.label": "复制页面链接",
    "pagePermissionItem.inheritedRecordPermissions.setting":
      "{linkBoxWithPageTitle}基于",
    "pagePermissionItem.learnMore.tooltip": "点击查看更多信息。",
    "pagePermissionItem.searchEngineUpgradeTooltip.caption":
      "搜索引擎结果将显示您的页面。",
    "pagePermissionItem.searchEngineUpgradeTooltip.title":
      "升级以启用搜索引擎索引。",
    "pagePermissionItem.sharePageLinkButton.label": "共享页面链接",
    "pagePermissionItem.showLinkOptions.label": "查看链接选项",
    "pagePermissionItem.upgrade.tooltip": "升级以使用此功能。",
    "pageSearchResults.noResults.placeholder": "无搜索结果",
    "pageShareMenu.copiedLinkButton.label": "§复制完成",
    "pageShareMenu.copyLinkButton.label": "复制链接",
    "pageShareMenu.copyMaybePublicLinkButton.label": "复制",
    "pageShareMenu.copyPageLinkButton.label": "复制页面链接",
    "pageShareMenu.restrictedAccessBanner.label":
      "访问受到限制。此页面可能未共享给有权访问{linkBoxWithPageTitle}的所有成员。",
    "pageShareMenu.restrictedAccessBanner.restore": "恢复",
    "pageShareMenu.sharePageLinkButton.label": "共享页面链接",
    "pageSnapshotPreview.unknownPreviewLoadError.message": "出现问题。",
    "pageTemplateModal.goToFullTemplateGalleryButton.label": "查看更多模板",
    "pageTemplateModal.mobileModal.title": "试试这个模板。",
    "pageTemplateModal.mobileModal.useButton.label": "使用",
    "pageTemplateModal.modifiedTemplateDialog.discardEditsButton.label": "删除",
    "pageTemplateModal.modifiedTemplateDialog.prompt":
      "模板已修改。是否保存编辑？",
    "pageTemplateModal.modifiedTemplateDialog.saveButton.label": "保存编辑",
    "pageTemplateModal.useTemplateButton.label": "使用此模板",
    "pageTemplatePreview.offline.message": "在线查看此模板。",
    "pageTitle.desktopAppTitle.untitledPage": "无标题",
    "pageTitle.flaggedContent": "已标记的内容",
    "pageTitle.untitledPlaceholder": "无标题",
    "pageViewBlock.add.pageComment": "添加评论",
    "pageViewBlock.add.pageCommentMobile": "评论",
    "pageViewBlock.add.pageCover": "添加选取框",
    "pageViewBlock.add.pageCoverMobile": "罩子",
    "pageViewBlock.add.pageIcon": "添加图标",
    "pageViewBlock.add.pageIconMobile": "“图标”",
    "pageViewBlock.addDescription.button": "添加注释",
    "pageViewBlock.addDescription.mobileButton": "说明",
    "pageViewBlock.collectionHeader.navigate.tooltip": "点击进入原始数据库。",
    "pageViewBlock.editingPageBanner.status": "现在，您可以编辑此页面。",
    "pageViewBlock.editingPageBanner.stop": "编辑完成",
    "pageViewBlock.evernoteBanner.contents":
      "已完成导入注释{totalNumberOfNotes}个{importedNumberOfNotes}",
    "pageViewBlock.hideDescription.button": "隐藏说明",
    "pageViewBlock.movedPageBanner.ancestorMovedMessage":
      "{movedAncestorLink}的改变位置是{targetSpaceLink}。",
    "pageViewBlock.movedPageBanner.pageMovedMessage":
      "此页面更改的位置为{targetSpaceLink}。",
    "pageViewBlock.resolvedComments.menuTabTitle": "已解决的评论",
    "pageViewBlock.show.backlinks":
      "{numberOfBacklinks，plural，other{{numberOfBacklinks}个反向链接}}",
    "pageViewBlock.show.backlinks.tooltip": "显示链接到此页的其他页面",
    "pageViewBlock.show.pageComments":
      "{numberOfComments，plural，other{评论{numberOfComments}条}}",
    "pageViewBlock.showDescription.button": "显示说明",
    "pageViewBlock.showDescription.mobileButton": "说明",
    "pageViewBlock.showResolvedComments.button":
      "{numberOfResolvedComments，plural，other{{numberOfResolvedComments}个已解决的评论}}",
    "pageViewBlock.templatePageBanner.backButton.label": "向后",
    "pageViewBlock.templatePageBanner.editTemplateLabel":
      "{pageTitleWithIcon}<mediumtext>正在编辑我的模板</mediumtext>",
    "pageViewBlock.templatePageBanner.learnMoreLink": "查看更多",
    "pageViewBlock.templatePageBanner.mobile.editTemplateLabel":
      "{pageTitleWithIcon}<mediumtext>我的模板</mediumtext>",
    "pageViewBlock.trashBanner.deletePermanentlyButton.label": "永久删除",
    "pageViewBlock.trashBanner.message": "此页面位于回收站中。",
    "pageViewBlock.trashBanner.restoreButton.label": "恢复页面",
    "pageViewBlock.trashBanner.restoreCurrentPageButton.label": "还原当前页面",
    "pageViewBlock.trashBanner.restoreLastVersionButton.label": "还原早期版本",
    "pageViewBlock.untitledPage.placeholder": "无标题",
    "passwordChangeNotificationEmail.changePassword.message":
      "使用新密码以您的电子邮件地址({emailAddress})登录Notion。",
    "passwordChangeNotificationEmail.newPasswordSet.headline":
      "设置了Notion密码！",
    "passwordChangeNotificationEmail.newPasswordSet.subjectLine":
      "新密码已经生成。",
    "passwordChangeNotificationEmail.passwordChanged.headline":
      "已成功更改Notion密码。",
    "passwordChangeNotificationEmail.passwordChanged.subjectLine":
      "密码更改了。",
    "passwordChangeNotificationEmail.passwordRemoved.headline":
      "已删除Notion密码。",
    "passwordChangeNotificationEmail.passwordRemoved.subjectLine":
      "密码已删除。",
    "passwordChangeNotificationEmail.setPassword.message":
      "您现在可以使用您的电子邮件地址({emailAddress})和新密码访问工作区。",
    "passwordResetEmail.clickToResetPassword.message": "单击此处重置密码。",
    "passwordResetEmail.emailSubject": "重设密码",
    "passwordResetEmail.emailText.message":
      "请访问此链接{resetUrl}以重置密码。",
    "passwordResetEmail.emailTitle": "重设Notion密码",
    "passwordResetEmail.noResetRequested.message":
      "如果您没有请求重置，请不要担心。你可以忽略这封邮件。",
    "passwordSettings.changePasswordButton.label": "更改密码",
    "passwordSettings.changePasswordModal.newPasswordMismatchError":
      "新密码不匹配。",
    "passwordSettings.changePasswordModal.newPasswordNotRepeatedError":
      "再输入一次新密码。",
    "passwordSettings.changePasswordModal.newPasswordsMismatchError":
      "密码不匹配。",
    "passwordSettings.changePasswordModal.oldPasswordInput.label": "旧密码",
    "passwordSettings.changePasswordModal.oldPasswordMissingError":
      "请输入旧密码。",
    "passwordSettings.changePasswordModal.passwordNotEnteredError":
      "请输入您的密码。",
    "passwordSettings.changePasswordSuccess.message": "保存密码。",
    "passwordSettings.deletePasswordModal.passwordInput.label": "密码",
    "passwordSettings.educationPlanGuidelines":
      "如果您无法访问学校电子邮件地址，您可以使用密码登录。",
    "passwordSettings.genericPasswordSaveError": "保存密码时出错。请稍后再试。",
    "passwordSettings.newPasswordInput.label": "新口令",
    "passwordSettings.newPasswordInput.placeholder": "请输入新密码。",
    "passwordSettings.oldPasswordInput.placeholder": "请输入旧密码",
    "passwordSettings.passwordGuidelines":
      "使用至少15个字符或至少8个字符的字符和数字组合作为密码。",
    "passwordSettings.passwordInput.label": "密码",
    "passwordSettings.passwordManagedThroughSAMLProvider.message":
      "口令通过SAML Single Sign-on提供程序进行管理。",
    "passwordSettings.passwordMissingLetter.message":
      "包括字符或使用至少15个字符的密码。",
    "passwordSettings.passwordMissingLetterAndNumber.message":
      "包括字母和数字，或使用更长的密码。",
    "passwordSettings.passwordMissingNumber.message":
      "包括数字或使用更长的密码。",
    "passwordSettings.passwordNotEntered.message": "请输入您的密码。",
    "passwordSettings.passwordNotSet.message": "没有设置密码。",
    "passwordSettings.passwordSetError.message":
      "无法设置当前密码。请稍后再试。",
    "passwordSettings.passwordSetInstructions":
      "如果您不想使用临时登录代码，则可以设置永久密码。",
    "passwordSettings.passwordTooConsistent.message": "加入其他不相同的字符。",
    "passwordSettings.passwordTooShortError.message":
      "密码必须至少包含8个字符。",
    "passwordSettings.removePasswordButton.label": "删除密码",
    "passwordSettings.removePasswordModal.educationPlanWarning":
      "如果失去对学校电子邮件地址的访问权限，您将无法再次登录Notion。",
    "passwordSettings.removePasswordModal.message":
      "删除密码时出错。请稍后再试。",
    "passwordSettings.removePasswordModal.oldPasswordNotEnteredError":
      "请输入您的当前密码。",
    "passwordSettings.removePasswordModal.passwordInput.placeholder":
      "请输入您的密码。",
    "passwordSettings.removePasswordModal.removePasswordButton.label":
      "删除密码",
    "passwordSettings.removePasswordModal.text":
      "密码被删除。今后，当您访问Notion时，我们会通过电子邮件向您发送临时登录代码。",
    "passwordSettings.removePasswordSuccess.message": "密码已删除。",
    "passwordSettings.repeatPasswordInput.label": "确认密码",
    "passwordSettings.repeatPasswordInput.placeholder": "再输入一次新密码。",
    "passwordSettings.setPasswordButton.label": "设置密码",
    "passwordSettings.setPasswordSuccess.educationMessage":
      "密码都设置好了！即使您无法访问学校电子邮件地址，您也可以登录。",
    "passwordSettings.setPasswordSuccess.message": "密码已设置！",
    "passwordSettings.title": "密码",
    "pdfBlock.embeds.button.label": "PDF嵌入",
    "pdfBlock.embeds.caption": "嵌入PDF文件",
    "pdfBlock.placeholder": "PDF嵌入",
    "peekMoveToMenu.addTo.addTo": "添加到",
    "peekMoveToMenu.addTo.defaultButton": "添加到",
    "peekMoveToMenu.addTo.privatePages": "个人主页",
    "peekMoveToMenu.tooptip": "设置默认页或数据库",
    "peekTopbar.center.button": "中央",
    "peekTopbar.close.button": "关闭",
    "peekTopbar.navigateToPage.tooltip": "转至此页",
    "peekTopbar.openAsPage.button": "打开页面",
    "peekTopbar.pushToSide.button": "侧推",
    "permissionRoleSelect.overrideMessage.caption":
      "更改角色将忽略在父页面上设置的权限。",
    "permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.caption":
      "成员不能更改工作区中的设置或邀请新成员。",
    "permissionRoleSelect.spaceReadAndWriteUpgradeTooltip.title":
      "要添加非管理员成员，请升级。",
    "permissionRoleSelect.userEditorUpgradeTooltip.caption":
      "具有完全权限的来宾可以编辑和共享页面。",
    "permissionRoleSelect.userEditorUpgradeTooltip.title":
      "要授予完全权限，请升级。",
    "permissionRoleSelect.userReadAndWriteUpgradeTooltip.caption":
      "具有编辑权限的用户可以编辑页面，但不能共享页面。",
    "permissionRoleSelect.userReadAndWriteUpgradeTooltip.title":
      "要添加具有编辑权限的用户，请升级。",
    "permissions.confirmDialog.upgradeToTeamWorkspace.confirmButton.label":
      "升级到团队工作空间",
    "permissions.confirmDialog.upgradeToTeamWorkspace.message":
      "要将成员添加到工作区，必须更改为团队计划。将根据当前开单周期和帐户余额收取按比例分配的金额。",
    "permissionsActions.preventRemovingAllFullAccess.message":
      "在移除此权限之前，请授予其他人完全许可权限。",
    "permissionsInvite.closeInviteDialog.cancelButton.label": "取消",
    "permissionsInvite.closeInviteDialog.confirmationButton.label": "是",
    "permissionsInvite.closeInviteDialog.confirmationMessage":
      "尚未保存更改。是否要删除更改？",
    "permissionsInvite.integration.select.message": "选择合并",
    "permissionsInvite.searchInput.placeholder": "搜索电子邮件、用户名、组",
    "permissionsInvite.spaceAddMemberUpgradeTooltip.caption":
      "成员是邀请到工作区的团队成员，他们可以访问或创建工作区中所有成员公开的页面，也可以添加到具有特定权限的页面上，以便进行私人协作。",
    "permissionsInvite.spaceAddMemberUpgradeTooltip.title":
      "升级以添加蜂鸣器。",
    "personPropertyMenu.integration.select.message": "选择合并",
    "pricingGrid.betaBadge": "测试版",
    "pricingGrid.cancelPlanLink": "取消计划",
    "pricingGrid.comingSoonBadge": "即将发布",
    "pricingGrid.comparisonSection.adminAndSecurityFeatures.title":
      "管理和安全性",
    "pricingGrid.comparisonSection.collaboration.title": "协作",
    "pricingGrid.comparisonSection.features.title": "功能",
    "pricingGrid.comparisonSection.support.title": "支持",
    "pricingGrid.comparisonSection.usage.title": "使用情况",
    "pricingGrid.contactSalesLink": "联系销售团队",
    "pricingGrid.currentPlan.largeScreenLabel": "当前计划",
    "pricingGrid.currentPlan.tooltip": "当前活动计划。",
    "pricingGrid.currentPlanButton.label": "当前",
    "pricingGrid.downgradePlanButton.label": "降级",
    "pricingGrid.enterprise.monthlyBilling.notAvailable.disabled":
      "仅按年费率提供",
    "pricingGrid.enterprise.monthlyBilling.unavailable": "不可用",
    "pricingGrid.enterpriseCallToAction.message": "体验企业套餐",
    "pricingGrid.enterprisePlanColumn.header": "企业",
    "pricingGrid.footerSignupCallToAction.message":
      "免费注册。{br}请稍后添加团队。",
    "pricingGrid.inTeamTrial": "使用试用版",
    "pricingGrid.inTeamTrial.tooltip":
      "目前，团队体验的区块数量限制为1，000个。无论何时升级，均可无限次使用。",
    "pricingGrid.personalFreePlanColumn.header": "个人",
    "pricingGrid.personalPlans.label": "个人",
    "pricingGrid.personalProPlanColumn.header": "个人职业",
    "pricingGrid.planAttribute.SSO.title": "SAML+单点登录(SSO)",
    "pricingGrid.planAttribute.SSO.tooltip":
      "<p>使用安全的单点登录大规模管理员工访问。</p>",
    "pricingGrid.planAttribute.adminTools.title": "管理工具",
    "pricingGrid.planAttribute.adminTools.tooltip":
      "<p>创建单独的管理员权限和会员权限，以获得更精细的控制。只有管理员才能邀请新成员并更改工作区设置。</p>",
    "pricingGrid.planAttribute.advancedPermissions.title": "高级权限",
    "pricingGrid.planAttribute.advancedPermissions.tooltip":
      "<p>设置更详细的权限，防止邀请者与他人共享页面。</p>",
    "pricingGrid.planAttribute.advancedSecurity.title": "高级安全控制",
    "pricingGrid.planAttribute.advancedSecurity.tooltip":
      "<p>解锁其他权限控制，阻止特定用户从外部共享页面，禁用来宾并设置工作区级别规则。</p>",
    "pricingGrid.planAttribute.allPersonalPlanFeatures.tooltip":
      "<p>个人套餐的所有功能和额外优惠。</p>",
    "pricingGrid.planAttribute.allProPlanFeatures.tooltip":
      "<p>个人专业版套餐的所有功能和额外优惠。</p>",
    "pricingGrid.planAttribute.allTeamPlanFeatures.tooltip":
      "<p>团队计划的所有功能和额外优惠</p>",
    "pricingGrid.planAttribute.apiAccess.title": "API访问",
    "pricingGrid.planAttribute.apiAccess.tooltip":
      "访问<p>Notion API，构建适合我工作流程的自定义集成。即将推出。</p>",
    "pricingGrid.planAttribute.apps.title": "Web、桌面、移动应用程序",
    "pricingGrid.planAttribute.apps.tooltip":
      "<p>Notion在Web浏览器中运行，无需安装。或者下载适用于Mac、Windows、iOS或Android的应用程序。</p>",
    "pricingGrid.planAttribute.blockStorage.tooltip":
      "<p>块是可添加到页面的内容，包括文本段落、待办事项、图像、嵌入文件等。现在，您可以在任何套餐中无限制地使用区块。团队免费套餐限制为1000块。</p>",
    "pricingGrid.planAttribute.blockTypes.title": "40多种块内容类型",
    "pricingGrid.planAttribute.blockTypes.tooltip":
      "<p>块是可以添加到页面的多种类型的内容，包括待办事项、图片、代码块和上传的文件。</p><p>块对于嵌入Google Drive、GitHub、Twitter和Typeform等服务的内容也很有用。</p>",
    "pricingGrid.planAttribute.blocks.title": "页面和块",
    "pricingGrid.planAttribute.bulkExport.title": "批量导出",
    "pricingGrid.planAttribute.bulkExport.tooltip":
      "<p>您拥有的数据。将所有页面下载为HTML、Markdown或CSV(用于数据库)。也下载上传的文件/图片。</p>",
    "pricingGrid.planAttribute.bulkPDFExport.title": "批量导出PDF",
    "pricingGrid.planAttribute.bulkPDFExport.tooltip":
      "<p>将所有内容一次导出为PDF。对法律或合规性备份非常有用。</p>",
    "pricingGrid.planAttribute.button.upgrade": "升级",
    "pricingGrid.planAttribute.collaborativeWorkspace.title": "公共工作空间",
    "pricingGrid.planAttribute.collaborativeWorkspace.tooltip":
      "<p>在协作工作空间中，成员具有精细权限，共享层次结构使得跨团队轻松共享页面。</p>",
    "pricingGrid.planAttribute.contentApi.title": "内容API",
    "pricingGrid.planAttribute.contentApi.title.v2": "API",
    "pricingGrid.planAttribute.contentApi.tooltip":
      "访问<p>Notion内容API，构建适合您的业务流程的自定义集成。即将推出。</p>",
    "pricingGrid.planAttribute.contentApi.tooltip.v2":
      "使用<p>Notion API构建适合您的团队的自定义集成。现在就来看看测试版。</p>",
    "pricingGrid.planAttribute.customContract.title": "定制合同和发票",
    "pricingGrid.planAttribute.customContract.tooltip":
      "<p>协助制定定制合同并通过PO/发票付款。</p>",
    "pricingGrid.planAttribute.databaseProperties.tooltip":
      "<p>使用丰富的属性(如复选框、下拉选择、呼叫、避免者、日期和文件)构建强大的数据库。</p>",
    "pricingGrid.planAttribute.databaseViews.title":
      "查看表格、列表、日历、看板和画廊",
    "pricingGrid.planAttribute.databases.title": "具有丰富属性类型的数据库",
    "pricingGrid.planAttribute.databases.tooltip":
      "<p>以多种方式查看数据库，以适应您的工作流程。尝试项目板、活动日历等的数据库。</p>",
    "pricingGrid.planAttribute.dedicatedManager.title": "专职经理",
    "pricingGrid.planAttribute.dedicatedManager.tooltip":
      "<p>预留给超过100人的团队，按1年周期支付。</p>",
    "pricingGrid.planAttribute.earlyAccess.title": "尽早访问新功能",
    "pricingGrid.planAttribute.earlyAccess.tooltip":
      "使用<p>早期访问，您始终可以使用最强大的Notion版本。也会影响未来产品路线图。</p>",
    "pricingGrid.planAttribute.evernoteHierarchy.tooltip":
      "<p>用笔记本和堆栈整理笔记。</p>",
    "pricingGrid.planAttribute.fileUploads.title": "上载文件",
    "pricingGrid.planAttribute.fileUploads.tooltip":
      "<p>每个文件的大小限制适用于上传到Notion页面或数据库的所有文件。</p>",
    "pricingGrid.planAttribute.fileUploads.trial.5MbFileUploadLimit":
      "试用版限制为5MB",
    "pricingGrid.planAttribute.fileUploads.value.5MbFileUploadLimit": "5 MB",
    "pricingGrid.planAttribute.freeForIndividuals.tooltip":
      "<p>现在，Notion也可以免费用于个人用途。</p>",
    "pricingGrid.planAttribute.genericNotes.tooltip":
      "<p>创建文档并与他人分享。</p>",
    "pricingGrid.planAttribute.genericReminders.tooltip":
      "<p>接收截止日期通知。</p>",
    "pricingGrid.planAttribute.genericTags.tooltip": "<p>整理并跟踪备注。</p>",
    "pricingGrid.planAttribute.genericWebClipper.tooltip": "<p>保存网页。</p>",
    "pricingGrid.planAttribute.guests.title": "房客",
    "pricingGrid.planAttribute.guests.tooltip":
      "<p>来宾是工作空间之外的人，包括朋友、家人、承包商和客户端。在每个页面上邀请房客进行私密协作。</p>",
    "pricingGrid.planAttribute.linkSharing.title": "共享链接",
    "pricingGrid.planAttribute.linkSharing.tooltip":
      "<p>与所有人共享秘密链接，允许我自行决定查看、评论或编辑页面。</p>",
    "pricingGrid.planAttribute.members.title": "会员",
    "pricingGrid.planAttribute.members.tooltip":
      "<p>成员是被邀请进入工作区的团队成员。成员可以访问或创建工作区中所有成员公开的页面，也可以添加到具有特定权限的页面上进行私人协作。</p>成员可以访问或创建工作区中所有成员的公开页面，也可以添加到具有特定权限的页面上进行私人协作。</p>",
    "pricingGrid.planAttribute.notInTrial": "在试用版中不可用",
    "pricingGrid.planAttribute.notionCollaboration.tooltip":
      "<p>在同一页上与他人同时工作。</p>",
    "pricingGrid.planAttribute.notionDatabases.tooltip":
      "<p>新工作流，包括数据库视图、汇总、筛选器等。</p>",
    "pricingGrid.planAttribute.notionHierarchy.tooltip":
      "在<p>备注内无限制地插入笔记。</p>",
    "pricingGrid.planAttribute.notionMarkdown.tooltip":
      "用<p>Markdown写或导出内容。</p>",
    "pricingGrid.planAttribute.permissionGroups.title": "“权限”组",
    "pricingGrid.planAttribute.permissionGroups.tooltip":
      "<p>为不同组和团队设置丰富且细粒度的权限</p>",
    "pricingGrid.planAttribute.prioritySupport.title": "优先支持服务",
    "pricingGrid.planAttribute.prioritySupport.tooltip":
      "<p>我们总是在你们身边提供帮助。</p>",
    "pricingGrid.planAttribute.proWebPublishing.tooltip":
      "将<p>Notion页面发布为一个独立的网站。即将推出。</p>",
    "pricingGrid.planAttribute.realTimeCollaboration.title": "实时协作",
    "pricingGrid.planAttribute.realTimeCollaboration.tooltip":
      "<p>像其他人在身边一样，实时地一起交流意见和工作。</p>",
    "pricingGrid.planAttribute.scimApi.title": "用户配置(SCIM)",
    "pricingGrid.planAttribute.scimApi.tooltip":
      "<p>访问Notion SCIM API，预置和管理用户和组。</p>",
    "pricingGrid.planAttribute.sso.title": "SAML+单信号(SSO)",
    "pricingGrid.planAttribute.templates.title": "50多个入门模板",
    "pricingGrid.planAttribute.templates.tooltip":
      "<p>从空白画布开始或从专业设计的模板库中进行选择。</p><p>一些收藏夹包括备忘录、目标、公司主页、会议记录、产品路线图、新招聘入职和工程维基。</p>",
    "pricingGrid.planAttribute.timeline.tooltip":
      "<p>使用时间轴视图计划和安排项目。</p>",
    "pricingGrid.planAttribute.timelineView.enterpriseUnlimited": "无限",
    "pricingGrid.planAttribute.timelineView.title": "查看时间轴",
    "pricingGrid.planAttribute.value.blockLimit": "限制1000个试用版",
    "pricingGrid.planAttribute.value.justYou": "仅限本人",
    "pricingGrid.planAttribute.value.unlimitedMembers": "无限",
    "pricingGrid.planAttribute.versionHistory.title": "版本历史记录",
    "pricingGrid.planAttribute.versionHistory.tooltip":
      "<p>查看和恢复旧版本的Notion页面。</p>",
    "pricingGrid.planAttribute.versionHistory.value.30DaysSavedHistory": "30天",
    "pricingGrid.planAttribute.versionHistory.value.foreverSavedHistory":
      "继续",
    "pricingGrid.planAttribute.versionHistory.value.notInTrial":
      "在试用版中不可用",
    "pricingGrid.planAttribute.versionHistory.value.trialUpgradeLabel":
      "升级到30天的记录",
    "pricingGrid.planAttribute.wikiDocsNotes.title": "维基，文档，笔记",
    "pricingGrid.planAttribute.wikisDocsNotes.tooltip":
      "将<p>Notion作为与wiki共享文档的空间，并作为强大的注解工具。</p>",
    "pricingGrid.pricingTermToggle.payAnnually.label": "年度结算",
    "pricingGrid.pricingTermToggle.payMonthly.label": "每月",
    "pricingGrid.resubscribePlanButton.label": "重新订阅",
    "pricingGrid.signupComponent.submitButton.label": "免费试用",
    "pricingGrid.switchPlanAsMember.tooltip":
      "要更改计划，您必须是工作区管理员。",
    "pricingGrid.switchPlanFromInAppPurchase.tooltip":
      "目前正在通过Apple的App内购买订阅。要改变计划，请先取消Apple订阅。",
    "pricingGrid.switchToPersonalPlanButton.tooltip":
      "个人套餐和个人套餐只限1人使用。要使用我们的计划，请从此工作区中删除其他成员。",
    "pricingGrid.teamPlanColumn.header": "团队",
    "pricingGrid.teamPlans.label": "适用于团队和公司",
    "pricingGrid.teamTrialLink": "免费试用",
    "pricingGrid.upgradePlanButton.label": "升级",
    "pricingGrid.willDowngradePlan.largeScreenLabel": "未来计划",
    "pricingGrid.willDowngradePlan.tooltip": "当前套餐到期后的套餐。",
    "pricingGrid.willDowngradePlanButton.label": "未来计划",
    "pricingHelpers.perMemberPerMonthPricing.label": "每月每位成员",
    "pricingHelpers.perMonthPricing.label": "每月",
    "privatePageBadge.label": "个人主页",
    "privatePageBadge.tooltip": "只有您才能查看此页面。",
    "profileSettings.cancelButton.label": "取消",
    "profileSettings.changeEmailModal.changeEmailButton.label": "更改电子邮件",
    "profileSettings.changeEmailModal.continueButton.label": "继续",
    "profileSettings.changeEmailModal.currentEmail":
      "当前的电子邮件为{currentEmail}。",
    "profileSettings.changeEmailModal.enterCurrentEmailVerificationCodeInput.placeholder":
      "输入验证码",
    "profileSettings.changeEmailModal.enterPasswordInstructions":
      "请输入您的密码。",
    "profileSettings.changeEmailModal.enterVerificationCodeInput.placeholder":
      "输入验证码",
    "profileSettings.changeEmailModal.errorFetchingAccountData":
      "无法获取{currentEmail}的帐户信息。",
    "profileSettings.changeEmailModal.errorNoUserValue": "未定义自定义值。",
    "profileSettings.changeEmailModal.newEmailInput.placeholder":
      "输入新电子邮件地址",
    "profileSettings.changeEmailModal.newEmailInstructions":
      "输入新电子邮件后，您将发送验证码。",
    "profileSettings.changeEmailModal.passwordInput.label": "密码",
    "profileSettings.changeEmailModal.sendCurrentEmailVerificationCode.label":
      "发送验证码",
    "profileSettings.changeEmailModal.sendVerificationCodeButton.label":
      "发送验证码",
    "profileSettings.changeEmailModal.sendVerificationCodeToCurrentEmail":
      "我们将通过此电子邮件发送临时验证码。",
    "profileSettings.changeEmailModal.sentVerificationCodeToCurrentEmail":
      "您已经向此电子邮件发送了临时验证码。",
    "profileSettings.changeEmailModal.verificationCodeSentMessage":
      "您刚刚向{newEmail}发送了临时授权码。",
    "profileSettings.dangerousSettings.deleteAccountButton.label":
      "删除“My Account(我的帐户)”",
    "profileSettings.dangerousSettings.title": "危险区域",
    "profileSettings.deleteAccountConfirmationDialog.deleteAccountAndWorkspacesButton.label":
      "{numberOfWorkspaces、plural、other{永久删除帐户和{numberOfWorkspaces}个工作空间}}",
    "profileSettings.deleteAccountConfirmationDialog.deleteAccountButton.label":
      "永久删除帐户",
    "profileSettings.deleteAccountConfirmationDialog.prompt":
      "请输入您的电子邮件进行确认。",
    "profileSettings.deleteAccountConfirmationDialog.warning":
      "此操作无法撤消。整个帐户将被永久删除。所有个人工作空间都将被删除，并从所有共享工作空间中删除此帐户。",
    "profileSettings.helpButton.caption": "帐户设置更改将应用于所有工作空间。",
    "profileSettings.helpButton.learnMoreLink": "<s>了解详情</s>",
    "profileSettings.offline.message": "在线管理您的个人资料。",
    "profileSettings.personalInfoSection.emailSetting.changeEmailButton.label":
      "更改电子邮件",
    "profileSettings.personalInfoSection.emailSetting.label": "电子邮件",
    "profileSettings.personalInfoSection.firstNameInput.label": "名称",
    "profileSettings.personalInfoSection.firstOrLastNameMissing.message":
      "请输入您的姓名和姓氏。",
    "profileSettings.personalInfoSection.lastNameInput.label": "城堡",
    "profileSettings.personalInfoSection.nameInput.label": "名称",
    "profileSettings.personalInfoSection.nameMissing.message":
      "请输入您的姓名。",
    "profileSettings.personalInfoSection.title": "个人信息",
    "profileSettings.profilePhotoSection.removePhotoButton.label": "移除",
    "profileSettings.profilePhotoSection.title": "照片",
    "profileSettings.profilePhotoSection.uploadPhotoButton.label": "上传照片",
    "profileSettings.profilePhotoSection.uploadProfilePhotoError.message":
      "上传失败。",
    "profileSettings.title": "帐户",
    "profileSettings.updateButton.label": "更新",
    "propertySelectMenu.mobileMenu.property.header": "属性",
    "propertySelectMenu.mobileMenu.relationProperty.header": "关系属性",
    "propertySelectMenu.search.noResults.title": "无结果",
    "propertySelectMenu.searchForProperty.default.placeholder": "搜索属性",
    "propertySelectMenu.searchForProperty.relation.placeholder": "搜索关系属性",
    "publicPageDataHelpers.untitledWorkspace.placeholder": "无标题工作空间",
    "pushNotification.authorPhrase.unknown": "作者微商",
    "pushNotification.blockEdited.notificationSubject":
      "{userName}已编辑{blockName}块。",
    "pushNotification.deletedBlock.notificationContents":
      "{renderedBlock}[已删除]",
    "pushNotification.emptyBlockPropertyValueEdited.placeholderLabel": "空",
    "pushNotification.imageInPushNotification.placeholder": "{imageEmoji}图像",
    "pushNotification.permissionGroupName.defaultLabel": "已删除的组",
    "pushNotification.permissionGroupName.untitledLabel": "无名称组",
    "pushNotification.pluralizedUserNames.defaultLabel": "某人",
    "pushNotification.propertyNameWithEditedValue.notificationBody":
      "{propertyName}({propertyValue})",
    "pushNotification.propertyNameWithEditedValue.notificationSubject":
      "{propertyName}({propertyValue})",
    "pushNotification.threePlusUserNames.label":
      "{othersCount，plural，other{{firstAuthor}您之外{othersCount}名}}",
    "pushNotification.twoUserNames.label": "{firstAuthor}，{secondAuthor}",
    "pushNotification.untitledBlockTitle.placeholder": "无标题",
    "pushNotification.untitledCollectionName.placeholder": "无标题",
    "pushNotification.untitledSpaceName.label": "无标题",
    "pushNotification.userCreatedBlockInSpace.message":
      "{userName}已在{spaceName}中创建{targetName}",
    "pushNotification.userCreatedRowInCollection.message":
      "{userName}已在{collectionName}中创建{targetName}",
    "pushNotification.userCreatedTarget.label":
      "{userName}已创建{permissionGroupName}",
    "pushNotification.userDeletedBlockInSpace.message":
      "{userName}已从{spaceName}中删除{targetName}",
    "pushNotification.userDeletedRowInCollection.message":
      "{userName}已从{collectionName}中删除{targetName}",
    "pushNotification.userDeletedTarget.label":
      "{userName}已删除{permissionGroupName}",
    "pushNotification.userEditedTarget.label":
      "{userName}已编辑{permissionGroupName}",
    "pushNotifications.accessRequested.subject": "{userName}请求访问{pageName}",
    "pushNotifications.collectionCreated.notificationSubject":
      "{userName}已创建{collectionName}",
    "pushNotifications.collectionDescriptionAdded.notificationSubject":
      "{userName}添加了{collectionName}的说明",
    "pushNotifications.collectionDescriptionDeleted.notificationSubject":
      "{userName}删除了{collectionName}的描述。",
    "pushNotifications.collectionEdited.notificationSubject":
      "{userName}已编辑{collectionName}",
    "pushNotifications.collectionPropertyEdited.subject":
      "{userName}已在{collectionName}中更改了{propertyType}属性。",
    "pushNotifications.collectionViewEdited.notificationSubject":
      "{userName}已在{collectionName}中编辑了{collectionViewName}视图。",
    "pushNotifications.commentOnlyPermissionLevel.label": "仅限评论",
    "pushNotifications.editOnlyPermissionLevel.label": "仅编辑",
    "pushNotifications.editorPermissionLevel.label": "完全允许",
    "pushNotifications.emailAccountSettingsEdited.subject":
      "{userName}已编辑帐户设置。",
    "pushNotifications.emptyPropertyValueInCollection.label": "空",
    "pushNotifications.formatChange.pageIcon.imagePlaceholder": "图像",
    "pushNotifications.formatChange.pageIcon.label": "页面图标",
    "pushNotifications.noAccessPermissionLevel.label": "无法访问",
    "pushNotifications.pageLocked.subject": "{userName}已锁定{pageName}页面。",
    "pushNotifications.pageUnlocked.subject":
      "{userName}已解锁{pageName}页面。",
    "pushNotifications.permissionsEditedForPageOrSpace.notificationSubject":
      "{userName}已编辑{targetName}权限。",
    "pushNotifications.publicPermissions.label": "公开({permissionLevel})",
    "pushNotifications.readerPermissionLevel.label": "只读",
    "pushNotifications.reminderChanged.subject": "{pageName}具有卸码器",
    "pushNotifications.spacePermissionsWithRole.label":
      "{spaceName}({permissionLevel})",
    "pushNotifications.unknownAuthorUpdatedProperty.label": "作者微商",
    "pushNotifications.unknownCollectionPropertyName.label": "未知",
    "pushNotifications.unknownRelationPropertyChanged.label": "未知",
    "pushNotifications.untitledCollection.label": "无标题",
    "pushNotifications.userAddedToSpace.notificationSubject":
      "{userName}已将您添加到{workspaceName}。",
    "pushNotifications.userCommentedSubject.notificationSubject":
      "{userName}已评论{targetName}",
    "pushNotifications.userDeletedCommentText.notificationContents":
      "{commentText}[已删除]†",
    "pushNotifications.userInvitedToSpace.notificationSubject":
      "{userName}已邀请您加入{workspaceName}。",
    "pushNotifications.userInvitedToSpaceByBot.notificationSubject":
      "已被邀请加入{workspaceName}。",
    "pushNotifications.userMentionedInPage.notificationSubject":
      "{userName}已经向{targetName}推荐了您的成员。",
    "pushNotifications.userPermissionsWithRole.label":
      "{userName}({permissionLevel})",
    "pushNotifications.workspaceName.untitled.placeholder": "无标题",
    "queueApiErrors.duplicateBlockLimit.errorMessage":
      "天哪，内容太多了！内容复制仅限于{blockLimitNumber}块。请减少内容量，然后再试一次。",
    "quoteBlock.emptyQuote.placeholder": "空引用",
    "rateLimitError.message": "请稍后再试。",
    "recordIcon.emojiModalMenu.title": "页面图标",
    "recordIcon.emojiTab.title": "伊莫吉",
    "recordIcon.linkTab.buttonText": "提交",
    "recordIcon.linkTab.caption": "与Web上的所有图像兼容。",
    "recordIcon.linkTab.placeholder": "粘贴图像链接",
    "recordIcon.linkTab.title": "链接",
    "recordIcon.mediaMenu.caption":
      "建议的规格为{recommendedWidth}×{recommendedHeight}像素。",
    "recordIcon.uploadFileTab.title": "上传图像",
    "recordIcon.uploadFileTab.uploadError.message": "出现问题。",
    "recordPath.untitledBlock.placeholder": "无标题",
    "referralActivatedEmail.greeting": "{firstName}先生，您好？",
    "referralActivatedEmail.howToEarnCreditList.item.downloadApps":
      "下载<mobilelink>移动应用</mobilelink>和<desktoplink>桌面应用</desktoplink>。",
    "referralActivatedEmail.howToEarnCreditList.item.installWebClipper":
      "为Chrome安装<webclipperlink>Notion Web Clipper</webclipperlink>。",
    "referralActivatedEmail.howToEarnCreditList.item.keepInviting":
      "请继续邀请朋友和同事<referlink>邀请</referlink>。",
    "referralActivatedEmail.notionTeamSignoffAndThanks":
      "感谢您广泛宣传关于我们的故事。{br}-Notion团队",
    "referralActivatedEmail.rewardMessage":
      "您的帐户已累积<b>{creditValue}积分</b>！想利用这个积分来<upgradelink>升级</upgradelink>和利用Notion提供的所有强大功能。{br}{br}<upgradelink>想赚取额外的积分</upgradelink>吗？有以下几种方法：",
    "referralActivatedEmail.signupText":
      "收到您的邀请的收件人已加入Notion帐户。",
    "referralActivatedEmail.subjectLine": "{creditValue}积分即将累积！",
    "referralEmail.creditInfo.text":
      "注册时，我们会将积分<b>{creditDollarAmount}</b>放入您的账户中。使用该积分进行升级后，探索Notion提供的所有强大功能。",
    "referralEmail.invitedIntro.text":
      "在({fromUserEmail})中，<b>{fromUserName}</b>邀请您加入Notion！{br}{br}Notion是一个一体化的数字工具，可帮助您系统地整理用户的生活和工作。欲了解更多信息，请访问我们的<referlink>网站</referlink>。",
    "referralEmail.signupPrompt":
      "<b><signuplink>点击此处注册并获得{creditDollarAmount}积分</b</signuplink>",
    "referralEmail.subjectLine": "{fromUserName}已邀请您加入Notion。",
    "regionSettings.region.label": "地区",
    "regionSettings.region.subtitle": "日期、数字和货币的默认符号格式不同。",
    "regionalFormatSettings.customDateFormat.applyChanges": "应用更改",
    "regionalFormatSettings.customDateFormat.title": "“格式”“单独设置”",
    "regionalFormatSettings.customSettingOption.fullDate.custom": "单个设置",
    "regionalFormatSettings.customSettingOption.fullDate.full": "完整日期",
    "regionalFormatSettings.customSettingOption.fullDate.iso": "ISO格式",
    "regionalFormatSettings.customSettingOption.fullDate.long": "全部",
    "regionalFormatSettings.customSettingOption.fullDate.medium": "中间",
    "regionalFormatSettings.customSettingOption.fullDate.short": "简单",
    "regionalFormatSettings.customSettingOption.number.number": "数字",
    "regionalFormatSettings.customSettingOption.number.percent": "百分比",
    "regionalFormatSettings.customSettingOption.number.withCommas":
      "包含逗号的数字",
    "regionalFormatSettings.customSettingOption.shortDate.custom": "单个设置",
    "regionalFormatSettings.customSettingOption.shortDate.iso": "ISO格式",
    "regionalFormatSettings.customSettingOption.shortDate.short": "简单",
    "regionalFormatSettings.customSettingOption.weekStartOn.monday": "星期一",
    "regionalFormatSettings.customSettingOption.weekStartOn.sunday": "周日",
    "regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.monday":
      "星期一",
    "regionalFormatSettings.defaultRegionalSettings.startDayOfWeek.sunday":
      "周日",
    "regionalFormatSettings.defaultSetting.fullDate": "完整日期",
    "regionalFormatSettings.defaultSetting.numbers": "数字",
    "regionalFormatSettings.defaultSetting.shortDate": "日期简写",
    "regionalFormatSettings.defaultSetting.weekStart": "一周的开始日期",
    "regionalFormatSettings.label.subtitle": "自动应用您所在地区的默认格式",
    "regionalFormatSettings.label.title": "使用本地默认设置",
    "relationHelpers.autoInverseRelation.name":
      "{sourceCollectionName}({sourceRelationName})相关",
    "relationHelpers.autoInverseRelation.untitledDatabase": "无标题数据库",
    "relationHelpers.autoInverseRelation.untitledRelation": "无标题关系",
    "relationPropertyMenu.addAPage.button": "添加页面",
    "relationPropertyMenu.mobileDoneButton": "完成",
    "relationPropertyMenu.mobileMenuDone.button": "完成",
    "relationPropertyMenu.mobileRelationMenu.title": "关系型",
    "relationPropertyMenu.searchPlaceholder": "搜索页面或创建新页面。",
    "removeUsersFromSpace.nonexistentUser.error.message": "用户不存在。",
    "renameFileMenuPopup.input.placeholder": "无标题",
    "renamePageMenuPopup.input.placeholder": "无标题",
    "replitBlock.embeds.button.label": "Repl嵌入",
    "replitBlock.embeds.caption": "与Replit兼容。",
    "replitBlock.placeholder": "Repl嵌入",
    "reportPage.additionalInformation.placeholder": "输入附加信息(可选)",
    "reportPage.helpButton.caption": "Notion的内容策略",
    "reportPage.reportReasons.inappropriate_content": "内容不当",
    "reportPage.reportReasons.other_content_policy_violation": "其他",
    "reportPage.reportReasons.phishing_or_spam": "网络钓鱼或垃圾邮件",
    "reportPageModal.cancelButton.label": "取消",
    "reportPageModal.closeButton.label": "关闭",
    "reportPageModal.mobile.title": "页面申报",
    "reportPageModal.offlineMessage.description": "要申报，请上网。",
    "reportPageModal.reportButton.label": "申报",
    "reportPageModal.reportReasons.other_content_policy_violation": "其他",
    "reportPageModal.reportReasons.phishing_or_spam": "网络钓鱼或垃圾邮件",
    "reportPageModal.somethingWentWrong.label": "出现问题。",
    "reportPageModal.thanksForReporting": "感谢您举报此页面。我们队会确认的。",
    "reportPageModal.title": "为什么要报告这个页面？",
    "requestAccessForm.cancelButton.label": "取消",
    "requestAccessForm.messageInput.placeholder": "消息(可选)",
    "requestAccessForm.mobileSend.label": "传输",
    "requestAccessForm.sendRequestButton.label": "发送请求",
    "requestAccessForm.sendRequestButton.title": "访问请求",
    "requestAccessForm.title.label": "访问请求",
    "restrictedPermissionConfirmationModal.actionButton.cancel": "关闭",
    "restrictedPermissionConfirmationModal.actionButton.restoreAccess":
      "恢复访问",
    "restrictedPermissionConfirmationModal.actionButton.restrictAccess":
      "访问限制",
    "restrictedPermissionConfirmationModal.footer.whisperText":
      "管理员仍然可以从受限页面恢复权限。",
    "restrictedPermissionConfirmationModal.permissionGroup.generic": "权限",
    "restrictedPermissionConfirmationModal.permissionGroup.group": "组",
    "restrictedPermissionConfirmationModal.permissionGroup.space": "工作空间",
    "restrictedPermissionConfirmationModal.permissionGroup.user": "用户",
    "restrictedPermissionConfirmationModal.remove.description":
      "是否更改角色并限制访问？此页面不再继承父页面的共享设置。",
    "restrictedPermissionConfirmationModal.restore.description":
      "是否确实要恢复访问？从父页面继承以下权限：",
    "restrictedPermissionConfirmationModal.restoreNoChanges.description":
      "是否确实要恢复访问？",
    "restrictedPermissionConfirmationModal.restrict.description":
      "{permissionGroup}删除后是否限制访问？此页面不再从父页面继承共享设置。",
    "richTextMenu.boldButton.tooltip": "粗细",
    "richTextMenu.equationButton.tooltip": "创建数学公式",
    "richTextMenu.italicsButton.tooltip": "斜体显示",
    "richTextMenu.linkButton.tooltip": "链接",
    "richTextMenu.markAsCodeButton.tooltip": "显示为代码",
    "richTextMenu.mentionButton.tooltip": "管理用户、页面或日期{br}",
    "richTextMenu.multiSelection.label": "多选择",
    "richTextMenu.multiSelection.tooltip":
      "Multi-selection alpha：{br}Some features are not supported{br}Click to learn out more",
    "richTextMenu.strikeThroughButton.tooltip": "取消线",
    "richTextMenu.turnIntoButton.label": "切换",
    "richTextMenu.turnIntoButton.tooltip": "切换",
    "richTextMenu.underlineButton.tooltip": "下划线",
    "router.loginWithSamlError.message": "无法登录。",
    "router.renderErrorPage.message.part1": "天哪！出现问题。",
    "router.renderErrorPage.message.part2":
      "请刷新并重试或<textlink>给我们发送消息</textlink>。",
    "router.renderErrorPage.reloadButton.label": "刷新",
    "samlErrors.couldNotDownloadIdpMetadata.message":
      "下载SAML IDP元数据失败。确保IDP元数据URL正确。",
    "samlErrors.couldNotParseIdentityProviderMetadataXML.message":
      "无法解析IDP元数据XML。",
    "samlErrors.couldNotParseIdpMetadata.message":
      "无法保存SAML IDP元数据。确保IDP元数据正确。",
    "samlErrors.emailDomainAlreadyConfigured.message":
      "电子邮件域已经配置为在以下现有工作空间{workspace}中使用SAML：",
    "samlErrors.emailNotCofiguredForSamlSso.message":
      "此电子邮件未配置为此工作区的SAML SSO。请与管理员联系。",
    "samlErrors.emailNotConfigured.message": "此电子邮件未配置为使用SAML SSO。",
    "samlErrors.emailNotConfiguredForSamlSso.message":
      "此电子邮件未配置为此工作区的SAML SSO。请与管理员联系。",
    "samlErrors.incorrectURL.message": "SAML假设的目标必须为{correctUrl}。",
    "samlErrors.incorrectlyConfiguredSaml.message":
      "SAML SSO配置不正确。请与管理员联系。",
    "samlErrors.invalidIDPURL.message": "此IDP元数据URL无效。",
    "samlErrors.invalidSamlConfiguration.message":
      "无效的SAML配置。请与管理员联系。",
    "samlErrors.samlNameIdEmailRequired.message":
      "此SAML名称ID属性必须是电子邮件地址。请与管理员联系。",
    "samlErrors.samlRequired.message": "您必须使用SAML SSO才能登录Notion。",
    "saveChanges.errorDialog.blocksCannotBeMovedInsideSelf.message":
      "你好！块不能在块本身内移动。",
    "saveEditsError.message": "保持编辑有问题。如需帮助，请给我们发信息。",
    "saveEditsError.mobile.message":
      "保持编辑有问题。如需帮助，请给我们发信息。",
    "scroller.scrollDown.name": "向下滚动",
    "search.addFilter.button.label": "添加过滤器",
    "search.clearRecentsButton.text": "清除",
    "search.dateRangeMenu.endingMessage": "正在退出",
    "search.dateRangeMenu.startingMessage": "正在启动",
    "search.filterMenu.addAPersonButton.label": "添加人员",
    "search.filterMenu.moreFilters.created": "创建日期",
    "search.filterMenu.moreFilters.createdBy": "创建者",
    "search.filterMenu.moreFilters.inPage": "页面内的内容",
    "search.filterMenu.moreFilters.lastEdited": "上次编辑时间",
    "search.filterMenu.moreFiltersSection.title": "其他过滤器",
    "search.filterMenu.onlyMatchTitlesToggle.label": "仅匹配标题",
    "search.filterMenu.quickFilters.createdByMe": "我写的内容",
    "search.filterMenu.quickFilters.editedLastWeek": "上周编辑",
    "search.filterMenu.quickFilters.inCurrentPage": "当前页面",
    "search.filterMenu.quickFiltersSection.title": "快速过滤器",
    "search.filterMenu.searchPeople.placeholder": "搜索用户",
    "search.filterMenu.searchPeople.resultsTitle": "选择用户",
    "search.header.addFilter.button.label": "添加过滤器",
    "search.inputMenu.errorMessage": "出现问题。",
    "search.inputMenu.loading.message": "正在加载.",
    "search.inputMenu.noResults.message": "没有结果。",
    "search.recentMenuItem.createdDateAfter.subtitle": "{startDate}之后创建",
    "search.recentMenuItem.createdDateBefore.subtitle": "{endDate}之前创建",
    "search.recentMenuItem.createdDateWithRange.subtitle":
      "{startDate}~{endDate}之间创建",
    "search.recentMenuItem.lastEditedDateAfter.subtitle":
      "{startDate}之后最后编辑",
    "search.recentMenuItem.lastEditedDateBefore.subtitle":
      "{endDate}之前上次编辑",
    "search.recentMenuItem.lastEditedDateWithRange.subtitle":
      "上次在{startDate}~{endDate}之间编辑",
    "search.recentMenuItem.listOfPeopleOrPages.label":
      "{firstPageOrPerson}+{numberRemaining}",
    "search.recentMenuItem.onlyMatchTitles.subtitle": "仅匹配标题",
    "search.recentMenuItemDetail.createdBy.subtitle": "构造函数{people}",
    "search.recentMenuItemDetail.editedBy.subtitle": "编辑者：{people}",
    "search.recentMenuItemDetail.inPage.subtitle": "从{pages}",
    "search.recentSearches.title": "最近搜索",
    "search.recentlyVisitedPages.title": "最近的页面",
    "search.sort.sortButtonPrefixLabel": "排序：",
    "search.sort.sortMenuTitle": "排序依据",
    "search.sort.sortOrder.bestMatches": "匹配结果父项",
    "search.sort.sortOrder.created.newestFirst": "创建日期:降序",
    "search.sort.sortOrder.created.oldestFirst": "创建日期:升序",
    "search.sort.sortOrder.lastEdited.newestFirst": "最后修改:降序",
    "search.sort.sortOrder.lastEdited.oldestFirst": "最后修改:升序",
    "searchErrorMenuItem.error.genericErrorMessage": "出现问题。",
    "searchErrorMenuItem.error.noResults": "无结果",
    "searchErrorMenuItem.errorPrompt.goOnline": "在线查看其他搜索结果。",
    "searchErrorMenuItem.errorPrompt.refreshOrReport":
      "刷新或报告<reportlink>问题</reportlink>。",
    "searchErrorMenuItem.errorPrompt.searchTerms": "试着输入其他搜索词。",
    "searchErrorMenuItem.errorPrompt.searchTermsAndFilters":
      "试试其他搜索词或过滤器。",
    "searchFooter.helpText.openHint": "打开",
    "searchFooter.helpText.openNewTab": "在新选项卡中打开",
    "searchFooter.helpText.openNewWindow": "在新窗口中打开",
    "searchFooter.helpText.resultCount":
      "{resultCount，plural，other{搜索结果<resultwrapper>{resultCount}</resultwrapper>个}}",
    "searchFooter.helpText.resultCountApproximate":
      "{resultCount，plural，other{搜索结果<resultwrapper>{resultCount}+</resultwrapper>个}}",
    "searchFooter.helpText.selectHint": "选择",
    "searchHelpers.afterStartDate": "{startDate}之后",
    "searchHelpers.beforeEndDate": "{endDate}之前",
    "searchHelpers.betweenStartAndEndDates": "{startDate}-{endDate}",
    "searchInputMenuItem.placeholder.namedPage": "在{pageTitle}中搜索",
    "searchInputMenuItem.placeholder.namedSpace": "{spaceName}搜索.",
    "searchInputMenuItem.placeholder.unnamedPage": "在下一页搜索",
    "searchPageFilter.searchTokenFilter.addAPage.button": "添加页面",
    "searchPageFilter.searchTokenFilter.resultSection.title": "选择页面",
    "searchPageFilter.searchTokenFilter.tokenInput.placeholder": "搜索页面",
    "securitySAMLSettings.SAMLSection.helpButton.label":
      "SAML和单声信号(SSO)的用法",
    "securitySAMLSettings.SAMLSection.uneditableMessage":
      "SAML正在<bold>{workspaceName}</bold>工作空间中管理。要更改SAML设置，请转到相应的工作空间。",
    "securitySAMLSettings.SAMLSingleSignOnSection.automaticallyCreateAccounts.caption":
      "允许用户在没有IDP预置的情况下创建Notion帐户。",
    "securitySAMLSettings.SAMLSingleSignOnSection.automaticallyCreateAccounts.label":
      "登录时自动创建帐户",
    "securitySAMLSettings.SAMLSingleSignOnSection.enableSAML.caption":
      "现在，具有已配置域的电子邮件的用户可以使用SAML登录。可以在下面应用SAML身份验证。",
    "securitySAMLSettings.SAMLSingleSignOnSection.enableSAML.label": "启用SAML",
    "securitySAMLSettings.SAMLSingleSignOnSection.enableSAML.tooltip":
      "SAML配置完成后，您可以启用它。",
    "securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.captionMulti":
      "启用SAML时，只有SAML SSO才能使用上面配置域中的电子邮件的工作区成员登录。但是，管理员帐户可以继续通过电子邮件登录。",
    "securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.label":
      "应用SAML",
    "securitySAMLSettings.SAMLSingleSignOnSection.enforceSAML.tooltip":
      "若要访问此选项，请启用SAML。",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataURLOption.label":
      "IDP元数据URL",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataXMLOption.caption":
      "输入身份提供者(IDP)提供的值。",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataXMLOption.input.placeholder":
      "IDP元数据XML",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.IdentityProviderMetadataXMLOption.label":
      "IDP元数据XML",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.title":
      "单点登录(SSO)URL",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.url.caption":
      "将此输入到身份提供程序的SAML配置中。",
    "securitySAMLSettings.SAMLSingleSignOnSection.singleSignOnURLSettings.url.tooltip":
      "复制链接",
    "securitySAMLSettings.SAMLSingleSignOnSection.title": "SAML单弦开(SSO)",
    "securitySAMLSettings.SCIMSection.contactUs":
      "要生成SCIM API令牌，请<contactlink>联系支持团队</contactlink>。",
    "securitySAMLSettings.SCIMSection.helpButton.label": "SCIM用法",
    "securitySAMLSettings.SCIMSection.revokeToken.label": "撤销代币",
    "securitySAMLSettings.SCIMSection.revokeTokenModal.acceptButton.label":
      "撤回SCIM令牌",
    "securitySAMLSettings.SCIMSection.revokeTokenModal.cancelButton.label":
      "取消",
    "securitySAMLSettings.SCIMSection.revokeTokenModal.message":
      "是否确实要撤销SCIM令牌？所有使用此令牌的SCIM API请求将不再成功。",
    "securitySAMLSettings.SCIMSection.title": "SCIM配置",
    "securitySAMLSettings.SCIMSection.tokenRevoked.message":
      "SCIM代币成功撤回。新的代币可供使用。",
    "securitySAMLSettings.SCIMSection.viewToken.label": "查看令牌",
    "securitySAMLSettings.SCIMSection.viewTokenModal.copyButton.label":
      "复制令牌",
    "securitySAMLSettings.SCIMSection.viewTokenModal.dismissButton.label":
      "关闭",
    "securitySAMLSettings.cancelButton.label": "取消",
    "securitySAMLSettings.disableGuests.confirmationModal.confirmButton.label":
      "是",
    "securitySAMLSettings.disableGuests.confirmationModal.message":
      "是否确实要禁用来宾？此工作区中的所有来宾都将被删除。",
    "securitySAMLSettings.emailDomainsSection.emailInput.caption":
      "启用SAML后，任何使用下面域的电子邮件的人都可以使用SAML SSO登录。若要添加或删除域，请联系<contactlink>支持团队。</contactlink>",
    "securitySAMLSettings.emailDomainsSection.emailInput.placeholder":
      "没有配置的电子邮件域。",
    "securitySAMLSettings.emailDomainsSection.title": "电子邮件域",
    "securitySAMLSettings.offline.message": "在线管理安全设置。",
    "securitySAMLSettings.preventPublicSharing.confirmationModal.confirmButton.label":
      "是",
    "securitySAMLSettings.preventPublicSharing.confirmationModal.message":
      "你确定吗？此工作区中的所有页面都将删除非工作区成员和来宾的访问权限。",
    "securitySAMLSettings.securitySection.disableExport.caption":
      "防止导出为Markdown、CSV或PDF。",
    "securitySAMLSettings.securitySection.disableExport.label": "禁用导出",
    "securitySAMLSettings.securitySection.disableGuests.caption":
      "防止他人邀请工作区外的人。",
    "securitySAMLSettings.securitySection.disableGuests.label": "禁用来宾",
    "securitySAMLSettings.securitySection.disableMovingPages.label":
      "禁用将页面移动到另一个工作区或复制页面的功能",
    "securitySAMLSettings.securitySection.disablePublicAccessRequests.caption":
      "通过链接访问页面的用户将无法请求访问。工作区成员可以随时请求访问。",
    "securitySAMLSettings.securitySection.disablePublicAccessRequests.label":
      "禁用非成员用户的页访问请求",
    "securitySAMLSettings.securitySection.disableSpacePageEdits.caption":
      "成员不能添加、删除或重新排列工作区顶层页面。",
    "securitySAMLSettings.securitySection.disableSpacePageEdits.label":
      "防止成员更改工作区节",
    "securitySAMLSettings.securitySection.preventPublicSharing.caption":
      "在此工作空间中所有页面的“共享”菜单中，将禁用“从Web共享”。",
    "securitySAMLSettings.securitySection.preventPublicSharing.label":
      "页面公开共享限制",
    "securitySAMLSettings.securitySection.title": "安全性",
    "securitySAMLSettings.spaceNamesSection.spaceNameInput.caption":
      "SAML设置应用于多个工作区。若要添加或删除工作区，请联系<contactlink>支持团队</contactlink>。",
    "securitySAMLSettings.spaceNamesSection.title": "工作空间",
    "securitySAMLSettings.updateButton.label": "更新",
    "securitySAMLSettings.upsell.caption":
      "升级至企业计划后，您将获得高级安全设置、SAML单点登录和自动用户和组配置。",
    "securitySAMLSettings.upsell.title": "升级以使用高级安全设置、SAML和SCIM。",
    "selectableCommentMenu.addCommentPrompt.tooltip":
      "点击<invertedcolor>评论</invertedcolor>",
    "selectableHoverMenu.filterActions.placeholder": "搜索任务",
    "selectionLinkButton.addLink.tooltip": "添加链接",
    "selectionLinkButton.copyLink": "复制链接",
    "selectionLinkButton.emptyLink.placeholder":
      "粘贴链接。(例如，http://nytimes.com.)",
    "selectionLinkButton.label": "链接",
    "selectionLinkButton.linkToPage": "指向页面的链接",
    "selectionLinkButton.linkToPage.linkToBlock": "块的链接",
    "selectionLinkButton.linkToPage.loading": "正在加载.",
    "selectionLinkButton.linkToPage.unknownBlock": "未知块",
    "selectionLinkButton.linkToPageSection.title": "指向页面的链接",
    "selectionLinkButton.linkToURL": "指向URL的链接",
    "selectionLinkButton.linkToWebPage": "指向网页的链接",
    "selectionLinkButton.linkedToSection.title": "链接链接",
    "selectionLinkButton.linkedToSection.webPage": "网页",
    "selectionLinkButton.mobile.title": "链接",
    "selectionLinkButton.removeLink": "删除链接",
    "selectionLinkButton.search.createNewLinkPlaceholder": "粘贴链接或搜索页面",
    "selectionLinkButton.search.editLinkPlaceholder": "修改链接或搜索页面",
    "selectionLinkButton.search.placeholder": "搜索页面或输入URL",
    "selectionLinkButton.unlinkButton.label": "取消链接",
    "sendEmailDigest.emailSubjectLine":
      "{numberOfUpdates、plural、other{{workspaceName}有{numberOfUpdates}项更新}}",
    "sendEmailDigest.untitledSpaceName.placeholder": "无标题",
    "sendMobileAppLink.textMessage":
      "你好！点击这个链接，你可以在手机上安装Notion：{baseURL}/mobile?download=true Mac/Windows不要忘记下载应用程序。祝你创作时间愉快！",
    "settings.regionSettings.regionSearch": "搜索区域",
    "sharedActivity.updatedPermissionGroupCreated.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{groupName}已创建组}}",
    "sharedActivity.updatedPermissionGroupDeleted.header":
      "已删除组{numberOfAuthors、plural、other{{authorOrAuthors}{groupName}",
    "sharedActivity.updatedPermissionGroupEdit.header":
      "已编辑组{numberOfAuthors、plural、other{{authorOrAuthors}{groupName}",
    "sharedActivity.updatedPermissionGroupEditedDefault.header":
      "已编辑组{numberOfAuthors、plural、other{{authorOrAuthors}{groupName}",
    "sharedWithMe.unknownErrorMessage": "出现问题。",
    "sharedWithMeButton.sidebarButton.label": "与我共享",
    "sharedWithMeButton.tooltop": "搜索其他用户与我共享的页面",
    "sharedWithMePage.menuItem.caption": "{actorName}上次编辑·{time}",
    "sharedWithMePageMenuItem.copylinkToPage.tooltip": "复制链接",
    "sharedWithMePageMenuItem.linkCopied.tooltip": "完成链接复制",
    "sharedWithMePopover.addToBookmarks.tooltip": "添加到收藏夹",
    "sharedWithMePopover.earlierSection.label": "上一个",
    "sharedWithMePopover.learnMore.prompt": "了解共享页面",
    "sharedWithMePopover.menu.header": "与我共享",
    "sharedWithMePopover.offline.message": "在线查看更新。",
    "sharedWithMePopover.pastWeekSection.label": "上周",
    "sharedWithMePopover.search.noMatchesPrompt": "没有共享页面。",
    "sharedWithMePopover.search.placeholder": "搜索共享页面",
    "sharedWithMePopover.search.subtitle": "此处显示其他用户与我共享的页面。",
    "sharedWithMePopover.sortOrder.lastEditedNewest": "上次编辑时间",
    "sharedWithMePopover.sortOrder.relevance": "关联项",
    "sharedWithMePopover.todaySection.label": "今天",
    "sharedWithMePopover.unknownErrorMessage": "出现问题。",
    "sidebar.addAPageButton.tooltip": "添加页面",
    "sidebar.addAPrivatePage.tooltip": "添加页面",
    "sidebar.addAPrivatePageToWorkspace.tooltip": "添加页面",
    "sidebar.addAWorkspacePage.tooltip": "添加页面",
    "sidebar.bookmarkedPagesSection.tooltip": "分配给收藏夹的页面。",
    "sidebar.favoritesSection.header": "收藏夹",
    "sidebar.guestMember.createWorkspacePrompt": "创建工作区",
    "sidebar.guestMember.message":
      "目前正在作为来宾使用。要查看所有工作空间页面，请向管理员申请升级至成员。",
    "sidebar.myPagesSection.header": "我的页面",
    "sidebar.myPagesSection.tooltip":
      "您创建的个人主页或共享页面。只有被邀请的工作区成员才能访问。",
    "sidebar.newPage.button": "新建页面",
    "sidebar.offlinePagesSection.tooltip": "保存以供脱机使用的页面",
    "sidebar.offlineSection.header": "离线",
    "sidebar.openImportModalButton": "导入",
    "sidebar.openImportModalButton.tooltip":
      "导入多种格式的内容，如Word、Markdown和HTML",
    "sidebar.openTemplatePickerButton": "模板",
    "sidebar.openTemplatePickerButton.tooltip":
      "浏览模板并将其导入到工作区中。",
    "sidebar.openTrashModalButton.tooltip": "删除页面恢复。",
    "sidebar.privatePagesSection.tooltip": "只有您才可以访问此页面。",
    "sidebar.privateSection.header": "个人主页",
    "sidebar.quickFindSearch.label": "快速搜索",
    "sidebar.quickFindSearch.tooltip": "搜索后快速进入页面",
    "sidebar.sectionHeaderHide.tooltip": "点击以隐藏部分。",
    "sidebar.sectionHeaderShow.tooltip": "点击以显示部分",
    "sidebar.sharedPagesSection.tooltip": "只有您共享的人员才能访问此页面。",
    "sidebar.sharedSection.header": "共享页面",
    "sidebar.templateIntro.content": "立即使用或定制您的业务流程。",
    "sidebar.templateIntro.title": "几个模板可以帮助我们开始工作。",
    "sidebar.upgradeButton.prompt":
      "更新您的个人资料、升级到专业版或邀请新成员",
    "sidebar.workspacePagesSection.tooltip": "所有工作区成员都可以访问此页面。",
    "sidebar.workspaceSection.header": "工作空间",
    "sidebarActions.confirmDialog.lockedWorkspaceTopLevel.message":
      "在本工作空间中，顶层工作区页面操作处于锁定状态。",
    "sidebarActions.confirmDialog.movePageToPrivate.confirmButton.label":
      "转到个人主页",
    "sidebarActions.confirmDialog.movePageToPrivate.message":
      "是否确实要将此页面指定为个人主页？<boldtext>只有您本人才能访问此页面。</boldtext>",
    "sidebarActions.confirmDialog.moveWorkspacePage.confirmButton.label":
      "移动页面",
    "sidebarActions.confirmDialog.moveWorkspacePage.message":
      "是否确实要移动此工作空间页面？<boldtext>{memberCount}所有成员都将可见。</boldtext>",
    "sidebarActions.confirmDialog.newWorkspacePage.confirmButton.label":
      "创建顶级页",
    "sidebarActions.confirmDialog.newWorkspacePage.message":
      "是否确实要创建新的顶级页面？<strongtext>工作区中的{memberCount}名成员都将在侧栏中看到此页面。</strongtext>",
    "sidebarActions.confirmDialog.reorderWorkspaceSidebar.confirmButton.label":
      "重新排列侧边栏",
    "sidebarActions.confirmDialog.reorderWorkspaceSidebar.message":
      "是否确实要重新排列此工作空间的侧栏？<boldtext>{memberCount}名的成员都将可见。</boldtext>",
    "sidebarActions.confirmDialog.sharePageWithWorkspace.confirmButton.label":
      "移动到工作区",
    "sidebarActions.confirmDialog.sharePageWithWorkspace.message":
      "是否确实要与此工作区共享此页面？<boldtext>{memberCount}名的成员都将可以访问。</boldtext>",
    "sidebarCredits.earnedCredit.message":
      "您累积了积分{creditAmountInDollars}。",
    "sidebarCredits.freeMonthMessage":
      "{numberOfMonths，plural，other{<b>{numberOfMonths}个月</b>间免费。}",
    "sidebarExpandButton.tooltip": "打开侧边栏",
    "sidebarItem.addAPageInside.tooltip": "在页面中添加子页面",
    "sidebarItem.changeIconButton.tooltip": "替换图标",
    "sidebarItem.favoritedPageMenuButton.tooltip": "删除、重命名等.",
    "sidebarItem.pageMenuButton.tooltip": "删除、复制等.",
    "sidebarMobile.addAPageToOnlyPrivateSection.title": "添加页面",
    "sidebarMobile.addAPrivatePage.title": "添加页面",
    "sidebarMobile.addPageToWorkspace.title": "添加页面",
    "sidebarMultiSwitcher.desktopAppGetMobileApp.prompt":
      "获取iOS和Android应用程序",
    "sidebarMultiSwitcher.macAppButton.text": "获取Mac应用程序",
    "sidebarMultiSwitcher.windowsAppButton.text": "获取Windows应用程序",
    "sidebarResizer.clickToToggleSidebar.message":
      "单击<invertedcolor>{expanded，select，true{close}other{lock open}}</invertedcolor>",
    "sidebarResizer.tooltip.dragMessage":
      "拖动<invertedcolor>调整大小</invertedcolor>",
    "sidebarSettingsButton.mobile.settingsAndMembers": "设置",
    "sidebarSettingsButton.settingsAndMembers": "设置和成员",
    "sidebarStudentPlanPrompt.eligible.getFreePrompt": "免费使用个人套餐",
    "sidebarStudentPlanPrompt.eligible.message":
      "有资格使用免费个人职业(教育)计划。",
    "sidebarSwitcher.createOrJoinMenu.goOnlinePrompt": "继续在线",
    "sidebarSwitcher.createOrJoinWorkspaceButton.prompt": "创建或参与工作区",
    "sidebarSwitcher.desktopAppGetMobileApp.prompt": "获取移动应用程序",
    "sidebarSwitcher.educationPlan.label": "个人职业(教育)套餐",
    "sidebarSwitcher.enterprisePlan.label": "企业定价",
    "sidebarSwitcher.legacyPlan.label": "旧版计划",
    "sidebarSwitcher.logoutButton.prompt": "({formattedCurrentUser})注销",
    "sidebarSwitcher.macAppButton.text": "Mac应用程序",
    "sidebarSwitcher.mobileAppButton.text": "移动应用",
    "sidebarSwitcher.mobileWorkspacesMenuTitle.text": "工作空间",
    "sidebarSwitcher.personalPlan.label": "个人套餐",
    "sidebarSwitcher.proPlan.label": "个人专业套餐",
    "sidebarSwitcher.teamPlan.label": "团队计划",
    "sidebarSwitcher.teamTrialPlan.label": "团队套餐(体验版)",
    "sidebarSwitcher.webClipperButton.text": "Web Clipper",
    "sidebarSwitcher.windowsAppButton.text": "Windows应用程序",
    "sidebarSwitcher.workspaceSubtitleWithMembers.label":
      "{planType}-{numberOfWorkspaceMembers，plural，one{{numberOfWorkspaceMembers}名称}other{{numberOfWorkspaceMembers}名称}}",
    "sidebarSwitcher.workspaceSubtitleWithoutMembers.label": "{planType}",
    "sidebarSwitcherMultiAccount.addAccount.description":
      "使用现有帐户或注册新电子邮件。现有帐户将保持登录状态。",
    "sidebarSwitcherMultiAccount.addAccount.title": "添加帐户",
    "sidebarSwitcherMultiAccount.addAccountButton.label": "添加其他帐户",
    "sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label": "取消",
    "sidebarSwitcherMultiAccount.createWork.description":
      "确保成员已在Notion中。如果没有，我们将为您和您的成员创建一个新的主页。",
    "sidebarSwitcherMultiAccount.createWork.title": "创建业务帐户",
    "sidebarSwitcherMultiAccount.errorMessage":
      "SidebarSwitcherMultiAccount的createType异常",
    "sidebarSwitcherMultiAccount.menuItem.createWorkAccountButton.label":
      "创建业务帐户",
    "sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label": "全部注销",
    "sidebarSwitcherMultiAccount.mobileMenu.title": "帐户和工作空间",
    "sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label":
      "创建或参与工作区",
    "sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label": "注销",
    "sidebarTrash.allPages.tabHeader": "所有页面",
    "sidebarTrash.deletePagePermanentlyButton.tooltip": "永久删除",
    "sidebarTrash.filterBy.noMatchesPrompt": "没有匹配的结果。",
    "sidebarTrash.filterBy.placeholder": "过滤到页面标题",
    "sidebarTrash.goOnline.prompt": "在线浏览回收站。",
    "sidebarTrash.inCurrentPage.tabHeader": "当前页面",
    "sidebarTrash.learnMore.prompt": "如何删除和恢复页面",
    "sidebarTrash.menu.header": "回收站",
    "sidebarTrash.mobileFilterBy.noMatchesPrompt": "没有匹配的结果。",
    "sidebarTrash.restorePageButton.tooltip": "恢复",
    "sidebarTrashButton.text": "回收站",
    "sidebarUnexpandButton.closeSidebar.tooltip": "关闭边栏",
    "signupPage.pageTitle": "注册会员",
    "signupPage.title": "注册会员",
    "signupPage.titleForSpace": "欢迎访问Notion的{company}页面。",
    "sketchBlock.embeds.button.label": "Sketch嵌入",
    "sketchBlock.embeds.caption": "与启用了公共访问的Sketch链接兼容",
    "sketchBlock.placeholder": "Sketch嵌入",
    "slackActions.dialogError.loginWithSlack.errorMessage": "出现问题。",
    "slackActions.loginPopupModal.title": "Slack登录",
    "slackAuthorizationErrors.blockNotFound.errorMessage": "找不到块。",
    "slackAuthorizationErrors.missingEditPermission.errorMessage":
      "用户无法编辑块。",
    "slackAuthorizationErrors.webhookNotFound.errorMessage":
      "找不到Slack webhook。",
    "slackIntegrationButton.removeIntegrationConfirmationDialog.prompt":
      "是否确实要删除Slack集成？",
    "slackIntegrationButton.removeIntegrationConfirmationDialog.removeButton.label":
      "移除",
    "slackNotification.pageTitle.untitledPage.placeholder": "无标题",
    "slackNotification.welcomeMessage":
      "欢迎来到Notion！此通道现已与Notion页面{pageLink}集成。您将收到有关该页面或页面内的评论、声明和编辑的通知。",
    "slackNotifications.blockCreated.notificationContents":
      "{userName}已在{workspaceName}中创建了{blockName}块",
    "slackNotifications.blockDeleted.notificationContents":
      "{userName}已从{workspaceName}中删除了{blockName}块",
    "slackNotifications.blockEdited.notificationContents":
      "{userName}已编辑{blockName}块",
    "slackNotifications.botInvitedYouToSpace.notificationContents":
      "已被邀请加入{workspaceName}。",
    "slackNotifications.collectionPropertyEdited.contents":
      "{userName}已更改{collectionName}中的{propertyName}属性",
    "slackNotifications.collectionRowCreated.notificationContents":
      "{userName}已在{collectionName}中创建行{rowName}",
    "slackNotifications.collectionRowDeleted.notificationContents":
      "{userName}已从{collectionName}中删除了{rowName}行",
    "slackNotifications.collectionViewEdited.contents":
      "{userName}已在{collectionName}中更改了{collectionViewName}视图。",
    "slackNotifications.defaultPropertyName.label": "属性",
    "slackNotifications.emptyPropertyValue.label": "未指定",
    "slackNotifications.equationAuthorName.notificationTitle": "数学公式",
    "slackNotifications.permissionChanged.notificationBody":
      "{permissionTarget}：{permissionsBefore}→{permissionsAfter}",
    "slackNotifications.permissionsCreatedOrDeletedText.notificationContents":
      "{permissionTarget}：{permissions}",
    "slackNotifications.permissionsEditedForBlock.notificationContents":
      "{userName}已编辑{blockName}权限",
    "slackNotifications.propertyValueChanged.notificationContents":
      "{propertyName}：{propertyValueBefore}→{propertyValueAfter}",
    "slackNotifications.propertyValueWithName.notificationContents":
      "{propertyName}：{propertyValue}",
    "slackNotifications.publicPermissions.label": "公开",
    "slackNotifications.reminderInPage.contents": "{pageName}具有卸码器",
    "slackNotifications.showMoreEditsLinkText.label":
      "{numberOfMoreEdits，plural，other{已编辑的{numberOfMoreEdits}显示更多项目.}}",
    "slackNotifications.unknownAuthorForComment.label": "作者微商",
    "slackNotifications.unknownCollectionPropertyEdited.label": "未知",
    "slackNotifications.untitledCollectionName.label": "无标题",
    "slackNotifications.userAddedYouToSpace.notificationContents":
      "{userName}已将您添加到{workspaceName}",
    "slackNotifications.userCommentedInPage.notificationContents":
      "{userName}已评论{pageName}",
    "slackNotifications.userEditedAccountSettings.contents":
      "{userName}已编辑帐户设置",
    "slackNotifications.userEditedCollection.notificationContents":
      "{userName}已编辑{collectionName}",
    "slackNotifications.userInvitedYouToSpace.notificationContents":
      "{userName}已邀请您加入{workspaceName}",
    "slackNotifications.userLockedPage.contents":
      "{userName}已锁定{pageName}页面",
    "slackNotifications.userMentionedInBlock.notificationContents":
      "{userName}已经向{pageName}声明了您的成员。",
    "slackNotifications.userRequestedAccessToBlock.contents":
      "{userName}请求访问{pageName}",
    "slackNotifications.userUnlockedPage.contents":
      "{userName}已解锁{pageName}页面",
    "spaceActions.createGettingStartedPage.copyNotCreated.error":
      "无法创建客户端副本。",
    "spaceActions.deletingWorkspace.loadingMessage": "正在删除工作区.",
    "spaceActions.dialogError.couldNotMoveContentError.message":
      "抱歉！无法移动此内容。请再试一次。",
    "spaceActions.dialogError.createOrUpdatePermissionGroup.invalidWorkspaceStorage.message":
      "没有此工作空间的本地数据。",
    "spaceActions.dialogError.createTemplatesInSpace.invalidStorage.message":
      "空间数据无效。",
    "spaceActions.dialogError.createTemplatesInWorkspace.invalidStorage.message":
      "空间视图数据无效。",
    "spaceActions.dialogError.createTemplatesInWorkspace.invalidUserSettings.message":
      "用户设置数据无效。",
    "spaceActions.dialogError.createWorkspaceError.goOnline.message":
      "在线创建工作空间。",
    "spaceActions.dialogError.createWorkspaceError.message":
      "抱歉！无法创建工作区。请再试一次。",
    "spaceActions.dialogError.createWorkspaceError.notLoggedIn.message":
      "必须已登录。",
    "spaceActions.dialogError.forkPageError.message": "页面分割失败。",
    "spaceActions.dialogError.joinWorkspace.invalidWorkspaceStorage.message":
      "没有生成空间视图数据。",
    "spaceActions.dialogError.moveContentError.cannotMovePages.message":
      "无法一次移动这些页面。",
    "spaceActions.dialogError.moveContentError.goOnline.message":
      "在线访问，将内容移到其他空间。",
    "spaceActions.dialogError.movetoWorkspace.notLoggedIn.message":
      "必须已登录。",
    "spaceActions.dialogError.navigateToWorkspace.invalidStorage.message":
      "空间数据无效。",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.caption":
      "所有拥有此域电子邮件地址的人都可以自动加入工作区。",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainInput.placeholder":
      "请输入您的电子邮件域",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainsDropdown.placeholder":
      "请输入您的电子邮件域",
    "spaceBasicSettings.allowedEmailDomainsSection.emailDomainsDropdown.placeholderNoResults":
      "输入此工作空间成员的电子邮件域",
    "spaceBasicSettings.allowedEmailDomainsSection.title": "允许的电子邮件域",
    "spaceBasicSettings.cancelButton.label": "取消",
    "spaceBasicSettings.changeWorkspaceDomain.areYouSure": "是否确实要更改域？",
    "spaceBasicSettings.changeWorkspaceDomain.cancelButton.label": "取消",
    "spaceBasicSettings.changeWorkspaceDomain.changeButton.label": "变更",
    "spaceBasicSettings.changeWorkspaceDomain.prompt":
      "此工作区有一个公共页面。更改域时，以{current_domain}.notion.site开头的公共页面上的现有链接将不起作用。是否要更改域？",
    "spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceButton.label":
      "删除整个工作空间",
    "spaceBasicSettings.dangerousSettingsSection.deleteWorkspaceHelpButton.caption":
      "查看如何删除工作空间。",
    "spaceBasicSettings.dangerousSettingsSection.leaveWorkspaceButton.label":
      "退出工作区",
    "spaceBasicSettings.dangerousSettingsSection.title": "危险区域",
    "spaceBasicSettings.deleteWorkspace.untitledWorkspace.placeholder":
      "无标题工作空间",
    "spaceBasicSettings.deleteWorkspaceConfirmationDialog.deleteWorkspaceButton.label":
      "永久删除工作区",
    "spaceBasicSettings.deleteWorkspaceConfirmationDialog.prompt":
      "此操作无法撤消。工作区将被永久删除，包括所有页面和文件。要确认删除意向，请输入工作空间名称。",
    "spaceBasicSettings.domainInUseError": "很抱歉。不可用的域。",
    "spaceBasicSettings.domainRequiredError": "域输入是必需的。",
    "spaceBasicSettings.domainSection.title": "域",
    "spaceBasicSettings.domainSection.workspaceDomainInput.caption":
      "共享{linkText}链接，将具有允许电子邮件域的人员添加到工作空间。",
    "spaceBasicSettings.domainSection.workspaceDomainInput.placeholder": "网址",
    "spaceBasicSettings.exportContentSection.exportButton.label":
      "导出整个工作空间内容",
    "spaceBasicSettings.exportContentSection.helpButton.caption":
      "了解如何导出工作空间。",
    "spaceBasicSettings.exportContentSection.title": "导出内容",
    "spaceBasicSettings.exportMembersSection.exportAsCSVButton.label":
      "导出到成员CSV",
    "spaceBasicSettings.exportMembersSection.helpButton.caption":
      "了解如何导入成员。",
    "spaceBasicSettings.exportMembersSection.title": "导出成员",
    "spaceBasicSettings.groupsTab.title": "组",
    "spaceBasicSettings.guestLimitedAccessMessage":
      "您当前是此工作区中的来宾。要显示其他页面和工作空间设置，请要求管理员添加为成员。",
    "spaceBasicSettings.leaveWorkspaceConfirmationDialog.leaveButton.label":
      "出去",
    "spaceBasicSettings.leaveWorkspaceConfirmationDialog.prompt":
      "是否要离开此工作区？",
    "spaceBasicSettings.membersTab.manageMembersWithLinkCaption":
      "在这里管理成员",
    "spaceBasicSettings.membersTab.manageMembersWithoutLinkCaption":
      "在这里，您可以管理成员或设置<setupdomainlink>域</setupdomainlink>，以便允许具有允许电子邮件域的所有成员自动加入工作区。",
    "spaceBasicSettings.nameInput.placeholder": "示例:公司名称",
    "spaceBasicSettings.offlineMessage": "要管理设置，请在线连接。",
    "spaceBasicSettings.spacePermissionsSettings.groupsTab.defaultNewGroupName":
      "无标题",
    "spaceBasicSettings.title": "设置工作空间",
    "spaceBasicSettings.updateButton.label": "更新",
    "spaceBasicSettings.workspaceDomain.tooltip": "单击以复制链接",
    "spaceBasicSettings.workspaceIconSection.caption":
      "上传图片或选择表情符号。显示在侧边栏和通知中。",
    "spaceBasicSettings.workspaceIconSection.title": "“图标”",
    "spaceBasicSettings.workspaceNameSection.nameInput.caption":
      "您可以使用您的姓名或团队的名称。使用简单的名称。",
    "spaceBasicSettings.workspaceNameSection.title": "名称",
    "spaceHelpers.getSpaceName.untitledWorkspace.name": "无标题工作空间",
    "spaceIntegrationSettings.actionMenu.contactDeveloperSupportButton.label":
      "联系支持团队",
    "spaceIntegrationSettings.actionMenu.copyInternalIntegrationTokenButton.label":
      "内部统一令牌复制",
    "spaceIntegrationSettings.actionMenu.copyTokenModal.closeButton.label":
      "关闭",
    "spaceIntegrationSettings.actionMenu.copyTokenModal.copyTokenButton.label":
      "复制令牌",
    "spaceIntegrationSettings.actionMenu.disconnectIntegrationButton.laber":
      "断开{integrationName}的连接",
    "spaceIntegrationSettings.actionMenu.visitDeveloperWebsiteButton.label":
      "访问开发人员网站",
    "spaceIntegrationSettings.error": "出现问题。",
    "spaceIntegrationSettings.helpButton.caption": "了解集成管理",
    "spaceIntegrationSettings.integrationManagementSiteLink.caption":
      "为我创建集成",
    "spaceIntegrationSettings.integrationTable.creationInfoColumn.contents":
      "{installerName}，{installedTime}",
    "spaceIntegrationSettings.integrationTable.emptyMessage": "未安装集成",
    "spaceIntegrationSettings.integrationTable.integrationColumn.title": "整合",
    "spaceIntegrationSettings.integrationTable.row.internalIntegrationLabel":
      "内部使用",
    "spaceIntegrationSettings.integrationtable.creationInfoColumn.title":
      "添加的用户",
    "spaceIntegrationSettings.title": "{workspaceName}的完整合并列表",
    "spaceInviteLinkEmail.body.cta":
      "您可以将此电子邮件转发给团队成员，邀请他们进入我的工作空间。",
    "spaceInviteLinkEmail.body.label":
      "{userName}已在{spaceName}中创建新的Notion工作空间。点击链接加入！",
    "spaceInviteLinkEmail.subject.label": "加入{spaceName}中的团队",
    "spaceInviteLinkEmail.text.label":
      "我的团队使用Notion一起工作，制定计划和处理业务。",
    "spaceInviteLinkEmail.titleOfEmail": "加入{spaceName}中的团队",
    "spacePermissionSettings.memberUpsell.alternativeTrialLabel": "免费试用",
    "spacePermissionSettings.memberUpsell.alternativeUpgradeLabel":
      "升级到团队计划",
    "spacePermissionSettings.memberUpsell.caption":
      "体验我们的团队计划，享受公共工作空间、无限团队成员和高级权限。",
    "spacePermissionSettings.memberUpsell.title": "与无限数量的团队成员共享",
    "spacePermissionSettings.spaceMembers.inviteLink.caption":
      "分享这个秘密链接，邀请人们进入这个工作空间。只有管理员才能看到它。",
    "spacePermissionSettings.spaceMembers.inviteLink.resetLink":
      "您可以通过重置<resetlink>链接</resetlink>来创建新的邀请链接。",
    "spacePermissionSettingsTrialModal.cancel.label": "取消",
    "spacePermissionSettingsTrialModal.tryItFree.label": "免费试用",
    "spacePermissionsSettings.groupsTab.adminsOnly":
      "只有管理员才能添加权限组。",
    "spacePermissionsSettings.groupsTab.caption":
      "在“共享”菜单中设置组，以方便您控制页面权限。",
    "spacePermissionsSettings.groupsTab.createGroupButton.label": "创建组",
    "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationButton.label":
      "是",
    "spacePermissionsSettings.groupsTab.deleteGroupModal.confirmationMessage":
      "是否确实要删除此组？该组中的所有私人页面将转移到您身上。",
    "spacePermissionsSettings.groupsTab.filterGroupsInput.placeholder":
      "按电子邮件或名称过滤",
    "spacePermissionsSettings.groupsTab.groupList.actionMenu.deleteItem":
      "删除",
    "spacePermissionsSettings.groupsTab.groupList.actionMenu.renameItem":
      "重命名",
    "spacePermissionsSettings.groupsTab.groupList.addMemberButton.label":
      "添加成员",
    "spacePermissionsSettings.groupsTab.removeMemberFromGroupButton.label":
      "移除",
    "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationButton.label":
      "是",
    "spacePermissionsSettings.groupsTab.removeMemberFromGroupDialog.confirmationMessage":
      "是否确实要删除此成员？",
    "spacePermissionsSettings.groupsTab.showMoreUsersButton.label":
      "{numberOfHiddenUsers，plural，other{{numberOfHiddenUsers}名称查看更多}}",
    "spacePermissionsSettings.groupsTab.upgradeCaption":
      "升级至团队计划，设置组并控制共享菜单的权限。",
    "spacePermissionsSettings.groupsTab.upgradeMessage":
      "要使用权限组，请升级到团队或企业计划。",
    "spacePermissionsSettings.groupsTab.upgradeMessageWithLink":
      "要使用权限组，请升级到<upgradelink>团队或企业计划。</upgradelink>",
    "spacePermissionsSettings.groupsTab.upgradeTitle": "升级以创建组",
    "spacePermissionsSettings.groupsTab.userGroup.addUserButton.label": "添加",
    "spacePermissionsSettings.groupsTab.userGroup.groupNameInput.placeholder":
      "无标题",
    "spacePermissionsSettings.groupsTab.userGroup.memberCount":
      "{numberOfGroupMembers，plural，other{成员{numberOfGroupMembers}名称}}",
    "spacePermissionsSettings.groupsTab.userGroup.searchUserDropdown.noResultsMessage":
      "无结果",
    "spacePermissionsSettings.groupsTab.userGroup.userSearchInput.placeholder":
      "搜索用户",
    "spacePermissionsSettings.guestsTab.title": "来宾({numberOfGuests}名)",
    "spacePermissionsSettings.helpButton.caption": "如何将成员添加到工作区",
    "spacePermissionsSettings.inviteLinkRefreshModal.accept": "重置",
    "spacePermissionsSettings.inviteLinkRefreshModal.description":
      "是否确实要重置邀请链接？旧链接不再可用。",
    "spacePermissionsSettings.membersTab.filterGuestsInput.placeholder":
      "按电子邮件或名称过滤",
    "spacePermissionsSettings.membersTab.filterMembersInput.placeholder":
      "按电子邮件或名称过滤",
    "spacePermissionsSettings.membersTab.showMore.message":
      "{moreMembersCount}显示更多名称",
    "spacePermissionsSettings.membersTab.showMoreGuestsButton.label":
      "{numberOfHiddenGuests，plural，other{{numberOfHiddenGuests}显示更多名称}}",
    "spacePermissionsSettings.membersTab.title": "成员({numberOfMembers}名)",
    "spacePermissionsSettings.offlineMessage": "在线管理成员。",
    "spacePermissionsSettings.spaceMembers.inviteLink.copyButton": "复制链接",
    "spacePermissionsSettings.spaceMembers.inviteLink.shareButton": "共享链接",
    "spacePermissionsSettings.spaceMembers.inviteLink.title": "邀请链接",
    "spacePermissionsSettings.spaceMembers.members.title": "成员",
    "spacePermissionsSettings.updatePermissionsMessage": "正在更新.",
    "spacePermissionsSettings.userTable.accessLevelColumn.header": "访问级别",
    "spacePermissionsSettings.userTable.userColumn.header": "用户",
    "spaceSettings.closeSettingsDialog.cancelationButton.label": "不",
    "spaceSettings.closeSettingsDialog.confirmationButton.label": "是",
    "spaceSettings.closeSettingsDialog.confirmationMessage":
      "尚未保存更改。是否要保存更改？",
    "spaceSettings.closeSettingsDialog.updateSettingsButton.label": "更新",
    "spaceSettings.darkModeToggle.label": "黑暗模式",
    "spaceSettings.sidebar.button.upgrade": "升级计划",
    "spaceSettings.sidebar.personalSettingsSection.title": "我",
    "spaceSettings.sidebar.upgradeLink": "无限升级",
    "spaceSettings.sidebar.workspaceSettingsSection.title": "工作空间",
    "spaceSettingsSidebar.accountTab.title": "我的账户",
    "spaceSettingsSidebar.api.title": "API",
    "spaceSettingsSidebar.apiAndBots.title": "API和机器人",
    "spaceSettingsSidebar.appearanceTab.title": "主题",
    "spaceSettingsSidebar.billingTab.title": "索赔",
    "spaceSettingsSidebar.connectedAppsTab.title": "连接的应用程序",
    "spaceSettingsSidebar.creditTab.title": "赚取积分",
    "spaceSettingsSidebar.integrationsTab.title": "整合",
    "spaceSettingsSidebar.languageAndRegionTab.title": "语言和地区",
    "spaceSettingsSidebar.membersTab.title": "成员",
    "spaceSettingsSidebar.notificationsTab.title": "我的通知",
    "spaceSettingsSidebar.plansTab.title": "套餐",
    "spaceSettingsSidebar.securityAndSAMLTab.title": "安全和身份",
    "spaceSettingsSidebar.settingsTab.title": "设置",
    "spaceSettingsSidebar.subscriptionTab.title": "订阅",
    "spaceSettingsSidebar.upgradeTab.title": "升级",
    "spaceSubscriptionBilling.addButton.label": "添加",
    "spaceSubscriptionBilling.address.invalidError":
      "地址无效。要进行结算，请更改地址。",
    "spaceSubscriptionBilling.apply.label": "使用",
    "spaceSubscriptionBilling.applyCouponModal.successMessage":
      "优惠券使用成功！",
    "spaceSubscriptionBilling.applyCouponModal.title": "使用优惠券",
    "spaceSubscriptionBilling.applyCreditButton.label": "应用信用",
    "spaceSubscriptionBilling.cancelButton.label": "取消",
    "spaceSubscriptionBilling.changeBillingAddressModal.ZIPInput.label":
      "邮政编码",
    "spaceSubscriptionBilling.changeBillingAddressModal.addressLine1Input.label":
      "地址栏1",
    "spaceSubscriptionBilling.changeBillingAddressModal.addressLine2Input.label":
      "地址栏2",
    "spaceSubscriptionBilling.changeBillingAddressModal.businessNameInput.label":
      "公司名称",
    "spaceSubscriptionBilling.changeBillingAddressModal.cancelButton.label":
      "取消",
    "spaceSubscriptionBilling.changeBillingAddressModal.cityInput.label": "诗",
    "spaceSubscriptionBilling.changeBillingAddressModal.countryInput.label":
      "国家",
    "spaceSubscriptionBilling.changeBillingAddressModal.nameInput.label":
      "名称",
    "spaceSubscriptionBilling.changeBillingAddressModal.stateInput.label":
      "州/省",
    "spaceSubscriptionBilling.changeBillingAddressModal.title": "更改开单地址",
    "spaceSubscriptionBilling.changeBillingAddressModal.updateButton.label":
      "更新",
    "spaceSubscriptionBilling.changeBillingEmailModal.title":
      "更改账单电子邮件",
    "spaceSubscriptionBilling.changeBillingInterval.helpButton.label":
      "查看更改对付款金额的影响。",
    "spaceSubscriptionBilling.changeBillingInterval.title": "更改开单期间",
    "spaceSubscriptionBilling.changePaymentMethod.changeCardButton.label":
      "更改卡",
    "spaceSubscriptionBilling.changePaymentMethod.title": "更改付款方法",
    "spaceSubscriptionBilling.changeVATIDModal.subtitle": "请输入国家号码",
    "spaceSubscriptionBilling.changeVATIDModal.title":
      "更改纳税登记号(VAT编号)",
    "spaceSubscriptionBilling.changeYourAddressModal.title": "更改地址",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.credited":
      "完成积分累积",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.due": "期限",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.failed": "失败",
    "spaceSubscriptionBilling.invoicesSection.invoiceStatus.paid": "已付款",
    "spaceSubscriptionBilling.invoicesSection.loadMoreInvoicesButton.label":
      "查看更多",
    "spaceSubscriptionBilling.invoicesSection.noInvoicesMessage":
      "这个工作空间还没有付款记录。",
    "spaceSubscriptionBilling.invoicesSection.title": "账单",
    "spaceSubscriptionBilling.invoicesSection.viewInvoiceButton": "查看发票",
    "spaceSubscriptionBilling.offline.message": "在线管理账单。",
    "spaceSubscriptionBilling.setBillingInterval.enterprisePlan.monthlyBilling.unavailable":
      "企业套餐不可用",
    "spaceSubscriptionBilling.setBillingInterval.monthlyOption": "每月",
    "spaceSubscriptionBilling.setBillingInterval.pricePerMonth":
      "月{monthlyPrice}",
    "spaceSubscriptionBilling.setBillingInterval.pricePerMonth.perMember":
      "成员每人每月{monthlyPrice}",
    "spaceSubscriptionBilling.setBillingInterval.yearlyOption":
      "每年-{yearlySavingsPercent}节约",
    "spaceSubscriptionBilling.setPaymentMethod.achOrWireTransferOption":
      "ACH或电汇",
    "spaceSubscriptionBilling.setPaymentMethod.achOrWireTransferOption.description":
      "通过电子邮件收到发票",
    "spaceSubscriptionBilling.setPaymentMethod.payWithCardOption": "刷卡付款",
    "spaceSubscriptionBilling.setPaymentMethod.payWithCardOption.description":
      "信用卡或借记卡",
    "spaceSubscriptionBilling.subscriptionSettingsSection.VATID.title":
      "商业登记编号(增值税编号)",
    "spaceSubscriptionBilling.subscriptionSettingsSection.applyCoupon.title":
      "使用优惠券",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingAddress.title":
      "开单地址",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingEmail.title":
      "帐单电子邮件",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.title":
      "开单期间",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.value.monthly":
      "每月",
    "spaceSubscriptionBilling.subscriptionSettingsSection.billingInterval.value.yearly":
      "每年",
    "spaceSubscriptionBilling.subscriptionSettingsSection.changePlanButton.label":
      "更改计划",
    "spaceSubscriptionBilling.subscriptionSettingsSection.enterprisePlanTitle":
      "企业定价",
    "spaceSubscriptionBilling.subscriptionSettingsSection.legacyPlanTitle":
      "旧版计划",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.title":
      "付款方式",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.achOrWireTransfer":
      "ACH或电汇",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.creditCard":
      "{creditCardBrand}最后四位数字{lastFourDigits}",
    "spaceSubscriptionBilling.subscriptionSettingsSection.paymentMethod.value.none":
      "不适用",
    "spaceSubscriptionBilling.subscriptionSettingsSection.personalEducationPlanTitle":
      "个人职业(教育)套餐",
    "spaceSubscriptionBilling.subscriptionSettingsSection.personalPlanTitle":
      "个人专业套餐",
    "spaceSubscriptionBilling.subscriptionSettingsSection.restartSubscriptionButton.label":
      "重新开始订阅",
    "spaceSubscriptionBilling.subscriptionSettingsSection.teamPlanTitle":
      "团队计划",
    "spaceSubscriptionBilling.subscriptionSettingsSection.workspaceSubscriptionBalance.title":
      "工作区余额",
    "spaceSubscriptionBilling.subscriptionSettingsSection.yourAddress.title":
      "地址",
    "spaceSubscriptionBilling.updateButton.label": "更新",
    "spaceSubscriptionBilling.upgradeModal.creditSection.notionCredit.description":
      "Notion积分",
    "spaceSubscriptionBilling.upgradeModal.creditSection.promotion.description":
      "促销活动",
    "spaceSubscriptionBilling.upgradeModal.creditSection.title": "应用信用",
    "spaceSubscriptionBilling.upgradeModal.paymentMethodSection.title":
      "付款方式",
    "spaceSubscriptionBilling.useCreditModal.amountOfCreditQuestion":
      "对下一个账单应用多少积分？",
    "spaceSubscriptionBilling.useCreditModal.applyCreditButton.label":
      "应用信用",
    "spaceSubscriptionBilling.useCreditModal.cancelButton.label": "取消",
    "spaceSubscriptionBilling.useCreditModal.nextInvoiceAmount":
      "下一个发票总额",
    "spaceSubscriptionBilling.useCreditModal.title":
      "使用Notion积分-{creditInDollars}可用",
    "spaceSubscriptionBilling.useCreditModal.warning":
      "将积分应用于帐户时，<bold>无法取消</bold>。",
    "spaceSubscriptionBilling.vatCountryCode.subtitle": "请输入国家号码",
    "spaceSubscriptionBilling.vatId.missingCountry":
      "要更改商业登记号码(VAT号码)，请更改帐单地址。",
    "spaceSubscriptionBilling.vatId.vatNotRequired":
      "当前地址的税务管辖权不要求商业登记号码(VAT编号)。",
    "spaceSubscriptionBillingInfoForm.countryDropdown.title": "选择国家或地区",
    "spaceSubscriptionPaymentForm.billingInformation.address": "地址",
    "spaceSubscriptionPaymentForm.billingInformation.businessName":
      "公司名称(可选)",
    "spaceSubscriptionPaymentForm.billingInformation.city": "诗",
    "spaceSubscriptionPaymentForm.billingInformation.country": "国家或地区",
    "spaceSubscriptionPaymentForm.billingInformation.fullName": "名称",
    "spaceSubscriptionPaymentForm.billingInformation.header": "开单信息",
    "spaceSubscriptionPaymentForm.billingInformation.state": "州/省",
    "spaceSubscriptionPaymentForm.billingInformation.zipCode": "邮政编码",
    "spaceSubscriptionPaymentForm.paymentInformation.header": "付款信息",
    "spaceSubscriptionPaymentForm.vatCountryCode.header": "增值税(可选)",
    "spaceSubscriptionPaymentForm.vatCountryCode.placeholder":
      "商业登记编号(增值税编号)",
    "spaceSubscriptionPlans.faqSection.title": "常见问题",
    "spaceSubscriptionPlans.offlineMessage": "在线管理您的计划。",
    "spaceSubscriptionPlans.planName.enterprise": "企业",
    "spaceSubscriptionPlans.planName.personalPro": "个人专业套餐",
    "spaceSubscriptionPlans.planName.team": "团队",
    "spaceSubscriptionPlans.priceDisclaimer":
      "所示价格为每年计费使用费。如果按月计费，<b>个人专业套餐</b>为{personalMonthlyPrice}，<b>团队套餐</b>为每位成员{teamMonthlyPrice}，<b>企业套餐</b>为成员每人每月{enterpriseMonthlyPrice}。",
    "spaceSubscriptionPlans.studentsAndEducatorsSection.getEducationPlanButton.label":
      "免费使用教育套餐",
    "spaceSubscriptionPlans.studentsAndEducatorsSection.text":
      "<p>Notion个人专业套餐对学生和教师免费。只需通过学校电子邮件地址注册，即可立即访问该功能。</p><p>如果您已经在使用个人专业版套餐，您可以通过将与您的帐户关联的电子邮件更改为学校电子邮件地址免费使用。</p><p>",
    "spaceSubscriptionPlans.studentsAndEducatorsSection.title": "学生和教师",
    "spaceSubscriptionPlans.teamPlan.confirmButtonLabel":
      "{upgrading，select，true{升级到团队计划}other{降级到组计划}}",
    "spaceSubscriptionPlans.teamPlan.confirmMessage":
      "按每个成员每月{price}的价格订阅Notion的团队计划。{br}将从计算日金额中减去帐户余额。",
    "spaceSubscriptionSettings.upgradeMenu.paymentExplanation":
      "注意:在下一个付款周期中，您需要提供付款信息，以防积分不足。收取使用费前7天发送电子邮件。",
    "spaceSubscriptionSettings.upgradeModal.billingIntervalSection.header":
      "开单周期",
    "spaceSubscriptionSettings.upgradeModal.billingIntervalSection.title":
      "开单期间",
    "spaceSubscriptionSettings.upgradeModal.cancelButton.label": "取消",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.creditsAdjustment":
      "我们还从账单中扣除了<bold>{creditAmountInDollars}的积分</bold>。",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.creditsAndBalanceAdjustment":
      "此外，从账单中减去了<bold>{creditAmountInDollars}的积分</bold>和<bold>{accountBalanceInDollars}工作空间余额</bold>。",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.personalPlan":
      "{billedYearly，select，true{<bold>月{chargeAmount}</bold>x<bold>12个月</bold>的使用费。}将收取other{<bold>月{chargeAmount}的使用费</bold>.}}",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.teamPlan":
      "对{billedYearly、select、true{{pluralizedMembers}名成员收取成员<bold>每人每月{chargeAmount}</bold>x<bold>12个月</bold>的使用费。}}对other{{pluralizedMembers}名成员收取成员<bold>每人每月{chargeAmount}</bold>的使用费。}}",
    "spaceSubscriptionSettings.upgradeModal.chargeSummary.workspaceBalanceAdjustment":
      "同时，从账单中减去了<bold>{accountBalanceInDollars}的工作空间余额</bold>。",
    "spaceSubscriptionSettings.upgradeModal.checkEmailDialog.message":
      "查看电子邮件中的账单。",
    "spaceSubscriptionSettings.upgradeModal.contactSales": "联系销售团队",
    "spaceSubscriptionSettings.upgradeModal.memberPluralForm":
      "{memberCount，plural，other{成员{memberCount}名称}}",
    "spaceSubscriptionSettings.upgradeModal.payButton.label": "结算",
    "spaceSubscriptionSettings.upgradeModal.paymentMethodSection.header":
      "付款方式",
    "spaceSubscriptionSettings.upgradeModal.sales.questions":
      "你有什么问题吗？详情请咨询销售团队。",
    "spaceSubscriptionSettings.upgradeModal.titleWithWorkspaceName":
      "将{spaceName}工作空间升级到{planName}",
    "spaceSubscriptionSettings.upgradeModal.titleWithoutWorkspaceName":
      "将工作空间升级到{planName}",
    "spaceSubscriptionSettings.upgradeModal.totalCharge.Label": "合计",
    "spaceSubscriptionSettings.upgradeToPro.CTALabel": "升级到个人专业版计划",
    "spaceSubscriptionSettings.upgradeToTeam.CTALabel": "无限次使用",
    "spaceSubscriptionUpdatePaymentMethod.applePay.total.label":
      "Notion-定期付款",
    "spaceSubscriptionUpdatePaymentMethod.creditCard.update.header":
      "更改信用卡信息",
    "spaceSubscriptionUpdatePaymentMethod.creditCard.updateButton": "变更",
    "spaceSubscriptionUpdatePaymentMethod.update.header": "更改付款方法",
    "spaceSubscriptionUpgradeMenu.checkEmailDialog.message":
      "查看电子邮件中的账单。",
    "spaceSubscriptionUpgradeMenu.creditLeftover.message":
      "您目前使用的信用额超出了您的要求。我们将为将来的账单应用差额({creditAmountLeft})作为帐户余额。",
    "spaceSubscriptionUpgradeMenu.subscribeMessage": "订阅",
    "spaceSubscriptionUpgradeMenu.title.enterprisePlan": "Notion公司",
    "spaceSubscriptionUpgradeMenu.title.personalPlan": "Notion个人套餐",
    "spaceSubscriptionUpgradeMenu.title.teamPlan": "Notion团队",
    "spaceSubscriptionUpgradeModal.applePay.total.label": "Notion-定期付款",
    "spaceSubscriptionUpgradeModal.billingAddress.invalidError":
      "地址无效。要进行结算，请更改地址。",
    "spaceSubscriptionUpgradeModal.billingAddress.missingCountryError":
      "请输入地址，以便进行结算。",
    "spaceSubscriptionUpgradeModal.continueButton.label": "继续",
    "spaceSubscriptionUpgradeModal.creditCard.genericError":
      "此卡无法处理付款。请再试一次。",
    "spaceSubscriptionUpgradeModal.dueToday.label": "付款金额",
    "spaceSubscriptionUpgradeModal.orderSummary.enterprisePlan":
      "企业计划({numberOfMembers，plural，one{#人}other{#人}})",
    "spaceSubscriptionUpgradeModal.orderSummary.header": "订单历史记录",
    "spaceSubscriptionUpgradeModal.orderSummary.personalPlan": "个人专业套餐",
    "spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedMonthly":
      "{price}/每位用户/每月使用费·每月收费",
    "spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedYearly":
      "{price}/每位用户/每月使用费·每年计费",
    "spaceSubscriptionUpgradeModal.orderSummary.teamPlan":
      "团队计划({numberOfMembers，plural，one{#人}other{#人}})",
    "spaceSubscriptionUpgradeModal.upgradeButton.enterprisePlan":
      "升级到企业计划",
    "spaceSubscriptionUpgradeModal.upgradeButton.personalProPlan":
      "升级到个人专业版计划",
    "spaceSubscriptionUpgradeModal.upgradeButton.teamPlan": "升级到团队计划",
    "spaceSubscriptionUpgradeOrderSummary.orderTotal": "合计",
    "spaceSubscriptionUpgradePlanFeatures.blockLimit.description": "前1，000块",
    "spaceSubscriptionUpgradePlanFeatures.blockLimit.title": "免费",
    "spaceSubscriptionUpgradePlanFeatures.blockLimit.tooltip":
      "块是可添加到页面的内容，如文本段落、待办事项等。{br}团队试用版不支持团队计划的某些功能。",
    "stripeHelpers.cardDeclined.error.message": "卡付款被拒绝。",
    "stripeHelpers.invalidCVC.error.message": "卡的安全代码无效。",
    "studentNotEligibleModal.contactUsSection.message":
      "如果您对此有任何疑问，请参阅<inlinelink>更多信息和常见问题</inlinelink>。",
    "studentNotEligibleModal.header":
      "<p>对不起，如果您使用此电子邮件地址，您将不有资格使用免费的个人专业版计划。</p><p>K-12学生、K-12教育家、个人电子邮件地址(如Gmail和Outlook)没有资格免费使用<pricinglink>个人专业版计划</pricinglink>，但任何提供无限存储空间的<pricinglink>个人计划</pricinglink>均可免费使用。</p>",
    "studentNotEligibleModal.numberedList.changeEmailItem.button.label":
      "更改电子邮件",
    "studentNotEligibleModal.numberedList.changeEmailItem.message":
      "目前的电子邮件地址如下：",
    "studentNotEligibleModal.numberedList.changeEmailItem.message2":
      "除了以.edu结尾的电子邮件，还有数千个大学和专科域名已经可用！",
    "studentNotEligibleModal.numberedList.firstItem": "1.",
    "studentNotEligibleModal.numberedList.item2.promocode.errorMessage":
      "促销代码{code}不存在。",
    "studentNotEligibleModal.numberedList.item2.promocodePlaceholder":
      "输入学生促销代码",
    "studentNotEligibleModal.numberedList.promoCodeItem.message":
      "有学生促销代码吗？",
    "studentNotEligibleModal.numberedList.promoCodeItem.submitButton": "提交",
    "studentNotEligibleModal.numberedList.secondItem": "2.",
    "subheaderBlock.placeholder": "标题2",
    "subscriptSettings.freePersonal.downgradeTitle": "是否要降级为个人计划？",
    "subscriptionActions.overFreeBlockLimit.longMessage":
      "已超过免费套餐的区块限制。",
    "subscriptionActions.overFreeBlockLimit.shortMessage": "已超过块限制。",
    "subscriptionActions.upgradeForUnlimitedBlocks.longMessage":
      "升级以无限制使用",
    "subscriptionActions.upgradeForUnlimitedBlocks.shortMessage": "升级",
    "subscriptionErrors.cardRequiredError":
      "由于您没有支付上一张发票，因此您必须使用卡。",
    "subscriptionErrors.creditExceedsBalanceError":
      "超过{maxCredits}的余额无法应用信用额。",
    "subscriptionErrors.creditNoFreeLunch": "负积分是不可能的。",
    "subscriptionErrors.invalidCreditError": "此积分金额不可用。",
    "subscriptionErrors.invalidVatError": "不是有效的商业登记号(VAT号)。",
    "subscriptionErrors.missingAddressError": "必须填写地址栏1。",
    "subscriptionErrors.missingNameError": "必须填写名称。",
    "subscriptionErrors.personalPlanMoreThanOneMember":
      "要使用个人计划，工作区中只能有一个成员。",
    "subscriptionHelpers.billingInterval.monthly.option.title":
      "每月套餐-每个成员每月{memberPrice}",
    "subscriptionHelpers.billingInterval.monthly.title": "每月",
    "subscriptionHelpers.billingInterval.yearly.option.title":
      "<pre>年套餐-每个成员每月{memberPrice}<span>{yearlySavingsPercent}折扣</span</pre>",
    "subscriptionHelpers.billingInterval.yearly.title":
      "<pre>年付款-<span>{yearlySavingsPercent}折扣</span</pre>",
    "subscriptionHelpers.lineItems.credit": "信用额",
    "subscriptionHelpers.lineItems.promo": "优惠券",
    "subscriptionHelpers.lineItems.promo.subtitle":
      "{expirationInMonths}月可用",
    "subscriptionHelpers.lineItems.subTotal": "小计",
    "subscriptionHelpers.lineItems.tax.subtitle": "应纳税",
    "subscriptionHelpers.lineItems.tax.title": "税金",
    "subscriptionHelpers.paymentMethod.appleOrGooglePay.title":
      "Apple Pay或Google Pay",
    "subscriptionHelpers.paymentMethod.creditCard.title": "信用卡或借记卡",
    "subscriptionHelpers.paymentMethod.invoice.caption": "通过电子邮件接收账单",
    "subscriptionHelpers.paymentMethod.invoice.title": "ACH或电汇",
    "subscriptionHelpers.pricePerMonthPricing.label": "每月US{price}",
    "subscriptionHelpers.pricePerUserPerMonthPricing.label":
      "每月每位成员US{price}",
    "subscriptionSettings.button": "管理订阅",
    "subscriptionSettings.description":
      "目前正在通过Apple的App内购买订阅。您可以在Apple的订阅设置中管理订阅。",
    "subscriptionSettings.freePersonal.downgradeConfirmationButton":
      "降级至个人套餐",
    "subscriptionSettings.freePersonal.downgradeMessage":
      "个人套餐是一个人免费使用的套餐。无法添加成员，每个工作区的来宾数限制为5人。",
    "subscriptionSettings.freeTeam.upgradeMessage":
      "您可以使用付费团队计划提供的对分功能，但块存储限制为1，000。无论何时升级，均可无限次使用。",
    "subscriptionSettings.freeTeam.upgradeTitle": "免费试用团队计划",
    "subscriptionSettings.invalidPromoCodeError.message": "此促销代码无效。",
    "subscriptionSettings.mobileDescription": "通过App Store管理个人套餐订阅。",
    "subscriptionSettings.personalFreeMessage":
      "已免费订阅Notion的个人专业版计划。",
    "subscriptionSettings.startTeamTrialDialog.confirmationbutton":
      "启动团队计划试用版",
    "subscriptionSettings.subscriptionNextChargeMessage.enterprisePlan":
      "{planInterval，select，month{此工作空间中的企业计划为<bold>月{planCharge}</bold>，将在{renewalDate}更新。}other{此工作空间的企业计划为<bold>年{planCharge}</bold>，将在{renewalDate}更新。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.legacyPlan":
      "{planInterval，select，month{此工作空间的遗留计划被</bold>指定为<bold>月{planCharge}，并在{renewalDate}更新。}other{此工作空间的遗留计划被指定为<bold>年{planCharge}</bold>，并在{renewalDate}更新。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.personalEducationPlan":
      "{planInterval，select，month{此工作区的个人专业版(培训)套餐被指定为<bold>月{planCharge}</bold>，并在{renewalDate}更新。}other{此工作区的个人专业版(培训)套餐被指定为<bold>年{planCharge}</bold>，并在{renewalDate}更新。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.personalPlan":
      "{planInterval，select，month{此工作区的个人专业版计划为<bold>月{planCharge}</bold>，并将更新到{renewalDate}。}other{此工作区的个人专业版计划被指定为<bold>年{planCharge}</bold>，并在{renewalDate}更新。}}",
    "subscriptionSettings.subscriptionNextChargeMessage.teamPlan":
      "{planInterval，select，month{此工作区中的团队计划被</bold>指定为<bold>月{planCharge}，并在{renewalDate}更新。}other{此工作空间的团队计划被指定为<bold>年{planCharge}</bold>，并在{renewalDate}更新。}}",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.enterprisePlan":
      "此工作空间中的<bold>企业</bold>计划已在{cancellationDate}中取消，将在{expirationDate}到期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.legacyPla":
      "此工作空间中的<bold>旧</bold>套餐已在{cancellationDate}中取消，将在{expirationDate}过期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.personalEducationPlan":
      "此工作空间中的<bold>个人专业培训</bold>套餐已在{cancellationDate}中取消，将在{expirationDate}过期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.personalPlan":
      "此工作空间中的<bold>个人Pro</bold>套餐已在{cancellationDate}中取消，将在{expirationDate}过期。",
    "subscriptionSettings.subscriptionStatus.cancellationMessage.teamPlan":
      "此工作空间中的<bold>团队</bold>计划已在{cancellationDate}中取消，将在{expirationDate}过期。",
    "subscriptionSettings.subscriptionStatus.legacySubscriptionMessage":
      "订阅系统当前正在进行迁移操作。要检查新功能，请稍候再检查！",
    "subscriptionSettings.subscriptionStatus.nextPlan.personal":
      "当当前套餐到期时，您的个人套餐将应用于此工作区。",
    "subscriptionSettings.subscriptionStatus.nextPlan.team":
      "当当前计划到期时，团队计划(块存储限制为1，000)的免费试用版将适用于此工作区。",
    "subscriptionSettings.subscriptionStatus.personalFreeUpgradeMessage":
      "此工作空间适用<bold>个人计划</bold>。要使用Notion与更多人协作，请升级。",
    "subscriptionSettings.subscriptionStatus.proratedChargeMessage":
      "{upcomingChargeDate}将收取{formattedInvoiceNextCharge}工作的费用。",
    "subscriptionSettings.subscriptionStatus.reachedFreeBlockLimit":
      "此工作空间使用了{freeBlockLimit}免费限制中的{usedBlocks}({utilizationPercentage})的块存储。",
    "subscriptionSettings.subscriptionStatus.remainingChargeMessage":
      "根据帐户余额调整的金额{formattedInvoiceNextCharge}将被收取。",
    "subscriptionSettings.subscriptionStatus.teamTrialMessage":
      "此工作空间采用<bold>团队计划</bold>，具有块存储限制。",
    "subscriptionSettings.subscriptionStatus.upcomingInvoiceLink":
      "<upcominginvoicelink>查看未来的账单</upcominginvoicelink>",
    "subscriptionSettings.title": "订阅",
    "subscriptionSettings.updatingSubscriptionMessage": "正在更新订阅.",
    "subscriptionSettings.upgradeToEnterpriseDialog.confirmationbutton":
      "升级到企业计划",
    "subscriptionSettings.upgradeToEnterpriseDialog.message":
      "按每个成员每月{price}的价格订阅Notion的企业计划。{br}将从计算日金额中减去帐户余额。",
    "subscriptionSettings.upgradeToEnterpriseDialog.withPossibleIntervalChange.message":
      "根据当前开单周期和帐户余额，将收取按比例分配的金额。{notYearly、select、true{之后，将收取年度费用。}false{}}",
    "subscriptionSettings.verifyingEligibilityMessage": "正在检查资格.",
    "subscriptionUpgradeDetails.features": "<span>{planName}的所有功能</span>+",
    "subscriptionUpgradeDetails.learnMore": "了解详情",
    "subscriptionUpgradeDetails.oneLiner.enterprise":
      "提供公司运营所需的控制和支持的计划。",
    "subscriptionUpgradeDetails.oneLiner.personal":
      "为想要做更多工作的高级用户准备的套餐。",
    "subscriptionUpgradeDetails.oneLiner.team":
      "这是针对想一起写、计划、工作的团队的套餐。",
    "subscriptionUpgradeDetails.perMonthPricing.label": "每月",
    "subscriptionUpgradeDetails.perUserPerMonthPricing.label": "每月每位成员",
    "subscriptionUpgradeDetails.planName.free": "个人套餐",
    "subscriptionUpgradeDetails.planName.personal": "职业选手",
    "subscriptionUpgradeDetails.planName.team": "团队计划",
    "subscriptionUpgradeDetails.planName.teamTrial": "团队体验版",
    "subscriptionUpgradeDetails.price": "{price}",
    "subscriptionUpgradeDetails.title.enterprise": "升级到企业计划",
    "subscriptionUpgradeDetails.title.personal": "升级到个人专业版计划",
    "subscriptionUpgradeDetails.title.team": "升级到团队计划",
    "subscriptionUpgradeDetails.title.teamFree": "升级到团队体验版",
    "subscriptionUpgradeModal.oneLiner.enterprise":
      "提供公司运营所需的控制和支持的计划。",
    "subscriptionUpgradeModal.oneLiner.personal":
      "为需要做更多事情的电力用户准备的套餐。",
    "subscriptionUpgradeModal.oneLiner.team":
      "这是针对想一起写、计划、工作的团队的套餐。",
    "subscriptionUpgradeModal.title.enterprise": "升级到企业计划",
    "subscriptionUpgradeModal.title.personal": "升级到个人专业版计划",
    "subscriptionUpgradeModal.title.team": "升级到团队计划",
    "subscriptionUpgradeModal.title.teamFree": "升级到团队体验版",
    "subsubheaderBlock.placeholder": "标题3",
    "tableOfContentsBlock.mobileActionMenu.button.label": "其他操作.",
    "tableOfContentsBlock.placeholder":
      "要添加目录，请添加标题。<linktohelpbutton>查看更多</linktohelpbutton>。",
    "templateChecklist.completed.description":
      "如果您需要更多灵感，请访问Notion指南，探索使用Notion的新方法，以提高您的技能。",
    "templateChecklist.completed.header": "完成！",
    "templateChecklist.quickNote.a.description": "查看实际文档和维基(A)",
    "templateChecklist.quickNote.a.title": "导入工作区(A)",
    "templateChecklist.quickNote.b.description": "查看实际文档和维基(B)",
    "templateChecklist.quickNote.b.title": "导入工作区(B)",
    "templateChecklist.quickNote.c.description": "查看实际文档和维基(C)",
    "templateChecklist.quickNote.c.title": "导入工作空间(C)",
    "templateChecklistHeader.useCaseHeader.databases": "开始使用数据库",
    "templateChecklistHeader.useCaseHeader.default": "开始使用Notion",
    "templateChecklistHeader.useCaseHeader.notes": "开始使用注释",
    "templateChecklistHeader.useCaseHeader.projectManagement": "启动项目和任务",
    "templateChecklistHeader.useCaseHeader.wiki": "开始使用维基和文档",
    "templateHelpers.personas.design": "设计",
    "templateHelpers.personas.education": "教育",
    "templateHelpers.personas.educator": "教育家",
    "templateHelpers.personas.engineering": "工程",
    "templateHelpers.personas.entrepreneur": "企业家",
    "templateHelpers.personas.freelancer": "自由职业者",
    "templateHelpers.personas.gettingStarted": "入门",
    "templateHelpers.personas.humanResources": "问候",
    "templateHelpers.personas.it": "信息技术",
    "templateHelpers.personas.marketing": "营销",
    "templateHelpers.personas.media": "媒体",
    "templateHelpers.personas.other": "其他",
    "templateHelpers.personas.personal": "个人",
    "templateHelpers.personas.productManagement": "商品管理",
    "templateHelpers.personas.productManagementV2": "产品",
    "templateHelpers.personas.sales": "销售",
    "templateHelpers.personas.student": "学生",
    "templateHelpers.personas.suggestedTemplates": "推荐模板",
    "templateHelpers.personas.support": "支持",
    "templateHelpers.personas.truncated.humanResources": "人事部",
    "templateHelpers.templates.applicantTracker": "申请人跟踪器",
    "templateHelpers.templates.blogPost": "博客文章",
    "templateHelpers.templates.brandAssets": "品牌资产",
    "templateHelpers.templates.classDirectory": "类目录",
    "templateHelpers.templates.classNotes": "类注释",
    "templateHelpers.templates.classroomHome": "教室主页",
    "templateHelpers.templates.clubHomepage": "俱乐部主页",
    "templateHelpers.templates.companyHome": "公司主页",
    "templateHelpers.templates.competitiveAnalysis": "竞争分析",
    "templateHelpers.templates.contentCalendar": "内容日历",
    "templateHelpers.templates.cornellNotesSystem": "Cornell笔记系统",
    "templateHelpers.templates.courseSchedule": "课程时间表",
    "templateHelpers.templates.designSystem": "设计系统",
    "templateHelpers.templates.designTasks": "设计任务",
    "templateHelpers.templates.docs": "文档",
    "templateHelpers.templates.engineeringWiki": "工程维基",
    "templateHelpers.templates.getStarted": "入门",
    "templateHelpers.templates.getStartedOnEvernote": "印象笔记入门",
    "templateHelpers.templates.getStartedOnMobile": "移动入门",
    "templateHelpers.templates.goals": "目标",
    "templateHelpers.templates.gradeCalculator": "成绩产出器",
    "templateHelpers.templates.habitTracker": "习惯跟踪器",
    "templateHelpers.templates.helpCenter": "客服中心",
    "templateHelpers.templates.jobApplications": "就业申请书",
    "templateHelpers.templates.jobBoard": "招聘公告页面",
    "templateHelpers.templates.journal": "日志",
    "templateHelpers.templates.lessonPlans": "课程计划",
    "templateHelpers.templates.lifeWiki": "生活维基",
    "templateHelpers.templates.mediaList": "媒体列表",
    "templateHelpers.templates.meetingNotes": "会议记录",
    "templateHelpers.templates.moodBoard": "情调板",
    "templateHelpers.templates.newHireOnboarding": "新招聘员工入职",
    "templateHelpers.templates.notes": "注释和文档",
    "templateHelpers.templates.personalCRM": "个人CRM",
    "templateHelpers.templates.personalHome": "个人主页",
    "templateHelpers.templates.processDocs": "文档处理",
    "templateHelpers.templates.productFAQs": "产品常见问题解答",
    "templateHelpers.templates.productWiki": "商品维基",
    "templateHelpers.templates.projectManagement": "项目和操作",
    "templateHelpers.templates.quickNote": "快速注释",
    "templateHelpers.templates.readingList": "阅读列表",
    "templateHelpers.templates.resume": "简历",
    "templateHelpers.templates.roadmap": "路线图",
    "templateHelpers.templates.roommateSpace": "室友空间",
    "templateHelpers.templates.salesAssets": "销售资产",
    "templateHelpers.templates.salesCRM": "销售CRM",
    "templateHelpers.templates.salesWiki": "销售维基",
    "templateHelpers.templates.simpleBudget": "简要预算",
    "templateHelpers.templates.simpleNotebook": "简易笔记本电脑",
    "templateHelpers.templates.syllabus": "讲座计划书",
    "templateHelpers.templates.taskList": "任务列表",
    "templateHelpers.templates.teamDirectory": "团队目录",
    "templateHelpers.templates.thesisPlanning": "论文策划",
    "templateHelpers.templates.toDo": "待办事项",
    "templateHelpers.templates.travelPlanner": "旅游伙伴",
    "templateHelpers.templates.userResearchDatabase": "用户研究数据库",
    "templateHelpers.templates.weeklyAgenda": "每周议程",
    "templateHelpers.templates.wiki": "蒂姆·维基",
    "templateHelpers.useCase.bookmarks": "书签",
    "templateHelpers.useCase.personalNotebook": "笔记本电脑",
    "templateHelpers.useCase.teamDocs": "文档",
    "templateHelpers.useCase.teamHome": "团队主页",
    "templateHelpers.useCase.teamMeetingNotes": "会议记录",
    "templateHelpers.useCase.teamTasks": "团队工作",
    "templateHelpers.useCase.todos": "待办事项",
    "templatePicker.databaseTemplates.label": "数据库",
    "templatePicker.deviceOffline.goOnlinePrompt":
      "{isMobileDevice，select，true{点击这里开始输入。如需使用模板，请在线访问。}请按other{Enter键开始输入。如需使用模板，请在线访问}}",
    "templatePicker.isTemplate.emptyPagePrompt":
      "{isMobileDevice，select，true{点击这里开始输入。}按other{Enter键开始输入。}}",
    "templatePicker.mobileCollectionEmptyPage.prompt":
      "{isParentLocked，select，true{点按此处开始输入}other{点按此处输入或创建<templatebutton>模板</templatebutton>}}",
    "templatePicker.mobilePhoneEmptyPage.withTemplates.prompt":
      "点击这里开始输入。",
    "templatePicker.mobileTabletEmptyPage.withTemplates.prompt":
      "点击这里开始输入或选择模板",
    "templatePicker.mobileTemplatePicker.databaseTemplateSection.label":
      "数据库",
    "templatePicker.webCollectionEmptyPage.prompt":
      "{isParentLocked，select，true{Enter键使用空白页面}按other{Enter键使用空白页面，或选择模板<templatebutton>创建模板</templatebutton>}}",
    "templatePicker.webEmptyPage.withTemplates.prompt":
      "{isTemplate，select，true{按Enter键使用空白页面，或选择模板}other{Enter键使用空白页面，或使用§键选择模板}}",
    "templatePickerHelpers.basicTemplateItems.empty": "空白页",
    "templatePickerHelpers.basicTemplateItems.emptyWithIcon":
      "空白页，使用图标",
    "templatePickerHelpers.basicTemplateItems.import": "导入",
    "templatePickerHelpers.basicTemplateItems.templates": "模板",
    "templatePickerHelpers.databaseTemplateNames.board": "板",
    "templatePickerHelpers.databaseTemplateNames.calendar": "日历",
    "templatePickerHelpers.databaseTemplateNames.gallery": "画廊",
    "templatePickerHelpers.databaseTemplateNames.list": "列表",
    "templatePickerHelpers.databaseTemplateNames.table": "表",
    "templatePickerHelpers.databaseTemplateNames.timeline": "时间轴",
    "templatePickerHelpers.mobileBasicTemplateItems.emptyPage": "空白页",
    "templatePickerHelpers.mobileBasicTemplateItems.pageWithIcon":
      "包含图标的页面",
    "temporaryPasscodeLoginEmail.copyPasteCodeNoLink.prompt":
      "{hasExistingUser，select，true{粘贴此临时登录代码：}other{粘贴此临时注册代码。}}",
    "temporaryPasscodeLoginEmail.copyPasteCodeWithLink.prompt":
      "{hasExistingUser，select，true{或复制并粘贴此临时登录代码：}other{复制并粘贴此临时注册代码。}}",
    "temporaryPasscodeLoginEmail.loginCode.subjectLine":
      "临时Notion代码为{temporaryPassword}",
    "temporaryPasscodeLoginEmail.magicLink.text":
      "{hasExistingUser，select，true{单击此处以使用此魔术链接登录}other{单击此处注册此魔术链接}}",
    "temporaryPasscodeLoginEmail.noNotionAccount.text":
      "找不到使用此电子邮件地址注册的Notion帐户。",
    "temporaryPasscodeLoginEmail.noRequest.text":
      "{hasExistingUser，select，true{如果您不想登录，则忽略此电子邮件是安全的。}other{如果您不想注册，则忽略此电子邮件是安全的。}}",
    "temporaryPasscodeLoginEmail.setPermanentPassword.text":
      "提示:您可以在“设置”和“成员”→“My Account(我的帐户)”中设置永久密码。",
    "temporaryPasscodeLoginEmail.signupCode.subjectLine":
      "Notion注册代码为{temporaryPassword}",
    "temporaryPasscodeLoginEmail.titleOfEmail":
      "{hasExistingUser，select，true{登录}other{注册}}",
    "text.commandsMenuOpen.placeholder": "请输入过滤器。",
    "textRenderHelpers.pageMention.untitledPlaceholder": "无标题",
    "textRenderHelpers.untitledTextAsString": "无标题",
    "timeline.itemPlaceholder.newPage": "新建页面",
    "timelineItem.itemName.placeholder": "请输入您的姓名。",
    "todoBlock.placeholder": "待办事项",
    "toggleBlock.emptyBlock.placeholderText": "空切换。单击或拖放内部块。",
    "toggleBlock.placeholder": "切换",
    "topbar.favoriteButton.activeTitle": "收藏的项目",
    "topbar.favoriteButton.activeTooltip1": "在侧栏中隐藏此页面",
    "topbar.favoriteButton.activeTooltip2": "当前显示",
    "topbar.favoriteButton.title": "收藏夹",
    "topbar.favoriteButton.tooltip1": "将此页面固定在侧边栏",
    "topbar.favoriteButton.tooltip2": "当前隐藏",
    "topbar.moreButton.collectionHelpButton": "数据库用法",
    "topbar.presenceIndicator.hiddenUsers.lastViewedBy.tooltip": "上次确认者：",
    "topbar.presenceIndicator.hiddenUsers.otherCount.message":
      "{hiddenUsersCount，plural，other{+{hiddenUsersCount}名}}",
    "topbar.presenceIndicator.hiddenUsers.viewingNow.tooltip": "正在观看",
    "topbar.presenceIndicator.lastViewedTime.tooltip":
      "上次查看时间：{timeFromNow}",
    "topbar.presenceIndicator.viewingNow.tooltip": "正在观看",
    "topbar.presenceIndicator.viewingNowWithLocation.tooltip":
      "现在在看。点击查看你在哪里。",
    "topbar.publicPage.comment": "评论",
    "topbar.publicPage.duplicateButton.label": "克隆",
    "topbar.publicPage.edit": "编辑页面",
    "topbar.publicPage.searchButton.label": "搜索",
    "topbar.shareButton.title": "共享",
    "topbar.shareButton.tooltip": "在Web上共享或发布",
    "topbar.startPublicEditDialog.continueLabel": "继续",
    "topbar.startPublicEditDialog.message":
      "当您开始编辑时，您的姓名、电子邮件和照片将显示在页面所有者中。",
    "topbar.updatesButton.emptyState": "此页尚未修改",
    "topbar.updatesButton.slackIntegrationButton.activeTitle": "链接的父页面：",
    "topbar.updatesButton.slackIntegrationButton.loading": "正在加载.",
    "topbar.updatesButton.slackIntegrationButton.title": "Slack通道连接",
    "topbar.updatesButton.slackIntegrationButton.tooltip":
      "连接Slack通道，获取有关此页面及其包含页面的更新信息。",
    "topbar.updatesButton.title": "更新",
    "topbar.updatesButton.tooltip": "查看此页上的历史变更项",
    "topbarBrowserHistoryButton.goForwardButton.label": "向前",
    "topbarBrowserHistoryButtons.goBackButton.label": "向后",
    "topbarMobile.addToPageOrWorkspaceSectionButton.label": "添加到：",
    "topbarMobile.addToPrivateSectionButton.label":
      "<mediumweight>添加到个人主页</mediumweight>{userAvatar}<mediumcolor></mediumcolor>",
    "topbarMobile.backButton.label": "向后",
    "topbarMobile.cancelQuickAddButton.label": "取消",
    "topbarMobile.offline.message": "当前处于脱机状态",
    "topbarMoreButton.loggedOut.tooltip": "其他",
    "topbarMoreButton.mobileActionsMenu.title": "操作",
    "topbarMoreButton.tooltip": "样式、导出等.",
    "topbarPresence.presenceIndicator.hiddenUsers.moreUsersNotViewing.tooltip":
      "外{notViewingMoreUsersCount}名称",
    "transactionErrors.blockPermissionsMaxSize.message":
      "已超过页面的最大权限设置次数。",
    "transactionErrors.blocksInsideThemselvesNotAllowed.message":
      "抱歉！块不能在其自己的块内移动。",
    "transactionErrors.commentOnlyAccessCantMovePage.message":
      "无法移动此页面，因为只有评论访问权限。",
    "transactionErrors.guestsNotAllowed.message": "此工作空间不允许来宾。",
    "transactionErrors.guestsoverLimit.message":
      "此工作空间已达到最大来宾数(5)。",
    "transactionErrors.movingPagesToOtherWorkspacesNotAllowed.message":
      "此工作空间设置为不可移动到另一个工作区。",
    "transactionErrors.nonApiMovesNotAllowed.message":
      "按(Cmd/Ctrl+R)按钮刷新以更新Notion，这样您就可以将页面移动到另一个工作区。",
    "transactionErrors.publicAccessNotAllowed.message":
      "此工作空间不允许提供公开访问的页面。",
    "transactionErrors.searchEngineIndexingNotAllowed.message":
      "此工作空间不允许公开页包含在搜索索引中。",
    "transactionErrors.spaceDomainNotAvailable.message": "很抱歉。此域不存在。",
    "transactionErrors.spaceEmailDomainNotAllowed.message":
      "很抱歉。此{domain}域是不允许的。",
    "transactionErrors.upgradeClientIsNeeded.message":
      "请刷新(Cmd/Ctrl+R)以更新Notion，然后重试。",
    "transactionErrors.workspaceTopLevelOperationNotAllowed.message":
      "本工作空间处于锁定状态，因为它正在修改侧栏中的工作空间部分。",
    "transactionHelpers.requestTooLargeError.message":
      "很抱歉。请求太大。是否要尝试导入？",
    "transclusionContainerBlock.actions.copySuccessMessage":
      "复制完成！现在，您可以将内容粘贴到所需的页面上以同步内容。",
    "transclusionContainerBlock.copy": "复制并同步",
    "transclusionContainerBlock.differingPermissionsWarning":
      "某些用户无法查看此内容。原始页面的<page>原始页面标题</page>不与这个页面上的所有用户共享。",
    "transclusionContainerBlock.editingMultiple":
      "{icon}{numberOfBacklinks，plural，one{副本{numberOfBacklinks}个}正在编辑其它{numberOfBacklinks}个}}",
    "transclusionContainerBlock.editingOriginal": "正在编辑源块",
    "transclusionContainerBlock.emptyEditingPlaceholder":
      "您可以通过单击或拖动此处创建的块并将其粘贴到其他页面来同步内容。",
    "transclusionContainerBlock.learnMoreLabel": "了解有关同步块的更多信息",
    "transclusionContainerBlock.remove.confirm": "删除并取消同步块副本",
    "transclusionContainerBlock.remove.confirmationMessage.header":
      "要禁用同步吗？",
    "transclusionContainerBlock.remove.confirmationMessage.text":
      "这些块和{numberOfBacklinks、plural、one{{numberOfBacklinks}两个不同的页面}other{{numberOfBacklinks}其他页面}}不再同步。",
    "transclusionContainerBlock.remove.header": "您要删除原始文件吗？",
    "transclusionContainerBlock.remove.text":
      "这些块正在与{numberOfBacklinks、plural、one{numberOfBacklinks}页}other{{numberOfBacklinks}个页面}}同步。删除源时，这些块将不再同步。",
    "transclusionContainerBlock.unsyncTransclusionContainer.confirm":
      "禁用所有同步",
    "transclusionContainerBlock.unsyncTransclusionContainer.header":
      "要禁用所有同步吗？",
    "transclusionContainerBlock.unsyncTransclusionContainer.text":
      "这些块和{numberOfBacklinks、plural、one{{numberOfBacklinks}两个不同的页面}other{{numberOfBacklinks}其他页面}}不再同步。",
    "transclusionContainerBlock.unsyncTransclusionReference.confirm":
      "取消同步",
    "transclusionContainerBlock.unsyncTransclusionReference.header":
      "要禁用同步吗？",
    "transclusionContainerBlock.unsyncTransclusionReference.text":
      "选定的块不再与源同步。",
    "trashActions.deletePagePermanentlyDialog.confirmDeleteButton.label":
      "是的，删除此页面。",
    "trashActions.deletePagePermanentlyDialog.prompt":
      "是否确实要永久删除此页面？",
    "trelloActions.authenticatingWithTrello.loadingMessage":
      "正在通过Trello验证.",
    "trelloActions.loginPopupModal.title": "Trello登录",
    "trelloImportOption.actionsMenu.connectAnotherAccount": "连接其他帐户",
    "trelloImportOption.actionsMenu.import": "导入",
    "trelloImportOption.actionsMenu.removeIntegration": "移除",
    "trelloImportOption.boardProperty.defaultName": "板",
    "trelloImportOption.search.noResultsPlaceholder": "无板",
    "trelloImportOption.search.placeholder": "搜索主板",
    "tweetBlock.embedTweet.button.label": "Tweet嵌入",
    "tweetBlock.linkInput.caption": "与Tweets链接兼容",
    "tweetBlock.placeholder": "Tweet嵌入",
    "tweetRenderer.errorLoadingTweet.message": "加载Tweet时出错",
    "tweetRenderer.loadingTweet.message": "载入Tweet",
    "typeformBlock.embed.caption": "兼容所有公共Typeform链接",
    "typeformBlock.placeholder": "类型嵌入",
    "unsubscribeFromEmails.loadingMessage": "正在加载.",
    "unsubscribeFromEmails.untitledWorkspacePlaceholder": "无标题工作空间",
    "unsubscribeFromEmails.workspace.errorMessage": "无法取消订阅。",
    "unsubscribeFromEmails.workspace.message":
      "您已经取消订阅{workspaceName}电子邮件。",
    "unwantedContentTakedownEmail.body.appeal":
      "要对此类决定提出异议，请将如何修改内容的说明或内容没有违反Notion政策的说明发送到<mailto>team@makenotion.com</mailto>。",
    "unwantedContentTakedownEmail.body.consequence":
      "因此，此页面将切换到私有页面。在用户个人工作空间中，您可以继续访问此页面。",
    "unwantedContentTakedownEmail.body.intro": "感谢您使用Notion。",
    "unwantedContentTakedownEmail.body.takedown":
      "<pagelink>本页</pagelink>中的内容被认为不符合Notion的<contentpolicylink>内容使用政策</contentpolicylink>中规定的标准。",
    "unwantedContentTakedownEmail.closingText": "谢谢。{br}Notion团队",
    "unwantedContentTakedownEmail.greetingWithName":
      "{customerName}先生，您好！",
    "unwantedContentTakedownEmail.greetingWithoutName": "你好！",
    "unwantedContentTakedownEmail.subjectLine.text":
      "Notion帐户相关指南:公共页面的内容审核结果",
    "updateBanner.updateAvailableBanner.message":
      "Notion已更新！点击查看新消息。",
    "updateSegmentedControl.option.comment": "评论",
    "updateSegmentedControl.option.updates": "所有更新",
    "updateSidebar.commentContainer.empty": "此处显示页面或块上的评论。",
    "updateSidebar.commentContainer.reply": "回复",
    "updateSidebar.commentContainer.restricted":
      "您没有权限查看此受限页面的更新。",
    "updateSidebar.commentsTab.title": "评论",
    "updateSidebar.placeholder.addComment": "评论",
    "updateSidebar.updatesContainer.empty": "此页面没有更新。",
    "updateSidebar.updatesTab.title": "更新列表",
    "updateSidebarSelect.selectComments.label": "评论",
    "updateSidebarSelect.selectUpdates.label": "所有更新",
    "updateSpaceDomain.error.invalidDomain.message": "不可用的域。",
    "updateSpaceDomain.error.missingDomain.message": "域输入是必需的。",
    "updatesButton.allUpdates.sidebarButton": "所有更新",
    "updatesButton.tooltip": "工作区中的所有更新",
    "updatesModal.allPagesTab.emptyPrompt": "此处显示工作区的页面更新。",
    "updatesModal.allPagesTab.emptyPromptTitle": "无新更新",
    "updatesModal.allUpdatesTab.title": "全部",
    "updatesModal.archiveTab.title": "存档",
    "updatesModal.arvhiveTab.emptyPrompt": "此处显示归档收件箱的更新。",
    "updatesModal.arvhiveTab.emptyPromptTitle": "没有归档更新",
    "updatesModal.currentPageTab.emptyPrompt": "如有更改，则在此处显示。",
    "updatesModal.currentPageTab.emptyPromptTitle": "无页面更新",
    "updatesModal.followedUpdatesTab.allArchived":
      "要获得更新，请在所需页面的“更新”菜单中打开“关注页面”。",
    "updatesModal.followedUpdatesTab.allArchivedTitle": "无新更新",
    "updatesModal.followedUpdatesTab.title": "取消关注",
    "updatesModal.mentionsTab.title": "收件箱",
    "updatesModal.mobielThisPage.title": "此页",
    "updatesModal.mobileMenu.title": "所有更新",
    "updatesModal.openNotifications.tooltip": "打开通知设置",
    "updatesModal.spaceUpdatesTab.allArchived":
      "我收到的@精神，回复评论，页面邀请通知显示在这里。",
    "updatesModal.spaceUpdatesTab.allArchivedRequests":
      "我收到的@精神、回复评论、请求和页面邀请通知都显示在这里。",
    "updatesModal.spaceUpdatesTab.allArchivedTitle": "都确认好了",
    "updatesModal.spaceUpdatesTab.archiveAllButtonTitle": "全部存档",
    "upgradeButton.enterprise.text": "企业",
    "upgradeButton.learnMore.tooltip": "点击查看更多信息。",
    "upgradeButton.personal.text": "个人专业套餐",
    "upgradeButton.team.text": "团队计划",
    "upgradeButton.upgrade.text": "升级",
    "upgradeButton.upgrade.tooltip": "升级以使用此功能。",
    "upgradeMobileButton.upgradeButton.label": "升级到个人专业版计划",
    "uploadActions.uploadFailedError.message": "上传失败。",
    "uploadLimitExceededBanner.message":
      "{shouldShowShortMessage，select，true{文件超过{maxFreeAccountFileSize}MB限制}other{文件超出免费套餐的{maxFreeAccountFileSize}MB限制}}",
    "uploadLimitExceededBanner.upgradeButton.label":
      "{shouldShowShortMessage，select，true{升级}other{升级用于无限上传}",
    "upsellActions.confirmProration.acceptLabel":
      "{plan，select，personal{个人计划}升级到team{团队计划}other{企业计划}}",
    "upsellActions.confirmProration.message":
      "按每个成员每月{price}的价格订阅Notion的{plan、select、personal{个人}team{团队}other{企业}}套餐。{br}{isSubscribed、select、true{将从计算的金额中扣除帐户余额。}other{}}",
    "upsellActions.confirmProrationAndYearlyInterval.message":
      "将根据当前开单周期和帐户余额收取按比例分配的金额。之后，您将收取年度费用。",
    "upsellActions.switchPlanFromInAppPurchase":
      "目前正在通过Apple的App内购买订阅。要改变计划，请先取消Apple订阅。",
    "upsellCallout.learnMoreButton.text": "了解详情",
    "upsellCallout.upgradeButton.text": "升级",
    "useCaseOnboarding.mobileDesktopStep.browser.label": "浏览器",
    "useCaseOnboarding.mobileDesktopStep.desktopApp.label":
      "Mac和Windows应用程序",
    "useCaseOnboarding.mobileDesktopStep.title":
      "Notion也适用于<boldtext>Mac</boldtext>、<boldtext>Windows</boldtext>和<boldtext>浏览器</boldtext>！跨所有设备保持同步。",
    "useCaseOnboarding.mobileEditorSidebarStep.description":
      "您可以在此处查看工作区页面和个人主页。",
    "useCaseOnboarding.mobileEditorSidebarStep.title":
      "<boldtext>侧栏</boldtext>菜单使业务保持系统化。",
    "useCaseOnboarding.mobileEditorStep.description":
      "要重新排列内容，请<boldtext>长触摸</boldtext>。",
    "useCaseOnboarding.mobileEditorStep.title": "一些必要的提示：",
    "useCaseOnboarding.mobileWebClipperStep.title":
      "<boldtext>请将网页或本地文件保存到Notion。</boldtext>",
    "useCaseOnboarding.webClipperStep.description":
      "点击“共享”按钮，然后选择要保存的页面或数据库。",
    "useCaseOnboardingStep.cancelButton.label": "取消",
    "userCreditSettings.creditBalanceSection.applyCreditButton.label":
      "应用积分",
    "userCreditSettings.creditBalanceSection.creditBalanceMessage":
      "当前信用余额为{creditBalance}。",
    "userCreditSettings.creditBalanceSection.freeMonthMessage":
      "{numberOfMonths，plural，other{个人专业版套餐是<b>{numberOfMonths}每月</b>免费使用的金额。}",
    "userCreditSettings.creditBalanceSection.maximumCreditBalanceExceeded":
      "已超过每个帐户的信用额度{maximumCreditBalance}。即使您累积了额外的积分，余额也不会进一步增加。",
    "userCreditSettings.creditBalanceSection.title": "信用余额",
    "userCreditSettings.creditBalanceSection.upgradeForFreeButton.label":
      "免费升级",
    "userCreditSettings.helpButton.caption": "如何赚取和使用积分",
    "userCreditSettings.inviteFriendsSection.showLessReferredUsers.link":
      "{numberOfReferredUsers}名称较少显示",
    "userCreditSettings.inviteFriendsSection.showMoreReferredUsers.link":
      "{numberOfReferredUsers}显示更多名称",
    "userCreditSettings.inviteFriendsSection.sourceOfReferralNote":
      "(已邀请您)",
    "userCreditSettings.inviteFriendsSection.title": "邀请朋友并获得积分。",
    "userCreditSettings.inviteFriendsSection.userHasAlreadySignedUpNote":
      "(已注册)",
    "userCreditSettings.inviteFriendsSection.userHasNotSignedUpNote":
      "(尚未注册)",
    "userCreditSettings.offline.message": "在线管理您的账户积分。",
    "userCreditSettings.otherWaysToEarnCreditSection.desktopApp.actionLink":
      "下载",
    "userCreditSettings.otherWaysToEarnCreditSection.desktopApp.description":
      "下载桌面应用程序并登录",
    "userCreditSettings.otherWaysToEarnCreditSection.desktopApp.title":
      "从桌面应用程序登录",
    "userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.actionLink":
      "连接",
    "userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.description":
      "导入笔记和笔记本",
    "userCreditSettings.otherWaysToEarnCreditSection.evernoteImport.title":
      "从Evernote导入",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileApp.actionLink":
      "下载",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileApp.description":
      "下载移动应用程序并登录",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileApp.title":
      "从移动应用程序登录",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileShare.actionLink":
      "下载",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileShare.description":
      "使用共享菜单将链接保存到Notion",
    "userCreditSettings.otherWaysToEarnCreditSection.mobileShare.title":
      "使用iOS或Android中的系统共享菜单",
    "userCreditSettings.otherWaysToEarnCreditSection.totalCreditSummaryText":
      "总积分",
    "userCreditSettings.otherWaysToEarnCreditSection.webApp.actionLink": "访问",
    "userCreditSettings.otherWaysToEarnCreditSection.webApp.description":
      "在任何Web浏览器中登录Notion",
    "userCreditSettings.otherWaysToEarnCreditSection.webApp.title": "从Web登录",
    "userCreditSettings.otherWaysToEarnCreditSection.webClipper.actionLink":
      "安装",
    "userCreditSettings.otherWaysToEarnCreditSection.webClipper.description":
      "下载Chrome扩展程序以保存链接",
    "userCreditSettings.otherWaysToEarnCreditSection.webClipper.title":
      "使用Web Clipper",
    "userCreditSettings.otherWaysToEarnCreditSectionAlt.title": "如何赚取积分",
    "userDataConsent.render.error": "出了问题",
    "userDataConsentSettings.accessGranted.label":
      "已允许Notion支持团队访问{expiryTime}。",
    "userDataConsentSettings.accessNotGranted.label":
      "授予Notion支持团队临时访问权限，以代表用户进行故障排除和内容恢复。您可以随时撤销访问。",
    "userDataConsentSettings.allowSupportAccess.button": "允许支持访问",
    "userDataConsentSettings.header.label": "支持访问",
    "userDataConsentSettings.revokeSupportAccess.button": "撤销访问",
    "userPermissionsMenu.adminItem.caption":
      "更改工作区设置并允许邀请新成员进入此工作区",
    "userPermissionsMenu.adminItem.label": "管理员",
    "userPermissionsMenu.canCommentItem.caption": "允许阅读和评论，不可编辑",
    "userPermissionsMenu.canCommentItem.label": "允许评论",
    "userPermissionsMenu.canEditItem.caption": "允许编辑，不能与他人共享",
    "userPermissionsMenu.canEditItem.label": "允许编辑",
    "userPermissionsMenu.canReadItem.caption": "无法编辑和与他人共享",
    "userPermissionsMenu.canReadItem.label": "允许读取",
    "userPermissionsMenu.disabledItem.label": "无访问权限",
    "userPermissionsMenu.fullAccessItem.caption": "允许编辑和与他人共享",
    "userPermissionsMenu.fullAccessItem.label": "完全允许",
    "userPermissionsMenu.leaveTeamItem.label": "退出团队",
    "userPermissionsMenu.memberItem.caption":
      "更改工作区设置或不允许邀请新成员进入此工作区",
    "userPermissionsMenu.memberItem.label": "成员",
    "userPermissionsMenu.mobile.doneButton.label": "完成",
    "userPermissionsMenu.mobile.title": "设置权限",
    "userPermissionsMenu.noAccessItem.label": "无法访问",
    "userPermissionsMenu.removeFromTeamItem.label": "从团队中删除",
    "userPermissionsMenu.removePermissionsModal.removeSelfButton.label": "移除",
    "userPermissionsMenu.removePermissionsModal.removeSelfFromPage.confirmationMessage":
      "是否确实要删除您的访问权限？",
    "userPermissionsMenu.removePermissionsModal.removeSelfFromWorkspace.confirmationMessage":
      "是否确实要删除您的访问权限？您将失去对此工作空间的访问权限，所有个人主页都将被删除。",
    "userPermissionsMenu.removePermissionsModal.removeUserButton.label": "移除",
    "userPermissionsMenu.removePermissionsModal.removeUserFromPage.confirmationMessage":
      "是否确实要删除此用户？",
    "userPermissionsMenu.removePermissionsModal.removeUserFromWorkspace.confirmationMessage":
      "是否确实要删除此用户？已删除的用户将失去对工作区的访问权限，所有个人主页都将被删除。",
    "userPermissionsMenu.removeWorkspaceItem.label": "移除",
    "userSettings.userType.personal": "单独使用",
    "userSettings.userType.team100+": "100人以上",
    "userSettings.userType.team1000+": "1000人以上",
    "userSettings.userType.team101-1000": "101人~1000人",
    "userSettings.userType.team2-50": "2人~50人",
    "userSettings.userType.team20-100": "20-100人",
    "userSettings.userType.team5-20": "5-20人",
    "userSettings.userType.team51-100": "51人~100人",
    "userSettings.userType.team<5": "2-5人",
    "videoBlock.embedVideo.button.label": "视频嵌入",
    "videoBlock.linkInput.caption": "与YouTube、Vimeo等兼容",
    "videoBlock.linkInput.placeholder": "粘贴影片链接",
    "videoBlock.placeholder": "嵌入或上传视频",
    "viewMoreOutlinerButton.label": "查看全部({total}页)",
    "webApp.redirectingToDesktop.continueInBrowser.message":
      "或者在浏览器中继续",
    "webApp.redirectingToDesktop.directLink.message":
      "如果没有移动，请点击这里。",
    "webApp.redirectingToDesktop.message": "正在转到Notion应用程序.",
    "webClipper.clippedItemDatabase.properties.createdTime": "已创建",
    "webClipper.clippedItemDatabase.properties.name": "名称",
    "webClipper.clippedItemDatabase.properties.tags": "标签",
    "webClipper.clippedItemDatabase.properties.url": "网址",
    "webClipper.clippedItemDatabase.views.viewAll": "查看全部",
    "whimsicalBlock.embeds.button.label": "Whimsical嵌入",
    "whimsicalBlock.embeds.caption": "与启用公共访问的Whimsical链接兼容",
    "whimsicalBlock.placeholder": "Whimsical嵌入",
    "withImageRepositioning.dragImage.text": "通过拖动图像重新定位",
    "UpdateSidebarFollowControl.following.caption": "发送所有更新和评论的通知",
    "UpdateSidebarFollowControl.following.label": "取消关注",
    "UpdateSidebarFollowControl.notFollowing.caption": "无通知发送",
    "UpdateSidebarFollowControl.notFollowing.label": "不关注",
    "action.languageMode.julia": "朱莉娅",
    "action.languageMode.protobuf": "Protobuf",
    "activity.accessRequested.messageLabel": "{author}您的留言：",
    "activity.collectionEdited.header":
      "您已经编辑了{numberOfAuthors、plural、other{{authorOrAuthors}{collectionViewTitle}视图。}}",
    "activity.collectionViewDeleted.header":
      "{numberOfAuthors，plural，other{{authorOrAuthors}{collectionTitle}从{collectionViewTitle}删除了{collectionViewTitle}视图。}",
    "allTimeZones.Asia/Saigon": "亚洲/胡志明市",
    "allTimeZones.Etc/Zulu": "其他/祖鲁",
    "appUpdateListener.downloadAndReinstallDesktopApp.message":
      "要脱机工作并充分利用最新功能，请下载<textlink>并重新安装{isMacApp、select、true{Mac应用}other{Windows应用}}</textlink>。",
    "appUpdateListener.downloadingDesktopApp.message":
      "正在更新{isMacApp、select、true{Mac应用程序}other{Windows应用程序}}，以便脱机工作({processPercent})。",
    "blockPropertyValue.filterForNumberFormats.placeholder": "搜索数字格式",
    "bookmarkBlock.editBookmark.linkPlaceholder": "粘贴URL(https://.)",
    "collection.numberFormat.dollar": "美元",
    "collection.numberFormat.newTaiwanDollar": "新新台币",
    "collectionFilterMenuFilter.filterOperators.checkbox.order":
      "{operatorValue}{operator}",
    "collectionFilterMenuFilter.filterOperators.date.order":
      "{operatorValue}{operator}",
    "collectionFilterMenuFilter.filterOperators.file.order":
      "属性{operatorValue}{operator}",
    "collectionFilterMenuFilter.filterOperators.multi_select.order":
      "属性{operatorValue}{operator}",
    "collectionFilterMenuFilter.filterOperators.number.order":
      "属性{operatorValue}{operator}",
    "collectionFilterMenuFilter.filterOperators.person.order":
      "属性{operatorValue}{operator}",
    "collectionFilterMenuFilter.filterOperators.relation.order":
      "{operatorValue}{operator}",
    "collectionFilterMenuFilter.filterOperators.select.order":
      "属性{operatorValue}{operator}",
    "collectionFilterMenuFilter.filterOperators.text.order":
      "属性{operatorValue}{operator}",
    "collectionFilterMenuFilter.property.name": "属性",
    "collectionFilterMenuHelpers.operator.stringHasNoAlphabetPrefix": "(禁用)",
    "collectionSortMenu.mobile.sort": "排序{sortNumber}",
    "comment.embeddedFile.placeholder": "正在上载文件.",
    "comment.embeddedFile.uploadInProgressMessage": "正在上载文件.",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.createNewPropertyOption.caption":
      "<b>在一个属性上显示并且不同步。在</b>“操作”数据库中创建一个“相关任务”属性时，请使用此选项。",
    "configureRelationModal.relationProperty.createModal.selfRelationPrompt.samePropertyOption.caption":
      "<b>进一步创建新属性并双向同步。在</b>“操作”数据库中分别创建“父任务”和“子任务”属性时，请使用此选项。",
    "confirmDialogInput.incorrectInputError.message":
      "输入“{requiredInputValue}”以继续。",
    "createPageMenuItem.title.withPageName": "添加新的“{filterText}”页面",
    "database.boardView.uncategorizedColumnTooltip":
      "<b>{name}</b>属性为空的项目将移到此处。无法删除此组。",
    "database.collectionGroupValue.dateGroup.week":
      "{year}年{month}月{startDay}日~{endDay}日的周",
    "database.collectionGroupValue.numberGroup.outOfRange": "超出范围",
    "database.collectionGroupValue.numberGroup.range": "从{start}到{end}",
    "database.collectionGroupValue.textGroup.other": "其他",
    "database.formula.function.dateAdd.description":
      "加上日期。最后一个参数单位可以是“years”、“quarters”、“months”、“weeks”、“days”、“hours”、“minutes”、“seconds”、“milliseconds”。",
    "database.formula.function.dateBetween.description":
      "返回两个日期之间的时间。最后一个参数单位可以是“years”、“quarters”、“months”、“weeks”、“days”、“hours”、“minutes”、“seconds”、“milliseconds”。",
    "database.formula.function.dateSubtract.description":
      "从日期减去。最后一个参数单位可以是“years”、“quarters”、“months”、“weeks”、“days”、“hours”、“minutes”、“seconds”、“milliseconds”。",
    "database.formula.function.id.description": "返回每个条目的唯一字符串ID。",
    "database.groupMenu.dateGroupBy.relative": "相对日期",
    "database.groupMenu.numberGroupRange": "组范围",
    "database.groupMenu.numberGroupSize": "所有组",
    "database.groupMenu.sortType.alphabetical": "按字母顺序排列",
    "database.groupMenu.sortType.ascending": "升序",
    "database.groupMenu.sortType.chronological": "按时间顺序",
    "database.groupMenu.sortType.descending": "降序",
    "database.groupMenu.sortType.manual": "手动",
    "database.groupMenu.sortType.reverseAlphabetical": "字母倒序",
    "database.groupMenu.sortType.reverseChronological": "时间倒序",
    "database.groupMenu.textGroupBy.alphabetical": "按字母顺序排列",
    "database.groupMenu.textGroupBy.exact": "按特定单词",
    "database.relationProperty.createModal.selfRelationPrompt.createNewPropertyOption.caption":
      "<b>无同步。在</b>“操作”数据库中为“相关任务”属性建模时，请使用此选项。",
    "database.relationProperty.createModal.selfRelationPrompt.samePropertyOption.caption":
      "<b>双向同步。在</b>“任务”数据库中为“父任务”(父任务)和“子任务”属性建模时，请使用此选项。",
    "database.searchRelation.createNewPageLabel":
      "在{databaseNameWithIcon}<medium>中创建一个</medium>名为{pageName}的<medium>新页面。</medium>",
    "database.selectRelation.menuItem": "选择页面",
    "developerIntegrationCardDropdown.delete.confirmationError":
      "输入的统一名称不匹配。",
    "developerIntegrationCardDropdown.delete.confirmationMessage":
      "此公共集成将被禁用，并从所有添加的工作区中删除。要确认，请输入此集成的名称。",
    "developerIntegrationCardDropdown.delete.confirmationTitle":
      "是否要删除{integrationName}集成？",
    "discussionInput.insertMention.button.tooltip":
      "输入您想要声明的用户、页面和日期。",
    "loginErrors.csrf.message":
      "如果您通过链接登录，请在您请求链接的浏览器中打开该链接。",
    "oauthAuthorizationPage.permissionStep.createSpaceLevelIntegrationCheckbox.label":
      "{workspaceName}与所有成员集成共享",
    "passwordChangeNotificationEmail.removePassword.message":
      "您可以通过在登录页面上选择“通过电子邮件继续”继续访问Notion。我们将通过电子邮件向您发送临时密码。",
    "passwordChangeNotificationEmail.unintendedChange.message":
      "如果您没有提出更改请求，请发送电子邮件至team@makenotion.com。转到您的Notion个人资料设置以更改密码，或使用“忘记密码”链接更改密码。",
    "removeUsersFromSpace.nonexistentSpace.error.message": "不存在的工作空间。",
    "removeUsersFromSpace.removingLastAdmin.error.message":
      "无法删除最后一个管理员。",
    "securitySAMLSettings.securitySection.disableMovingPages.caption":
      "此选项通过“移动”或“复制”功能防止其他人将页面移动或复制到另一个工作区。",
    "spaceBasicSettings.PublicHomePageSection.input.placeholder":
      "选择Web上共享的页面",
    "spaceBasicSettings.PublicHomePageSection.title": "公共主页",
    "spaceBasicSettings.changeDomain.cta.text": "直接输入",
    "spaceBasicSettings.domainSection.workspaceDomainInput.joinWorkspace.caption":
      "如果有允许的电子邮件域，任何人都可以通过{linkText}链接订阅此工作空间。",
    "spaceBasicSettings.domainSection.workspaceDomainInput.viewPublicPage.caption":
      "您可以在{linkText}上找到在网络上共享的页面。",
    "stripeHelpers.invalidExpiryYear.error.message": "卡过期了。",
    "stripeHelpers.invalidNumber.error.message": "信用卡号码无效。",
    "text.commandsMenuNotOpen.placeholder": "使用命令时输入“/”",
    "topbar.updatesButton.closeSidebartTooltip": "关闭更新侧边栏",
    "topbar.updatesButton.openSidebartTooltip": "打开更新侧边栏",
    "updateSidebar.resolvedToggle.hideResolved": "隐藏已解决的评论。",
    "updateSidebar.resolvedToggle.showResolved": "显示已解决的评论。",
    "updateSidebar.updatesHeader.label": "更新",
  });
  document.body.appendChild(script);
})();
