import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
import { login } from "../../utils/asyncWx.js";

Page({
 // 获取用户信息
 async handleGetUserInfo(e) {
  try {
    console.log(e.detail)
  // 1 获取用户信息
  const { encryptedData, rawData, iv, signature } = e.detail;
  // 2 获取小程序登录成功后的code
  const { code } = await login();
  console.log(code)
  console.log(1111111111)
  const loginParams={ encryptedData, rawData, iv, signature ,code};
  //  3 发送请求 获取用户的token
  // const {token}=await request({url:"/users/wxlogin",data:loginParams,method:"post"});
  const token='sadsadasdasd';
  // 4 把token存入缓存中 同时跳转回上一个页面
  wx.setStorageSync("token", token);
  wx.navigateBack({
    delta: 1
  });

  } catch (error) {
    console.log(error);
  }
}
})