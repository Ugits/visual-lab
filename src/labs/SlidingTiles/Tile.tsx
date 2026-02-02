import "./Tile.css"

export type Tile = {
    number: number;
}

interface Props {
    number: number;
}

const Tile = ({number}: Props) => {
    const isEven = number % 2 === 0 ? "even" : "uneven"
  return (
    <div className={`tile ${isEven}`}>{number}</div>
  )
}

export default Tile