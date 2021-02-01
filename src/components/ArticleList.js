import Article from "./Article.js"

function ArticleList(props) {

   let posts = props.posts

   const articles = posts.map((post) => (
      <Article 
         key={post.id} 
         title={post.title} 
         date={post.date} 
         preview={post.preview} 
      />
   ))

   return (
      <div id="article-list">
         <main>
            {articles}
         </main>
      </div>
   )
}

export default ArticleList