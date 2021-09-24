const fs = require('fs-extra');
const join = require('path').join;

/**
 * 获取指定路径下的所有文件，包含子文件
 * @param {string} path 路径
 * @param {[]} excludeFolder 排除的文件夹
 * @returns 文件数组
 */
const getPathFiles = (path, excludeFolder) => {
  const jsonFiles = [];

  const findFile = (path) => {
    const files = fs.readdirSync(path);
    files.forEach((item) => {
      if (excludeFolder.includes(item)) {
        // 继续往下执行
        return;
      }
      const fPath = join(path, item);
      const stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findFile(fPath);
      }
      if (stat.isFile() === true) {
        jsonFiles.push(fPath);
      }
    });
  };
  findFile(path);
  return jsonFiles;
};

module.exports = getPathFiles;
