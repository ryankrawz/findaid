
export function findUser(currentUser, users){
    return users.find(user=>currentUser===user.email);
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
 
export function findPosts(userEmail, posts){

    return posts.filter(post => post.poster === userEmail);
}

export function findLikedPosts(userEmail, posts, likes){
  let liked = likes.filter(like => like.userEmail === userEmail);
  var l = [];
  for (var x in liked){
    console.log(liked[x]);
    console.log(liked[x].postId);
    l.push(liked[x].postId);
  }
  console.log(l);
  return posts.filter(({id}) => !l.includes(id));
}
