const React = require('react')
const Def = require('./default')

function Show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
        if (data.place.comments.length) {
          comments = data.place.comments.map(c => {
            return (
              <div className="border" key={data.place.id}>
                <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                <h4>{c.content}</h4>
                <h3>
                  <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
              </div>
            )
          })
        }
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={data.place.pic} alt={`picture of ${data.place.name}`} />
                        <p>Located in {data.place.city}, {data.place.state}</p>
                    </div>
                    <div className="col-6">
                        <h2>Rating</h2>
                        <p>Not Rated</p>
                        <h2>Discription</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            serving {data.place.cuisines}
                        </h4>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                          Edit
                        </a>
                        <form method="post" action={`/places/${data.place.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <h2>Comments</h2>
                    {comments}
                    <form method="post" action={`/places/${data.place.id}/rant`}>
                        <label className="form-group" htmlFor="author" >Author</label>
                        <input className="form-control" type="text" id="author" name="author" />
                        <label className="form-group" htmlFor="Content" >Content</label>
                        <input className="form-control" type="textarea" id="content" name="content" />
                        <label className="form-group" htmlFor="stars" >StarRating</label>
                        <input className="form-control" type="Number" id="stars" name="stars" min="0" max="5" step=".5" placeholder="0-5 stars by .5" />
                        <label  htmlFor="rant">rant</label>
                        <input  type="checkbox" id="rant" name="rant" />
                        <br></br>
                        <br></br>
                        <input className="btn btn-primary" type="submit" value="add comment" />
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show