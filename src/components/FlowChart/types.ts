
export interface IDataSource {
  /**
   * @description 节点的唯一标识
   */
  id: number | string;
  /**
   * @description 节点是否显示
   * @default true
   */
  isShow?: boolean;
  /**
   * @description 节点名称，通常显示在第一行
   * @default ''
   */
  name?: string;
  /**
   * @description 节点的悬浮解释文案，显示在节点名称的右侧
   * @default ''
   */
  tips?: string;
  /**
   * @description 节点的副标题，通常显示在名称右侧
   * @default ''
   */
  subTitle?: string | number | React.JSX.Element;
  /**
   * @description 当前节点的宽度（如果不填写则是通过Props.nodeWidth设置的值）
   * @default 365
   */
  width?: number;
  /**
   * @description 当前节点的高度（如果不填写则是通过Props.nodeHeight设置的值）
   * @default 80
   */
  height?: number;
  /**
   * @description 节点的自定义类名
   * @default ''
   */
  customClass?: string;
  /**
   * @description 节点的自定义样式
   * @default {}
   */
  customStyle?: object;
  /**
   * @description 节点连接目标线条的id值
   * @default []
   */
  out?: number[] | string[];
  /**
   * @description 节点是否被选中
   * @default flase
   */
  isChecked?: boolean;
  /**
   * @description 节点透传的属性
   * @default {}
   */
  nodePropsTransfer?: object;
  /**
   * @description 节点的位置
   * @required true
   */
  position: {
    top: number;
    left: number;
  };
  /**
   * @description 节点的内容(以行的形式展示左右边缘展示)
   * @default []
   */ 
  data?: {
    /**
      * @description 当前行的自定义类名
      * @default ''
      */ 
    customClass?: string; // default: ''
    /**
      * @description 当前行名称（展示在左侧）
      * @default ''
      */
    name?: string;
    /**
      * @description 当前行的值（展示在右侧，如果name未定义时则展示在左侧）
      * @default ''
      */
    value?: number | string | React.JSX.Element | null;
    /**
      * @description 是否公共处理（对值进行添加千分位、保留小数等操作）应用于customContent不存在的情况下
      * @default true
      */
    isPublicDeal?: boolean;
    /**
      * @description 公共处理数值是否为小数
      * @default ''
      */
    isRatio?: boolean;
    /**
      * @description 公共处理数值保留小数位数
      * @default 0
      */
    digit?: number;
    /**
      * @description 当前行的order值，用于排序
      * @default null
      */
    /**
      * @description 展示箭头（正数红色向上箭头、负数绿色向下箭头）
      * @default false
      */
    isShowFloatArrow?: boolean;
    order?: number;
    /**
      * @description 当前行的自定义内容
      * @default null
      */
    customContent?: React.JSX.Element;
  }[];
}

export interface IExtra {
  /**
   * @description 额外内容，可以是任何内容
   * @required true
   */
  content: number | string | React.JSX.Element;
  /**
   * @description 额外内容的自定义类名
   * @default ''
   */
  customClass?: string;
  /**
   * @description 额外内容的自定义样式
   * @default {}
   */
  customStyle?: object;
  /**
   * @description 额外内容的位置
   * @required true
   */
  position: {
    top: number;
    left: number;
  };
}

export interface ILineOptions {
  /**
   * @description canvas绘制线条的font值
   * @default '12px Arial'
   */
  fontStyle?: string
  /**
   * @description canvas绘制线条的strokeStyle值
   * @default '#6aacfc'
   */
  strokeColor?: string
  /**
   * @description 使用canvas绘制线条时是否在最后一条线条的尾端添加箭头
   * @default false
   */
  hasArrow?: boolean
  /**
   * @description 箭头的大小
   * @default 5
   */
  arrowSize?: number
}

export interface IPoint {
  /**
    * @description 点的x轴坐标
    * @required true
    */
  x: number
  /**
    * @description 点的y轴坐标
    * @required true
    */
  y: number
}