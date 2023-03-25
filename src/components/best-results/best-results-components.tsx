import './best-results.scss';

interface BestIndexInfo {
  name: string
  color: string
  result: number
}

export function BestIndex({ name, color, result }: BestIndexInfo) {

  return (
    <div className="all-best-index">
      <p className="best-index-name">{name}</p>
      <div className="div-circle"
        style={{background: `${color}`}}
      >{result}
      </div>
    </div>
  );
}
