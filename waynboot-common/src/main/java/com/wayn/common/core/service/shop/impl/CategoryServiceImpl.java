package com.wayn.common.core.service.shop.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wayn.common.core.domain.shop.Category;
import com.wayn.common.core.domain.vo.VanTreeSelectVo;
import com.wayn.common.core.mapper.shop.CategoryMapper;
import com.wayn.common.core.service.shop.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 * 类目表 服务实现类
 * </p>
 *
 * @author wayn
 * @since 2020-06-26
 */
@Service
public class CategoryServiceImpl extends ServiceImpl<CategoryMapper, Category> implements ICategoryService {

    @Autowired
    private CategoryMapper categoryMapper;


    @Override
    public List<Category> list(Category category) {
        return categoryMapper.selectCategoryList(category);
    }

    @Override
    public List<VanTreeSelectVo> selectL1Category() {
        List<Category> categoryList = list(new QueryWrapper<Category>().eq("level", "L1").orderByAsc("sort"));
        List<VanTreeSelectVo> vanTreeSelectVos = categoryList.stream().map(VanTreeSelectVo::new).collect(Collectors.toList());
        return vanTreeSelectVos;
    }

    @Override
    public List<VanTreeSelectVo> selectCategoryByPid(Long id) {
        List<Category> categoryList = list(new QueryWrapper<Category>().eq("pid", id).orderByAsc("sort"));
        List<VanTreeSelectVo> vanTreeSelectVos = categoryList.stream().map(VanTreeSelectVo::new).collect(Collectors.toList());
        return vanTreeSelectVos;
    }
}
