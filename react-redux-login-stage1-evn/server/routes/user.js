const express = require('express')
const router = express.Router()
const isEmpty = require('loadsh/isEmpty')
const validator = require('validator')

const validatorInput = (data)=>{
    let errors = {}
    if(validator.isEmpty(data.username)){
        errors.username = '请输入用户名'
    }
    if(validator.isEmpty(data.email)) {
        errors.email = '请填写邮箱'
    }
    if(validator.isEmpty(data.password)){
        errors.password = '请填写密码'
    }
    if(validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = '请确认密码'
    }
    if(validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = '两次填写密码不一致'
    }
    return {
        errors,
        isValid:isEmpty(errors)
    }
}

router.post('/', (req, res) => {
    console.log(req.body)
    const {errors,isValid} = validatorInput(req.body)
    if(!isValid){
        res.status(400).json(errors)
    }
})

module.exports = router