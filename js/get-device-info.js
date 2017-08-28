/**
 * 获取设备信息
 * @author webJ
 * @github https://github.com/chenzejiang/get-device-info/
 * @Date 2017年8月28日
 */
var getDeviceInfo = {
    /**
     * 判断是否为PC
     * @returns {boolean} true = pc || false = 其他
     */
    isPc:function(){
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    },
    /**
     * 判断是否为微信
     * @returns {boolean} true = 微信 || false = 非微信
     */
    isWeiXin:function() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 判断苹果或安卓
     * @returns {string} '0' = iphone || '1' = android
     */
    //判断平台安卓或苹果  ismobile(1) 0:iPhone 1:Android
    isMobile:function() {
        var u = navigator.userAgent, app = navigator.appVersion;
        if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
            if (window.location.href.indexOf("?mobile") < 0) {
                try {
                    if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
                        return '0';
                    } else {
                        return '1';
                    }
                } catch (e) { }
            }
        } else if (u.indexOf('iPad') > -1) {
            return '0';
        } else {
            return '1';
        }
    },
    /**
     * 获取移动终端浏览器版本信息
     */
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动设备
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 , //判断是否为android
            iPhone: u.indexOf('iPhone') > -1 , //判断是否为iPhone
            iPad: u.indexOf('iPad') > -1, //是否iPad
            Safari: u.indexOf('Safari') == -1, //Safari
            weixin: (u.toLowerCase()).indexOf('micromessenger') > -1 //weixin
        };
    },
    /**
     * 初始化
     */
    init:function(){
        console.log(this.versions());
    }
}
getDeviceInfo.init();