class AddImageUrlToPlants < ActiveRecord::Migration[6.0]
  def change
    add_column :plants, :image_url, :string
  end
end
