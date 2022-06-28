import api from "./request";
/* 首次点击启动图 */
export const getone = () =>
  api({
    url: "/home/getFirstClassify",
    method: "GET",
  });
/* 第三次点击启动图 */
export const getTwo = (data) =>
  api({
    url: `/home/getMajor/${data.classify_id}`,
    method: "GET",
    params: data.classify_id,
  });
/* tab栏数据 */
export const getTab = (data) =>
  api({
    url: `/home/getSecondClassify/${data.classify_id}`,
    method: "GET",
    params: data.classify_id,
  });
/* banner 数据 */
export const getBanner = (data) =>
  api({
    url: `/home/banner/${data.rid == 0 ? data.id : data.rid}/${4}`,
    method: "GET",
    // params: data,
  });
export const getContentApi = (params) =>
  api({
    url: `/home/classifyCourse/${params.classify_id}`,
    method: "GET",
    params: {
      page: params.page,
      limit: params.limit,
      classify_id: params.classify_id,
    },
  });
/* 近期公开课 */
export const getrecentOpenApi = (params) =>
  api({
    url: `home/marketingCourse/${params.classify_id}`,
    method: "GET",
    params,
  });
/* 搜索 */
export const getSearchApi = (params) =>
  api({
    url: `/home/classifyCourse/${params.classify_id}?${params.title}`,
    method: "GET",
    params,
  });
/* 详情 */
export const getInitDetailApi = (params) =>
  api({
    url: `/courseInfo/basis_id=${params.basis_id}/st=${params.id}?basis_id=${params.basis_id}&st=${params.id}&channel=`,
    method: "GET",
  });
/* 立即学习 */
export const getWechatInfoApi = (params) =>
  api({
    url: `/getWechatInfo/${params.id}?id=${params.id}`,
    method: "GET",
  });
/* 商品评价 */
export const getInitDetailPjApi = (data) =>
  api({
    url: `/getAllCommentByType`,
    method: "POST",
    data,
  });
/* 获取图形验证码 */
export const getImgCode = () =>
  api({
    url: `getImgCode`,
    method: "GET",
  });
/* 获取验证码 */
export const getyzApi = (data) =>
  api({
    url: "/getsmscode",
    method: "POST",
    data,
  });
/* 登录 */
export const getLoginApi = (data) =>
  api({
    url: "/login",
    method: "POST",
    data,
  });
/* 修改密码 */
export const upDataPassword = (data) =>
  api({
    url: "/getpassword",
    method: "POST",
    data,
  });
/* 单独跳转的免费直播课 */
export const freeofChargeApi = (params) =>
  api({
    url: `/home/marketingCoursePage/${params.classify_id}?classify_id=${params.classify_id}`,
    method: "GET",
    params,
  });
/* 详情收藏 */
export const collectApi = (data) =>
  api({
    url: "/collect",
    method: "POST",
    goBack: true,
    data,
  });
/* 个人信息模块 */
/* 个人信息默认 */
export const showoneApi = (params) =>
  api({
    url: `/showone/id=${params.id}?id=${params.id}`,
    method: "GET",
  });
/* 个人信息接口 */
export const upDateHeadApi = (data) =>
  api({
    url: "/updateInfo",
    method: "PUT",
    data,
  });
/* 我的课日期 */
export const dateApi = () =>
  api({
    url: "/myCourse/weekList?1654963200today_time&time=1654963200&today_time=1654963200",
    method: "",
  });
/* 正在学习的课程 */
export const studyIng = () =>
  api({
    url: "/myCourse/studyCourseList",
    method: "GET",
  });
/* 日期 */
export const dataApi = (params) =>
  api({
    url: `/myCourse/apptype?time=${params.time}`,
    method: "GET",
  });
/* 确定修改手机号 */
export const verifySmscodeApi = (data) =>
  api({
    url: "/verifySmscode",
    method: "POST",
    data,
  });
/* 确定修改 */
export const modifyMobileApi = (data) =>
  api({
    url: "/modifyMobile",
    method: "POST",
    data,
  });
/* 立即报名 （找不到参数）*/
export const ljgmApi = (data) =>
  api({
    url: "/order/shopinfo",
    method: "POST",
    data,
  });
/* 免费领取 （暂时找不到传参） */
export const mflqApi = () =>
  api({
    url: "/course/code",
    method: "POST",
  });
