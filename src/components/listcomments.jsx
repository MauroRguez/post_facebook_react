
let ListComment=({listComData}) =>   {
    return (
      <ul className="list-group list-group-flush">
        {
          listComData.map((list)=>(
            <li key={list.id} className="list-group-item">{list.comment}</li>
          ))
        }
        
      </ul>
    );
  };
  
  export default ListComment;