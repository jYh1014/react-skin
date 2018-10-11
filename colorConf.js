const path = require('path');
const { generateTheme, getLessVars } = require('antd-theme-generator');

const options = {
  stylesDir: path.join(__dirname, './src/style'),    //对应具体位置
  antDir: path.join(__dirname, './node_modules/antd'), //对应具体位置
  varFile: path.join(__dirname, './src/style/vars.less'), //对应具体位置
  mainLessFile: path.join(__dirname, './src/style/index.less'), //对应具体位置
  themeVariables: [
    '@primary-color'
  ],
  indexFileName: 'index.html',
  outputFilePath: path.join(__dirname, './src/static/color.less')
}

generateTheme(options).then(less => {
  console.log('Theme generated successfully');
})
  .catch(error => {
    console.log('Error', error);
  });
