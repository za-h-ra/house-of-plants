# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plant.destroy_all
PlantCategory.destroy_all
User.destroy_all 


@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"
@flower = PlantCategory.create!(name: 'Orchid', user: @admin)
puts "#{PlantCategory.count} category created"

@orchid = Plant.create!(name: "Orchid")
puts "#{Plant.count} plants created"

@flower.plants.push(@orchid)