// const express = require('express')
import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'

const app = express()

import swaggerUi from 'swagger-ui-express'
// const swaggerUi = require('swagger-ui-express');

import swaggerJSDoc from 'swagger-jsdoc'
// const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My own mini project API',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/*.swagger.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// json으로 하려면 추가해줘야한다.
app.use(express.json())
app.get('/boards', (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터를 꺼내오기
  const result = [
    {number: 1, writer: "철수", title: "제목입니다~", content: '내용이예요'},
    {number: 2, writer: "짱구", title: "제목입니다~", content: '내용이예요'},
    {number: 3, writer: "맹구", title: "제목입니다~", content: '내용이예요'}    

  ]

  // 2. 꺼내온 결과 응답 주기
  res.send(result)
})

app.post('/boards', (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  console.log(req.body)
  
  // 2. 저장 결과 응답 주기
  // res.send('게시물 등록에 성공했습니다.')
  res.send('게시물 등록에 성공하였습니다.')
})

app.post('/tokens/phone', (req, res) => {
  const myphone = req.body.aaa

   // 1. 휴대폰번호 자릿수 맞는지 확인하기
   const isValid = checkValidationPhone(myphone)
   if (isValid) {
       // 2. 핸드폰 토큰 6자리 만들기
       const mytoken = getToken()

       // 3. 핸드폰번호에 토큰 전송하기
       sendTokenToSMS(myphone, mytoken)

       res.send('인증완료!')
   }
})

// listen으로 24시간동안 켜져있을 수 있다.
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})