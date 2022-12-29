import svgCaptcha from 'svg-captcha';

class PublicController {

  async getCaptcha (ctx) {
    const newCaptcha = svgCaptcha.create({});
  
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    }
  }
}

export default new PublicController();
