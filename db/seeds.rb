require 'faker'

puts "Destroying data"

Rapper.destroy_all
Rapper.reset_pk_sequence
Producer.destroy_all
Producer.reset_pk_sequence
Track.destroy_all
Track.reset_pk_sequence
Match.destroy_all
Match.reset_pk_sequence

puts "Creating data"

10.times do
    Rapper.create(username: Faker::Internet.username, age: rand(18..100), bio: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...", password: Faker::Internet.password)
end

10.times do
    Producer.create((username: Faker::Internet.username, age: rand(18..100), bio: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...", password: Faker::Internet.password))
end

Rapper.all.each do |r|
    Track.create(rapper_id: r.id, title: Faker::Ancient.god, song_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", genres: "Techno, Classical, Grunge")
end

Producer.all.each do |p|
    Track.create(producer_id: p.id, title: Faker::Ancient.god, song_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", genres: "Techno, Classical, Grunge")
end

Match.create(rapper_id: 1, producer_id: 4)
Match.create(rapper_id: 1, producer_id: 5)
Match.create(rapper_id: 2, producer_id: 6)
Match.create(rapper_id: 2, producer_id: 7)
Match.create(rapper_id: 3, producer_id: 8)
Match.create(rapper_id: 3, producer_id: 9)
Match.create(rapper_id: 4, producer_id: 10)
Match.create(rapper_id: 4, producer_id: 1)
Match.create(rapper_id: 5, producer_id: 2)
Match.create(rapper_id: 5, producer_id: 3)
Match.create(rapper_id: 6, producer_id: 4)
Match.create(rapper_id: 6, producer_id: 5)
Match.create(rapper_id: 7, producer_id: 6)
Match.create(rapper_id: 7, producer_id: 7)
Match.create(rapper_id: 8, producer_id: 8)
Match.create(rapper_id: 8, producer_id: 9)
Match.create(rapper_id: 9, producer_id: 10)
Match.create(rapper_id: 9, producer_id: 1)
Match.create(rapper_id: 10, producer_id: 2)
Match.create(rapper_id: 10, producer_id: 3)

puts "Done :)"