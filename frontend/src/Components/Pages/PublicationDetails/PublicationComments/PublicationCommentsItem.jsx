function PublicationCommentsItem({Comment}) {
  return (
    <div class="border-success">
      <p class="border-1 border-success border-top text-start">
        {Comment.user.name}:&nbsp;{Comment.comment}
      </p>
    </div>
  );
}

export default PublicationCommentsItem;
