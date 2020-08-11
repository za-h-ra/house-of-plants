class AddUserToPlants < ActiveRecord::Migration[6.0]
  def change
    add_reference :plants, :user, null: false, foreign_key: true
    add_reference :plants, :plant_category, null: false, foreign_key: true
  end
end
