import svgCaptcha from 'svg-captcha';

class PublicController {

  async getCaptcha (ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 50,
    });
  
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    }
  }
}

export default new PublicController();
