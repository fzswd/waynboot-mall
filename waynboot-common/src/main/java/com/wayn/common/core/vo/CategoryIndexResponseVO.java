package com.wayn.common.core.vo;

import com.wayn.common.core.entity.shop.Category;
import lombok.Data;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

/**
 * @author: waynaqua
 * @date: 2023/11/6 22:19
 */
@Data
public class CategoryIndexResponseVO implements Serializable {
    @Serial
    private static final long serialVersionUID = -7580503521421359029L;

    private Category currentCategory;
    private List<VanTreeSelectVO> categoryList;
    private List<VanTreeSelectVO> subCategoryList;
}