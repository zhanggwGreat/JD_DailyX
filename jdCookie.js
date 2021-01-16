/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  '__jda=122270672.1597332566773133046281.1597332566.1610734828.1610737805.18; __jdu=1597332566773133046281; ipLoc-djd=16-1332-1336-59154; shshshfp=0da727ef7524a851bd80121aff8c6b77; shshshfpa=325c7561-131c-228b-16c6-035f0b00a9fa-1598110369; shshshfpb=wv%20q%200CyR58JmRfEMnx%20xyw%3D%3D; cn=4; TrackID=1HsS_9GTqSFUHrUYWY-CD7ryF4WngAi6BCFH7MGa5Gxik6J385pm0KjPg4vciSqUSR019BOztRz81eRBYmrEbLK94JfQeinVLEu4YRGCwFWT4JV4OmymsGUD0t1vG4mLf; pinId=e8EOAaw7lA82SW3BOMmgZg; unick=%E6%BF%80%E6%83%85%E7%8E%96%E7%8E%96; _tp=hFBsYUW53PRZDSGpt4aeKlgQ7qnrqUeCrj4QcKrDGfmcU9MSkC5jMB0PKJsBBnck; _pst=%E6%BF%80%E6%83%85%E7%8E%96%E7%8E%96; unpl=V2_ZzNtbUtQRBAhAE9XL05dAWJURQ4RXxMScQFCAS4ZVVU1UxIPclRCFnUUR1RnGV4UZAMZWUFcQx1FCEdkex5fDGQzEl9BU0ITcwtEZEsaXDVmMxJZSlFBF3YMQVN9H14FZQETWEVUShVFOEZcfyleAGMEElVGX0MQcziSwdDB15I1QlCE8vKVv9s4QVF8H1UMYgciXHJWc1QbCEdVeRBZAW5OEllKUUEXdgxBU30fXgVlARNYRVRKFUUJdlc%3d; ipLocation=%u5317%u4eac; __jdv=122270672|c.duomai.com|t_16282_132507723|tuiguang|8664e982ef054ffbb9a6585dd18aca1c|1610545940886; user-key=99bed165-670f-464a-bda4-691d2afc330d; areaId=16; pin=%E6%BF%80%E6%83%85%E7%8E%96%E7%8E%96; PCSYCityID=CN_0_0_0; __jdc=122270672; mba_muid=1597332566773133046281; wxa_level=1; retina=0; cid=9; wqmnx1=MDEyNjM1MGg6bWptZGhhbjgwMW9hIGROLmkgIDFHLzBGby4zWWRmNDNWUkRGSCZS; jxsid=16107378053625543578; webp=1; __jdb=122270672.9.1597332566773133046281|18.1610737805; mba_sid=16107378057744212876934245870.9; visitkey=2188061048731830; shshshsID=138089f3dd38d114821663b2c018bf48_5_1610737994957; 3AB9D23F7A4B3C9B=IFZ2RVQ73RGHLUADEJMWVIGPVUIULP2BWQQNL4JZE3F3HRHUFOVBKWWVH2U5MYRD4PW4LEE64PXD73B5PZ75GH6B2E; TrackerID=skcdBAtffJBa0osm_UC58JFsGRtxOsxbYL8Z0m_x26dos4ozrYBDU8cDNaJac4FqFdpKD82Wx-erUDpuqjmOGsxKWDBXe_8DwZeQkJUQtu9VUMJWcVlb_lkiPn1hvInD; pt_key=AAJgAeivADCwUCiCUHdz5ac96U63_NrbKbPY6WzlIKLToTrh2MiuxX52ljpxcnSvGhNOXYqxupI; pt_pin=%E6%BF%80%E6%83%85%E7%8E%96%E7%8E%96; pt_token=c6tokpem; pwdt_id=%E6%BF%80%E6%83%85%E7%8E%96%E7%8E%96; sfstoken=tk01mc3a31c66a8sMXgzUUF1eXZh90fNlsyQRhziea4Uh+uzWImAjMPu9AKQsKWL9QQ7G8o9AKHeNWFdzQxLuW7iAPkY; __wga=1610737994225.1610737837572.1610737837572.1610737837572.4.1; PPRD_P=UUID.1597332566773133046281; jxsid_s_t=1610737994262; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; sc_width=1920; __jd_ref_cls=MCommonBottom_My',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
