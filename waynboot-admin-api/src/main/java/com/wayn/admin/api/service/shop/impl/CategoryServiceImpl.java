package com.wayn.admin.api.service.shop.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wayn.admin.api.domain.shop.Category;
import com.wayn.admin.api.mapper.shop.CategoryMapper;
import com.wayn.admin.api.service.shop.ICategoryService;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 类目表 服务实现类
 * </p>
 *
 * @author jobob
 * @since 2020-06-26
 */
@Service
public class CategoryServiceImpl extends ServiceImpl<CategoryMapper, Category> implements ICategoryService {

}