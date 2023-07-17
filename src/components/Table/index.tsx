
type Props = {
    data: any[];
    config: any[];
}

const Table = ({data,  config}: Props) => {
    const  renderHeader = config.map((column) => {
        if(column.header){
            return <th> {column?.header(column)}</th>
        }
        return <th key={column.key}>{column.lable}</th>
    })
  const renderRows = data.map((item) => {
    const renderCell = config.map((column) => {
        return <td key={column.key}>{column.render(item)}</td>
    });
    return <tr key={item.id}>{renderCell}</tr>
  })
  
    return (
    <table className="w-full">
        <thead>
            <tr>{renderHeader}</tr>
        </thead>
        <tbody >{renderRows}</tbody>
    </table>
  )
}

export default Table