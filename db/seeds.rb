User.create(username: "toru", password: "cat")
User.create(username: "albert einstein", password: "nobel")
User.create(username: "darth vader", password: "starwars")
User.create(username: "luke", password: "notyourcomputerdad")

Friendship.create(user_id: 1, friend_id: 2)
Friendship.create(user_id: 1, friend_id: 3)
Friendship.create(user_id: 1, friend_id: 4)
Friendship.create(user_id: 2, friend_id: 3)

Photo.create(user_id: 1, url: "http://s3-ec.buzzfed.com/static/enhanced/web05/2012/2/1/16/enhanced-buzz-24635-1328131035-175.jpg")
Photo.create(user_id: 1, url: "http://s3-ec.buzzfed.com/static/enhanced/web03/2012/2/6/10/enhanced-buzz-13892-1328540551-14.jpg")
Photo.create(user_id: 2, url: "http://s3-ec.buzzfed.com/static/enhanced/terminal05/2012/2/1/16/enhanced-buzz-3821-1328131216-142.jpg")