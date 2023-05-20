const React = require('react')
const Def = require('./default')

function New_form () {
    return(
        <Def>
            <main>
                <h1>ADD a New Place</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">state</label>
                        <input className="form-control" type="text" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">cuisines</label>
                        <input className="form-control" type="text" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = New_form