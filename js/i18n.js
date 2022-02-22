$(document).ready(function () {
    /*默认语言*/
    var defaultLang = "en";
    $("[i18n]").i18n({
      defaultLang: defaultLang,
      filePath: "/i18n/",
      filePrefix: "i18n_",
      fileSuffix: "",
      forever: true,
      callback: function () {
        console.log("i18n is ready.");
      },
    });
    /*切换为中文 - 按钮*/
    $(".chinese").click(function () {
      $("[i18n]").i18n({
        defaultLang: "cn",
        filePath: "/i18n/",
      });
    });
    /*切换为英文 - 按钮*/
    $(".english").click(function () {
      $("[i18n]").i18n({
        defaultLang: "en",
        filePath: "/i18n/",
      });
    });
  });