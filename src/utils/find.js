
export function findUser(userId, store){
    return store.users.find(user=>user.id===userId);
  }

export function findComments(post, store){
  return store.comments.filter(comment=>comment.postId===post.id);
}

export function findLikes(post, store, currentUser){
  let postLikes = store.likes.filter(like=>like.postId===post.id);
  return {
    self: postLikes.some(like=> like.userId===store.currentUser),
    count: postLikes.length
  }
}
 
export function findPosts(userEmail, store){
    return store.posts.filter(post => post.poster === userEmail);
}
