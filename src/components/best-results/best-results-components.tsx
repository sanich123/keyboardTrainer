import './best-results.scss';

interface BestIndexInfo {
  name: string
  span: string
  color: string
  result: number
}

export function BestIndex(props: BestIndexInfo) {

  return (
    <div className="all-best-index">
      <p className="best-index-name">{props.name}
        <span className="best-index-span">{props.span}</span>
      </p>
      <div className="div-circle"
        style={{background: `${props.color}`}}
      >{props.result}
      </div>
    </div>
  );
}
