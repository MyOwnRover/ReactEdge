/**
 * Created by roverlong on 2017/10/26.
 * 对antd的默认配置进行自定义
 */

const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess(config, env, {
        //modifyVars: { "@primary-color": "#1DA57A" },
    });
    return config;
};
