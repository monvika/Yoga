module.exports = {
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/scss/variables.scss";'
            }
        }
    }
}