module.exports = {
    //开启代理服务器（方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    //开启代理服务器方式二
    devServer: {
        proxy: {
          '/zzq1': {
            target: 'http://localhost:5000',
            pathRewrite:{'^/zzq1':''},
            ws: true,
            changeOrigin: true
          },
          '/zzq2': {
            target: 'http://localhost:5001',
            pathRewrite:{'^/zzq2':''},
            ws: true,
            changeOrigin: true
          }
        }
    }
}