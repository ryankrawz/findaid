
export function findUser(userId, store){
    return store.users.find(user=>user.id===userId);
  }

export function findComments(post, comments){
  return store.comments.filter(comment=>comment.postId===post.id);
}

export function findLikes(post, store, currentUserId){
  let postLikes = store.likes.filter(like=>like.postId===post.id);
  return {
    self: postLikes.some(like=> like.userId===store.currentUserId),
    count: postLikes.length
  }
}
 
export function findPosts(userEmail, store){
    return store.posts.filter(post => post.poster === userEmail);
}
