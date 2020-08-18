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
@flower = PlantCategory.create!(name: 'Flower', user: @admin)
@algae = PlantCategory.create!(name: 'Algae', user: @admin)
@liverworts = PlantCategory.create!(name: 'Liverworts', user: @admin)
@fern = PlantCategory.create!(name: 'Fern', user: @admin)
@moss = PlantCategory.create!(name: 'Moss', user: @admin)
@conifer = PlantCategory.create!(name: 'Conifer', user: @admin)
@herb = PlantCategory.create!(name: 'Herb', user: @admin)
@tree = PlantCategory.create!(name: 'Tree', user: @admin)
@shrub = PlantCategory.create!(name: 'Shrub', user: @admin)
@cycad = PlantCategory.create!(name: 'Cycad', user: @admin)
puts "#{PlantCategory.count} category created"

@orchid = Plant.create!(name: "Orchid", user: @admin, plant_category: @flower, image_url: "https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80")
puts "#{Plant.count} plants created"

@flower.plants.push(@orchid)

