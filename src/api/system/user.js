import request from '@/utils/request'
import {parseStrEmpty} from "@/utils/ruoyi";

export default {
  // 查询用户列表
  listUser(query) {
    return request({
      url: '/system/user/list',
      method: 'get',
      params: query
    })
  },
  // 查询用户详细
  getUser(userId) {
    return request({
      url: '/system/user/' + parseStrEmpty(userId),
      method: 'get'
    })
  },
  // 新增用户
  addUser(data) {
    return request({
      url: '/system/user',
      method: 'post',
      data: data
    })
  },
  // 修改用户
  updateUser(data) {
    return request({
      url: '/system/user',
      method: 'put',
      data: data
    })
  },

  // 删除用户
  delUser(userId) {
    return request({
      url: '/system/user',
      method: 'delete',
      data: userId
    })
  },

  // 用户密码重置
  resetUserPwd(id, password) {
    const data = {
      id,
      password
    }
    return request({
      url: '/system/user/resetPwd',
      method: 'put',
      data: data
    })
  },
  // 查询用户个人信息
  getUserProfile() {
    return request({
      url: '/system/user/profile',
      method: 'get'
    })
  },
  // 用户状态修改
  changeUserStatus(id, status) {
    const data = {
      id,
      status
    }
    return request({
      url: '/system/user/changeStatus',
      method: 'put',
      data: data
    })
  },
  // 修改用户个人信息
  updateUserProfile(data) {
    return request({
      url: '/system/user/profile',
      method: 'put',
      data: data
    })
  },

  // 用户密码重置
  updateUserPwd(oldPassword, newPassword) {
    const data = {
      oldPassword,
      newPassword
    }
    return request({
      url: '/system/user/profile/updatePwd',
      method: 'put',
      params: data
    })
  },

  // 用户头像上传
  uploadAvatar(data) {
    return request({
      url: '/system/user/profile/avatar',
      method: 'post',
      data: data
    })
  },

  // 查询授权角色
  getAuthRole(userId) {
    return request({
      url: '/system/user/authRole/' + userId,
      method: 'get'
    })
  },

  // 保存授权角色
  updateAuthRole(userId, data) {
    return request({
      url: '/system/user/authRole/' + userId,
      method: 'put',
      data: data
    })
  }
}
