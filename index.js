const marked = require("marked")

module.exports = {
    process : (src) => {
        return marked(src)
    }
}
