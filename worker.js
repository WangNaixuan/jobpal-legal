/**
 * Worker 仅负责把请求转给静态资源，由 ASSETS 提供 HTML 等文件。
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
