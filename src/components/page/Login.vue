<template>
  <div class="login">
    <div class="login-wrap">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码必填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import API from '../../api/user'
import {Message} from 'element-ui'
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitForm (formName) {
      const self = this
      self.$refs[formName].validate(valid => {
        if (valid) {
          var params = { mobile: self.ruleForm.username, password: self.ruleForm.password }
          localStorage.setItem('username', self.ruleForm.username)
          API.login(params).then(function (result) {
            Message.warning(JSON.stringify(result))
            self.$store.commit('setLogin', self.ruleForm.username)
            self.$store.commit('setAccessToken', result.accessToken)
            self.$router.push('home')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .login {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: skyblue;
  }
  .login-wrap {
    width: 300px;
    height: 160px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
  }
  .login-btn{
    text-align: center;
  }
  .login-btn button{
    width:100%;
    height:36px;
  }
</style>
