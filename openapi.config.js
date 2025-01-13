import { generateService } from '@umijs/openapi'
// 根据自己的需求定制生成的代码
generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: 'http://localhost:8123/api/v2/api-docs',
  serversPath: './src',
})
