# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method |        Path         |                     Purpose                     |
|--------|---------------------|-------------------------------------------------|
|  GET   |  /                  | Home Page                                       |
|  Get   | /places             | Places index page                               |
|  Post  | /places             | Create a new place                              |
|  Get   | /places/new         | Form page for creating a new place              |
|  Get   | /places/:id         | Details about a particular place                |
|  Put   | /places/:id         | update a particular place                       |
| Delete | /places/:id         | Delete a particular place                       |
|  Post  | /places/:id/rant    | Create a rant (comment) about a particular place|
| Delete | /places/:id/:rantId | Delete a rant (comment) about a particular place|
|  Get   |    *                | 404 page (matches any route not defined above)  |