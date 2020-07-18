package com.wayn.admin.api.controller.shop;


import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.wayn.admin.api.domain.shop.Goods;
import com.wayn.admin.api.domain.vo.GoodsSaveRelatedVO;
import com.wayn.admin.api.service.shop.IGoodsService;
import com.wayn.common.base.BaseController;
import com.wayn.common.util.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * <p>
 * 商品基本信息表 前端控制器
 * </p>
 *
 * @author wayn
 * @since 2020-07-06
 */
@RestController
@RequestMapping("/shop/goods")
public class GoodsController extends BaseController {

    @Autowired
    private IGoodsService iGoodsService;

    @GetMapping("/list")
    public R list(Goods goods) {
        Page<Goods> page = getPage();
        return R.success().add("page", iGoodsService.listPage(page, goods));
    }

    @PostMapping
    public R addGoods(@Validated @RequestBody GoodsSaveRelatedVO goodsSaveRelatedVO) {
        return iGoodsService.saveGoodsRelated(goodsSaveRelatedVO);
    }

    @PutMapping
    public R updateGoods(@Validated @RequestBody GoodsSaveRelatedVO goodsSaveRelatedVO) {
        return iGoodsService.updateGoodsRelated(goodsSaveRelatedVO);
    }

    @GetMapping("{goodsId}")
    public R getGoods(@PathVariable Long goodsId) {
        return R.success().add("data", iGoodsService.getGoodsInfoById(goodsId));
    }

    @DeleteMapping("{goodsId}")
    public R deleteGoods(@PathVariable Long goodsId) {
        return R.result(iGoodsService.deleteGoodsRelatedByGoodsId(goodsId));
    }
}