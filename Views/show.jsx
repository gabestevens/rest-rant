const React = require('react')
const Def = require('./default')

function Show (data) {
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
                        <form method="post" action={`/places/${data.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <h2>Comments</h2>
                    <p>blah blah</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = Show