const getPathFiles = require('../src/getPathFiles');

describe('getPathFiles', function () {
  it('测试获取当前项目下的所有文件', function () {
    const files = getPathFiles('./', [
      'node_modules',
      '.git',
      'coverage',
      'src',
      'test',
      'yarn-error.log',
    ]);
    expect(files).toEqual([
      '.gitignore',
      '.prettierrc.json',
      'README.md',
      'index.js',
      'package.json',
      'yarn.lock',
    ]);
  });
});
