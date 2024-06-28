package com.wayn.common.config;

import com.github.binarywang.wxpay.config.WxPayConfig;
import com.github.binarywang.wxpay.service.WxPayService;
import com.github.binarywang.wxpay.service.impl.WxPayServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WxPayServiceConfig {

    @Autowired
    private WeixinPayConfig weixinPayConfig;

    @Bean
    public WxPayConfig wxPayConfig() {
        WxPayConfig payConfig = new WxPayConfig();
        payConfig.setAppId(weixinPayConfig.getAppId());
        payConfig.setMchId(weixinPayConfig.getMchId());
        payConfig.setMchKey(weixinPayConfig.getMchKey());
        payConfig.setApiV3Key(weixinPayConfig.getApiV3key());
        payConfig.setKeyPath(weixinPayConfig.getKeyPath());
        payConfig.setPrivateKeyPath(weixinPayConfig.getPrivateKeyPath());
        payConfig.setPrivateCertPath(weixinPayConfig.getPrivateCertPath());
        payConfig.setSignType("MD5");
        payConfig.setNotifyUrl(weixinPayConfig.getNotifyUrl());
        return payConfig;
    }

    @Bean
    public WxPayService wxPayService(WxPayConfig payConfig) {
        WxPayService wxPayService = new WxPayServiceImpl();
        wxPayService.setConfig(payConfig);
        return wxPayService;
    }
}
