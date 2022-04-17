const got = require('got')

hexo.extend.tag.register('include_file', function (argument) {
  const path = argument[0]
  if (!path) {
    throw new Error('include requires a path')
  }
  // const lang = arguments_[1] || ''
  const instance = got.extend({
    headers: { 'User-Agent': 'Hexo' }
  })
  return instance(path).then(response => renderCode(response.body))
}, { async: true })

function renderCode (code) {
  return hexo.render.render({
    text: `\n${code}\n`,
    engine: 'markdown'
  })
}
