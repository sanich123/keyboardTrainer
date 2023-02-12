import './best-results.scss';

interface BestIndexInfo {
  name: string
  span: string
  color: string
  result: number
}

export function BestIndex({ name, span, color, result }: BestIndexInfo) {

  return (
    <div className="all-best-index">
      <p className="best-index-name">{name}
        <span className="best-index-span">{span}</span>
      </p>
      <div className="div-circle"
        style={{background: `${color}`}}
      >{result}
      </div>
    </div>
  );
}
