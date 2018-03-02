<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
  .content {
    max-width: 360px;
    max-height: 280px;
    min-width: 280px;
    min-height: 260px;
    width: 30vw;
    height: 22vw;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    .form {
      width: 100%;
      height: 100%;
      background-color: #eee;
      padding: 30px;
      .title {
        font-size: 18px;
        text-align: center;
        color: #007acc;
        img {
          width: 28px;
          height: 28px;
        }
      }
      .item {
        margin-bottom: 16px;
      }
    }
  }
}
</style>

<template>
  <div class="login">
    <div class="content">
      <div class="form">
        <div class="item title">
          <!-- <img src="../../images/logo.png">&nbsp;&nbsp; -->
          <span>注册</span>
        </div>
        <div class="item">
          <Input v-model="userInfo.account" size="large" placeholder="用户名"></Input>
        </div>
        <div class="item">
          <Input v-model="userInfo.password" size="large" placeholder="密码"></Input>
        </div>
        <div class="item">
          <Button type="primary" size="large" long @click="submit">确认并注册</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      var param = {
        body: this.userInfo
      };
      this.$service
        .post("/account/register", param)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    forget() {},
    register() {}
  },
  watch: {},
  mounted() {}
};
</script>
