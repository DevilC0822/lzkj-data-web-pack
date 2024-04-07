---
nav:
  title: 版本变更记录
  order: 3
toc: content
title: 版本变更记录
---

# 版本变更记录

# alpha

这是一个预览版，仅供参考，不建议在生产环境中使用。

## v0.0.1-alpha.9

- [`DateSelector`](../components/DateSelector.md)组件取消初始化时设置默认值的行为

## v0.0.1-alpha.8

- [`DateSelector`](../components/DateSelector.md)组件新增**selectProps** 和 **datePickerProps**属性，用于配置选择器和日期选择器的属性

## v0.0.1-alpha.7

- [`DateSelector`](../components/DateSelector.md)组件重命名为 DateSelector 并修改重置查询组件默认不展示

## v0.0.1-alpha.6

- react peer 依赖改为>=16.8.0

## v0.0.1-alpha.5

- 新增[`Pagination`](../components/Pagination.md)、[`ResponsiveContent`](../components/ResponsiveContent.md)和[`BasicQueryForm`](../components/BasicQueryForm.md)组件
- [`SearchResetGroup`](../components/SearchResetGroup.md)组件新增**isFormType**属性，以便在表单中使用

## v0.0.1-alpha.4

- 新增[`SubTitle`](../components/SubTitle.md)和[`Tooltip`](../components/Tooltip.md)组件
- [`SearchResetGroup`](../components/SearchResetGroup.md)组件的**search**和**reset**配置项新增**isTextBtn**属性用于控制按钮是否为文本按钮

## v0.0.1-alpha.3

- 新增[`SearchResetGroup`](../components/SearchResetGroup.md)组件
- [`DateSelector`](../components/DateSelector.md)组件新增自定义禁用日期函数配置

## v0.0.1-alpha.2

- 引入**lodash**库，并导出[`debounce`](../functions/debounce.md)和[`throttle`](../functions/throttle.md)函数
- 修复[`FlowChart`](../components/FlowChart.md)组件的**isScalingX**属性没有进行初始化的问题
- [`FlowChart`](../components/FlowChart.md)组件新增**isScrollX**属性，用于开启 x 轴滚动条

## v0.0.1-alpha.1

- 新增组件[`FlowChart`](../components/FlowChart.md)和[`DateSelector`](../components/DateSelector.md)
- 新增函数[`formatNum`](../functions/formatNum.md)
