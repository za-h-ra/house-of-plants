class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :date_purchased
      t.string :location
      t.string :temperature
      t.string :last_watered
      t.string :water_frequency
      t.string :food_frequency
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
