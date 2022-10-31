function PublicationCommentsItem({Comment}) {
  return (
    <div class="border-success">
        
      <span>{Comment.email}{'\n'}</span>
      <p class="border-1 border-success border-top"  style={{textAlign:'justify'}}>
        <strong>{Comment.first_name.split("")[0].toUpperCase()}{Comment.first_name.slice(1)}</strong>: {Comment.content}
      </p>
    </div>
  );
}

export default PublicationCommentsItem;
