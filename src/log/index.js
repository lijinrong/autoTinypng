import chalk from "chalk/source/index";

// 定义log,支持输出日志到文件
class Log {
  progress = null;
  rcsoutput = null;
  /**
   * 初始化打印配置
   */
  constructor() {}

  /**
   * log级别
   * @param {*} message 输出信息
   */
  log(message) {
    if (message) {
      this.rcsoutput.appendLine(message);
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
      this.rcsoutput.appendLine(message);
    }
  }
}

export default new Log();
