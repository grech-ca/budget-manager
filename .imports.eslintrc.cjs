const fs = require('fs');
const path = require('path');

const externalModules = Object.keys(JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'))).dependencies).join('|');

module.exports = {
  rules: {
    "import-helpers/order-imports": ["warn", {
      newlinesBetween: "always",
      groups: [
        "/^(assert|async_hooks|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|http2|https|inspector|module|net|os|path|perf_hooks|process|punycode|querystring|readline|repl|stream|string_decoder|timers|tls|trace_events|tty|url|util|v8|vm|zli)/",
        ["/^react$/", "/^react-dom$/"],
        `/^(${externalModules})/`,
        "/pages/",
        "/providers/",
        "/components/",
        ["/lib/"],
        ["/assets/", "/data/"]
      ]
    }],
  }
}
