
export default function SVG({
  width,
  height,
  fill,
  className,
  viewBox,
  cx,
  cy,
  r,
  d,
}: React.SVGProps<SVGSVGElement>): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} className={className} viewBox={viewBox}>
      {cx && cy && r ? <circle cx={cx} cy={cy} r={r}></circle> : null}
      <path d={d}/>
    </svg>
  )
}