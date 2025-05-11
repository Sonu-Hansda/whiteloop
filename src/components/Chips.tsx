interface Props {
  text: string;
}
function Chips(data:Props) {
  return (
    <div className="bg-gray-400/35 py-2 px-4 rounded-full font-semibold">{data.text}</div>
  )
}

export default Chips