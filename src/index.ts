require("./style/main.scss")

const $ = require("jquery")

$(() => {
  const fullpage = require("fullpage.js/dist/fullpage.extensions.min.js")
  const myFullpage = new fullpage('#fullpage', {
    anchors: $("#fullpage > .section").map((i: number, e: Element) => $(e).data("anchor") ?? ""),
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: $("#fullpage > .section").map((i: number, e: Element) => $(e).data("tooltip") ?? ""),
    loopBottom: true,
    licenseKey: "gplv3-license"
  })
})
