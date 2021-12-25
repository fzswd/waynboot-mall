package com.wayn.mobile.framework.config;

import com.wayn.common.config.WaynConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 本地文件上传路径
        registry.addResourceHandler("/upload/**").addResourceLocations("file:" + WaynConfig.getUploadDir() + "/");
    }

    //
    // @Bean
    // public ServletRegistrationBean dispatcherRegistration() {
    //     return new ServletRegistrationBean(dispatcherServlet());
    // }
    //
    // @Bean(name = DispatcherServletAutoConfiguration.DEFAULT_DISPATCHER_SERVLET_BEAN_NAME)
    // public DispatcherServlet dispatcherServlet() {
    //     return new WaynDispatcherServlet();
    // }
}
