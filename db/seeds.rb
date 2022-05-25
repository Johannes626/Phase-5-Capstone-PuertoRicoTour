puts "Destroying previous data..."

SavedPlace.destroy_all
Place.destroy_all
User.destroy_all

puts "Creating Users..."

user1 = User.create(name: "Johannes", username: "Jojo", email: "jojo@test.net", password: "test")
user2 = User.create(name: "Onelis", username: "onelisyarid", email: "onelisyarid@test.net", password: "test")
user3 = User.create(name: "Ryan", username: "atom", email: "atom@test.net", password: "test")

puts "Creating Places..."

place1 = Place.create(name: "Restaurant", image: "test", location: "test", description: "test", restaurant: true, tourist_loc: false)
place2 = Place.create(name: "Touristic Location", image: "test", location: "test", description: "test", restaurant: false, tourist_loc: true)
place3 = Place.create(name: "Restaurant and TL", image: "test", location: "test", description: "test", restaurant: true, tourist_loc: true)

puts "Creating SavedPlaces..."

save1 = SavedPlace.create(name: "Restaurant", image: "test", location: "test", description: "test", restaurant: true, tourist_loc: false, favorite: false, user: user1, place: place1)
save2 = SavedPlace.create(name: "Touristic Location", image: "test", location: "test", description: "test", restaurant: false, tourist_loc: true, favorite: false, user: user2, place: place2)
save3 = SavedPlace.create(name: "Restaurant and TL", image: "test", location: "test", description: "test", restaurant: true, tourist_loc: true, favorite: false, user: user3, place: place3)

puts "Done Seeding!"