#!/usr/bin/env node
/**
 * 因网络原因和第三方接口防刷等技术限制导致部分图像处理失败
 */
import TinyPng from "./tinyPng";

function getEntryPath() {
  let i = process.argv.findIndex((i) => i === "-p");
  if (process.argv[i + 1]) {
    return process.argv[i + 1];
  }
}
new TinyPng(getEntryPath(), true).compress();
