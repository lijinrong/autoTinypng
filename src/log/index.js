import chalk from "chalk/source/index";

// 定义log,支持输出日志到文件
class Log {
  progress = null
  /**
   * 初始化打印配置
   */
  constructor(progress) {
    this.progress = progress
  }

  /**
   * log级别
   * @param {*} message 输出信息
   */
  log(message) {
    if (message) {
      this.progress.report(message);
    }
  }

  success(message) {
    if (message) {
      this.progress.report(message);
    }
  }

  /**
   * error级别
   * @param {*} message 输出err信息
   */
  error(message) {
    if (message) {
      console.error(message);
    }
  }
}

export default new Log();
