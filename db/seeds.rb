require 'faker'

puts "Destroying data"

User.destroy_all
User.reset_pk_sequence
Track.destroy_all
Track.reset_pk_sequence
LikedUser.destroy_all
LikedUser.reset_pk_sequence

puts "Creating data"

10.times do
    User.create(username: Faker::Internet.username, user_type: "Rapper", age: rand(18..100), bio: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...", password: "asdf")
end

10.times do
    User.create(username: Faker::Internet.username, user_type: "Producer", age: rand(18..100), bio: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...", password: "asdf")
end

User.all.each do |r|
    Track.create(user_id: r.id, title: Faker::Ancient.god, song_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", genres: "Techno, Classical, Grunge")
end

LikedUser.create(requester_id: 1, requestee_id: 11)
LikedUser.create(requester_id: 1, requestee_id: 14)


# LikedUser.create(rapper_id: 1, producer_id: 12)
# LikedUser.create(rapper_id: 2, producer_id: 13)
# LikedUser.create(rapper_id: 2, producer_id: 14)
# LikedUser.create(rapper_id: 3, producer_id: 15)
# LikedUser.create(rapper_id: 3, producer_id: 16)
# LikedUser.create(rapper_id: 4, producer_id: 17)
# LikedUser.create(rapper_id: 4, producer_id: 18)
# LikedUser.create(rapper_id: 5, producer_id: 19)
# LikedUser.create(rapper_id: 5, producer_id: 20)
# LikedUser.create(rapper_id: 6, producer_id: 11)
# LikedUser.create(rapper_id: 6, producer_id: 12)
# LikedUser.create(rapper_id: 7, producer_id: 13)
# LikedUser.create(rapper_id: 7, producer_id: 14)
# LikedUser.create(rapper_id: 8, producer_id: 15)
# LikedUser.create(rapper_id: 8, producer_id: 16)
# LikedUser.create(rapper_id: 9, producer_id: 17)
# LikedUser.create(rapper_id: 9, producer_id: 18)
# LikedUser.create(rapper_id: 10, producer_id: 19)
# LikedUser.create(rapper_id: 10, producer_id: 20)

puts "Done :)"