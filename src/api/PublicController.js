/*
 * @Author: Gavin
 * @Date: 2022-12-29 22:09:14
 * @LastEditTime: 2023-01-31 22:16:44
 * @FilePath: /koaTemp/src/api/PublicController.js
 * @Description: 
 */
import svgCaptcha from 'svg-captcha';

class PublicController {

  async getCaptcha (ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 38,
    });
  
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    }
  }
}

export default new PublicController();
