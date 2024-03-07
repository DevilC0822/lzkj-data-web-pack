import React, { useRef, useState, type FC, useEffect } from 'react';
import { Balloon, Icon } from '@alifd/next';
import '@alifd/next/lib/balloon/style';
import { _nodeWidth, _nodeHeight, _lineOptions } from './defaultData';
import { debounce } from 'lodash';
import { formatNum } from 'lzkj-data-web-pack';
import questionIcon from './icon/question.png';
import increaseIcon from './icon/increase.png';
import decreaseIcon from './icon/decrease.png';
import type { IDataSource, IExtra, ILineOptions, IPoint } from './types';
import './index.scss';

const Tooltip = Balloon.Tooltip;

interface IProps {
  /**
   * @description 画布的宽度
   * @requires true
   */
  width: number
  /**
   * @description 画布的高度
   * @requires true
   */
  height: number
  /**
   * @description 数据源
   * @requires true
   */
  dataSource?: IDataSource[]
  /**
   * @description 统一设置的节点宽度优先级低于单个节点的宽度
   * @requires true
   */
  nodeWidth?: number
  /**
   * @description 统一设置的节点高度优先级低于单个节点的高度
   * @requires true
   */
  nodeHeight?: number
  /**
   * @description 用于配置线条的样式
   * @requires false
   */
  lineOptions?: ILineOptions
  /**
   * @description 画布的自定义类名
   * @requires false
   */
  customClass?: string // 画布的自定义类名
  /**
   * @description 使用extra可以在图表中渲染额外的内容，例如一些符号，或者其他的内容，支持jsx
   * @requires false
   */
  extra?: IExtra[]
  /**
   * @description 绘制任何位置任何形状的线条，例如：[[{x: 0, y: 0}, {x: 100, y: 100}]]
   * @requires false
   */
  customLines?: IPoint[][]
  /**
   * @description 是否根据画布宽度自动缩放
   * @requires false
   */
  isScalingX?: boolean // 是否根据画布宽度自动缩放 default: false
  isScrollX?: boolean // 是否开启x轴滚动 default: false
}

const getStartPoint = (left: number, top: number, width: number, height: number) => {
  // 开始点是长方形下边中点
  return {
    x: left + width / 2,
    y: top + height
  };
};
const getEndPoint = (left: number, top: number, width: number) => {
  // 结束点是长方形上边中点
  return {
    x: left + width / 2,
    y: top
  };
};

const isUndefinedOrNull = (value: any) => {
  return value === undefined || value === null;
};

const FlowChart: FC<IProps> = (props) => {
  const {
    dataSource = [],
    width: canvasWidth,
    height: canvasHeight,
    nodeWidth = _nodeWidth,
    nodeHeight = _nodeHeight,
    lineOptions = _lineOptions,
    customClass = '',
    extra = [],
    customLines = [],
    isScalingX = false,
    isScrollX = false,
  } = props;
  const flowChartRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scalingXRatio, setScalingXRatio] = useState(1);

  const drawLine = (ctx: CanvasRenderingContext2D, pSet: IPoint[][]) => {
    const { fontStyle = _lineOptions.fontStyle, strokeColor = _lineOptions.strokeColor, hasArrow = _lineOptions.hasArrow, arrowSize = _lineOptions.arrowSize } = lineOptions;
    pSet.forEach((p) => {
      ctx.beginPath();
      ctx.font = fontStyle;
      ctx.strokeStyle = strokeColor;
      ctx.moveTo(p[0].x, p[0].y);
      for (let i = 1; i < p.length; i++) {
        if (i === p.length - 1 && hasArrow) {
          const endPoint = p[i];
          const endPointUp = {
            x: endPoint.x,
            y: endPoint.y - arrowSize
          };
          ctx.lineTo(endPointUp.x, endPointUp.y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(endPoint.x, endPoint.y);
          ctx.lineTo(endPoint.x + arrowSize, endPoint.y - arrowSize);
          ctx.lineTo(endPoint.x - arrowSize, endPoint.y - arrowSize);
          ctx.fillStyle = strokeColor;
          ctx.fill();
          return;
        }
        ctx.lineTo(p[i].x, p[i].y);
      }
      ctx.stroke();
    });
  };
  const getAllPoint = () => {
    const pointArr: { startPoint: { x: number; y: number; }; endPoint: { x: number; y: number; }; }[] = [];
    const result: { x: number; y: number; }[][] = [];
    if (!dataSource) return;
    dataSource.forEach((item) => {
      const { left, top } = item.position;
      const { width = nodeWidth, height = nodeHeight } = item;
      if (item.out) {
        item.out.forEach((i) => {
          const { left: left2, top: top2 } = dataSource.find((j) => j.id === i)!.position;
          const { width: width2 = nodeWidth } = dataSource.find((j) => j.id === i)!;
          pointArr.push({
            startPoint: getStartPoint(left, top, width, height),
            endPoint: getEndPoint(left2, top2, width2)
          });
        });
      }
    });
    // 获取中间点
    pointArr.forEach((item) => {
      const { startPoint, endPoint } = item;
      // 获取开始节点的下边中点
      const startMiddlePoint = {
        x: startPoint.x,
        y: startPoint.y + Math.abs(startPoint.y - endPoint.y) / 2,
      };
      // 获取结束节点的上边中点
      const endMiddlePoint = {
        x: endPoint.x,
        y: endPoint.y - Math.abs(startPoint.y - endPoint.y) / 2,
      };
      result.push([
        startPoint,
        startMiddlePoint,
        endMiddlePoint,
        endPoint
      ]);
    });
    const ctx = flowChartRef.current?.getContext('2d');
    if (!ctx) return;
    // 清空画布
    ctx.scale(scalingXRatio, 1);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawLine(ctx, result);
    // 绘制自定义线条
    drawLine(ctx, customLines);
    return result;
  };
  useEffect(() => {
    getAllPoint();
  }, [dataSource, scalingXRatio]);
  useEffect(() => {
    const resize = debounce(() => {
      // 获取containerRef的宽度
      const { current } = containerRef;
      if (!current) return;
      const { clientWidth: containerWidth } = current;
      if (!isScalingX) return;
      setScalingXRatio(containerWidth / canvasWidth);
    }, 100);
    window.addEventListener('resize', resize);
    resize();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <div ref={containerRef} style={{
      overflowX: isScrollX ? 'scroll' : 'auto',
      overflowY: 'hidden',
      height: canvasHeight + 10,
    }}>
      <div className={`FlowChart ${customClass ?? ''}`} style={{
      width: canvasWidth * scalingXRatio,
      height: canvasHeight,
    }}>
      <canvas ref={flowChartRef} width={canvasWidth * scalingXRatio} height={canvasHeight} />
      {
        dataSource.filter((i) => i?.isShow ?? true)?.map((item) => {
          return (
            <div
              key={item?.id}
              className={`Item ${item?.customClass ?? ''} ${item?.isChecked ? 'checked' : ''}`}
              style={{
                width: (item?.width || nodeWidth) * scalingXRatio,
                height: item?.height || nodeHeight,
                top: item?.position?.top,
                left: item?.position?.left * scalingXRatio,
                ...item?.customStyle
              }}
              {...item?.nodePropsTransfer}
            >
              <div className='title-row'>
                <div className='first-title-box'>
                  <div className='title'>{item?.name}</div>
                  {!isUndefinedOrNull(item?.tips) && (
                    <Tooltip
                      trigger={
                        <img className='icon' src={questionIcon} />
                      }
                      align="r"
                    >
                      {item.tips}
                    </Tooltip>
                  )}
                </div>
                {
                  !isUndefinedOrNull(item?.subTitle) && <div className='sub-title'>{item.subTitle}</div>
                }
              </div>
              {
                (item?.data ?? []).sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0)).map((i, index) => {
                  return (
                    <div key={index} className={`data-row ${i?.customClass ?? ''}`}>
                      {
                        !isUndefinedOrNull(i?.name) && <div className={`name`}>{i.name}</div>
                      }
                      {
                        isUndefinedOrNull(i?.customContent) && <div className={`value ${i?.isShowFloatArrow ? 'value-box' : ''} ${i?.name ? '' : 'only-value'}`}>
                          {
                            (i?.isPublicDeal ?? true) ? formatNum(i.value, i?.isRatio, i?.digit) : <p>{i.value}</p>
                          }
                          {
                            !isUndefinedOrNull(i?.value) && i?.isShowFloatArrow && (
                              Number(i.value) === 0 ? '' : <img className='arrow-icon' src={Number(i.value) > 0 ? increaseIcon : decreaseIcon} />
                            )
                          }
                        </div>
                      }
                      {
                        !isUndefinedOrNull(i?.customContent) && <div>{i.customContent}</div>
                      }
                    </div>
                  );
                })
              }
              {item?.isChecked && (
                <div
                  className='checked-icon'
                >
                  <Icon size={16} style={{ color: '#1a92fa' }} type="success-filling" />
                </div>
              )}
            </div>
          );
        })
      }
      {
        (extra ?? []).map((item, index) => {
          return (
            <div key={index} className={`extra-box ${item?.customClass ?? ''}`} style={{
              top: item?.position.top,
              left: item?.position.left * scalingXRatio,
              ...item?.customStyle
            }}>
              {item?.content}
            </div>
          );
        })
      }
    </div>
    </div>
  );
};

export default FlowChart;
