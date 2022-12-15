async function getUserInfo (ctx) {
  let { body, header } = ctx.request

  if (!(header?.role && header?.role === 'admin')) {
    ctx.status = 401,
    ctx.body = {
      code: 401,
      msg: 'unauthorized post',
    }
    return;
  }
  if (body?.email && body?.name) {
    ctx.status = 200;
    ctx.body = {
      code: 200,
      msg: '上传成功'
    }
    return
  } else {
    ctx.status = 404
    ctx.body = {
      code: 404,
      msg: 'name与email不得为空'
    }
    return
  }
}

export default {
  getUserInfo
}
